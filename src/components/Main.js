require('normalize.css/normalize.css');
require('styles/main.scss');
require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
         Sample content
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
