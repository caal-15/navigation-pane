import { usePaneNav } from '../../PaneSwitcher'
import { PANE_IDS } from '../constants'

const Other = () => {
  const setActivePaneId = usePaneNav()

  return <>
    <h5>Other Menu</h5>
    <p>From here you can only go back to the other submenu!</p>
    <ul>
      <li><button onClick={() => setActivePaneId(PANE_IDS.subother)}>Go to Other submenu!</button></li>
    </ul>
  </>
}

export default Other
