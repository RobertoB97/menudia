import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// Thunk para verificar si el usuario está logueado
export const isLogged = createAsyncThunk("auth/isLogged", async () => {
    const token = localStorage.getItem("token");
    if (token) {
        const response = await axios.get(
            "https://api.escuelajs.co/api/v1/auth/profile",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data; // Devuelve los datos del perfil
    } else {
        throw new Error("No token found");
    }
});

export const counterSlice = createSlice({
    name: "auth",
    initialState: {
        value: null,
        status: "idle", // Estado para controlar la petición
        error: null, // Estado para manejar errores
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: state => {
            state.value = null;
            localStorage.removeItem("token"); // Limpia el token en logout
        },
    },
    extraReducers: builder => {
        builder
            .addCase(isLogged.pending, state => {
                state.status = "loading";
            })
            .addCase(isLogged.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.value = action.payload; // Guarda los datos del usuario
            })
            .addCase(isLogged.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message; // Maneja el error
            });
    },
});

// Exporta las acciones generadas por los reducers
export const {login, logout} = counterSlice.actions;

export default counterSlice.reducer;
