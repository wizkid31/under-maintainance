//react import
import React from "react";

//bootstrap
import { Container, Row, Col } from "react-bootstrap";

//styles import
import Styles from "./App.module.scss";

//image import
import um from "./images/um1.png";

const App = () => {
  return (
    <Container className={Styles.appContainer}>
      <Row className={Styles.row1} xl={12} lg={12} md={12} sm={12}>
        <img className={Styles.underMaintainance} src={um} />
      </Row>
    </Container>
  );
};

export default App;
