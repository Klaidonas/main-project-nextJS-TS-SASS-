import error from "next/error";
import { useRef } from "react";
import { signup } from "../../utils/firebase";

type Props= {
  changeComponent: (componentName:string) => void,
  setModalClose: any;
}
const SignUp = ({changeComponent, setModalClose}:Props) => {
  //const [loading, setLoading] = useState<boolean>(false);

  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef2 = useRef() as React.MutableRefObject<HTMLInputElement>;
  
  
  async function handleSignup() {
    if(passwordRef.current.value===passwordRef2.current.value) {
    //setLoading(true)
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      setModalClose(true);
    } catch {
      alert("Error!" + error);
      console.log("error" + error);
    }
    //setLoading(false)
    console.log("sign up btn");
    console.log("emailRef:" + emailRef + "\npswRef:" + passwordRef + "\n" + emailRef.current.value);
    console.log("ref2: " + passwordRef2);
  }
  else if(passwordRef.current.value!==passwordRef2.current.value) {
    alert("Passwords do not match");
  }
  
  }

  console.log("component: signup");

let login="LogIn";  //pasibandymui sitas(veikia)

  return (
<div className="login">
  <div className="signup">
    <h3>Sign Up</h3>
    <input ref={emailRef} type="email" placeholder="Email" />
    <input ref={passwordRef} type="password" placeholder="Password" />
    <input ref={passwordRef2} type="password" placeholder="Repeat Password" />
  </div>
  <button onClick={handleSignup}>Create Account</button>
  <br />
  <span onClick={() => changeComponent(login)}>Have an account? <strong>Log in</strong></span>
  <span onClick={() => changeComponent("ForgotPassword")}>Forgot password?</span>
</div>
  );
};

export default SignUp;