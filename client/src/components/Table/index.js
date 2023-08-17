import React, { useEffect} from 'react';
import TableItem from './TableItem';
import { CiFileOn, CiCircleChevUp } from 'react-icons/ci';
import { BiSolidFolder } from 'react-icons/bi';
import { fetchData } from '../../Services/handleAPI';
import Loader from '../Common/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { changeDirectory } from '../../redux/reducers/dataSlice';

function Table() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data.data.data);
    const loading = useSelector((state) => state.data.loading);
    const currentDirectory = useSelector(state => state.data.currentDirectory)

    useEffect(() => {
        dispatch(fetchData(currentDirectory));
    }, [dispatch, currentDirectory]);

    //OPEN CHILD FOLDER
    const handleOpenFolder = (name, type) => {
        if (type === 'File') return;
        dispatch(changeDirectory(name))
    }
    
    return (
        <div className="w-[100%]">
            <div className="border-b-[1px]">
                <div className="flex font-bold p-3">
                    <div className="w-1/5 px-3 flex items-center gap-2">
                        Name <CiCircleChevUp />
                    </div>
                    <div className="w-1/5 px-3">Type</div>
                    <div className="w-1/5 px-3">Dated</div>
                    <div className="w-1/5 px-3">Size</div>
                    <div className="w-1/5 px-3"></div>
                </div>
            </div>
            <Loader loading={loading} />
            {data &&
                data.map((e, index) => (
                    <TableItem
                        key={index}
                        icon={
                            e.type === 'Folder' ? (
                                <BiSolidFolder />
                            ) : (
                                <CiFileOn />
                            )
                        }
                        name={e.name}
                        type={e.type}
                        dated={e.dated}
                        size={e.size}
                        onClickTableItem={handleOpenFolder}
                    />
                ))}
        </div>
    );
}

export default Table;
