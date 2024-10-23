import {useEffect, useState} from "react";
import useFetch from "../hooks/useFetch";
import {Link} from "react-router-dom";

interface Product {
    id: number;
    title: string;
    description: string;
    images: string[];
}

interface Category {
    id: number;
    name: string;
}

export default function Productos() {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [filter, setFilter] = useState<number | null>(null);

    // Fetch de productos iniciales sin filtro
    const {
        data: initialProductData,
        loading: initialProductsLoading,
        error: initialProductsError,
    } = useFetch<Product[]>(
        "https://api.escuelajs.co/api/v1/products?offset=0&limit=10"
    );

    // Fetch de categorías
    const {
        data: categoryData,
        loading: categoriesLoading,
        error: categoriesError,
    } = useFetch<Category[]>("https://api.escuelajs.co/api/v1/categories");

    // Actualiza los productos cuando cambia el filtro
    useEffect(() => {
        let apiUrl =
            "https://api.escuelajs.co/api/v1/products?offset=0&limit=10";
        if (filter !== null) {
            apiUrl += `&categoryId=${filter}`;
        }

        const fetchFilteredProducts = async () => {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setProducts(data);
        };

        fetchFilteredProducts();
    }, [filter]); // Vuelve a ejecutar el fetch cuando el filtro cambie

    // Maneja el cambio de filtro
    function FilterChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setFilter(Number(event.target.value)); // Actualiza el filtro con el valor seleccionado
    }

    // Actualiza productos cuando el productData inicial cambie (cuando no hay filtro)
    useEffect(() => {
        if (initialProductData) {
            setProducts(initialProductData);
        }
    }, [initialProductData]);

    // Actualiza categorías cuando categoryData cambie
    useEffect(() => {
        if (categoryData) {
            setCategories(categoryData);
        }
    }, [categoryData]);

    if (initialProductsLoading || categoriesLoading) return <p>Cargando...</p>;
    if (initialProductsError) return <p>Error: {initialProductsError}</p>;
    if (categoriesError) return <p>Error: {categoriesError}</p>;

    return (
        <div>
            <h1>Productos</h1>
            <div>
                <h2>Filtros</h2>
                <span>Categoria: </span>
                <select onChange={FilterChange} defaultValue="">
                    <option value="">Todas</option>{" "}
                    {/* Opción para ver todos los productos */}
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "30px",
                    justifyContent: "center",
                }}
            >
                {products &&
                    products.map((product: Product) => (
                        <Link key={product.id} to={`/productos/${product.id}`}>
                            <div>
                                <h5>{product.title}</h5>
                                <img
                                    src={product.images[0]}
                                    width={300}
                                    alt={product.title}
                                />
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
}
