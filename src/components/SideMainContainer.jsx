
import Sidebar from './Sidebar.jsx';
import Main from './Main.jsx';
import Nav from './Nav.jsx';

import React from 'react';

import '../App.jsx';
import '../styles/global.scss';



function SideMainContainer() {
  return (
    
      
          <div className="sidemaincontainer">

            <Sidebar />
            <Nav />
            <Main />
          </div>
          
  );
}

export default SideMainContainer;


/* ----------------------------------------------------------------------------------------------------------------------------------------
import React from 'react';

import './ComponentName.css'; // Optional: Create a corresponding CSS file for styles

function ComponentName({ children, title, ...props }) {
  return (
    <div className="component-name" {...props}>
      {title && <h1 className="component-name__title">{title}</h1>}
      <div className="component-name__content">
        {children}
      </div>
    </div>
  );
}

export default ComponentName;

*/