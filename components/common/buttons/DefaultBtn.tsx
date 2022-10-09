import React from 'react';
type Props = {
  text: string,
  isLoading: boolean
}
const DefaultBtn = ({text, isLoading}: Props) => {
  return <button className='defaultBtn' disabled={isLoading}>{text}</button>
};

export default DefaultBtn;