import {Outlet} from "react-router-dom";
export const sumar = (a:number, b:number) => a + b;
export default function Test() {
    console.log(sumar(5, 5));
    return (
        <>
            <h1>Outlet</h1>
            <Outlet />
        </>

    )

}