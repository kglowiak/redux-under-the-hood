import { useContext, useCallback, useState } from 'react';
import { ReduxContext } from './provider';

export const useSelector = (selector) => {
  const [currentState, setCurrentState] = useState(undefined);
  const storeContext = useContext(ReduxContext);

  storeContext.subscribe(() => {
    setCurrentState(selector(storeContext.getState()));
  });

  return currentState;
}