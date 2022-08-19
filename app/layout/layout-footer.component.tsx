import React from "react";

export default class LayoutFooter extends React.Component {

    /**
     * @todo turn into a one time run function to get the date of the file last modified?
     */
    private getDate() {
        const d = new Date();
        return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate()}`;
    }

    render() {
        return (<>
            <footer className='py-16'>
                <div className='container mx-auto text-gray-700'>
                    <p>
                        Built with: NextJS 12, TypeScript, and TailwindCSS.
                    </p>
                    <div>Last Updated on {this.getDate()}</div>
                </div>
            </footer>
        </>);
    }
}