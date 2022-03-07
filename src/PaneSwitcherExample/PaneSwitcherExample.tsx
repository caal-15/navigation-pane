import { PaneSwitcher, Pane } from '../PaneSwitcher'
import { PANE_IDS } from './constants'
import Main from './PaneContents/Main'
import Submenu from './PaneContents/Submenu'
import Subsubmenu from './PaneContents/Subsubmenu'
import Other from './PaneContents/Other'
import SubOther from './PaneContents/SubOther'

const PaneSwitcherExample = () => {
  return (
    <PaneSwitcher defaultPaneId={PANE_IDS.main}>
      <Pane paneId={PANE_IDS.main}>
        <Main />
      </Pane>
      <Pane paneId={PANE_IDS.submain}>
        <Submenu />
      </Pane>
      <Pane paneId={PANE_IDS.subsubmain}>
        <Subsubmenu />
      </Pane>
      <Pane paneId={PANE_IDS.other}>
        <Other />
      </Pane>
      <Pane paneId={PANE_IDS.subother}>
        <SubOther />
      </Pane>
    </PaneSwitcher>
  )
}

export default PaneSwitcherExample
