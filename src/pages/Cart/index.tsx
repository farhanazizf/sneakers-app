import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MainLayout from "../../components/main-layout";
import Styled from "./style";
import { Cart, IData } from "../Homepage/types";
import { ArrowRightAlt, Cancel, LocalMallOutlined } from "@mui/icons-material";
import Nike from "../../assets/nike.png";
import { CustomModal } from "../../components/modal";

const CartPage: React.FC = () => {
  const history = useHistory();
  const shoesNow = useSelector((state: IData) => state.cart);
  const dispatch = useDispatch();

  const [modal, setModal] = React.useState({ visible: false, message: "" });

  if (!shoesNow) {
    history.push("/");
  }

  const handleRemove = (item: Cart) => {
    dispatch({ type: "DELETE_ITEM", value: item });
    // setModal({ visible: true, message: "Success checkout item!" });
  };

  const handlePayment = () => {
    dispatch({ type: "PAYMENT_CART" });
    setModal({ visible: true, message: "Success checkout item!" });
  };

  const totalPrice = shoesNow?.items.reduce((a, b) => a + b.price, 0);

  return (
    <MainLayout>
      <CustomModal
        visible={modal.visible}
        message={modal.message}
        onDismiss={() => setModal({ ...modal, visible: false })}
      />
      <Styled.Wrapper>
        <p>Your Bag</p>
        <LocalMallOutlined />
      </Styled.Wrapper>

      <Styled.BodyWrapper>
        <Styled.TitleWrapper>
          <div style={{ width: "47.5%" }}>
            <p>Product</p>
          </div>
          <div style={{ width: "17.5%" }}>
            <p>Price</p>
          </div>
          <div style={{ width: "17.5%" }}>
            <p>Quantity</p>
          </div>
          <div style={{ width: "17.5%" }}>
            <p>Total</p>
          </div>
        </Styled.TitleWrapper>

        {(shoesNow?.items.length || 0) < 1 ? (
          <Styled.ItemWrapper>
            <div>Empty Data</div>
          </Styled.ItemWrapper>
        ) : null}

        {shoesNow?.items.map((val) => (
          <Styled.ItemWrapper>
            <div className="icon">
              <Cancel onClick={() => handleRemove(val)} />
            </div>
            <div className="image">
              <div className="imgWrap">
                <img src={Nike} alt="nike" />
              </div>
              <div className="textWrap">
                <p className="shoesName">{val.name}</p>
                <Styled.FlexWrapper>
                  <p className="shoesDetails">Size: {val.sizes}</p>
                  <Styled.FlexWrapper>
                    <p className="shoesDetails">Color</p>{" "}
                    <Styled.ColorBox bgColor={val.colors} />
                  </Styled.FlexWrapper>
                </Styled.FlexWrapper>
              </div>
            </div>
            <div className="details">
              <p>${val.price}</p>
            </div>
            <div className="details">
              <p>1</p>
            </div>
            <div className="details">
              <p>${val.price}</p>
            </div>
          </Styled.ItemWrapper>
        ))}
        <Styled.BottomWrapper>
          <div style={{ width: "65%" }}></div>
          <div style={{ width: "35%" }}>
            <Styled.TitleWrapper>
              <p className="total">TOTAL</p>
              <p className="totalPrice">${totalPrice}</p>
            </Styled.TitleWrapper>
          </div>
        </Styled.BottomWrapper>
        <Styled.BottomWrapper>
          <div style={{ width: "65%" }}></div>
          <div style={{ width: "35%" }}>
            <Styled.PayWrapper onClick={handlePayment}>
              <p className="total">PAY NOW</p>
              <ArrowRightAlt />
            </Styled.PayWrapper>
          </div>
        </Styled.BottomWrapper>
      </Styled.BodyWrapper>
    </MainLayout>
  );
};

export default CartPage;
