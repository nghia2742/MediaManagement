import axios from 'axios';
import { fetchDataSuccess, fetchDataFailure } from '../redux/reducers/dataSlice';

const baseURL = 'http://localhost:5000/api/';

const fetchData = (folderName) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(baseURL+ `?folder=${folderName}`);
            dispatch(fetchDataSuccess(response.data));
        } catch (error) {
            dispatch(fetchDataFailure(error.message));
        }
    };
};


export { fetchData };
