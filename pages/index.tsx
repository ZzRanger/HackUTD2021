import type { NextPage } from "next";
import SuperHead from "./components/SuperHead";
import Image from "next/image";
import styles from "../styles/Login.module.css";

const Login: NextPage = () => {
  return (
    <div className={styles.mainbg}>
      <SuperHead />
      <div className="main-bg grid grid-cols-2 gap-40 justify-center items-center p-20 h-screen">
        <div>1</div>
        <div>2</div>
      </div>
    </div>
  );
};

export default Login;
