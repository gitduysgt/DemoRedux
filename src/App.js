import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const ListUser = React.lazy(() => import('./features/ListUser'));

function App() {
  return (
    <div className="App">
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
      <Switch>
            <Redirect exact from="/" to="/listusers" />

            <Route path="/listusers" component={ListUser} />
        </Switch>
      </BrowserRouter>

    </Suspense>
    </div>
  );
}

export default App;
