import axios from "axios";
import React, { useState } from "react";

const GetAllProductPage = () => {


    const [ProductList, updateProductList] = useState([]);

    const GetProduct = () => {
        const url = "https://dummyjson.com/products";
        axios.get(url)
            .then((response) => {
                console.log(response)
                updateProductList(response.data.products)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    let userProfileMap = ProductList.map((value,index) => {
        return (
        <tr key={index}>
            <td>{value.title}</td>
            <td>{value.brand}</td>
            <td>{value.description}</td>
            <td>{value.price}</td>
            <td>
                <img src={value.thumbnail} width={40} alt="" />
            </td>
        </tr>
        )
    })


    return (
        <div>
            <h1>All Product Page</h1>
            <button onClick={() => GetProduct()}>Get product details</button>
            <table>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>brand</th>
                        <th>description</th>
                        <th>price</th>
                        <th>thumbnail</th>
                    </tr>
                </thead>
                <tbody>
                    {userProfileMap}
                </tbody>
            </table>
        </div>
    )
}

export default GetAllProductPage;