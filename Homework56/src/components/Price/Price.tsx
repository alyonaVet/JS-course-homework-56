import React from 'react';
import './Price.css';

interface Props {
  addTotalPrice: () => number;
}
const Price: React.FC<Props> = ({addTotalPrice}) => {
  return (
    <div className="price">Price: {addTotalPrice()}</div>
  );
};

export default Price;