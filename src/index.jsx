import { Router, browserHistory ,Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import ImageFilterHome from './components/ImageFilterHome';
import Home from './components/Home';
import Images from './components/Images';

import store from './stores/Store';
import './styles/main.scss';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} >
            <Route path='/' component={ Home }>
                <IndexRoute component={ ImageFilterHome } />
                <Route path="images" component={Images}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
