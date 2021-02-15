import { BrowserRouter, Switch, Route } from 'react-router-dom';

import IRFF from './pages/IRRF';
import Employee from './pages/Employee';
import NotFound from './pages/NotFound';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={IRFF} />
                <Route path="/employee" exact component={Employee} />
                <Route component={NotFound} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;