import React, { useState, useEffect } from "react";
import axios from "axios";
import SuccessfullRegistration from "./SuccessfullRegistration/SuccessfullRegistration";
const EmailVerification = () => {
  const [isVerified, setIsVerified] = useState(false);
  useEffect(() => {
    console.log("email verification is under process in useEffect");
    const verificationLink = window.location.href;
    let verificationToken = verificationLink.split("/").slice(-1)[0];
    let verificationId = verificationLink.split("/").slice(-2)[0];
    console.log("VerificationToken : ", verificationToken);
    console.log("Verification id:", verificationId);
    const verifyEmail = async () => {
      try {
        if (verificationLink.includes("/api/v1/verify/") && verificationToken) {
          const response = await axios.get(
            `https://sneaker-head-1.adityarupdatta.repl.co/api/v1/verify/${verificationId}/${verificationToken}`
          );
          console.log("data is ", response.data);
          setIsVerified(true);
          verificationToken="";
          verificationId=""
          console.log("axios.post ka then run kar gya");
          console.log("then block chala, is_verified ki value true ho gy");
        }
      } catch (error) {
        console.log(error);
        console.log("catch block chala");
        setIsVerified(false);
      } 
    };

    verifyEmail().then(response => {console.log(response)}).catch(err => {console.log(err)});
  }, []);

  
  if (isVerified) {
    console.log("value of isVerified was false and now it is", isVerified);
    return (
      <div>
        <SuccessfullRegistration />
      </div>
    );
  } else {
    return (
      <div>Email address verification failed. Please try again later.</div>
    );
  }
};
export default EmailVerification;
