import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import resume from '../../../../static/Barry.Huang.pdf'
// import FollowAt from 'react-social-media-follow';
// import FollowAt from './FollowAt'
const ClientSideOnlyLazy = React.lazy(() => import('./FollowAt'))

const Nav = () => {
  const links = [
    'https://www.twitter.com/BarryydAlive',
    'https://www.instagram.com/barryydalive/',
    'https://www.linkedin.com/barryhuang25/',
    "https://github.com/barryydalive",
  ];

  const isSSR = typeof window === 'undefined'

  return (
    <Container>
      <ul>
        {/* <li>
          <Link to="/about">About</Link>
        </li> */}
        <li>
          <a
            href={resume}
            alt={'link to resume'}
          >Resume</a>
        </li>
        <li>
          {!isSSR && (
            <React.Suspense fallback={<div/>}>
              <ClientSideOnlyLazy links={links}/>
            </React.Suspense>
          )}
        </li>
      </ul>
    </Container>
  );
};

export default Nav;
