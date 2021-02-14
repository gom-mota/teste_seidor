import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Employee from './pages/Employee';
import NotFound from './pages/NotFound';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/employee" exact component={Employee} />
                <Route component={NotFound} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;