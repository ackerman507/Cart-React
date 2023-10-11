import React from "react";
import { data } from '../data';
import { Button, Card, Col, Row } from "react-bootstrap";

export const ProductList = ({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) => {

    const onAddProduct = (product) => {
        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setTotal(total + product.price * product.quantity)
            setCountProducts(countProducts + product.quantity)
            return setAllProducts([...products]);
        }

        setTotal(total + product.price * product.quantity)
        setCountProducts(countProducts + product.quantity)
        setAllProducts([...allProducts, product])
    }
    return (
        <Row>
            {data.map(product => (
                <Col s={12} lg={4} xl={4} xxl={3} key={product.id} className="mb-4">
                    <Card className="border-0">
                        <figure>
                            <Card.Img className="rounded-4" src={product.img} alt={product.nameProduct} />
                        </figure>
                        <Card.Body>
                            <h3 className="text-danger  text-opacity-50">{product.nameProduct}</h3>
                            <Card.Text>
                                ${product.price}
                            </Card.Text>
                            <div className="justify-content-center">
                                <Button variant="danger" className="" onClick={() => onAddProduct(product)}>Añadir al carrito</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

        </Row>
    );
};