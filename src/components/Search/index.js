import React from 'react';
import Button from '../Button';
import Input from '../Input'

function Search(props) {


    return (
        <div className="flex " >
            <div className="w-5/6 self-center">
                <Input value={props.queryText} onChange={(e) => props.onChange(e.target.value)} />
            </div>
            <div className="w-1/6 self-center">
                <Button title="Find Me" onClick={props.handleClick} />
            </div>
        </div>
    );
}

export default Search;