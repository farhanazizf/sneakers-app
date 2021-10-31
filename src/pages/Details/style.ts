import styled from "styled-components/macro";

const Styled = {
  Wrapper: styled.div`
    padding: 63px 545px;
    // width: 100%;

    p {
      margin: 0;
      font-weight: 700;
      font-size: 45px;
    }
  `,
  ItemWrapper: styled.div`
    // display: flex;
    // flex-wrap: wrap;
    // margin: 10px 0;
    justify-content: center;
    padding: 20px 80px;
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
};

export default Styled;
