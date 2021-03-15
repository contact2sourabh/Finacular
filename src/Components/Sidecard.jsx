import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import logo from './logo.png';
import logob from './logob.png';
import '../index.css'

const Sidecard = (props) => {

    return (
        <>
            <Card className="card">
                <CardImg className="photo" top src={logo} alt="Card image cap" />
                <CardBody>
                    <CardText>Understand the power of compounding</CardText>
                    <Button id="learnmore">Learn more</Button>
                </CardBody>
            </Card>

            <Card className="card2">
                <CardImg className="photo" top src={logob} alt="Card image cap" />
                <CardBody>
                    <CardText>track all your expenses on a daily basis </CardText>
                    <Button id="learnmore">Track now</Button>
                </CardBody>
            </Card>
        </>

    )
}

export default Sidecard;