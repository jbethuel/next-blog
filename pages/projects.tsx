import { Navbar } from '@blog/components';
import { routes } from 'config';
import React, { Fragment } from 'react';

const Work: React.FC = () => {
  return (
    <Fragment>
      <Navbar activeTab={routes.projects} />
      <main className="projects">
        <div className="project">
          <h3>Ulam PH</h3>
          <p>
            Ulam in Filipino dialect means (viand). The app provides a curated list of Filipino viands that you can make
            or cook at your home. It is extremely simple to follow and the recipes can be acquired at your local public
            market.
          </p>
          <div className="tech-stack">
            <h4>Tech Stack:</h4>
            <div>Backend/Services: Firebase (Authentication, Hosting, Cloud Functions, Google Cloud Run)</div>
            <div>Mobile App: React Native</div>
            <div>Web App: NextJS (React, in progress)</div>
          </div>
          <div className="link">
            <h4>Links:</h4>
            <div>
              Github:{' '}
              <a href="https://github.com/jbethuel/ulam-ph" target="_blank">
                https://github.com/jbethuel/ulam-ph
              </a>
            </div>
            <div>
              Website:{' '}
              <a href="https://ulam.ph" target="_blank">
                https://ulam.ph
              </a>
            </div>
            <div>
              Admin:{' '}
              <a href="https://admin.ulam.ph" target="_blank">
                https://admin.ulam.ph
              </a>
            </div>
            <div>
              API:{' '}
              <a href="https://api.ulam.ph/ping" target="_blank">
                https://api.ulam.ph/ping
              </a>
            </div>
            <div>
              Google Play:{' '}
              <a href="https://play.google.com/store/apps/details?id=com.ulam.ph" target="_blank">
                https://play.google.com/store/apps/details?id=com.ulam.ph
              </a>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Work;
