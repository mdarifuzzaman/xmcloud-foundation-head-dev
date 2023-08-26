import { ComponentRendering, Field, Link, LinkField, Text } from "@sitecore-jss/sitecore-jss-nextjs";


type ContentBlockProps = {
    rendering: ComponentRendering;
    fields: {
      reservedText: Field<string>;
      copyrightText: Field<string>;
      privacy: LinkField;
    };
  };
  
const Footer = (props: ContentBlockProps): JSX.Element => {
    return(
        <footer className="small-12 columns footer">
        <div className="body-content">
            <div className="row">
                <div className="small-12 columns">
                    <div className="footer-container">
                        <div className="footer-left">
                            <div className="footer-socialIcons">
                                <ul>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-right">
                            <div className="footer-footerLinks">
                                <ul>
                                        <li>
                                                <Link field={props.fields.privacy}></Link>
                                        </li>
                                </ul>
                            </div>
                            <div className="footer-copyright">
                                <span> <Text field={props.fields.reservedText}></Text></span>
                                <span>© <Text field={props.fields.copyrightText}></Text></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;