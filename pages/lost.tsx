import { CSSProperties, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { ThemeProvider, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import styles from "../styles/Lost.module.css";
import { orangeTheme } from "./muiTheme";
import categories, { CategoryType } from "./categories";
import { User,onAuthStateChanged } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import { getUserItems, readEntries } from "../firebase/firebase";
import { auth } from "./_app";

// should redirect to login page if not logged in

const Lost: NextPage = () => {

  const [user,setUser] = useState<User |null>(null);
  const [items,setItems] = useState<DocumentData[] | null>(null);

  onAuthStateChanged(auth,(user) => {
    if (user && items === null) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUser(user);
      readEntries().then((value) => setItems([...value]));
      // console.log(items);
    
      // ...
    } else {
      // User is signed out
      // ...
      // console.log(items);
    }
  });
  
  function SubcatDropdown(categories: Array<CategoryType>, categoryIndex: number): JSX.Element {
    let supercat = categories[categoryIndex].name;
    return (
      <FormControl className="w-full">
        <ThemeProvider theme={orangeTheme}>
          <InputLabel id={supercat + "-subcat-label"}>{supercat}</InputLabel>
          <Select
            labelId={supercat + "-subcat-label"}
            id={supercat + "-subcat"}
            label={supercat}
            value="Select a subcategory"
          >
            <MenuItem value="Select a subcategory">Select a subcategory</MenuItem>
            {categories[categoryIndex].subcategories.map((subcat) => {
              return (
                <MenuItem key={subcat} value={subcat}>{subcat}</MenuItem>
              );
            })}
          </Select>
        </ThemeProvider>
      </FormControl>
    );
  }

  function ItemImage(item: DocumentData): JSX.Element {
    const imageStyle: CSSProperties = {
      backgroundImage: "url('/api/images?id=" + item.name + "'), url('/graytangle.png')",
    }

    return (
      <div className="flex justify-items-stretch items-stretch w-40 h-40" style={imageStyle}>
        <a className="w-full" href={"/item?id=" + item.name}>
          <p className="relative top-1 left-1 text-white italic">Item name {item.category}</p>
        </a>
      </div>

    )
  }

  function CategoryRow(cat: Array<CategoryType>,categoryIndex: number): JSX.Element {
    let category = categories[categoryIndex];
    
    let filteredItems = null;
    if (items) {
      filteredItems = items.filter((value) => (category.subcategories.includes(value.category)));
    }

    // const relvantItemIds: Array<string> = ["aaa", "bbb", "ccc", "ddd"];

    return (
      <div className="mb-20">
        <h2 className="font-display text-5xl pb-5">{categories[categoryIndex].name}</h2>
        {SubcatDropdown(categories, categoryIndex)}
        <div className="grid grid-cols-4 gap-10 justify-items-center mt-5">
          {items && 
            filteredItems!.map(item => ItemImage(item))
          }
        </div>
      </div>
    )
  }

  return (
    <div className="font-sans-serif pb-12">
      <div className="w-screen bg-green-light mb-20">
        <a className="absolute top-2 left-2" href="/">  {/* home button */}
          <Image src="/magglass.svg" width="64px" height="64px" alt="home button" />
        </a>
        <div className="absolute top-2 right-2 flex items-center"> {/* profile and log out buttons */}
          <a className="flex items-center mr-5" href="/profile">
            <Image src="/smprofile.svg" width="32px" height="32px" alt="profile icon" />
            <p className="text-lg">My Profile</p>
          </a>
          <a className="flex items-center bg-green w-40 h-8 rounded-2xl " href="/login">
            <p className="w-full text-center">Sign out</p>
          </a>
        </div>
        <div className="flex flex-col p-20">
          <h1 className="text-8xl">Lost</h1>
          <p className="text-center">Choose a category and select the type of item(s) you’re looking for.</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col">
          {
            categories.map((cat, i) => CategoryRow(categories, i))
          }
        </div>
      </div>
    </div>
  );
};

export default Lost;
