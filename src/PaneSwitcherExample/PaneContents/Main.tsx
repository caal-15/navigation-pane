import { usePaneNav } from '../../PaneSwitcher'
import { PANE_IDS } from '../constants'

const Main = () => {
  const setActivePaneId = usePaneNav()

  return <>
    <h5>Main Menu</h5>
    <p>From here you can go to the submenu, or to the other menu!</p>
    <ul>
      <li><button onClick={() => setActivePaneId(PANE_IDS.submain)}>Go to Submenu!</button></li>
      <li><button onClick={() => setActivePaneId(PANE_IDS.other)}>Go to Other menu!</button></li>
    </ul>
  </>
}

export default Main
