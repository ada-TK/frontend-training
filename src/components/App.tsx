import {makeStyles} from '@material-ui/core';
import {PAGE_LINK} from 'constants/Constants';
import {Location} from 'history';
import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import {ScrollToTop} from './basics';
import {A, B, C, D, E, Root} from './pages';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  fakeToolbar: {
    ...theme.mixins.toolbar,
  },
}));

/**
 * 画面の共通レイアウト定義とルーティング定義
 */
const Component: React.FC = () => {
  const classes = useStyles();

  return (
    <Router basename="frontend-training">
      <ScrollToTop />
      <div className={classes.root}>
        {/* ツールバーと画面コンポーネントがかぶらないように */}
        <div className={classes.fakeToolbar} />
        <Switch>
          <Route exact path={PAGE_LINK.ROOT} component={Root} />
          <Route exact path={PAGE_LINK.A} component={A} />
          <Route exact path={PAGE_LINK.B} component={B} />
          <Route exact path={PAGE_LINK.C} component={C} />
          <Route exact path={PAGE_LINK.D} component={D} />
          <Route exact path={PAGE_LINK.E} component={E} />
        </Switch>
      </div>
    </Router>
  );
};

export default Component;

/** ログイン前、あるいはサインアウト前の状態を保持する */
export type RedirectState =
  | {
      from: Location;
      /** トークン有効期限切れ時に利用する */
      timeout?: true;
    }
  | undefined;
