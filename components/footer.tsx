import Container from './container';


const Footer = () => {

    const getDate = () => {
        const d = new Date();
        return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate()}`;
    };

    return (
        <footer className='text-gray-700'>
            <Container>
                <div className="py-28 flex flex-col lg:flex-row items-center">
                    <h3 className="font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                        Built with ☕: NextJS 12, TypeScript, and TailwindCSS.
                    </h3>
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                        Last Updated on {getDate()}
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;