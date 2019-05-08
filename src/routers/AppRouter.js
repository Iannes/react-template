import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashBoardPage from '../pages/ExpenseDashBoardPage';
import HelpPage from '../pages/HelpPage';
import NotFoundPage from '../pages/NotFoundPage';
import Header from '../components/Layouts/Header';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={ExpenseDashBoardPage} />
      {/* <Route path="/create" component={AddExpensePage} /> */}
      {/* <Route path="/edit/:id" component={EditExpensePage} /> */}
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
