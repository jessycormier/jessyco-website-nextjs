import React from "react";

export default class TextHighlight extends React.Component {

    render() {
        return (
            <span className="dark:bg-gray-50 dark:text-gray-900 bg-gray-900 text-white font-bold py-1 px-2">
                {this.props.children}
            </span>
        );
    }

}
