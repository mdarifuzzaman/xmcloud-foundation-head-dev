import {
  Field,
  Image,
  ImageField,
  Link,
  LinkField,
  RichText,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  heading: Field<string>;
  promo1Heading: Field<string>;
  promo2Heading: Field<string>;
  promo3Heading: Field<string>;
  promo1Summary: Field<string>;
  promo2Summary: Field<string>;
  promo3Summary: Field<string>;
  promo1Link: LinkField;
  promo2Link: LinkField;
  promo3Link: LinkField;
  promo1Icon: ImageField;
  promo2Icon: ImageField;
  promo3Icon: ImageField;
}

type PromoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const LicensingPromo = (props: PromoProps): JSX.Element => {
  return (
    <div className="row">
      <section className="small-12 columns vertical-container grey">
        <div className="body-content">
          <div className="row">
            <div className="small-12 columns">
              <div className="h4">
                <Text field={props.fields.heading}></Text>
              </div>

              <div className="vertical-callouts" data-equalizer="description">
                <div className="vertical-callout vertical-callout_4">
                  <div className=" vertical-callout-image">
                    <Image field={props.fields.promo1Icon}></Image>
                  </div>

                  <div className="h5">
                    <Text field={props.fields.promo1Heading}></Text>
                  </div>
                  <div data-equalizer-watch="description" style={{ height: '45px' }}>
                    <RichText field={props.fields.promo1Summary}></RichText>
                  </div>
                  <ul className="button-group" style={{"marginTop": "20px"}}>
                    <li>
                      <Link field={props.fields.promo1Link}></Link>
                    </li>
                  </ul>
                </div>

                <div className="vertical-callout vertical-callout_4">
                  <div className=" vertical-callout-image">
                    <Image field={props.fields.promo2Icon}></Image>
                  </div>

                  <div className="h5">
                    <Text field={props.fields.promo2Heading} />
                  </div>
                  <div data-equalizer-watch="description" style={{ height: '45px' }}>
                    <RichText field={props.fields.promo2Summary}></RichText>&nbsp;
                  </div>
                  <ul className="button-group" style={{"marginTop": "20px"}}>
                    <li>
                      <Link field={props.fields.promo2Link}></Link>
                    </li>
                  </ul>
                </div>

                <div className="vertical-callout vertical-callout_4">
                  <div className=" vertical-callout-image">
                    <Image field={props.fields.promo3Icon}></Image>
                  </div>

                  <div className="h5">
                    <Text field={props.fields.promo3Heading}></Text>
                  </div>
                  <div data-equalizer-watch="description" style={{ height: '45px' }}>
                    <RichText field={props.fields.promo3Summary}></RichText>
                  </div>
                  <ul className="button-group" style={{"marginTop": "20px"}}>
                    <li>
                      <Link field={props.fields.promo3Link}></Link>
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
};

export default LicensingPromo;
