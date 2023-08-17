import React from 'react';

function SidebarItem(props) {
    return (
        <div className="flex p-3 items-center gap-4 cursor-pointer hover:bg-slate-500">
            <div className='text-3xl'>{props.icon}</div>
            <div>{props.name}</div>
        </div>
    );
}

export default SidebarItem;
