import React, { useReducer } from 'react';
import { UIStateContext, UIInitialState } from '../contexts/ui.context';
import UIStateReducer from '../reducers/ui.reducer';

export default function UIStateProvider(props: any) {
  const [state, dispatch] = useReducer<any>(UIStateReducer, UIInitialState);
  const value = React.useMemo(() => [state, dispatch], [state]);
  return <UIStateContext.Provider value={value} {...props} />;
}
