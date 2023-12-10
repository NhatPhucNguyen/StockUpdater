import React from "react";
import { Card } from "react-bootstrap";

type Props = {
    title: string;
    subTitle: string;
    description?: string;
};

const InformationCard = ({ title, subTitle, description }: Props) => {
    return (
        <Card style={{ width: "18rem", height: "fit-content" }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {subTitle}
                </Card.Subtitle>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default InformationCard;
