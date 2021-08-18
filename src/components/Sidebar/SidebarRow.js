import { Avatar } from '@material-ui/core'

import React from 'react'
//  you can also unstruct the Channel liks { Name }
function SidebarRow({ name, src , icon }) {

    return (
        <div className = "flex items-center hover:bg-black p-4 gap-2">
            {icon}
            <h4>{name}</h4>
        </div>

    )
}

export default SidebarRow

