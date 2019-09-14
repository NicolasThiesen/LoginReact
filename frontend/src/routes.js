import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Login from './components/LoginBox/index.js'
import Cadastro from './components/CadastroBox/index.js'

function Routes(){
    return(
       <Switch>
           <Route path='/' exact component={Login} />
           <Route path='/cadastro' component={Cadastro} />
       </Switch>
    );
}
export default Routes;