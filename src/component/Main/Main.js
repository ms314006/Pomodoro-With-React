import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Information from './Information';
import TimeController from './TimeController';
import Menu from './Menu';
import TodoListOverview from './InnerPage/TodoListOverview';
import Chart from './InnerPage/Chart';
import Ring from './InnerPage/Ring';
import SideMenu from './InnerPage/SideMenu';
import store from '../../store';
import styles from './index.scss';

const HomePage = () => (
  <>
    <Information />
    <TimeController />
    <Menu />
  </>
);

const InnerPage = (props) => {
  const { match, } = props;
  return (
    <>
      <SideMenu match={match} />
      <div className={styles.innerPage_center_block}>
        <Switch>
          <Route path="/todolist/overview" component={TodoListOverview} />
          <Route path="/todolist/chart" component={Chart} />
          <Route path="/todolist/ring" component={Ring} />
        </Switch>
      </div>
      <Menu match={match} />
    </>
  );
};

const Main = () => (
  <Provider store={store}>
    <HashRouter>
      <div
        className={styles.main_block}
        data-testid="main_block"
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/todolist/:pageType" component={InnerPage} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>
);

export default Main;
