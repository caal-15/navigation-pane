import { usePaneNav } from '../../PaneSwitcher'
import { PANE_IDS } from '../constants'

const Subsubmenu = () => {
  const setActivePaneId = usePaneNav()

  return <>
    <h5>Subsubmenu</h5>
    <p>From here you can go back to the main menu, or to the subsubmenu!</p>
    <ul>
      <li><button onClick={() => setActivePaneId(PANE_IDS.submain)}>Go to Previous Menu!</button></li>
      <li><button onClick={() => setActivePaneId(PANE_IDS.other)}>Go to Other Menu!</button></li>
    </ul>
  </>
}

export default Subsubmenu
