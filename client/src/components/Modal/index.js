import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function Modal({ children, iconBtn, nameBtn }) {
    const [isModal, setModal] = useState(false);

    return (
        <div>
            <div
                onClick={() => setModal(!isModal)}
                className="shadowEffect bg-white p-3 flex justify-center items-center gap-2 cursor-pointer hover:bg-slate-300 select-none"
            >
                {iconBtn}
                {nameBtn}
            </div>
            <div className={isModal ? 'block' : 'hidden'}>
                <div className="fixed z-20 left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
                    <div className="relative w-[30%] h-fit bg-white rounded-lg p-5">
                        <span
                            className="absolute right-0 top-0 m-2 text-xl cursor-pointer"
                            onClick={() => setModal(!isModal)}
                        >
                            <AiOutlineClose />
                        </span>
                        <div className='mt-4'>
                        {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
