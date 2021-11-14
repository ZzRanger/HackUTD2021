import { User,onAuthStateChanged } from "@firebase/auth";
import { DocumentData } from "@firebase/firestore";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from 'next/router';
import { useState } from "react";
import { readEntries, readEntry } from "../firebase/firebase";
import { auth } from "./_app";

// should redirect to login page if not logged in

const ItemView: NextPage = () => {
  const router = useRouter()
  // console.log(router.query);




  const [user,setUser] = useState<User | null>(null);
  const [item,setItem] = useState<DocumentData | null>(null);



  onAuthStateChanged(auth,(user) => {
    if (user && item === null) {
      let ditemId = router.query.id;
      // console.log(ditemId);
      // User is signed in, see docs for a list of available properties
      // // https://firebase.google.com/docs/reference/js/firebase.User
      // console.log("RAN");
      if (ditemId) {
        // console.log("YAY!");
       readEntry(ditemId!.toString()).then((value) => setItem(value));
        
        // console.log(item);
      }
      // console.log(item);
    
      // ...
    } else {
      // User is signed out
      // ...
      // console.log(items);
    }
  });

  let itemId = "aaa";

  return (
    <div className="font-sans-serif pb-12">
      <a className="absolute top-2 left-2" href="/">  {/* home button */}
        <Image src="/magglass.svg" width="64px" height="64px" alt="home button" />
      </a>
      <div className="absolute top-2 right-2 flex items-center"> {/* profile and log out buttons */}
        <a className="flex items-center mr-5" href="/profile">
          <Image src="/smprofile.svg" width="32px" height="32px" alt="profile icon" />
          <p className="text-lg">My Profile</p>
        </a>
        <a className="flex items-center bg-green w-40 h-8 rounded-2xl " href="">
          <p className="w-full text-center">Sign out</p>
        </a>
      </div>
      <div className="mt-32 flex flex-row gap-20 justify-center align-center">
        <div className="w-80 h-80" style={{ backgroundImage: "url('/api/images?id=" + itemId + "'), url('/graytangle.png')"}}>
        </div>
        <div className="">
          <h2 className="font-display text-5xl pb-5">{item && item.name || ''}</h2>
          <p className="-mt-2">{item && item.category || ''}</p>
          <p>Found on {item && item.date || ''} at {item && item.location || ''}</p>
          <p>{item && item.description || ''}</p>
          <br />
          <p>Contact {item && item.user || ''} for more information</p>
        </div>
      </div>
    </div>
  );
};

export default ItemView;
