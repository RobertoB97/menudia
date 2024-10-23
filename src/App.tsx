import React from "react";
import "./App.css";
import {Route, Routes, Outlet, useParams} from "react-router-dom";
import Test from "./test";
import Portada from "./pages/portada";
import ItemDesNavBar from "./comp/itemDesNavBar";
import Productos from "./pages/productos";
import Administrar from "./pages/administrar";
import {useEffect} from "react";

import {useSelector, useDispatch} from "react-redux";
import {isLogged} from "./features/counter/counterSlice";

// import Counter from "./comp/testRedux";
import Header from "./comp/header";
const Home = ({props}: any) => {
    const params = useParams();
    console.log(params);
    return (
        <>
            <div>{props}</div>
        </>
    );
};

function App() {
    const dispatch = useDispatch<any>();
    const auth = useSelector((state: any) => state.auth);

    useEffect(() => {
        // Verificar si el usuario está logueado cuando el componente se monta
        dispatch(isLogged());
    }, [dispatch]);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/">
                    <Route index element={<Portada />} />
                    <Route path="/productos" element={<Productos />}>
                        {/* <Route index element={<Test />} /> */}
                        {/* <Route path="/:productId" element={<Test />} /> */}
                    </Route>
                    <Route
                        path="/administrar"
                        element={<Administrar />}
                    ></Route>
                    <Route path="productos/:productId" element={<Test />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
