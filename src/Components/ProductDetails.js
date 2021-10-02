import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    selectedProduct,
} from "../redux/actions/productsActions";


const ProductDetails = () => {
    const { productId } = useParams();
    let product = useSelector((state) => state.product);

    let singleItem = useSelector((state) => state.single)
    const { image, title, price } = product;
    const dispatch = useDispatch();

    const fetchProductDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${singleItem.id}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(selectedProduct(response.data));
        // console.log(response.data, "***")
    };

    useEffect(() => {
        console.log(singleItem, "singleItem")
        fetchProductDetail();

    }, [productId]);
    return (
        <div>
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="bg-white">

                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased </h2>
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            <div key={product.id} className="group relative">
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img
                                        src={image}
                                        alt={product.imageAlt}
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {title}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">123</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">${price}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}

export default ProductDetails

