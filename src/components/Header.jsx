import { React, useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { BagHeartFill } from 'react-bootstrap-icons';

export const Header = ({ allProducts, setAllProducts,total, countProducts, setCountProducts, setTotal }) => {
    const [active, setActive] = useState(false);

    const onDeleteProduct = (product=>{
        const results = allProducts.filter(
            item => item.id !== product.id
        );

        setTotal(total - product.price * product.quantity)
        setCountProducts(countProducts - product.quantity)
        setAllProducts(results);
    });


    const onCleanCart = () => {
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };
    return (
        <header>
            <Navbar className="bg-body-tertiary">
                <Container fluid className="position-relative">
                    <Navbar.Brand href="#home">Shop</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end me-5">
                        <Button variant="" className="position-relative" onClick={() => setActive(!active)}>
                            <BagHeartFill size={30} id="iconCart"></BagHeartFill>
                            <span className="position-absolute top-100 start-90 translate-middle badge rounded-pill bg-danger">
                                {countProducts}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </Button>
                    </Navbar.Collapse>
                    <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
                        {
                            allProducts.length ? (
                                <>
                                    <div className="row-product">
                                        {
                                            allProducts.map(product => (
                                                <div className="cart-product" key={product.id}>
                                                    <div className="info-cart-product">
                                                        <span className="cantidad-producto-carrito">{product.quantity}</span>
                                                        <p className="titulo-producto-carrito ms-2"> {product.nameProduct}</p>
                                                        <span className="precio-producto-carrito">${product.price}</span>
                                                    </div>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="icon-close"
                                                        onClick={() => onDeleteProduct(product)}>
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </div>
                                            )

                                            )
                                        }

                                    </div>

                                    <div className="cart-total">
                                        <h3>Total:</h3>
                                        <span className="total-pagar">${total}</span>
                                    </div>

                                    <Button variant="danger" className="w-100 rounded-0" onClick={() => onCleanCart()}>Vaciar carrito </Button>
                                </>
                            ) : (
                                <p className="cart-empty">El carrito está vacío</p>
                            )
                        }
                    </div>
                </Container>
            </Navbar>

            {/* <h1>Tienda</h1>

            <div className="container-icon">
                <div className="container-cart-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="icon-cart">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                    </svg>
                    <div className="count-products">
                        <span id="contador-productos">0</span>
                    </div>
                </div>

                <div className="container-cart-products hidden-cart">
                    <div className="row-product hidden">
                        <div className="cart-product">
                            <div className="info-cart-product">
                                <span className="cantidad-producto-carrito">1</span>
                                <p className="titulo-producto-carrito">Zapatos Nike</p>
                                <span className="precio-producto-carrito">$80</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="icon-close">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </div>
                    </div>

                    <div className="cart-total hidden">
                        <h3>Total:</h3>
                        <span className="total-pagar">$200</span>
                    </div>
                    <p className="cart-empty">El carrito está vacío</p>
                </div>
            </div>  */}
        </header>
    )
};