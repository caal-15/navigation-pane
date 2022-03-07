export interface PanePropTypes {
  paneId: string;
}

export interface PaneSwitcherPropTypes {
  defaultPaneId: string
}

export interface PaneSwitcherContextTypes {
  activePaneId: string | undefined;
  setActivePaneId: (paneId: string) => void
}
