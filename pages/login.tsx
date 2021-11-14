import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Login.module.css";
import React, { useState } from "react";
import { stringify } from "querystring";
import { auth, db } from "./_app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { TextField, ThemeProvider } from "@mui/material";
import { greenTheme } from "./muiTheme";
import { useRouter } from "next/dist/client/router";

const Login: NextPage = () => {
  const router = useRouter();

  const [input,setInput] = useState({ netid: '',password: '' });

  const signIn = (email:string, password:string) => {
    signInWithEmailAndPassword(auth,email,password).then(() => { alert("Yeet"); router.push('/'); }).catch(() => alert("Rip"))
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    signIn(input.netid,input.password);
  }

  const handleChange = (event: any) => {
    setInput({ ...input,[event.target.name]: event.target.value });
  }

  React.useEffect(() => console.log(input));

  return (
    <div className={styles.homebg}>
      <div className="flex justify-center items-center p-20 h-screen">
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
              <ThemeProvider theme={greenTheme}>
                <form onSubmit={handleSubmit} action="" method="post">
                  <div>
                    <TextField className={styles.loginfields} value={input.netid} onChange={handleChange} type="text" name="netid" id="netid" placeholder="NetID" variant="standard" />
                  </div>
                  <div>
                    <TextField className={styles.loginfields} value={input.password} onChange={handleChange} type="password" name="password" id="password" placeholder="Password" variant="standard" />
                  </div>
                  <div className="flex flex-col items-end">
                    <a className="text-sm pb-10" href="#">Forgot password?</a>
                    <input className="bg-green w-40 h-8 rounded-2xl" type="submit" value="Sign In" />
                  </div>
                </form>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  };

export default Login;
