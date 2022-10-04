import React from 'react';
import SearchIcon from '../Icons/search.icon';

function Button(props) {

    const iconsObj = { 'search': <SearchIcon /> }

    return (
        <div className="px-2 text-center">
            <button type="button"
                onClick={props.onClick}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 
                focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full 
                text-sm px-5 p-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {props.isIcon && iconsObj[props.icon]}
                {props.title && props.title}</button>
        </div>
    );
}

Button.defaultProps = {
    isIcon: false,
    isDisabled: false,
    onClick: () => { },
}

export default Button;