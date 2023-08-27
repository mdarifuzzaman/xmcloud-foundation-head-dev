import React from 'react';
import {
  Image as JssImage,
  Link as JssLink,
  RichText as JssRichText,
  ImageField,
  Field,
  LinkField,
  Image,
  RichText,
  Link,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  PromoIcon: ImageField;
  PromoText: Field<string>;
  PromoLink: LinkField;
  PromoText2: Field<string>;
}

type PromoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const PromoDefaultComponent = (props: PromoProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Promo</span>
    </div>
  </div>
);

export const Default = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component promo ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <div className="field-promoicon">
            <JssImage field={props.fields.PromoIcon} />
          </div>
          <div className="promo-text">
            <div>
              <div className="field-promotext">
                <JssRichText field={props.fields.PromoText} />
              </div>
            </div>
            <div className="field-promolink">
              <JssLink field={props.fields.PromoLink} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

export const WithText = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component promo ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <div className="field-promoicon">
            <JssImage field={props.fields.PromoIcon} />
          </div>
          <div className="promo-text">
            <div>
              <div className="field-promotext">
                <JssRichText className="promo-text" field={props.fields.PromoText} />
              </div>
            </div>
            <div className="field-promotext">
              <JssRichText className="promo-text" field={props.fields.PromoText2} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

export const WithSitecoreDevPromo = (props: PromoProps): JSX.Element => {
  console.log('With dev demo gets called');
  if (props.fields) {
    return (
      <div className="row">
        <section className="small-12 columns home-features">
          <div className="body-content">
            <div className="row">
              <div className="small-12 large-10 small-centered columns small-featuresCarousel">
                <div className="row collapse home-features-single">
                  <div className="small-12 large-5 columns home-features-single__icon ">
                    <Image field={props.fields.PromoIcon}></Image>
                  </div>

                  <div className="small-12 large-7 columns">
                    <div className="h3">
                      <RichText field={props.fields.PromoText}></RichText>
                    </div>
                    <p></p>
                    <div>
                      <RichText field={props.fields.PromoText2}></RichText>
                    </div>
                    <p></p>

                    <ul className="button-group">
                      <li>
                        <Link field={props.fields.PromoLink}></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

export const ProfessionalSitecoreToolPromo = (props: PromoProps): JSX.Element => {
  console.log('With dev demo gets called');
  if (props.fields) {
    return (
      <div className="row">
        <section className="small-12 columns home-features">
          <div className="body-content">
            <div className="row">
              <div className="small-12 large-10 small-centered columns small-featuresCarousel">
                <div className="row collapse home-features-single">
                  <div className="small-12 large-5 columns home-features-single__icon hide-for-large-up">
                    <Image field={props.fields.PromoIcon}></Image>
                  </div>

                  <div className="small-12 large-7 columns">
                    <div className="h3">
                      <RichText field={props.fields.PromoText}></RichText>
                    </div>
                    <p></p>
                    <div>
                      <RichText field={props.fields.PromoText2}></RichText>
                    </div>
                    <p></p>

                    <ul className="button-group">
                      <li>
                        <Link field={props.fields.PromoLink}></Link>
                      </li>
                    </ul>
                  </div>

                  <div className="small-12 large-5 columns home-features-single__icon show-for-large-up">
                    <Image field={props.fields.PromoIcon}></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

export const OpenSourceToolsPromo = (props: PromoProps): JSX.Element => {
  console.log('With dev demo gets called');
  if (props.fields) {
    return (
      <div className="row">
        <div className="small-12 large-10 small-centered columns small-featuresCarousel">
          <div className="row collapse home-features-single">
            <div className="small-12 large-5 columns home-features-single__icon ">
              <Image field={props.fields.PromoIcon}></Image>
            </div>

            <div className="small-12 large-7 columns">
              <div className="h3"><RichText field={props.fields.PromoText}></RichText></div>
              <div>
                <RichText field={props.fields.PromoText2}></RichText>
              </div>

              <ul className="button-group">
                <li>
                  <Link field={props.fields.PromoLink}></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

export const StandardPromo = (props: PromoProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="vertical-callout vertical-callout_4">
			<div className=" vertical-callout-image">
				<Image field={props.fields.PromoIcon}></Image>
			</div>

        <div className="h5"><RichText field={props.fields.PromoText}></RichText></div>
        <div data-equalizer-watch="description" style={{"height": "90px;"}}>
          <span><RichText field={props.fields.PromoText}></RichText></span></div>
        <ul className="button-group">
            <li>
                <Link field={props.fields.PromoLink}></Link>
            </li>
        </ul>
    </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};
