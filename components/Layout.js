import Nav from './Navi';

function Layout({ children }) {
    return (
        <>
            <Nav />
            <div>
                {children}
            </div>
        </>
    );
}

export default Layout;