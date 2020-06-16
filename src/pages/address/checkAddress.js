import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import BaseCheck from "./basecheck";
import DoneIcon from "@material-ui/icons/Done";
import { Field } from "react-final-form";
import { useStoreActions } from "easy-peasy";
import { InputField } from "../../components/input-field-component";
import { OnboardingCardStyles } from "../../styles/card-styles";
import { Input, Row, Col } from "reactstrap";
import history from "../../util/history-util";
import { FormHelperText } from "@material-ui/core";
import bg from "../../assets/bg.png";
import pizza from "../../assets/pizza.png";
import textin from "../../assets/textin.png";
import logo from "../../assets/deliveryae.png";
import apple from "../../assets/apple.png";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

const checkAddress = () => {
  const setaddresbase = useStoreActions((actions) => actions.user.setaddress);
  const { baseCard, title1 } = OnboardingCardStyles();

  const [endereco, setendereco] = useState("");

  return (
    <div>
      <BrowserView>
        <section
          style={{
            width: "100%",
            height: "fit-content",
          }}
        >
			   <img src={bg} style={{ width: "100%", position: 'absolute' }} />
          <Row>
            <h3
              style={{
                marginLeft: "auto",
                marginRight: "139px",
                marginTop: "39px",
                fontWeight: "700",
                color: " #FF805D",
              }}
            >
              Entrar
            </h3>
          </Row>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <img src={pizza} style={{ width: "300px" }} />
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <img
                src={textin}
                style={{ width: "700px", marginTop: "-70px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h3
                style={{
                  fontWeight: "normal",
                  marginTop: "-100px",
                }}
              >
                Precisamos verificar se atendemos sua região.
              </h3>
            </Col>
          </Row>
		  <Row>
              <Col>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#EDF1F7",
                    padding: "0.5em 0.3em",
					marginLeft: '30%',
					marginRight: '30%',
					borderRadius: "12px",
					marginTop: '-30px'
                  }}
                >
                  <Input
                    onClick={() => {
                      history.push("/searchaddres");
                    }}
                    onChange={(e) => {
                      setendereco(e.target.value);
                    }}
                    value={endereco.str}
                    placeholder="Endereço de entrega"
                    style={{ border: "none", fontSize: "16px", backgroundColor: '#EDF1F7' }}
                  />
                  <div style={{ color: "#fff" }}>
                    <DoneIcon
                      onClick={() => {
                        setaddresbase({
                          str: endereco,
                          fullresp: "",
                          lat: "",
                          long: "",
                          cep: "",
                        });
                        history.push("/searchaddres");
                      }}
                      style={{
                        borderRadius: "12px",
                        backgroundColor: "#FF805D",
                        padding: "0.4em",
                        width: "40px",
                        height: "40px",
                        marginRight: "0.1em",
                        color: "#fff",
                      }}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h3
                style={{
                  fontWeight: "700",
                  marginTop: "20px",
                  color: "#1BD09A",
                }}
              >
                Maravilha! Nós atendemos sua região. 🛵
              </h3>
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <img src={apple} style={{ width: "300px", marginTop: "50px" }} />
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <img src={logo} style={{ width: "120px", marginTop: "20px" }} />
            </Col>
          </Row>
        </section>
      </BrowserView>

      <MobileView>
        <div
          style={{
            backgroundColor: `#FFFFFF`,
          }}
        >
          <BaseCheck />
          <div
            style={{
              borderRadius: "32px 32px 0px 0px",
              backgroundColor: `#FF805D`,
              height: "25vh",
              position: "fixed",
              width: "100vw",
              bottom: 0,
              left: 0,
            }}
          >
            <div
              style={{
                padding: "3vh 0",
                textAlign: "center",
                fontSize: "1em",
                color: "#FFF",
                fontWeight: "600",
              }}
            >
              Informe o endereço de entrega.
            </div>
            <Row>
              <Col>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "white",
                    padding: "0.5em 0.3em",
                    margin: "0 5vh",
                    borderRadius: "12px",
                  }}
                >
                  <Input
                    onClick={() => {
                      history.push("/searchaddres");
                    }}
                    onChange={(e) => {
                      setendereco(e.target.value);
                    }}
                    value={endereco.str}
                    placeholder="Endereço de entrega"
                    style={{ border: "none", fontSize: "16px" }}
                  />
                  <div style={{ color: "#fff" }}>
                    <DoneIcon
                      onClick={() => {
                        setaddresbase({
                          str: endereco,
                          fullresp: "",
                          lat: "",
                          long: "",
                          cep: "",
                        });
                        history.push("/searchaddres");
                      }}
                      style={{
                        borderRadius: "12px",
                        backgroundColor: "#413131",
                        padding: "0.4em",
                        width: "40px",
                        height: "40px",
                        marginRight: "0.1em",
                        color: "#fff",
                      }}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </MobileView>
    </div>
  );
};
export default withRouter(checkAddress);
