import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as BasketIcon } from '../../assets/basket-icon.svg';


import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  CheckoutHeaderTitle,
  CustomButton,
} from './checkout.styles';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  const checkout = (cartItems) => {
    alert('check console log ::: Next step payment gate Way :::');
    console.log(cartItems)
  }

  return (
    <CheckoutContainer>
      <CheckoutHeaderTitle> My Shopping Cart </CheckoutHeaderTitle>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
      {cartItems.length > 0 &&
        <>
        <CustomButton onClick={() => checkout(cartItems)}>
         Checkout
         <BasketIcon style={{width: "25px", "marginLeft": "17px"}}/>
         </CustomButton>
        </>
      }
    </CheckoutContainer>
  );
};

export default Checkout;
