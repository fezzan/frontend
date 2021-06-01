import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${APP_PREFIX_PATH}/home`}
          component={lazy(() => import(`./home`))}
        />

        <Route
          exact
          path={`${APP_PREFIX_PATH}`}
          component={lazy(() => import(`./home`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/login`}
          component={lazy(() => import(`../auth-views/components/LoginForm`))}
        />

        {/* <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} /> */}

        {/* Acitivity Routes  */}

        {/* <Route
          path={`${APP_PREFIX_PATH}/charity/edit/:id`}
          component={lazy(() => import(`./charity/edit`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/charity/add`}
          component={lazy(() => import(`./charity/add`))}
        /> */}
        <Route
          path={`${APP_PREFIX_PATH}/activity`}
          component={lazy(() => import(`./activity`))}
        />

        {/* Charity Routes  */}

        <Route
          path={`${APP_PREFIX_PATH}/charity/edit/:id`}
          component={lazy(() => import(`./charity/edit`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/charity/add`}
          component={lazy(() => import(`./charity/add`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/charity`}
          component={lazy(() => import(`./charity`))}
        />
        {/* Sponser Routes  */}

        <Route
          path={`${APP_PREFIX_PATH}/sponsor/edit/:id`}
          component={lazy(() => import(`./sponsor/edit`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/sponsor/add`}
          component={lazy(() => import(`./sponsor/add`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/sponsor`}
          component={lazy(() => import(`./sponsor`))}
        />

        {/* Feed Routes  */}

        <Route
          path={`${APP_PREFIX_PATH}/feed/edit`}
          component={lazy(() => import(`./feed/edit`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/feed/add`}
          component={lazy(() => import(`./feed/add`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/feed`}
          component={lazy(() => import(`./feed`))}
        />

        {/* Category Routes  */}

        <Route
          path={`${APP_PREFIX_PATH}/category/edit`}
          component={lazy(() => import(`./category/edit`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/category/add`}
          component={lazy(() => import(`./category/add`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/category`}
          component={lazy(() => import(`./category`))}
        />

        {/* Tournament Routes  */}
        <Route
          path={`${APP_PREFIX_PATH}/tournament/manage/:id`}
          component={lazy(() => import(`./tournament/manage`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/tournament/edit`}
          component={lazy(() => import(`./tournament/edit`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/tournament/add`}
          component={lazy(() => import(`./tournament/add`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/tournament/leaderboard/tournamentid/:id`}
          component={lazy(() => import(`./tournament/manage/leaderboard`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/tournament`}
          component={lazy(() => import(`./tournament`))}
        />

        {/* Round Routes  */}

        <Route
          path={`${APP_PREFIX_PATH}/round/edit/:id`}
          component={lazy(() => import(`./round/edit`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/round/add/:id`}
          component={lazy(() => import(`./round/add`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/round/setroundanswers/roundid/:id`}
          component={lazy(() => import(`./tournament/manage/answerquestions`))}
        />

        {/* Prize Config Routes  */}

        <Route
          path={`${APP_PREFIX_PATH}/prize/edit/:id`}
          component={lazy(() => import(`./prize/edit`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/prize/add/:id`}
          component={lazy(() => import(`./prize/add`))}
        />

        {/* Game Routes  */}

        <Route
          path={`${APP_PREFIX_PATH}/game/add/:id`}
          component={lazy(() => import(`./game/add`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/game/edit/:id`}
          component={lazy(() => import(`./game/edit`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/game/:id`}
          component={lazy(() => import(`./game`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/round/add/:id`}
          component={lazy(() => import(`./round/add`))}
        />

        {/* Question Routes  */}

        <Route
          path={`${APP_PREFIX_PATH}/addquestion/gameid/:id`}
          component={lazy(() => import(`./question/add`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/editquestion/gameid/:id`}
          component={lazy(() => import(`./question/edit`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/questions/gameid/:id`}
          component={lazy(() => import(`./question`))}
        />

        {/* Rules Routes  */}

        <Route
          path={`${APP_PREFIX_PATH}/addrule/gameid/:id`}
          component={lazy(() => import(`./rule/add`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/editrule/gameid/:id`}
          component={lazy(() => import(`./rule/edit`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/rules/gameid/:id`}
          component={lazy(() => import(`./rule`))}
        />

        {/* Charity Routes  */}

        <Route
          path={`${APP_PREFIX_PATH}/charity/edit/:id`}
          component={lazy(() => import(`./charity/edit`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/charity/add`}
          component={lazy(() => import(`./charity/add`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/user`}
          component={lazy(() => import(`./user`))}
        />

        {/* Defined Rules Routes  */}

        <Route
          path={`${APP_PREFIX_PATH}/defined_rules/edit/:id`}
          component={lazy(() => import(`./defined_rules/edit`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/defined_rules`}
          component={lazy(() => import(`./defined_rules`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/rule/add`}
          component={lazy(() => import(`./defined_rules/add`))}
        />

        {/* Level Routes  */}

        <Route
          path={`${APP_PREFIX_PATH}/level/edit/:id`}
          component={lazy(() => import(`./level/edit`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/levels`}
          component={lazy(() => import(`./level`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/level/add`}
          component={lazy(() => import(`./level/add`))}
        />

        {/* <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/charity`} /> */}
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
