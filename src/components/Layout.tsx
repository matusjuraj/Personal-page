require('normalize.css/normalize.css');
require('styles/main.scss');
require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');

import * as React from 'react';

export interface LayoutProps {
   heading: string;
}

export interface LayoutState {

}

export class Layout extends React.Component<LayoutProps, LayoutState> {
   render() {
      return (
         <div className="container">
            <h1>{this.props.heading}</h1>
            Sample content
         </div>
      );
   }
}
