import { Avatar } from '@material-ui/core'

import React from 'react'
//  you can also unstruct the Channel liks { Name }
function SidebarRow({ name, src, icon }) {

    return (
        <div className="flex items-center hover:bg-gray-500 hover:bg-opacity-20 dark:hover:bg-opacity-20 dark:hover:bg-white px-2 py-3 md:p-4 gap-2">
            {icon}
            <h4 className="capitalize ">{name}</h4>
        </div>

    )
}

export default SidebarRow

