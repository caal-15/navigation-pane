import { FC } from 'react'
import { PanePropTypes } from './types'

const Pane: FC<PanePropTypes> = ({ paneId, children }) => {
  return (
    <div data-pane-id={paneId}>
      {children}
    </div>
  )
}

export default Pane
