import React from 'react';
import './Count.css';
interface Props {
  itemCount: number;
}
const Count: React.FC<Props> = ({itemCount}) => {
  return (
    <div className="itemCount">x{itemCount}</div>
  );
};

export default Count;