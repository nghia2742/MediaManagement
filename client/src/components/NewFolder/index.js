import React from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import Modal from '../Modal';

function NewFolder() {
    return (
        <Modal iconBtn={<CiCirclePlus />} nameBtn={'New folder'}>
            <h1 className="font-semibold text-2xl">Create a new folder</h1>
            <input
                className="my-6 h-8 w-full border-2 border-gray-400 rounded-lg p-4 outline-blue-400"
                type="text"
                placeholder='Enter folder name'
            />
            <div className='flex'>
                <div className='bg-green-500 p-2 cursor-pointer text-white text-center w-full rounded-md'>Create</div>
            </div>
        </Modal>
    );
}

export default NewFolder;
