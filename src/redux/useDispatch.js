import { useContext } from 'react';
import { ReduxContext } from './provider';

export const useDispatch = () => {
  const storeContext = useContext(ReduxContext);

  return storeContext.dispatch;
}