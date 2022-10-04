import React from 'react';
import Button from '../Button';
import Input from '../Input'

function Search(props) {


    return (
        <div className="flex " >
            <div className="w-5/6 self-center">
                <Input onSubmit placeHolder="User name" value={props.queryText} onChange={(e) => props.onChange(e.target.value)} />
            </div>
            <div className="w-1/6 self-center">
                <Button  isIcon={true} icon="search" onClick={props.handleClick} />
            </div>
        </div>
    );
}

export default Search;