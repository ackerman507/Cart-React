import { useState } from "react";
import { Header } from "./components/Header"
import { ProductList } from "./components/ProductList"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);


  return (
    <>
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <Container fluid>


        <ProductList
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
      </Container>
    </>
  )
}

export default App
