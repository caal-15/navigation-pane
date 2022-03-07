import { FC, useState, Children, isValidElement } from 'react'
import { PaneSwitcherPropTypes } from './types'
import { PANE_SWITCHER_CONTEXT } from './constants'
import Pane from './Pane'

const PaneSwitcher: FC<PaneSwitcherPropTypes> = ({ children, defaultPaneId }) => {
  const [activePaneId, setActivePaneId] = useState(defaultPaneId)

  const childArray = Children.map(children, (child: React.ReactNode) => {
    if (isValidElement(child) && child.type === Pane) {
      return { paneId: child.props.paneId, child };
    }
    return null;
  });

  const activePaneElement = childArray?.find((child: { paneId: string }) => child.paneId === activePaneId)?.child || null;

  return (
    <PANE_SWITCHER_CONTEXT.Provider value={{ activePaneId, setActivePaneId }}>
      <nav>{activePaneElement}</nav>
    </PANE_SWITCHER_CONTEXT.Provider>
  )
}

export default PaneSwitcher
