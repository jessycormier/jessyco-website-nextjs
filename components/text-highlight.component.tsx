import React from "react";

export default class TextHighlight extends React.Component {

    render() {
        return (
            <span className="inline-block whitespace-nowrap dark:bg-gray-50 dark:text-gray-900 bg-gray-900 text-gray-50 font-bold py-1 px-2 my-0.5">
                {this.props.children}
            </span>
        );
    }

}
