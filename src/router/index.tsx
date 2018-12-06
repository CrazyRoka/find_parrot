import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeContainer from '../containers/landings/Home';
import AboutContainer from '../containers/landings/About';
import ScrollToTop from './ScrollToTop';

const FindParrotRouter = () =>
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                    <Route path="/about" component={AboutContainer} />
                </Switch>
            </ScrollToTop>
        </Router>
    
export default FindParrotRouter;