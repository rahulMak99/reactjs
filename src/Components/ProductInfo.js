
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import { selectedProduct, singleItem } from "../redux/actions/productsActions";
import axios from "axios";
import '../App.css';

function App() {
    const [APIDATA, setAPIDATA] = useState([])
    const dispatch = useDispatch();
    const fetchProductDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products`)

            .catch((err) => {
                console.log("Err: ", err);
            });
        console.log(response)
        setAPIDATA(response.data)
        dispatch(selectedProduct(response.data));
    };


    useEffect(() => {
        fetchProductDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <div className="bg-red">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">New Collections</h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {APIDATA.map((product) => (
                        <Link key={Math.random()} to={`/ProductDetails`} onClick={() => {
                            dispatch(singleItem(product));

                        }}>
                            <div key={product.id} className="group relative">
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img
                                        src={product.image}
                                        alt={product.imageAlt}
                                        className="flex  align-center justify-center  object-center object-cover"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <p>
                                                {product.title}
                                            </p>


                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
