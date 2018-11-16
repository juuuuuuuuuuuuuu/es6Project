import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //react-router @4부터는 react-router-dom이 필요함!!!
import Main from './Main';

const App = () => {
    return (
        <Router>
            <div>

                <div>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
