import React from 'react';
import './Career.css';
import icon from '../../images/service-icon-01.png';
import { Button, Card } from 'react-bootstrap';


const Career = () => {
    return (
        <div className='card'>
            <h2 className='career-title'>Join with our team</h2>
            <Card style={{ width: '18rem' }} className='align-items-center' id='card'>
                <Card.Img className='icon' variant="top" src={icon} />
                <Card.Body className='align-items-center'>
                    <Card.Title>Web Development</Card.Title>
                    <Card.Text>
                        Want to practice your creativity?
                    </Card.Text>
                    <Button variant="primary">Apply Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Career;