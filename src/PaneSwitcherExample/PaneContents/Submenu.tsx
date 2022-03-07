import { usePaneNav } from '../../PaneSwitcher'
import { PANE_IDS } from '../constants'

const Submenu = () => {
  const setActivePaneId = usePaneNav()

  return <>
    <h5>Submenu</h5>
    <p>From here you can go back to the main menu, or to the subsubmenu!</p>
    <ul>
      <li><button onClick={() => setActivePaneId(PANE_IDS.main)}>Go to Main Menu!</button></li>
      <li><button onClick={() => setActivePaneId(PANE_IDS.subsubmain)}>Go to Sub sub Menu!</button></li>
    </ul>
  </>
}

export default Submenu
