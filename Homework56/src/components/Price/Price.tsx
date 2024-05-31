import React from 'react';

interface Props {
  addTotalPrice: () => number;
}
const Price: React.FC<Props> = ({addTotalPrice}) => {
  return (
    <div>Price: {addTotalPrice()}</div>
  );
};

export default Price;