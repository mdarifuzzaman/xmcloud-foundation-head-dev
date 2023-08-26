export const AppNavigation = (): JSX.Element => {
  return (
    <nav className="header-nav" aria-label="Main navigation">
      <ul className="header-menu">
        <li className="top-nav-hover-blue">
          <a href="/Buy-now" className="nav-link nav-link_buy-now">
            Buy Now
          </a>
        </li>
        <li className="top-nav-hover-blue">
          <a href="/Free-Trial" className="nav-link nav-link_free-trial">
            Free Trail
          </a>
        </li>
        <li className="top-nav-hover-blue">
          <a href="/Free-Trial" className="nav-link nav-link_free-trial">
            FREE TRIAL
          </a>
        </li>
        <li className="top-nav-hover-blue">
          <a href="/Download" className="nav-link nav-link_download">
            DOWNLOAD
          </a>
        </li>
      </ul>
    </nav>
  );
};
