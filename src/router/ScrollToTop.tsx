import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

class ScrollToTop extends React.PureComponent<RouteComponentProps> {
    componentDidUpdate(prevProps : any) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
        window.scrollTo(0, 0);
        document.body.classList.remove('overflow-hide');
      }
    }
  
    render() {
      return this.props.children;
    }
}

export default withRouter(ScrollToTop);