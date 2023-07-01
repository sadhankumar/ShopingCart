import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 30%;
    height: 100%;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
  background: hsl(223.56deg 97.33% 14.71%);
  /* background-image: -webkit-linear-gradient(top, #4fb3f5, #2372a3);
  background-image: -moz-linear-gradient(top, #4fb3f5, #2372a3);
  background-image: -ms-linear-gradient(top, #4fb3f5, #2372a3);
  background-image: -o-linear-gradient(top, #4fb3f5, #2372a3);
  background-image: linear-gradient(to bottom, #4fb3f5, #2372a3); */
  -webkit-border-radius: 5;
  -moz-border-radius: 5;
  /* border-radius: 5px; */
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 8px 8px 8px 8px;
  text-decoration: none;
`;

export const Value = styled.span`
  padding: 8px;
  border: 1px solid;
  /* margin: 0 auto; */
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  border: 1px solid;
  padding: 0px 5px;
`;
