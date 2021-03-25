import React, { PureComponent } from 'react';
import TagManager from 'react-gtm-module'
import Router from './Router';
import{GTM_ID} from '../config/app.config';

const tagManagerArgs = {
	gtmId: GTM_ID,
	dataLayerName: 'PageDataLayer'
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
