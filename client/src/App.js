import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

//Custom Components
import Login from './components/Login';
import BubblePage from './components/BubblePage';

//CSS
import './styles.scss';

function App() {
    const [user, setUser] = useState(null);
    const [colorList, setColorList] = useState([]);
    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={Login} />
                <PrivateRoute
                    user={user}
                    path="/bubbles"
                    component={BubblePage}
                />
            </div>
        </Router>
    );
}

function PrivateRoute({ user, component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                user ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
}

export default App;
