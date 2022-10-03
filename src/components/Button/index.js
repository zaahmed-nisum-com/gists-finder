import React from 'react';

function Button(props) {
    return (
        <div className="px-2 text-center">
            <button type="button"
                onClick={props.onClick}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{props.title}</button>
        </div>
    );
}

Button.defaultProps = {
    isIcon: false,
    isDisabled: false,
    title: 'button',
    onClick: () => { },
}

export default Button;