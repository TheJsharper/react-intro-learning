
interface RouteProps {
    path: string;
    children: JSX.Element;
}

const Route = (props: RouteProps) => {
    const { path, children } = props;
    return window.location.pathname === path ? children : null;

}

export default Route;