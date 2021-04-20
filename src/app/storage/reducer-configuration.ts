import {Action, ActionReducer, RootStoreConfig} from "@ngrx/store";
import {IStore} from "./store";

import {RouterReducer} from "./router/router.reducers";
import {stepperReducer} from "./stepper/reducers";

export const ReducerMap: { [key in keyof IStore]: (state: any, action: any) => any } = {
    router: RouterReducer,
    stepperState: stepperReducer,
};

export const ReducerConfiguration: RootStoreConfig<IStore> = {
    metaReducers: [ClearState],
    runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: false,
        strictStateSerializability: false,
    }
};

export function GetInitialState(): IStore {

    return {
        router: {
            state: {
                url: "",
                queryParams: {},
                params: {},
                routerPathSegments: [],
                routerPath: "",
            },
            navigationId: 0,
        },
        stepperState: null,
    };
}

export function ClearState(reducer: ActionReducer<IStore>) {

    return (state: IStore, action: Action) => {
        return reducer(state, action);
    };
}
