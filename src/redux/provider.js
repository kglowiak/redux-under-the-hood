import React, { createContext } from "react";

const contextInitialState = {
 state: {},
};
export const ReduxContext = createContext(contextInitialState);

export const Provider = ({ children, store }) => (
  <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
);
