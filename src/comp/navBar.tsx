import ItemNavBar from "./itemNavBar"
import ItemDesNavBar from "./itemDesNavBar";
export default function NavBar() {
    return (
        <div data-testid="navbar" className="listaNavBar">
            <ItemNavBar texto="menu1" url="menu1"/>
            <ItemDesNavBar texto="menu1" url="menu1" items={[{texto:"sub1", url:"menu1/sub1"},{texto:"sub2", url:"menu1/sub2"}]} />
        </div>
    );
}