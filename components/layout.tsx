import Container from "./container";
import Footer from './footer';
import LightSwitch from "./light-switch.component";
import Meta from './meta';

type LayoutProps = {
    nav: React.ReactNode
    children: React.ReactNode
}

const Layout = ({ nav, children }: LayoutProps) => {
    return (
        <>
            <Meta />
            <Container>
                <div className="flex items-center content-between">
                    {nav}
                    <LightSwitch />
                </div>
            </Container>
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;