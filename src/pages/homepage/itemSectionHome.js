import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import HeaderHome from "./headerHome";
import CarrousselBannerHome from "./carrousselBannerHome";
import SectionHome from "./sectionHome";
import FooterHome from "./footerHome";
import { useStore, useStoreActions, useStoreState } from "easy-peasy";
import pizzalogo from "../../assets/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Api from "../../services/Api";
import { Button } from "reactstrap";
import history from "../../util/history-util";
import { BrowserView, MobileView } from "react-device-detect";
import { Input, Row, Col, Container } from "reactstrap";

const ItemSectionHome = (props) => {
  const [iteminfo, setiteminfo] = useState(props.item);

  const SetCurrentItem = useStoreActions(
    (actions) => actions.user.setcurrentitem
  );

  let seeProductPage = async () => {
    await SetCurrentItem(iteminfo);
    await history.push("/product");
  };

  return (
    <div>
      <BrowserView>
        <Row>
          <Container
            style={{
              width: "380px",
              border: "1px solid #F1F1F1",
              height: "100px",
              borderRadius: "10px",
            }}
          >
            <Row>
              <Col>
                <Container
                  style={{
                    width: "75px",
                    backgroundColor: "blue",
                    height: "75px",
                    borderRadius: "10px",
                    marginLeft: 0,
                    marginTop: "13px",
                  }}
                >
                  <img
                    src={"http://50.16.146.1/storage/" + iteminfo.image}
                    style={{
                      width: "75px",
                      height: "75px",
                      borderRadius: "10px",
                      marginLeft: "-15px",
                      objectFit: "cover",
                    }}
                  />
                </Container>
              </Col>
              <Col style={{ marginLeft: "-190px", marginTop: "15px" }}>
                <h1
                  style={{ fontSize: 16, fontWeight: "800", color: "#FF805D" }}
                >
                  {" "}
                  {iteminfo.name}
                </h1>
                <h5
                  style={{
                    fontSize: 12,
                    fontWeight: "200",
                    color: "#413131",
                    marginTop: "-5px",
                  }}
                >
                  {" "}
                  {iteminfo.description}
                </h5>
                <h5
                  style={{
                    fontSize: 17,
                    fontWeight: "700",
                    color: "#413131",
                    marginTop: "-5px",
                  }}
                >
                  {" "}
                  {"R$" + iteminfo.price / 100}
                </h5>
              </Col>
            </Row>
          </Container>
        </Row>
      </BrowserView>
      <MobileView>
        <div
          onClick={() => {
            console.log(iteminfo)
            seeProductPage()
          }}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#FFFFFF',
            marginBottom: '3vh',
            border: '2px solid #F1F1F1',
            borderRadius: '12px'
          }}
        >
          <img 
            src={'http://50.16.146.1/storage/' + iteminfo.image}
            style={{
              width: '100%',
              height:'15vh',
              objectFit:'cover',
              borderRadius: '12px 12px 0 0',
            }} />
          <div style={{
            borderRadius: '0 0 12px 12px',
            height: '30vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <span className="ml-1" style={{ fontSize: '1.1em', color: '#FF805D', fontWeight: 600 }}>
              {iteminfo.name}
            </span>
            <div className="ml-1" style={{ fontSize: '0.8em'}}>
              {(iteminfo.description) ? iteminfo.description.slice(0,55) : ''}
              {(iteminfo.description && iteminfo.description.length > 55 ? '...' : '')}
            </div>
            <div className="ml-1" style={{ fontSize: '1.25em', fontWeight: 600 }}>
              {'R$' + iteminfo.price / 100}
            </div>
          </div>
        </div>
      </MobileView>
    </div>
  );
};

export default withRouter(ItemSectionHome);
