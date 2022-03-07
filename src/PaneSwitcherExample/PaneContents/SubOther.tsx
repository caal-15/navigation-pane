import { usePaneNav } from '../../PaneSwitcher'
import { PANE_IDS } from '../constants'

const SubOther = () => {
  const setActivePaneId = usePaneNav()

  return <>
    <h5>Other Submenu</h5>
    <p>From here you can only go back to the main menu!</p>
    <ul>
      <li><button onClick={() => setActivePaneId(PANE_IDS.main)}>Go to Main menu!</button></li>
    </ul>
  </>
}

export default SubOther
