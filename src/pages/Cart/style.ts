import styled from "styled-components/macro";

const Styled = {
  Wrapper: styled.div`
    padding: 63px 545px;
    display: flex;
    // width: 100%;
    align-items: center;

    svg {
      font-size: 54px;
    }

    p {
      margin: 0;
      font-weight: 700;
      font-size: 45px;
    }
  `,
  FlexWrap: styled.div<{ align?: string }>`
    display: flex;
    width: 100%;
    align-items: ${(props) => props.align};
    cursor: ${(props) => (props.align ? "pointer" : "")};
    p.play {
      margin: 0 10px;
    }
  `,
  ChildWrap: styled.div`
    width: 40%;
    img.item {
      max-width: 515px;
    }
  `,
  ItemWrap: styled.div`
    margin: 10px 20px;
    cursor: pointer;
    // display: flex;
    // flex-wrap: wrap;
    // margin: 10px 0;
    // justify-content: center;
  `,
  Item: styled.div`
    background: #f6f6f6;
    width: 295px;
    // height: 350px;
    // img {
    //   width: 295px;
    //   height: 295px;
    // }
  `,
  TextWrap: styled.div`
    padding: 50px 100px;
    p.category {
      font-size: 14px;
      font-weight: 400;
      margin: 0;
      color: #131212;
    }
    p.name {
      font-size: 46px;
      font-weight: 700;
      margin: 0;
    }
    p.desc {
      margin: 10px 0;
      opacity: 70%;
      font-size: 16px;
      font-weight: 400;
      max-width: 488px;
      line-height: 30px;
    }
    p.size {
      margin: 40px 0 10px;
    }
    p.color {
      margin: 40px 0 10px;
    }
  `,
  PlayWrapper: styled.div`
    display: flex;
    align-items: center;
    background: rgba(19, 18, 18, 0.05);
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
  `,
  SizeWrapper: styled.div<{ select?: boolean }>`
    text-align: center;
    border: 1px solid
      rgba(19, 18, 18, ${(props) => (props.select ? "1" : "0.1")});
    margin: 10px;
    padding: 10px;
    font-size: 14px;
    width: 28px;
    cursor: pointer;
  `,
  ColorWrapper: styled.div<{ colorBg: string; select?: boolean }>`
    background: ${(props) => props.colorBg};
    text-align: center;
    border: ${(props) => (props.select ? "5px" : "0px")} solid black;
    margin: 10px;
    padding: 10px;
    font-size: 14px;
    height: 20px;
    width: 20px;
    cursor: pointer;
    border-radius: 100px;
  `,
  BagWrapper: styled.div`
    display: flex;
    align-items: center;
    background: #f6f6f6;
    color: black;
    padding: 20px 30px;
    p {
      margin: 0 10px;
      font-size: 12px;
    }
  `,
  ButtonCart: styled.div<{ disabled?: boolean }>`
    cursor: ${(props) => (props.disabled ? "" : "pointer")};
    margin-left: auto;
    padding: 10px;
    background: ${(props) => (props.disabled ? "lightgrey" : "black")};
    color: white;
    display: flex;
    align-items: center;

    p.button {
      font-weight: 700;
    }
  `,
  PreviewWrapper: styled.div`
    display: flex;
    justify-content: center;
    width: 130px;
    height: 130px;
    margin: 10px 5px 20px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  `,
  TabHeadWrapper: styled.div`
    display: flex;
    align-items: center;
    background: #f6f6f6;
    color: black;
    padding: 20px 80px;
    p {
      margin: 0 10px;
      font-size: 12px;
    }
  `,
  BodyWrapper: styled.div`
    padding: 0 80px;
  `,
  TitleWrapper: styled.div`
    display: flex;
    width: 100%;
    background: #fafafa;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
    align-items: center;
  `,
  ItemWrapper: styled.div`
    display: flex;
    width: 100%;
    margin: 20px 0;
    // justify-content: center;
    align-items: center;
    div.icon {
      display: flex;
      width: 2.5%;
      align-items: center;
      justify-content: center;
      svg {
        cursor: pointer;
      }
    }
    div.image {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45%;
      color: rgba(0, 0, 0, 0.8);
      div.imgWrap {
        display: flex;
        justify-content: right;
        width: 40%;
      }
      div.textWrap {
        width: 60%;
      }
      img {
        width: 150px;
      }
      p.shoesDetails {
        margin-left: 20px;
        align-items: center;
        font-weight: 400;
        font-size: 14px;
      }
      p.shoesName {
        margin: 0 20px;
        color: #131212;
        font-weight: 600;
        font-size: 16px;
      }
    }
    div.details {
      font-weight: 400;
      color: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 17.5%;
    }
  `,
  ImageWrapper: styled.div`
    img {
      width: 150px;
    }
  `,
  ColorBox: styled.div<{ bgColor: string }>`
    background: ${(props) => props.bgColor};
    width: 20px;
    height: 20px;
    margin-left: 10px;
  `,
  FlexWrapper: styled.div`
    display: flex;
    align-items: center;
  `,
  BottomWrapper: styled.div`
    margin: 20px 0;
    align-items: center;
    width: 100%;
    display: flex;
    p.total {
      font-weight: 500;
      color: rgba(0, 0, 0, 0.7);
      text-align: left;
      width: 50%;
      margin-left: 20px;
    }
    p.totalPrice {
      margin-right: 20px;
      color: rgba(0, 0, 0, 0.7);
      width: 50%;
      text-align: right;
    }
    svg {
      margin-right: 20px;
      margin-left: auto;
    }
  `,
  PayWrapper: styled.div`
    cursor: pointer;
    font-weight: 700;

    display: flex;
    width: 100%;
    background: #000000;
    text-align: center;
    align-items: center;
    color: #ffffff;
    p.total {
      font-weight: 500;
      color: #ffffff;
      text-align: left;
      width: 50%;
      margin-left: 20px;
    }
  `,
};

export default Styled;
