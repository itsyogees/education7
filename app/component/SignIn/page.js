"use client";

import React, { useState } from "react";
import styles from "./SignIn.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignin = (e) => {
    e.preventDefault();

    console.log("Current inputs:", { identifier, password });

    if (!identifier || !password) {
      console.log("Please fill out all fields");
      return;
    }

    console.log("Signing in with:", { identifier, password });

    // Clear input fields after submission
    setIdentifier("");
    setPassword("");
  };

  return (
    <div className={styles.signinContainer}>
      <div className={styles.signinForm}>
        <h3>Welcome</h3>
        <form onSubmit={handleSignin}>
          <div className={styles.signinInputs}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={identifier}
              required
              onChange={(e) => setIdentifier(e.target.value)}
              pattern="\S+@\S+\.\S+"
              title="Please enter a valid email address."
            />
          </div>

          <div className={styles.signinInputs}>
            <label htmlFor="password">Password</label>
            <div className={styles.passwordContainer}>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                minLength="6"
                title="Password must be at least 6 characters long."
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className={styles.forgotPassword}>
              <span>Forgot Password?</span>
            </div>
          </div>

          <div className={styles.btns}>
            <button type="submit" className={styles.signinBtn}>
              Sign in
            </button>
            <p>Or</p>
            <button type="button" className={styles.googleBtn}>
              <FcGoogle className={styles.googleIcon} />
              Login with Google
            </button>
            <h5>
              Don't have an account?{" "}
              <Link href="/component/Signup">
                <span>Sign Up</span>
              </Link>
            </h5>
          </div>
        </form>
      </div>

      <div className={styles.signinImg}>
        <div className={styles.logoImg}>
          <Image
            src="/image/SignInLogo.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.logoImg1}>
          <Image
            src="/image/rb_757.png"
            alt="Sign In"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
