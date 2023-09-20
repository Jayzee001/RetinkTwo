import React from 'react'
import { Social_Icon } from '../../dummydata'

const socailIcons = () => {
  return (
    <div>
      {
        Social_Icon.map((icons) => (
                    <span className='icons'>
                        {icons.app}
                    </span>
                ))
            }
    </div>
  )
}

export default socailIcons
