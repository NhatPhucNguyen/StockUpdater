import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import testProducts from "../../test/products";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState(testProducts);
    const navigate = useNavigate();
    return (
        <Container className="mt-4">
            <Button
                variant="success"
                className="mb-4"
                onClick={() => {
                    navigate("add");
                }}
            >
                Add a new product
            </Button>
            {products.map((product) => {
                return (
                    <div className="row justify-content-center mb-3">
                        <div className="col-md-12">
                            <div className="card shadow-0 border rounded-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                                <img
                                                    src={product.imgUrl}
                                                    className="w-100"
                                                />
                                                <a href="#!">
                                                    <div className="hover-overlay">
                                                        <div
                                                            className="mask"
                                                            style={{
                                                                backgroundColor:
                                                                    "rgba(253, 253, 253, 0.15);",
                                                            }}
                                                        ></div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-6">
                                            <h5>{product.name}</h5>
                                            <div className="d-flex flex-row">
                                                <span>
                                                    In stock: {product.quantity}
                                                </span>
                                            </div>
                                            <div className="mt-1 mb-0 text-muted small">
                                                <span>
                                                    Category: {product.category}
                                                </span>
                                            </div>
                                            <div className="mb-2 text-muted small">
                                                <span>
                                                    Supplier: {product.supplier}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                            <div className="d-flex flex-row align-items-center mb-1">
                                                <h4 className="mb-1 me-1">
                                                    ${product.price}
                                                </h4>
                                            </div>
                                            <div className="d-flex flex-column mt-4">
                                                <button
                                                    className="btn btn-primary btn-sm"
                                                    type="button"
                                                    onClick={() => {
                                                        navigate(
                                                            `${product.id}`
                                                        );
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-outline-primary btn-sm mt-2"
                                                    type="button"
                                                    onClick={() => {
                                                        setProducts((prev) => {
                                                            return prev.filter(
                                                                (item) =>
                                                                    item.id !=
                                                                    product.id
                                                            );
                                                        });
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </Container>
    );
};

export default ProductList;
