import React from 'react';
import { CiEdit, CiTrash, CiImport } from 'react-icons/ci';

function TableItem({ icon, name, type, dated, size, onClickTableItem }) {
    const handleClick = (name, type) => {
        onClickTableItem(name, type);
    };
    return (
        <div
            className="border-b-[1px] cursor-pointer"
            onClick={() => handleClick(name, type)}
        >
            <div className="flex p-3">
                <div className="w-1/5 px-3 flex gap-2 items-center">
                    <span
                        className={`text-xl ${
                            type === 'Folder' ? 'text-blue-500' : ''
                        }`}
                    >
                        {icon}
                    </span>
                    <span className="truncate">{name}</span>
                </div>
                <div className="w-1/5 px-3 truncate">{type}</div>
                <div className="w-1/5 px-3 truncate">{dated}</div>
                <div className="w-1/5 px-3 truncate">
                    {type === 'Folder' ? '-' : size}
                </div>
                <div className="w-1/5 px-3 flex gap-2 text-xl">
                    <span>
                        <CiImport />
                    </span>
                    <span>
                        <CiEdit />
                    </span>
                    <span className="text-red-500 ">
                        <CiTrash />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TableItem;
