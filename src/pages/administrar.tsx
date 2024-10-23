import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function Administrar() {
    const user = useSelector((state: any) => state.auth.value);
    const statusAuth = useSelector((state: any) => state.auth.status);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(statusAuth);
        if (statusAuth === "failed" || (user && user.role !== "admin")) {
            navigate("/");
        }
    }, [statusAuth]);
    return (
        <div>
            <h1>Administrar</h1>
        </div>
    );
}
