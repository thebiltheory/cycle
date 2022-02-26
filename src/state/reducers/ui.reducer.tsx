import { IUIAction, IUIState } from '../contexts/ui.context';

//
export default function UIStateReducer(state: IUIState, action: IUIAction) {
  switch (action.type) {
    case 'COLLAPSE_SIDEBAR':
      return {
        ...state,
        sidebarStatus: 'collapsed',
      };

    case 'EXTEND_SIDEBAR':
      return {
        ...state,
        sidebarStatus: 'extended',
      };

    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}
