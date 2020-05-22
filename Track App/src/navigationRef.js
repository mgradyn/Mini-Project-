import { NavigationActions } from "react-navigation";

let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

//(routename, params)
export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName: routeName,
      params: params,
    })
  );
};
