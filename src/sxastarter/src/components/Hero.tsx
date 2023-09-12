import {
  ComponentRendering,
  Field,
  ImageField,
  Link,
  LinkField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { useUser } from '@auth0/nextjs-auth0/client';

type ContentBlockProps = {
  rendering: ComponentRendering;
  fields: {
    heading: Field<string>;
    subHeading: Field<string>;
    imageContent: ImageField;
    primaryLink: LinkField;
    secondaryLink: LinkField;
  };
};

const Hero = (props: ContentBlockProps): JSX.Element => {
  console.log('Hero', props);
  const { user } = useUser();
  return (
    <div className="row">
      <section className="small-12 columns home-hero ">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url('${props.fields.imageContent.value?.src}')` }}
        ></div>
        <div className="body-content">
          <div className="row">
            <div className="small-12 columns">
              <div className="row collapse">
                <div className="small-12 large-7 columns">
                  <h1>
                    <Text field={props.fields.heading}></Text>
                  </h1>
                  <Text field={props.fields.subHeading}></Text>
                  <ul className="button-group">
                    <li>
                      <Link field={props.fields.primaryLink}></Link>
                    </li>
                    <li>
                      <Link field={props.fields.secondaryLink}></Link>
                    </li>
                    <li className="nav-item">
                      {!user ? (
                        <a className="nav-link" href="/api/auth/login">
                          Login
                        </a>
                      ) : (
                        <a className="nav-link" href="/api/auth/logout">
                          Logout
                        </a>
                      )}
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

export default Hero;
