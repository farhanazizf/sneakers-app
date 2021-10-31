// import { Container } from "@mui/material";
import axios from "../../utils/http";
import React from "react";
import { useDispatch } from "react-redux";
import MainLayout from "../../components/main-layout";
import Styled from "./style";
import { IData, Shoe } from "./types";
import imgShoes from "../../assets/kyrie.png";
import { useHistory } from "react-router-dom";
import { Skeleton } from "@mui/material";
import useToast from "../../components/toast";

const Homepage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [Toast, setToast] = useToast();
  // const cek = useSelector((state: IData) => state);
  const [loading, setLoading] = React.useState(false);
  const [shoes, setShoes] = React.useState<IData>();

  React.useEffect(() => {
    const getAPI = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get<IData>(
          "/megasuartika/fe-assignment/db"
        );
        // console.log(data);
        dispatch({ type: "ALL_PRODUCT", value: data.shoes });
        setShoes(data);
      } catch (error) {
        setToast({ message: "Error get API" });
      } finally {
        setTimeout(() => setLoading(false), 400);
        // setLoading(false);
      }
    };

    getAPI();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectProduct = (shoes: Shoe) => {
    dispatch({ type: "SELECT_PRODUCT", value: shoes });
    // console.log(shoes);
    history.push("/details");
  };

  return (
    <MainLayout>
      <Toast />
      <Styled.Wrapper>
        <p>New Releases</p>
      </Styled.Wrapper>
      <Styled.ItemWrapper>
        {loading ? (
          <Styled.FlexContainer>
            {[...Array(8)].map((_, indx) => (
              <Styled.SkeletonWrapper>
                <Skeleton
                  key={indx}
                  variant="rectangular"
                  width={250}
                  height={250}
                  style={{ margin: 20, marginBottom: 0 }}
                />
                {/* <Skeleton variant="rectangular" style={{ margin: 20 }} /> */}
                <Skeleton
                  variant="rectangular"
                  style={{ margin: 10, marginLeft: 20 }}
                  width="60%"
                />
                <Skeleton
                  variant="rectangular"
                  style={{ margin: 5, marginLeft: 20 }}
                  width="60%"
                />
              </Styled.SkeletonWrapper>
            ))}
          </Styled.FlexContainer>
        ) : null}
        {shoes?.shoes.map((val, i) => (
          <Styled.ItemWrap key={i} onClick={() => selectProduct(val)}>
            <Styled.Item>
              <img src={imgShoes} alt={val.name} />
            </Styled.Item>
            <Styled.TextWrap>
              <div>
                <p>{val.name}</p>
                <p className="category">{val.category}</p>
              </div>
              <p className="price">{val.price}$</p>
            </Styled.TextWrap>
          </Styled.ItemWrap>
        ))}
      </Styled.ItemWrapper>
    </MainLayout>
  );
};

export default Homepage;
