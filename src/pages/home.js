import React, { useReducer, useState } from 'react';
import ResultCard from '../components/Cards/result';
import Loader from '../components/Loader';
import Search from '../components/Search';
import { middleware } from '../middleware'
import { filters } from '../utils/filter'

const initialState = {
    error: {}
}

function reducer(state, action) {
    switch (action.type) {
        case "ON_ERROR":
            return { ...state, error: { ...action.payload } };
        default:
            return state;
    }
}

function Home(props) {

    const [loader, setLoader] = useState(false)
    const [dataConfig, setDataConfig] = useState({
        data: [],
        message: ''
    })
    const [userName, setUserName] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleClick = async () => {
        const isValid = validate({ userName })
        setLoader(true)
        let response = {}
        let apiResponseFilteredArr = {};
        if (isValid) {
            response = await middleware.getGistsusers({ userName })
            if (response) {
                response.data.map(item => {
                    for (let file in item.files) {
                        apiResponseFilteredArr[file] = { ...item.files[file], id: item.id, description: item.description }
                    }
                })
                const filesFilteredArr = filters.getSpesificTagsFile(apiResponseFilteredArr)
                setDataConfig({ data: filesFilteredArr, message: filesFilteredArr.length == 0 ? 'No data found' : '' })
            }
            setLoader(false)
        } else {
            setLoader(false)
        }
    }

    const validate = () => {
        const error = {}
        if (userName.trim() === '') {
            error.input = 'Please enter valid username'
        }
        dispatch({ type: "ON_ERROR", payload: error });
        return !Object.keys(error).length;
    }

    const onChange = (value) => {
        setUserName(value)
    }

    return (
        <div>
            <h2>Search you Gists</h2>
            <div className="p-2">
                <Search handleClick={handleClick} onChange={onChange} queryText={userName} />
                {loader && <Loader />}
            </div>
            {console.log(dataConfig)}
            {!loader && dataConfig.message !== '' ?
                <div div className={`m-2 p-2 border ${dataConfig.data.length > 0 ? 'border-green-800 bg-green-50' : 'border-red-800 bg-red-50'}`}>
                    <p>{dataConfig.message}!!!</p>
                </div>
                : !loader && dataConfig.message === '' && state.error && state.error.input ?
                    <div div className={`m-2 p-2 border border-red-800 bg-red-50`}>
                        <p>{state.error.input}</p>
                    </div> : null}
            {
                !loader && dataConfig.data.length > 0 &&
                dataConfig.data.map((item, index) => {
                    return <ResultCard key={index} data={item} />
                })
            }
        </div >
    );
}

export default Home;