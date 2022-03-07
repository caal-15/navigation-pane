import { useContext } from 'react'
import { PANE_SWITCHER_CONTEXT } from './constants'

const usePaneNav = () => {
  const { setActivePaneId } = useContext(PANE_SWITCHER_CONTEXT)
  return setActivePaneId
}

export default usePaneNav
