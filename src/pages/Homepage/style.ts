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
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;
    justify-content: center;
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
    display: flex;
    p.price {
      width: 20%;
      text-align: right;
    }
    div {
      width: 80%;
      font-weight: 500;
      color: #121212;

      margin: 0;
      p.category {
        color: #000000;
        font-size: 12px;
        margin: 10px 0 40px 0;
      }
    }
  `,
  FlexContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
  `,
  SkeletonWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20;
  `,
};

export default Styled;
