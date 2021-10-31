import { Badge, Container } from "@mui/material";
import React from "react";
import styled from "styled-components/macro";
import { LocalMall, AccountCircleOutlined } from "@mui/icons-material";
import NikeLogo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { IData } from "../pages/Homepage/types";
import { useHistory } from "react-router-dom";

const Styled = {
  NavWrapper: styled(Container)`
    &&& {
      display: flex;
      background: #ffffff;
      // width: 100%;
      padding: 30px 100px;
    }
    p {
      margin: 0;
    }
  `,
  Container: styled(Container)`
    &&& {
      display: flex;
    }
  `,
  FlexWrapper: styled.div<{ justify: string }>`
    display: flex;
    width: 33%;
    justify-content: ${(props) => props.justify ?? "center"};
    align-items: center;
    font-size: 14px;
    p {
      margin: 0 10px;
      cursor: pointer;
      font-weight: 600;
    }
    span {
      // margin: 0 15px;
    }
    svg {
      cursor: pointer;
    }
    div {
      margin: 0 15px;
    }
  `,
};

const NavbarMenu: React.FC = () => {
  const history = useHistory();
  const countBadge = useSelector((state: IData) => state.cart);
  console.log(countBadge);
  return (
    <Styled.NavWrapper maxWidth={false}>
      {/* <Styled.Container maxWidth="lg"> */}
      <Styled.FlexWrapper
        justify="start"
        style={{ cursor: "pointer" }}
        onClick={() => history.push("/")}
      >
        <img src={NikeLogo} alt="logo" />
      </Styled.FlexWrapper>
      <Styled.FlexWrapper justify="center">
        <p style={{ cursor: "pointer" }} onClick={() => history.push("/")}>
          New Release
        </p>
        <p style={{ cursor: "pointer" }}>Men</p>
        <p style={{ cursor: "pointer" }}>Women</p>
        <p style={{ cursor: "pointer" }}>Kids</p>
        <p style={{ cursor: "pointer" }}>Customize</p>
      </Styled.FlexWrapper>
      <Styled.FlexWrapper justify="end">
        <div>
          {countBadge ? (
            <Badge badgeContent={countBadge.items.length} color="error">
              <LocalMall onClick={() => history.push("/cart")} />
            </Badge>
          ) : (
            <LocalMall onClick={() => history.push("/cart")} />
          )}
        </div>
        <AccountCircleOutlined />
      </Styled.FlexWrapper>
      {/* </Styled.Container> */}
    </Styled.NavWrapper>
  );
};

export default NavbarMenu;
