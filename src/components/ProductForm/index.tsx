import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import testProducts, { Product } from "../../test/products";
import { useNavigate, useParams } from "react-router-dom";

const ProductForm = () => {
    const [product, setProduct] = useState<Product>({} as Product);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    useEffect(() => {
        if (id) {
            testProducts.forEach((item) => {
                const itemId = String(item.id);
                if (itemId === id) {
                    setProduct(item);
                }
            });
        }
    }, []);
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setProduct((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (id) {
            localStorage.setItem("productToUpdate", JSON.stringify(product));
        } else {
            localStorage.setItem("productToAdd", JSON.stringify(product));
        }
        navigate("/dashboard/products")
    };
    return (
        <Container
            className="w-50 mt-4 border border-primary p-4"
            style={{ height: "fit-content" }}
        >
            <h1 className="text-center">
                {id ? "Update Product" : "Add a new product"}
            </h1>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3 mt-4">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Product's Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name of product"
                            onChange={handleChange}
                            name="name"
                            value={product.name || ""}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name of supplier"
                            name="supplier"
                            onChange={handleChange}
                            value={product.supplier || ""}
                        />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter product's image link"
                        name="imgUrl"
                        value={product.imgUrl || ""}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter the initial quantity"
                            onChange={handleChange}
                            name="quantity"
                            value={product.quantity || ""}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Category</Form.Label>
                        <Form.Select
                            defaultValue="Choose..."
                            onChange={handleChange}
                            name="category"
                            value={product.category || ""}
                        >
                            <option>Choose...</option>
                            <option value={"Electronic"}>Electric</option>
                            <option value={"Clothes"}>Clothes</option>
                            <option value={"Food"}>Food</option>
                            <option value={"Kitchen"}>Kitchen</option>
                            <option value={"Furniture"}>Furniture</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Price"
                            onChange={handleChange}
                            name="price"
                            value={product.price || ""}
                        />
                    </Form.Group>
                </Row>
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default ProductForm;
