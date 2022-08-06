
import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Content = () => {
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
    <Row xs={1} md={4} className="g-4 m-4">
        { products.map((product, index) => (        
            <Col>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>{ product.nama }</Card.Title>
                <Card.Text>{ product.keterangan }</Card.Text>
                </Card.Body>
            </Card>
            </Col>
        ))}
    </Row>
  );
}

export default Content;

