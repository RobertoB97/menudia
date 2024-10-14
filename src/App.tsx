import React from "react";
import "./App.css";
import {Route, Routes, Outlet} from "react-router-dom";
import Test from "./test";
import Portada from "./pages/portada";
import ItemDesNavBar from "./comp/itemDesNavBar";
import NavBar from "./comp/navBar";
import Header from "./comp/header";
const Home = ({props}: any) => {
    console.log(props);
    return (
        <>
            <div>{props}</div>
        </>
    );
};

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" >
                    <Route index element={<Portada />} /> 
                    <Route path="/menu1" element={<Test />}>
                        {/* <Route index element={<Test />} /> */}
                        <Route path="sub1" element={<Home props={"test2"} />} />
                        <Route path="sub2" element={<Home props={"test3"} />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
