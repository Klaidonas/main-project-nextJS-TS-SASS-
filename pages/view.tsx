import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode,
};

const View = ({ children }: Props) => {
  return (
    <div className="view">
      {children}
    </div>
  );
};

export default View;