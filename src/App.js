//react import
import React from "react";

//bootstrap
import { Container, Row, Col } from "react-bootstrap";

//styles import
import Styles from "./App.module.scss";

//image import
import um from "./images/um1.png";

//svg import
import { ReactComponent as UM } from "./images/under_maintenance-01.svg";
const App = () => {
  return (
    <Container className={Styles.container}>
      <Row className={Styles.row}>
        <Col className={Styles.col} xl={12} lg={12} md={12} sm={12}>
          <UM className={Styles.underMaintainance}></UM>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
