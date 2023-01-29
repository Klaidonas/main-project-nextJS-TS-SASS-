import { useRef, useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import error from "next/error";

type Props= {
  changeComponent: (componentName:string) => void,
  setModalClose: (setAuthenticationModal:boolean) => void
}

const ForgotPassword = ({changeComponent, setModalClose}: Props) => {

  console.log("setModalClose: " +setModalClose);
  const [loading, setLoading] = useState<boolean>(false);


  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  
  const [email, setEmail] = useState('')
  const auth = getAuth();
  const handleResetPassword = async () => {
    try{
    console.log("email: " + email);
    await sendPasswordResetEmail(auth, email)
    setModalClose(true);
    console.log("Password reset email sent")
    alert("Password reset link successfully sent to your email")
  } catch(e) {
    alert("Something went wrong, check if the email you put in exists or if you spelt it correctly (" + e +")");
    //console.log(error);
    
  }
  }

  console.log("component: forgotpsw");

  return (
<div className="login">
  <h2>Forgot Password</h2>
  <input ref={emailRef}  onChange={(event: any) => setEmail(event.target.value)} type="email" placeholder="Enter your email"/>
  <button className="resetBtn" type="button" onClick={handleResetPassword}>Reset Password</button>
  <br />
  <span onClick={() => changeComponent("LogIn")}>Log in</span>
  <span onClick={() => changeComponent("SignUp")}>Register</span>
</div>
  );
};

export default ForgotPassword;