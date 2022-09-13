import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

const NavDevide = () => <li><span className="text-gray-500 mx-2">/</span></li>;

type NavLinkProps = {
    href?: string,
    active?: boolean,
    children?: React.ReactNode
};

const NavLink = ({ href, active, children }: NavLinkProps) => <>
    <li className={cn({ 'dark:bg-gray-50 dark:text-gray-900 bg-gray-900 text-gray-50 font-bold px-2 rounded': active })}>
        {href ? <Link href={href}>
            <a>{children}</a>
        </Link> : children
        }
    </li>
</>;


type SiteNavProps = {
    routes: {
        path?: string,
        name: string
    }[]
};

const SiteNav = ({ routes = [] }: SiteNavProps) => {
    const router = useRouter();
    const routeCount = routes.length - 1;
    const r = router.route.split('/');

    return <>
        <nav className="rounded-md w-full my-10">
            <ol className="list-reset flex">
                {routes.map((route, index) => <>
                    <NavLink
                        href={route.path}
                        active={index === routeCount}
                    >
                        {route?.name}
                    </NavLink>
                    {index < routeCount && <NavDevide />}
                </>)}
            </ol>
        </nav>
    </>;
};

export default SiteNav;
