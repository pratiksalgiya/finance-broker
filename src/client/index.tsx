import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { store } from './store';
import { BrowserRouter as Router} from "react-router-dom";
import Navi from "./nav";
import routes from "./routes";

// initialize rotues and navi links
const initRoutes = () => (
    <Router>
        <div>
            <Navi />
            {routes}
        </div>
    </Router>
);

const initializedRoutes = initRoutes();
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();