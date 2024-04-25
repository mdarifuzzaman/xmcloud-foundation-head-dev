import { SiteInfo, GraphQLSiteInfoServiceConfig, debug } from '@sitecore-jss/sitecore-jss-nextjs';
import { GraphQLClient, GraphQLRequestClient, PageInfo } from '@sitecore-jss/sitecore-jss/graphql';
import { GraphQLSiteInfoResult } from '@sitecore-jss/sitecore-jss/types/site/graphql-siteinfo-service';

const headlessSiteGroupingTemplate = 'E46F3AF2-39FA-4866-A157-7017C4B2A40C';
const sitecoreContentRootItem = '0DE95AE4-41AB-4D01-9EB0-67441B7C2450';

const defaultQuery = /* GraphQL */ `
  query($pageSize: Int = 10, $after: String) {
    search(
      where: {
        AND: [
          { name: "_templates", value: "${headlessSiteGroupingTemplate}", operator: CONTAINS }
          { name: "_path", value: "${sitecoreContentRootItem}", operator: CONTAINS }
        ]
      }
      first: $pageSize
      after: $after
    ) {
      pageInfo {
        endCursor
        hasNext
      }
      results {
        ... on Item {
          name: field(name: "SiteName") {
            value
          }
          hostName: field(name: "Hostname") {
            value
          }
          language: field(name: "Language") {
            value
          }
          virtualFolder: field(name: "VirtualFolder") {
            value
          }
        }
      }
    }
  }
`;

export declare type ExtendedSiteInfo = SiteInfo & {
  /**
   * Site virtual folder
   */
  virtualFolder: string;
};

export type GraphQLExtendedSiteInfoResult = GraphQLSiteInfoResult & {
  virtualFolder: {
    value: string;
  }
};

type GraphQLExtendedSiteInfoResponse = {
  search: {
    pageInfo: PageInfo;
    results: GraphQLExtendedSiteInfoResult[];
  };
};

export class GraphQLExtendedSiteInfoService {
  private graphQLClient: GraphQLClient;
  // private cache: CacheClient<ExtendedSiteInfo[]>;

  protected get query(): string {
    return defaultQuery;
  }

  /**
   * Creates an instance of graphQL service to retrieve site configuration list from Sitecore
   * @param {GraphQLSiteInfoServiceConfig} config instance
   */
  constructor(private config: GraphQLSiteInfoServiceConfig) {
    this.graphQLClient = this.getGraphQLClient();
    // this.cache = this.getCacheClient();
  }

  async fetchExtendedSiteInfo(): Promise<ExtendedSiteInfo[]> {
    // const cachedResult = this.cache.getCacheValue(this.getCacheKey());
    // if (cachedResult) {
    //   return cachedResult;
    // }
    if (process.env.SITECORE) {
      debug.multisite('Skipping site information fetch (building on XM Cloud)');
      return [];
    }

    const results: ExtendedSiteInfo[] = [];
    let hasNext = true;
    let after = '';

    while (hasNext) {
      const response = await this.graphQLClient.request<GraphQLExtendedSiteInfoResponse>(this.query, {
        pageSize: this.config.pageSize,
        after,
      });

      const result = response?.search?.results?.reduce<ExtendedSiteInfo[]>((result, current) => {
        result.push({
          name: current.name.value,
          hostName: current.hostName.value,
          language: current.language.value,
          virtualFolder: current.virtualFolder.value
        });
        return result;
      }, []);

      results.push(...result);
      hasNext = response.search.pageInfo.hasNext;
      after = response.search.pageInfo.endCursor;
    }

    // this.cache.setCacheValue(this.getCacheKey(), results);
    return results;
  }

  /**
   * Gets cache client implementation
   * Override this method if custom cache needs to be used
   * @returns CacheClient instance
   */
  // protected getCacheClient(): CacheClient<SiteInfo[]> {
  //   return new MemoryCacheClient<SiteInfo[]>({
  //     cacheEnabled: this.config.cacheEnabled ?? true,
  //     cacheTimeout: this.config.cacheTimeout ?? 10,
  //   });
  // }

  /**
   * Gets a GraphQL client that can make requests to the API. Uses graphql-request as the default
   * library for fetching graphql data (@see GraphQLRequestClient). Override this method if you
   * want to use something else.
   * @returns {GraphQLClient} implementation
   */
  protected getGraphQLClient(): GraphQLClient {
    if (!this.config.endpoint) {
      // if (!this.config.clientFactory) {
      //   throw new Error('You should provide either an endpoint and apiKey, or a clientFactory.');
      // }

      // return this.config.clientFactory({
      //   debugger: debug.multisite,
      // });
    }

    return new GraphQLRequestClient(this.config.endpoint || "", {
      apiKey: this.config.apiKey,
      debugger: debug.multisite,
    });
  }

  // private getCacheKey(): string {
  //   return 'siteinfo-service-cache';
  // }
}

// export class GraphQLExtendedSiteInfoService2 extends GraphQLSiteInfoService {
//   protected get query(): string {
//     return defaultQuery;
//   }
// }