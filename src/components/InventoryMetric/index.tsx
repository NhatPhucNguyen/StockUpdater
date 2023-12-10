import React from "react";
import InformationCard from "./InformationCard";
import { Container } from "react-bootstrap";

const InventoryMetric = () => {
    return (
        <Container className="mt-4 d-flex flex-wrap gap-4">
            <InformationCard title="Total Products" subTitle="Quantity: 3" description="This shows the total number of products in your inventory"/>
            <InformationCard title="Categories" subTitle="Quantity: 3" description="This shows the total number of categories in your inventory"/>
            <InformationCard title="Low Stock Items" subTitle="Quantity: 1" description="This shows the total number of items which are in low of stocks in your inventory"/>
            <InformationCard title="Bestseller" subTitle="Shoes" description="This shows the best seller in your inventory"/>
        </Container>
    );
};

export default InventoryMetric;
