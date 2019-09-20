import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

//Custom Components
import Login from './components/Login';
import BubblePage from './components/BubblePage';

//CSS
import 'semantic-ui-css/semantic.min.css';
import './styles.scss';

function App() {
    const [colorList, setColorList] = useState([]);
    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={Login} />
                <PrivateRoute path="/bubbles" component={BubblePage} />
            </div>
        </Router>
    );
}

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem('token') ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
}

export default App;
