import { createContext, Dispatch } from 'react';

export type TSidebarStatus = 'collapsed' | 'extended';
export type TUIActionTypes = 'COLLAPSE_SIDEBAR' | 'EXTEND_SIDEBAR';

export interface IUIState {
  sidebarStatus: TSidebarStatus;
}

export interface IUIAction {
  type: TUIActionTypes;
  payload?: any;
}

export const UIInitialState: IUIState = {
  sidebarStatus: 'extended',
};

export const UIStateContext = createContext<[IUIState, Dispatch<IUIAction>]>([
  UIInitialState,
  () => null,
]);
