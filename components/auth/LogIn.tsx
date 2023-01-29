import error from "next/error";
import { useRef } from "react";
import { login } from "../../utils/firebase";


type Props= {
  childrenSees: (componentName:string) => void,
  setModalClose: any;
}

const LogIn = ({childrenSees, setModalClose}:Props) => {
  //const [loading, setLoading] = useState<boolean>(false);


  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  

  
  async function handleLogin() {
    
    try {
      //setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setModalClose(true);
    } catch {
      alert("Error!" + error);
    }
    //setLoading(false);
  }

  
  return (
<div className="login">
  <div>
    <h3>Log In</h3>
    <input ref={emailRef} type="email" placeholder="Email" />
    <input ref={passwordRef} type="password" placeholder="Password" />
  </div>
  <button onClick={handleLogin}>Log in</button>
  <br />
  <span onClick={() => childrenSees("ForgotPassword")}>Forgot password?</span>
  <span onClick={() => childrenSees("SignUp")}>Register</span>
</div>
  );
};

export default LogIn;