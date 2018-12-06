import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeContainer from '../containers/landings/Home';
import AboutContainer from '../containers/landings/About';
import ContactUsContainer from '../containers/landings/ContactUs';
import ScrollToTop from './ScrollToTop';
import { ABOUT_URL, CONTACT_US_URL } from '../constants';

const FindParrotRouter = () =>
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                    <Route path={ABOUT_URL} component={AboutContainer} />
                    <Route path={CONTACT_US_URL} component={ContactUsContainer} />
                </Switch>
            </ScrollToTop>
        </Router>
    
export default FindParrotRouter;