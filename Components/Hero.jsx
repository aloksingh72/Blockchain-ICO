import React,{useEffect,useState,useContext} from "react";
import toast from "react-hot-toast";


const Hero = ({
  setBuyModal,
      account,
      CONNECT_WALLET,
      setAccount,
      setLoader,
      addTokenToMetaMask,
}) => {
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.err(msg, { duration: 2000 });



  return <div>Hero</div>;
};

export default Hero;
