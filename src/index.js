import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {Route, Router} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from "history/createBrowserHistory"
import thunk from 'redux-thunk'
import allReducers from './reducers/index'

import App from './App'
import NotFound from './pages/NotFound'

const store = createStore(allReducers, applyMiddleware(thunk))
const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <Route path="/about" component={NotFound}></Route>
          </Route>
        </Router>
    </Provider>
    ,
    document.querySelector('#root')
)