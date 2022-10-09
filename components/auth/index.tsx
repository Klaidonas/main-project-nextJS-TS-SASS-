import { useState } from "react";
import { logout, useAuth } from "../../utils/firebase";
import ForgotPassword from "./ForgotPassword";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const Auth = ({setModalClose}: any) => {

  const [currentComponent, setCurrentComponent] = useState("LogIn");
  const currentUser:any = useAuth();

  const changeComponent = (componentName: string) => {               
    setCurrentComponent(componentName)
  }

  async function handleLogOut() {
    try {
    await logout();
    console.log("handlelogout");
    setModalClose(true);
    
    } catch {
      alert("Error!");
    }
  }
console.log("currentUser: " + currentUser);

  return (
<div className="Authentication">
  {currentUser && <div>Currently logged in as: <br />{currentUser?.email}</div>}
  {!currentUser && currentComponent === "LogIn" && <LogIn childrenSees={changeComponent} setModalClose={setModalClose} />}
  {!currentUser && currentComponent === "SignUp" && <SignUp changeComponent={changeComponent} setModalClose={setModalClose} />}
  {!currentUser && currentComponent === "ForgotPassword" && <ForgotPassword changeComponent={changeComponent} />}
  {currentUser && <div><span><a href="profile">Go to your profile</a><br /></span></div>}
  {currentUser && <button onClick={handleLogOut}>LogOut</button>}
  
</div>
  );
};

export default Auth;