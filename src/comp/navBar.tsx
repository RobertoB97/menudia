import ItemNavBar from "./itemNavBar";
import ItemDesNavBar from "./itemDesNavBar";
import {useSelector} from "react-redux";
export default function NavBar() {
    const user = useSelector((state: any) => state.auth.value);
    console.log(user);
    return (
        <div data-testid="navbar" className="listaNavBar">
            <ItemNavBar texto="Portada" url="/" />
            <ItemDesNavBar
                texto="Productos"
                url="productos"
                items={[
                    {texto: "sub1", url: "menu1/sub1"},
                    {texto: "sub2", url: "menu1/sub2"},
                ]}
            />
            {user && user.role === "admin" && (
                <ItemNavBar texto="Administrar" url="administrar" />
            )}
        </div>
    );
}
