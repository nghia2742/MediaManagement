import React from 'react';
import Navbar from '../Navbar';
import { CiHome, CiSearch } from 'react-icons/ci';
import Table from '../Table';
import NewFolder from '../NewFolder';
import Upload from '../Upload';
import { useDispatch } from 'react-redux';
import { prevDirectory } from '../../redux/reducers/dataSlice';

function Container() {
    const dispatch = useDispatch();

    const handleReturnFolder = () => {
        dispatch(prevDirectory());
    };

    return (
        <div className="ml-14 h-[100vh] flex-col items-center">
            <Navbar />
            <div className="w-full h-[90%] flex p-6">
                <div className="flex-col w-full">
                    <div className="flex justify-between py-4">
                        <div className="breadcrumb text-gray-400 truncate">
                            <CiHome
                                className="inline text-xl cursor-pointer"
                                onClick={() => handleReturnFolder()}
                            />
                        </div>
                        <div className="shadowEffect flex justify-between items-center">
                            <input
                                className="outline-none p-1 border-2"
                                type="text"
                                placeholder="Enter here"
                            />
                            <button className="text-xl bg-slate-200 px-2 h-full">
                                <CiSearch />
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-end">
                        <NewFolder />
                        <Upload />
                    </div>
                    <Table />
                </div>
            </div>
        </div>
    );
}

export default Container;
