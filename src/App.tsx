import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";

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
            <Routes>
                <Route path="/menu1">
                    <Route index element={<Home props={"test1"} />} />
                    <Route path="sub1" element={<Home props={"test2"} />} />
                    <Route path="sub2" element={<Home props={"test3"} />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
