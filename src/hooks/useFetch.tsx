import {useState, useEffect, useMemo} from "react";
import axios, {AxiosRequestConfig} from "axios";

const useFetch = <T,>(url: string, options: AxiosRequestConfig = {}) => {
    const [data, setData] = useState<T | null>(null); // Almacena los datos
    const [loading, setLoading] = useState(true); // Indicador de carga
    const [error, setError] = useState<string | null>(null); // Almacena el error

    // Memoriza las opciones para evitar peticiones repetitivas
    const memorizedOptions = useMemo(() => options, [options]);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios(url, memorizedOptions);
                if (isMounted) {
                    setData(response.data);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(
                        err instanceof Error ? err.message : "Error desconocido"
                    );
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []); // Solo re-ejecuta si cambia la URL o las opciones memorizadas

    return {data, loading, error};
};

export default useFetch;
