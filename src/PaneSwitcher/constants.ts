import { createContext } from "react";
import { PaneSwitcherContextTypes } from './types'

export const PANE_SWITCHER_CONTEXT = createContext<PaneSwitcherContextTypes>({
  activePaneId: undefined,
  setActivePaneId: () => {}
})
