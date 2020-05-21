import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../index.css";

const Article = styled.article`
  width: 90%;
  margin: 0 auto;
  display: flex;
  max-width: 920px;
  min-width: 600px;
  margin-top: 24px;
  justify-content: space-evenly;
  
`;

const ImageContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  align-content: space-between;
`;

const Reverse = styled.img`
  width: 100%;
  display: block;
`;
const Obverse = styled.img`
  width: 100%;
  display: block;
`;

const DescriptionContainer = styled.div`
  width: 35%;
  background: rgba(196, 196, 196, 0.5);
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  align-content: space-between;
`;

const P = styled.p`
  font-size: 12px;
  margin-top: 15px;
`;

function Coin(props) {
  const { coin } = props;

  let paragraphs = coin.description.split("/p");
  paragraphs = paragraphs.map((line) => {
    return <P>{line}</P>;
  });

  return (
    <Article>
      <ImageContainer>
        <Reverse
          src={`http://localhost:8000/image?id=${coin.idCoin}&side=reverse`}
          alt="Coin"
        />
        <Obverse
          src={`http://localhost:8000/image?id=${coin.idCoin}&side=obverse`}
          alt="Coin"
        />
      </ImageContainer>
      <DescriptionContainer>
        <h2>{coin.coin_name}</h2>
        {paragraphs}

        <table >
          <tr>
            <td>Issuing country</td>
            <td>{coin.country}</td>
          </tr>

          <tr>
            <td>Composition </td>
            <td>{coin.сomposition}</td>
          </tr>

          <tr>
            <td>Quality</td>
            <td>{coin.quality}</td>
          </tr>

          <tr>
            <td>Denomination</td>
            <td>{`${coin.denomination} ${coin.den_currency} `}</td>
          </tr>

          <tr>
            <td>Year</td>
            <td>{coin.issuance_year}</td>
          </tr>

          <tr>
            <td>Weight</td>
            <td>{coin.weight}</td>
          </tr>

          <tr>
            <td>Price</td>
            <td>{`${coin.price} ${coin.price_currency} `}</td>
          </tr>
        </table>

        <P style={{color: coin.quantity>0? 'green': 'red'}}> Available: {coin.quantity} </P>

        <Link to ={'/coins'}> {'<--Back to list'} </Link>
        
      </DescriptionContainer>
    </Article>
  );
}
export default Coin;
