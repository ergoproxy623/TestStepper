import { createSelector } from "@ngrx/store";
import { RouterReducerState } from "@ngrx/router-store";
import { IStore } from "../store";
import { RouterStateUrl } from "./router.state";

export const selectRouterState = (store: IStore) => store.router;

export const routeMatches = () => {

    return createSelector(
        selectRouterState,
        (routerState: RouterReducerState<RouterStateUrl>, { path }) => routerState?.state?.routerPath == path,
    );
};

export const selectRouteIdParam = createSelector(
    selectRouterState,
    routerState => routerState?.state?.params?.id
);
