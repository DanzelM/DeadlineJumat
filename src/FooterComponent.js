import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class FooterComponent extends React.Component {
    render(){
        return(
            <Container fluid style={{"color":"Black"}}>
                <Row>
                    <Col style={{"color":"white"}}>2022 TOKOTOK.com</Col>
                </Row>
            </Container>
        )
    }

}

export default FooterComponent