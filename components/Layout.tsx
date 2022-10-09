import React, { ReactNode } from 'react';
import View from '../pages/view';
import Footer from './common/Footer';
import Header from './common/Header';

type Props = {
  children?: ReactNode,
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="layoutWrap">
        <View>
          {children}
        </View>
      </div>
     <Footer />
    </>
  )
};



export default Layout;

