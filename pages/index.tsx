import { getAuth } from "firebase/auth";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { auth } from "./_app";

// should redirect to login page if not logged in


const Home: NextPage = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);
  return (
    <div className={styles.homebg}>
      <div className="absolute top-2 right-2 flex items-center"> {/* profile and log out buttons */}
        <a className="flex items-center mr-5" href="/profile">
          <Image src="/smprofile.svg" width="32px" height="32px" alt="profile icon" />
          <p className="text-lg">My Profile</p>
        </a>
        <a className="flex items-center bg-green w-40 h-8 rounded-2xl " href="">
          <p className="w-full text-center">Sign out</p>
        </a>
      </div>
      <div className="grid grid-cols-2 justify-stretch items-stretch h-screen">
        <a className={styles.lostfoundlinks} href="/lost">
          <h1>Lost</h1>
          <p>Searching for lost item</p>
        </a>
        <a className={styles.lostfoundlinks} href="/found">
          <h1>Found</h1>
          <p>Registering found item</p>
        </a>
      </div>
    </div>
  );
};

export default Home;
