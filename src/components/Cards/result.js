import React, { useState } from 'react';
import { middleware } from '../../middleware'

function ResultCard({ data }) {

    const [forkData, setForkData] = useState([])

    useState(async () => {
        const response = await middleware.getSingleGistUrl(data)
        setForkData(response.data.forks)
    }, [data])

    return (
        <div className="border p-2 m-2 bg-gray-700 rounded-lg ">
            <div className="py-3">
                <p className="text-sm text-white font-bold border w-fit px-2 border-blue-300 bg-blue-300 rounded-full" >
                    {data.language}
                </p>
            </div>
            <div>
                <p className="text-white">{forkData.length === 0 && 'No forks'}</p>
            </div>
            <div>
                {forkData.length > 0 && forkData.map((item, index) => {
                    return (
                        <p>{item}</p>
                    )
                })}
            </div>
        </div>
    );
}

export default ResultCard;