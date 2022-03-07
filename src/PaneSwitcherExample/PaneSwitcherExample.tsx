import { PaneSwitcher, Pane } from '../PaneSwitcher'
import { PANE_IDS } from './constants'
import Main from './PaneContents/Main'

const PaneSwitcherExample = () => {
  return (
    <PaneSwitcher defaultPaneId={PANE_IDS.main}>
      <Pane paneId={PANE_IDS.main}>
        <Main />
      </Pane>
    </PaneSwitcher>
  )
}

export default PaneSwitcherExample
