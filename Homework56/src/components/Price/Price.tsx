import React from 'react';

interface Props {
  totalPrice: number;
}
const Price: React.FC<Props> = ({totalPrice}) => {
  return (
    <div>Price: {totalPrice}</div>
  );
};

export default Price;