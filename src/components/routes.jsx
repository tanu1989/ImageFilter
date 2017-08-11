import React from 'react';
import { IndexRedirect, Route, browserHistory } from 'react-router';
import ImageFilterHome from './ImageFilterHome';
import Home from './Home'
import Images from './Images';

function getRoutes(store) {

    // Publish the location to the store
    browserHistory.listen(location => {
        store.dispatch({
            type: 'FETCH_LOCATION',
            payload: location
        });
    });

    return (
        <Route name="root">
            <Route name="Home" path="/" component={Home}>
                <IndexRedirect to="/filter"/>
                <Route name="FilterHome" path="/filter" component={ImageFilterHome}/>
                <Route name="Images" path="/images" component={Images}/>
            </Route>
        </Route>
    )

}

export default getRoutes;