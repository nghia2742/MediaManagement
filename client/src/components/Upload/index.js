import React from 'react';
import { CiExport } from 'react-icons/ci';
import Modal from '../Modal';

function Upload() {
    return (
        <Modal iconBtn={<CiExport />} nameBtn={'Upload'}>
            <div className="border-4 rounded-xl border-dashed p-5 items-center">
                <input className="" type="file" multiple />
            </div>
        </Modal>
    );
}

export default Upload;
