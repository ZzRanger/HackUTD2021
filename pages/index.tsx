import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

// should redirect to login page if not logged in


const Home: NextPage = () => {
  return (
    <div className={styles.homebg}>
      <div className="main-bg grid grid-cols-2 justify-stretch items-stretch h-screen">
        <a className={styles.lostfoundlinks} href="#">
          <h1>Lost</h1>
          <p>Searching for lost item</p>
        </a>
        <a className={styles.lostfoundlinks} href="#">
          <h1>Found</h1>
          <p>Registering found item</p>
        </a>
      </div>
    </div>
  );
};

export default Home;
