import type { NextPage } from "next";
import SuperHead from "./components/SuperHead";
import Image from "next/image";
import styles from "../styles/Login.module.css";
import React from "react";

const Login: NextPage = () => {
  return (
    <div className={styles.mainbg}>
      <SuperHead />
      <div className="main-bg flex justify-center items-center p-20 h-screen">
        <div className="max-w-5xl bg-white bg-opacity-50 rounded-3xl p-20">
          <h1 className="pb-5 text-8xl font-display text-center">Lost & Found</h1>
          <div className="grid grid-cols-2 gap-40 justify-center items-center">
            <div className="flex flex-col"> {/* left column */}
              <Image src="/magglass.svg" width="192px" height="192px" alt="magnifying glass with UTD logo" />
              <p className="pt-5 text-lg text-center">
                Lost an item? Found one that’s not yours? <br />
                Sign in with your NetID to look for an item or register a found item.
              </p>
            </div>
            <div className="flex flex-col"> {/* right column */}
              <h2 className="text-4xl">Log in</h2>
              <form action="" method="post">
                <div>
                  <label className="sr-only" htmlFor="netid">NetID</label> {/* labels for screenreaders */}
                  <input className={styles.loginfields} type="text" name="netid" id="netid" placeholder="NetID" />
                </div>
                <div>
                  <label className="sr-only" htmlFor="password">Password</label>
                  <input className={styles.loginfields} type="password" name="password" id="password" placeholder="Password" />
                </div>
                <div className="flex flex-col items-end">
                  <a className="text-sm pb-10" href="#">Forgot password?</a>
                  <input className="bg-green w-40 h-8 rounded-2xl" type="submit" value="Sign In" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
