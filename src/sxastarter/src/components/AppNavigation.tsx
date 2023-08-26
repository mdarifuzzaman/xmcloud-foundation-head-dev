import Link from 'next/link';

export const AppNavigation = (): JSX.Element => {
  return (
    <nav className="header-nav" aria-label="Main navigation">
      <ul className="header-menu">
        <li className="top-nav-hover-blue">
          <Link href="/Buy-now" className="nav-link nav-link_buy-now">
            Buy Now
          </Link>
        </li>
        <li className="top-nav-hover-blue">
          <Link href="/Free-Trial" className="nav-link nav-link_free-trial">
            FREE TRIAL
          </Link>
        </li>
        <li className="top-nav-hover-blue">
          <Link href="/Download" className="nav-link nav-link_download">
            DOWNLOAD ASSETS
          </Link>
        </li>
      </ul>
    </nav>
  );
};
