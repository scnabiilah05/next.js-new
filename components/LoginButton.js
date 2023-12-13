"use client";

import React from "react";
import { useState } from "react";

const LoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
      {isLoggedIn ? "logout" : "login"}
    </button>
  );
};

export default LoginButton;
