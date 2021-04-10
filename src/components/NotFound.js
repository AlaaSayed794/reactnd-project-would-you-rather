import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

const NotFound = () => {
    return (
        <Card >
            <Card.Img variant="top" src="/404.jpg" />
            <Card.Body>
                <Card.Text>
                    make sure you entered a valid URL
    </Card.Text>
                <Button variant="primary" as={Link} to="/">Return to home.</Button>
            </Card.Body>
        </Card>
    );
}

export default NotFound;
