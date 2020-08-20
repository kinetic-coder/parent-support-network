import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeView from './views/HomeView';

const Routes = () => {
    return (
        <Router>
           <Route path="/" component={HomeView} exact />
        </Router>
    )
}

export default Routes;