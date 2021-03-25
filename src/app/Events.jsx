import React, { PureComponent } from 'react';
import TagManager from 'react-gtm-module';

export default class Events extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      action: '',
    };
  }

  setValue = (key, event) => {
    this.setState({
      [key]: event.target.value
    });
  };

  sendEvent = (event) => {
		const {action } = this.state;
    event.preventDefault();
		const tagManagerArgs = {
			dataLayer: {
				userId: '001',
				userProject: 'test',
				userData: action,
			},
			dataLayerName: 'PageDataLayer'
		}
		TagManager.dataLayer(tagManagerArgs)
  };

  render() {
    const {action } = this.state;
    return (
      <form onSubmit={this.sendEvent}>
        <h2>Events</h2>
        <p>Enter in details below to trigger an TagManager.event call</p>
        <div>
          action <input value={action} onChange={this.setValue.bind(this, 'action')} />
        </div>
        <button type="submit">
          Send Event.
        </button>
      </form>
    );
  }
}

