import {Outlet} from "react-router-dom";
import NavBar from "./navBar";
import {Link} from "react-router-dom";
import LoginBtn from "./loginBtn";
import {useSelector, useDispatch} from "react-redux";

export default function Header() {
    const count = useSelector((state: any) => state.auth.value);

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
                <div className="headerLogin">
                    <LoginBtn email="john@mail.com" password="changeme" />
                    <LoginBtn email="admin@mail.com" password="admin123" />
                </div>
            </div>
            {/* <Outlet /> */}
        </>
    );
}
