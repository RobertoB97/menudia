import { Outlet } from 'react-router-dom';
import NavBar from './navBar';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className="header">
                <Link to="/">
                <div className="headerTitle">
                    <h1>Menudia</h1>
                    </div>
                </Link>
                <div className="headerNav">
                    <NavBar />
                </div>
            </div>
            {/* <Outlet /> */}
        </>
    );
}