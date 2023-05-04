import React from "react";
import {Container, Row, Col} from "reactstrap";
import "../../assets/css/Topsearch.css";

const Topsearch = () => {
    return (
        <div className="maintopsearch">
            <Container>
                <Row className="top-searchs">
                    <Col className="search-header">
                        <h6 className="top">Top searches: </h6>
                    </Col>
                    <Col className="search-topics">
                        <h6>development</h6>
                    </Col>
                    <Col className="search-topics">
                        <h6>agile</h6>
                    </Col>
                    <Col className="search-topics">
                        <h6>design</h6>
                    </Col>
                    <Col className="search-topics">
                        <h6>finance</h6>
                    </Col>
                    <Col className="search-topics">
                        <h6>startup</h6>
                    </Col>
                    <Col className="search-topics">
                        <h6>delivery</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Topsearch;
