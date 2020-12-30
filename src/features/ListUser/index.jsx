import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddEditPage from './page/AddEdit';
import MainPage from './page/Main';

ListUser.propTypes = {
    
};

function ListUser(props) {
    const match = useRouteMatch(); 
    return (
    <Switch>
    <Route exact path={match.url} component={MainPage}/>
      <Route path={`${match.url}/add`} component={AddEditPage} />
      <Route path={`${match.url}/:userid`} component={AddEditPage} />
    </Switch>
    );
}

export default ListUser;
