import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../components/main-layout";
import Styled from "./style";
import imgShoes from "../../assets/nike.png";
import { IData } from "../Homepage/types";
import {
  ArrowRightAlt,
  LocalShippingOutlined,
  PlayArrow,
} from "@mui/icons-material";
import { useHistory } from "react-router-dom";

interface IItems {
  sizes?: string;
  colors?: string;
}

const DetailsPage: React.FC = () => {
  const history = useHistory();
  const shoesNow = useSelector((state: IData) => state.selected);
  const dispatch = useDispatch();

  const [itemDetail, setItemDetail] = React.useState<IItems>();

  if (!shoesNow) {
    history.push("/");
  }

  const openVideo = (url?: string) => {
    if (url) {
      window.location.href = url;
    }
  };
  let enableButton = Boolean(itemDetail?.colors && itemDetail.sizes);

  const handleCart = () => {
    let details = {
      ...shoesNow,
      ...itemDetail,
    };
    // console.log(enableButton);

    if (enableButton) {
      dispatch({ type: "INSERT_CART", value: details });

      history.push("/cart");
    }
  };

  return (
    <MainLayout>
      <Styled.ItemWrapper>
        <Styled.FlexWrap>
          <Styled.ChildWrap>
            <img className="item" src={imgShoes} alt="shoes" />
            <Styled.FlexWrap>
              <Styled.PreviewWrapper>
                <img className="item-preview" src={imgShoes} alt="shoes" />
              </Styled.PreviewWrapper>
              <Styled.PreviewWrapper>
                <img className="item-preview" src={imgShoes} alt="shoes" />
              </Styled.PreviewWrapper>
              <Styled.PreviewWrapper>
                <img className="item-preview" src={imgShoes} alt="shoes" />
              </Styled.PreviewWrapper>
            </Styled.FlexWrap>
          </Styled.ChildWrap>
          <Styled.TextWrap style={{ width: "60%" }}>
            <p className="category">{shoesNow?.category}</p>
            <p className="name">{shoesNow?.name}</p>
            <p className="desc">{shoesNow?.description}</p>

            <Styled.FlexWrap
              align="center"
              style={{ width: "30%" }}
              onClick={() => openVideo(shoesNow?.video)}
            >
              <Styled.PlayWrapper>
                <PlayArrow fontSize="small" />
              </Styled.PlayWrapper>
              <p className="play">PLAY VIDEO</p>
            </Styled.FlexWrap>

            <p className="size">SIZE (US)</p>
            <Styled.FlexWrap style={{ maxWidth: "70%", flexWrap: "wrap" }}>
              {shoesNow?.sizes.map((val, i) => (
                <Styled.SizeWrapper
                  key={i}
                  select={val === itemDetail?.sizes}
                  onClick={() => setItemDetail({ ...itemDetail, sizes: val })}
                >
                  {val}
                </Styled.SizeWrapper>
              ))}
            </Styled.FlexWrap>

            <p className="size">SELECT COLOR</p>
            <Styled.FlexWrap style={{ maxWidth: "70%", flexWrap: "wrap" }}>
              {shoesNow?.colors.map((val, i) => (
                <Styled.ColorWrapper
                  key={i}
                  select={val.color_hash === itemDetail?.colors}
                  colorBg={val.color_hash}
                  onClick={() =>
                    setItemDetail({ ...itemDetail, colors: val.color_hash })
                  }
                />
              ))}
            </Styled.FlexWrap>
          </Styled.TextWrap>
        </Styled.FlexWrap>
        <Styled.BagWrapper>
          <LocalShippingOutlined />
          <p className="shipping">FREE SHIPPING OVER $100 PURCHASE</p>
          <Styled.ButtonCart
            disabled={!enableButton}
            onClick={() => handleCart()}
          >
            <p className="button"> ADD TO BAG - ${shoesNow?.price}</p>
            <ArrowRightAlt />
          </Styled.ButtonCart>
        </Styled.BagWrapper>
      </Styled.ItemWrapper>
    </MainLayout>
  );
};

export default DetailsPage;
