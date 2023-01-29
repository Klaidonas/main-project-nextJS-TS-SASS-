import React, { useState } from 'react';
import ClipLoader from '../../../node_modules/react-spinners/ClipLoader';



const LoaderBtn = () => {
  
  const [disabledButton, setDisabledButton] = useState<boolean>(false)
  console.log("disabledBtn: ", disabledButton);
  // useEffect(() => {
  //   if(disableButton===true) handleLoaderBtn()
  //   else if((disableButton===false)) handleLoaderBtn()
  // });

  const handleClick = () => {
    if(disabledButton===false)setDisabledButton(true);
    
  }

  return (
  <>
    <button className='loaderBtn' disabled={true}><ClipLoader size={25} /*color={"white"}*//></button>
    <button className='loaderBtn' onClick={handleClick} disabled={disabledButton}>
      {!disabledButton ? <>Loading Button</>:<ClipLoader size={25}/>}
    </button>
  </>
  )
};

export default LoaderBtn;