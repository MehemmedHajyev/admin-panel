import React from "react";
import {Container, Row, Col} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/main.css";
const Arrowline = () => {
    return (
        <div className="mt-5">
            <Container>
                <Row className="row-class">
                    <Col className="col-style d-flex">
                        <div className="first-col all">
                            <div className="circle">1</div>
                            <h6>Type to search</h6>
                        </div>
                        <div className="icon-arrow">
                            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
                        </div>
                    </Col>
                    <Col className="col-style d-flex">
                        <div className="first-col all">
                            <div className="circle">2</div>
                            <h6>Find domains</h6>
                        </div>
                        <div className="icon-arrow">
                            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
                        </div>
                    </Col>
                    <Col>
                        <div className="first-col all">
                            <div className="circle">3</div>
                            <h6>Filter them</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Arrowline;
