import React from 'react';
import {BrowserRouter} from "react-router-dom"
import ReactDOM from 'react-dom/client';
import {Provider} from "mobx-react"
import {RouterStore, syncHistoryWithStore} from "mobx-react-router"
import {createBrowserHistory} from "history"
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {signinService, signoutService, signupService, removeToken, loadToken, saveToken} from './services/auth.service';
import { createList, fetchLists } from './services/history.services';
import {userStore} from './stores/user.stores';
import { historyStore } from './stores/history.stores';

let stores: any = {}

stores.routerStore = new RouterStore()

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, 
                                    stores.routerStore);

const authService = { signinService, signoutService, signupService, removeToken, loadToken, saveToken };
const historyService = {createList, fetchLists}
stores.authService = authService;
stores.historyService = historyService
stores.userStore= userStore;
stores.historyStore = historyStore
// 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider {...stores}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
