import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 80%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto ;
  /* margin: 50px auto 0; */
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const CheckoutHeaderTitle = styled.div`
  color: hsl(223.56deg 97.33% 14.71%);
  font-size: 42px;
  font-family: system-ui;
  font-weight: 600;
`;

export const CustomButton = styled.div`
  background: hsl(223.56deg 97.33% 14.71%);
  /* background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9); */
  -webkit-border-radius: 5;
  -moz-border-radius: 5;
  /* border-radius: 5px; */
  font-family: Arial;
  color: #ffffff;
  font-size: 24px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
`;

// export const BasketIcon = styled.div`
//   background: hsl(223.56deg 97.33% 14.71%);
//   /* background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
//   background-image: -moz-linear-gradient(top, #3498db, #2980b9);
//   background-image: -ms-linear-gradient(top, #3498db, #2980b9);
//   background-image: -o-linear-gradient(top, #3498db, #2980b9);
//   background-image: linear-gradient(to bottom, #3498db, #2980b9); */
//   -webkit-border-radius: 5;
//   -moz-border-radius: 5;
//   /* border-radius: 5px; */
//   font-family: Arial;
//   color: #ffffff;
//   font-size: 24px;
//   padding: 10px 20px 10px 20px;
//   text-decoration: none;
// `;
