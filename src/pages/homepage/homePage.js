import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import HeaderHome from "./headerHome";
import CarrousselBannerHome from "./carrousselBannerHome";
import SectionHome from "./sectionHome";
import FooterHome from "./footerHome";
import ItemSectionHome from "./itemSectionHome";
import pizzalogo from "../../assets/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Api from "../../services/Api";
import { Input, Button, Row, Col, Container } from "reactstrap";
import { useStore, useStoreActions, useStoreState } from "easy-peasy";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { BrowserView, MobileView } from "react-device-detect";
import pizza from "../../assets/pizza.png";
import vector from "../../assets/Vector.png";
import tropy from "../../assets/tropy.png";
import ticket from "../../assets/ticket.png";
import cart from "../../assets/cart.png";
import mao from "../../assets/mao.png";
import logo from "../../assets/deliveryae.png";
import mulher from "../../assets/mulher.png";

const HomePage = () => {
  const fulluser = useStoreState((state) => {
    return state.user;
  });
  const seeAllitem = useStoreState((state) => {
    return state.user.currentseeall;
  });

  const setaddresbase = useStoreActions((actions) => actions.user.setaddress);

  const [allproducts, setallproducts] = useState([]);
  const [loadingpage, setloading] = useState(true);
  let loadproducts = async () => {
    try {
      const results = await Api.get("products?company_id=2", {
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          // Authorization:
          // 	'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTA0NzI0NWQ2ZDJmNTJjYTZkNjk0NWNhMDQ4MTQ3NGQ2OWUxNjU0NTcyZWFhMDEyZjliYTQ4NjM3Zjg4MmE4YzQ0MDNmZDMxM2Q3NjgyMTMiLCJpYXQiOjE1OTE4MjUxOTAsIm5iZiI6MTU5MTgyNTE5MCwiZXhwIjoxNjIzMzYxMTkwLCJzdWIiOiIxMyIsInNjb3BlcyI6W119.n_wbysZL8wjuDGD3Dly4cg3JB1pepPmJ2hiNyXSHKni7YEWT2kfp16Np-pbiU1PMQFka5R0bYo6U07jOV_BPjq-RsyB74FJlaX6pY3XWWHIVAGhfs7udbCRLLQELicD4QVURD-SCHOld0ditr2sznJmTEgQ7_uIpMm-64n9__SuU0FwXFHOuyY1lEmVNpZulcEiIrEp7-XmftsRVcjEER25UCzfkaWawTgOXl0UhbT8_fFOxo5523b1lnf2kumyfGfw69WLQTsMzcRDmia7rsAXtABgT2Kw-L_cwOSAvIuQfz6xginfiGtnGTSRVo-KJDGiJ_0CvHc1ndI6oou-I_KdPQndIVCV5pkCv_7Nj1GT6BOdc4yk8ZtEH9PhW7jOeKmKjWQsiH_KnirdZzFwNxx3iKelyg2rse66osrK-d1QrvMjz3P7bLYk9Olz7RHLde6CMiJAiaNQ6TU1zcCY_ZYJrIowbI71rXAUTuz7WAebNwAUqLwo7LTgaxAYNDcJQZAW48UWFuQ9J2KEuPs_gu0BARvLD_9VhJxC0TKKqjTO-aY2OWCNRdzIMxnW4kZSp-fXQNA_evE4TaYhuQ2o5_yZxlZSNY_mGzsOgpaLoETMy6yUaWM2xs7RV5NCsg7krr4xHCsRKWK6Vdqq0-GFPjFKFbfsoPzrJL_nFtJo_-9w',
        },
      });

      console.log(results.data.data);
      await setallproducts(results.data.data);
      await setloading(false);
    } catch (e) {
      console.log(e);
    }
    console.log();
  };
  useEffect(() => {
    loadproducts();
  }, []);
  return (
    <div>
      <BrowserView>
        <Row>
          <Col
            xs="2"
            style={{
              margin: "0",
              padding: "0",
              backgroundColor: "#F9F9F9",
              textAlign: "center",
            }}
          >
            <img src={pizza} style={{ width: "150px", marginTop: "20px" }} />

            <Row>
              <Container
                style={{
                  backgroundColor: "#FAE7E2",
                  width: "110px",
                  height: "40px",
                  marginTop: "42px",
                  borderRadius: "16px",
                  display: "flex",
                }}
              >
                <Row style={{ margin: "auto" }}>
                  <img
                    src={vector}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "10px",
                    }}
                  />
                  <span
                    style={{
                      fontWeight: "700",
                      color: " #FF805D",
                    }}
                  >
                    Menu
                  </span>
                </Row>
              </Container>
            </Row>
            <Row>
              <Container
                style={{
                  backgroundColor: "#F9F9F9",
                  width: "110px",
                  height: "40px",
                  marginTop: "20px",
                  borderRadius: "16px",
                  display: "flex",
                }}
              >
                <Row style={{ margin: "auto" }}>
                  <img
                    src={cart}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "10px",
                    }}
                  />
                  <span
                    style={{
                      fontWeight: "700",
                      color: " #413131",
                    }}
                  >
                    Sacola
                  </span>
                </Row>
              </Container>
            </Row>
            <Row>
              <Container
                style={{
                  backgroundColor: "#F9F9F9",
                  width: "150px",
                  height: "40px",
                  marginTop: "20px",
                  borderRadius: "16px",
                  display: "flex",
                }}
              >
                <Row style={{ margin: "auto" }}>
                  <img
                    src={ticket}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "10px",
                    }}
                  />
                  <span
                    style={{
                      fontWeight: "700",
                      color: "#413131",
                    }}
                  >
                    Pedidos
                  </span>
                </Row>
              </Container>
            </Row>
            <Row>
              <Container
                style={{
                  backgroundColor: "#F9F9F9",
                  width: "180px",
                  height: "40px",
                  marginTop: "20px",
                  borderRadius: "16px",
                  display: "flex",
                }}
              >
                <Row style={{ margin: "auto" }}>
                  <img
                    src={tropy}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "10px",
                    }}
                  />
                  <span
                    style={{
                      fontWeight: "700",
                      color: " #413131",
                    }}
                  >
                    Recompensa
                  </span>
                </Row>
              </Container>
            </Row>
            <Row>
              <img
                src={mao}
                style={{
                  width: "200px",
                  height: "200px",
                  marginLeft: "55px",
                  marginTop: "164px",
                }}
              />
            </Row>
            <Row>
              <span
                style={{
                  fontWeight: "200",
                  margin: "50px",
                  color: " #413131",
                }}
              >
                Sua pizza favorita onde sempre deveria estar, na palma da sua
                mão.
              </span>
            </Row>
            <Row>
              <img
                src={logo}
                style={{ width: "100px", margin: "auto", marginBottom: "20px" }}
              />
            </Row>
          </Col>
          <Col xs="7" style={{ margin: "0", padding: "0" }}>
            <div style={{ height: "500px", backgroundColor: "red" }} />
          </Col>
          <Col xs="3" style={{ margin: "0", padding: "0" }}>
            <Row>
              <span
                style={{
                  fontWeight: "700",
                  margin: "auto",
                  marginTop: "38px",
                  color: " #FF805D",
                  fontSize: 16,
                }}
              >
                Entrar
              </span>
            </Row>
            <Row>
              <Container
                style={{
                  backgroundColor: "#F9F9F9",
                  width: "80%",
                  height: "650px",
                  marginRight: "45px",
                  marginTop: "20px",
                  borderRadius: "32px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Row>
                  <img
                    src={mulher}
                    style={{
                      width: "200px",
                      margin: "auto",
                      marginBottom: "20px",
                      marginTop: "100px",
                    }}
                  />
                </Row>
                <Row>
                  <h7
                    style={{
                      fontWeight: "normal",
                      color: "#FF805D",
                      margin: "30px",
                    }}
                  >
                    Efetue seu
                    <span
                      style={{ fontWeight: "700", textDecoration: "underline" }}
                    >
                      {" "}
                      login{" "}
                    </span>
                    ou{" "}
                    <span
                      style={{ fontWeight: "700", textDecoration: "underline" }}
                    >
                      {" "}
                      crie uma conta{" "}
                    </span>{" "}
                    para aproveitar nossas promoções.
                  </h7>
                </Row>
                <Row style={{textAlign: 'center'}}>
                  <span
                    style={{
                      fontWeight: "700",
					  color: "#FF805D",
					  margin: 'auto',
					  marginTop: '-20px'
                    }}
                  >
                    É rápido e fácil.
                  </span>
                </Row>
              </Container>
            </Row>
          </Col>
        </Row>
      </BrowserView>
      <MobileView>
        <HeaderHome />

        {loadingpage ? (
          <div className="ml-4">
            <SkeletonTheme color="#F4F4F4" highlightColor="#444">
              <Skeleton count={1} height={"20vh"} width={"60vw"} />
              <Skeleton count={1} height={17} width={"50vw"} />
              <br />
              <Skeleton count={1} height={17} width={"30vw"} />
              <br />
              <Skeleton count={1} height={"20vh"} width={"60vw"} />
              <Skeleton count={1} height={17} width={"50vw"} />
              <br />
              <Skeleton count={1} height={17} width={"30vw"} />
              <br />
              <Skeleton count={1} height={"20vh"} width={"60vw"} />
              <Skeleton count={1} height={17} width={"50vw"} />
              <br />
              <Skeleton count={1} height={17} width={"30vw"} />
            </SkeletonTheme>
          </div>
        ) : (
          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                onClick={() => {
                  console.log(fulluser);
                }}
                style={{ flex: 1 }}
              >
                <CarrousselBannerHome />
              </div>
              {allproducts.map((item, index) => {
                return (
                  <div key={index} style={{ flex: 1 }}>
                    <SectionHome data={item} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div style={{ flex: 1 }}>
          <FooterHome />
        </div>
      </MobileView>
    </div>
  );
};

export default withRouter(HomePage);
