import type { NextPage } from "next";
import styles from "../styles/Profile.module.css";
import Image from "next/image";
import { userInfo } from "os";
import { auth } from "./_app";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { getUserItems } from "../firebase/firebase";
import React, { useState } from "react";
import { QuerySnapshot,DocumentData } from "@firebase/firestore";
import ProfileCard from "../components/ProfileCard";

// should redirect to login page if not logged in

const Profile: NextPage = () => {
  const auth = getAuth();
  const [user,setUser] = useState<User |null>(null);
  const [items,setItems] = useState<DocumentData[] | null>(null);

  let count = 0;

  onAuthStateChanged(auth,(user) => {
    if (user && items === null) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUser(user);
      getUserItems(user).then((value) => setItems([...value]));
      // console.log(items);
    
      // ...
    } else {
      // User is signed out
      // ...
      // console.log(items);
    }
  });

  return (
    <div className="font-sans-serif pb-12">
      <div className="w-screen bg-green mb-20">
        <a className="absolute top-2 left-2" href="/">
          {" "}
          {/* home button */}
          <Image
            src="/magglass.svg"
            width="64px"
            height="64px"
            alt="home button"
          />
        </a>
        <div className="absolute top-2 right-2 flex items-center">
          {" "}
          {/* profile and log out buttons */}
          <a
            className="flex items-center bg-green-light w-40 h-8 rounded-2xl "
            href="/login"
          >
            <p className="w-full text-center">Sign out</p>
          </a>
        </div>
        <div className="flex flex-col p-20">
          <Image
            src="/profile.svg"
            width="100px"
            height="100px"
            alt="profile icon"
          />
          <h1 className="text-8xl">My Profile</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center align-center border-4 bg-orange m-32">
        <div className="text-center"> {user?.email ?? 'blank'}</div>
    
        {/* {items && <ProfileCard item={items[0]}/>} */}
        {items && items.map((value) => {         
          return(
            <ProfileCard item={value} />
          )
        }
        )}
        </div>
    </div>
  );
};

export default Profile;
