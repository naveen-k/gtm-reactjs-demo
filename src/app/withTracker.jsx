 import React, { Component } from 'react';
 import TagManager from 'react-gtm-module';



 export default function withTracker(WrappedComponent, options = {}) {
	const trackPage = (page) => {
		const tagManagerArgs = {
			dataLayer: {
				userId: '001',
				userProject: 'test',
				page: page
			},
			dataLayerName: 'PageDataLayer'
		}
		TagManager.dataLayer(tagManagerArgs)
	};

	const HOC = class extends Component {
	  componentDidMount() {
		const page = this.props.location.pathname;
		trackPage(page);
	  }

	  componentWillReceiveProps(nextProps) {
		const currentPage = this.props.location.pathname;
		const nextPage = nextProps.location.pathname;

		if (currentPage !== nextPage) {
		  trackPage(nextPage);
		}
	  }

	  render() {
		return <WrappedComponent {...this.props} />;
	  }
	};

	return HOC;
  }
