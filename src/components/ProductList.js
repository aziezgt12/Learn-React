// import { useState, useEffect } from 'react';
// import React, { Component }  from 'react';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const ProductList = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
    getProducts();
}, []);

    const getProducts = async () => {
    const response = await axios.get(`https://api.npoint.io/99c279bb173a6e28359c/data`);
        setProduct(response.data);
    }

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`);
        getProducts();
    }
    return (
        <div>
            <Link to="/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Jenis Surah</th>
                        <th>Nama Surah</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { products.map((product, index) => (
                        <tr key={ product.id }>
                            <td>{ index + 1 }</td>
                            <td>{ product.type }</td>
                            <td>{ product.nama }</td>
                            <td>
                                <Link to={`/baca/${product.nomor}`} className="btn btn-sm btn-primary">Baca Surah Ini</Link> &nbsp;
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}

export default ProductList