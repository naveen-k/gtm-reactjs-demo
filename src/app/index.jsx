import React, { PureComponent } from 'react';
import TagManager from 'react-gtm-module'
import Router from './Router';

const tagManagerArgs = {
	gtmId: 'GTM-TSWC9MX',
	dataLayerName: 'Home'
}
TagManager.initialize(tagManagerArgs)



export default class App extends PureComponent {

  render() {
      return (
        <div>
          <h4>App is Initialised. Refresh page to reset.</h4>
          <Router />
        </div>
      );
  }
}
