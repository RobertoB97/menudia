import {useEffect} from "react";
import {Outlet, useParams} from "react-router-dom";
export const sumar = (a: number, b: number) => a + b;
export default function Test() {
    const {productId} = useParams();

    useEffect(() => {
        console.log(productId);
    }, [productId]);
    return (
        <>
            <h1>Producto = {productId}</h1>

            {/* <Outlet /> */}
        </>
    );
}
