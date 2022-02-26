import { useContext } from 'react';
import { UIStateContext, TUIActionTypes } from './../contexts/ui.context';

export default function useUIState() {
  const context = useContext(UIStateContext);

  if (!context) {
    throw new Error('useUIState must be used within a UIProvider');
  }
  const [UIState, dispatchAction] = context;

  const dispatch = (type: TUIActionTypes, payload?: any) => {
    dispatchAction({ type, payload });
  };

  return { UIState, dispatch };
}
