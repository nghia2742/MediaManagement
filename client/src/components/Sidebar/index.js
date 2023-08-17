import React, { useState } from 'react';
import { CiFaceSmile, CiFolderOn, CiSettings } from 'react-icons/ci';
import SidebarItem from './SidebarItem';

function Sidebar() {
    const [isShow, setShow] = useState(false);
    return (
        <aside
            style={{
                transition: 'width .5s ease-in',
            }}
            className={`absolute top-0 left-0 z-10 h-[100vh] overflow-hidden  bg-slate-700 text-white ${
                isShow ? 'w-48' : 'w-14'
            }`}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <div className="mb-9 p-2 flex items-center gap-4">
                <div>
                    <CiFaceSmile className="text-4xl" />
                </div>
                <div>LOGO</div>
            </div>
            <div className="sidebar__list">
                <SidebarItem icon={<CiFolderOn/>} name={'Folder'}/>
                <SidebarItem icon={<CiSettings/>} name={'Setting'}/>
            </div>
        </aside>
    );
}

export default Sidebar;
