import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {login} from "../features/counter/counterSlice";
import {useRef} from "react";
interface LoginProps {
    email: string;
    password: string;
}
export default function LoginBtn(props: LoginProps) {
    const count = useSelector((state: any) => state.auth.value);
    const statusAuth = useSelector((state: any) => state.auth.status);
    const dispatch = useDispatch();
    const formLogin = useRef<any>(null);
    const emailLogin = useRef<any>(null);
    const passLogin = useRef<any>(null);
    const handlebtn = () => {
        // const formLogin = document.querySelector(".formLogin") as HTMLElement;

        if (formLogin.current.style.display === "none") {
            // formLogin.style.display = "block";
            formLogin.current.style.display = "block";
        } else {
            // formLogin.style.display = "none";
            formLogin.current.style.display = "none";
        }
    };
    const logoutbtn = () => {
        localStorage.removeItem("token");
        dispatch(login({}));
    };
    const loginbtn = async () => {
        // let email = document.querySelector(".email") as HTMLInputElement;
        // let password = document.querySelector(".pas") as HTMLInputElement;

        try {
            // Realizar la solicitud para obtener el token
            const res = await axios.post(
                "https://api.escuelajs.co/api/v1/auth/login",
                {
                    email: emailLogin.current.value,
                    password: passLogin.current.value,
                }
            );
            // Verificar si hay un token en la respuesta y guardarlo en localStorage
            if (res.data.access_token) {
                localStorage.setItem("token", res.data.access_token);
                console.log(
                    "Token guardado en localStorage:",
                    res.data.access_token
                );
            } else {
                console.log("No se recibió el token.");
            }
            // Obtener perfil del usuario utilizando el token
            const res2 = await axios.get(
                "https://api.escuelajs.co/api/v1/auth/profile",
                {
                    headers: {
                        Authorization: `Bearer ${res.data.access_token}`,
                    },
                }
            );

            const user = res2.data; // Objeto con la información del usuario

            // Despachar la acción `login` con los datos del usuario
            dispatch(login(user));

            console.log("Usuario logueado:", user);
        } catch (error) {
            console.error("Error en el login:", error);
        }
    };
    if (statusAuth === "loading") {
        return <p>Cargando...</p>;
    }
    if (count && count.name) {
        return (
            <div style={{position: "relative"}}>
                <button onClick={logoutbtn}>Logout</button>
                {count && <p>{count.name + " | Role:" + count.role}</p>}
            </div>
        );
    } else {
        return (
            <div style={{position: "relative"}}>
                <button onClick={handlebtn}>Login</button>
                <div
                    ref={formLogin}
                    className="formLogin"
                    style={{
                        display: "none",
                        position: "absolute",
                        top: "20px",
                        width: "200px",
                        backgroundColor: "white",
                    }}
                >
                    <h3>Form Login</h3>
                    <input
                        ref={emailLogin}
                        className="email"
                        type="text"
                        placeholder="Email"
                        defaultValue={props.email}
                    />
                    <input
                        ref={passLogin}
                        className="pas"
                        type="text"
                        placeholder="Password"
                        defaultValue={props.password}
                    />
                    <button onClick={loginbtn}>Login</button>
                </div>
            </div>
        );
    }
}
