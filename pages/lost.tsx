import { CSSProperties } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import styles from "../styles/Lost.module.css";
import categories, { CategoryType } from "./categories";

// should redirect to login page if not logged in

const Lost: NextPage = () => {
  function SubcatDropdown(categories: Array<CategoryType>, categoryIndex: number) {
    let supercat = categories[categoryIndex].name;
    return (
      <FormControl className="w-full">
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
      </FormControl>
    );
  }

  function ItemImage(itemId: string) {
    const imageStyle: CSSProperties = {
      backgroundImage: "url('/api/images?id=" + itemId + "'), url('/graytangle.png')",
    }

    return (
      <div className="flex justify-items-stretch items-stretch w-40 h-40" style={imageStyle}>
        <a className="w-full" href={"/item?id=" + itemId}>
          <p className="relative top-1 left-1 text-white italic">Item name {itemId}</p>
        </a>
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
          <a className="flex items-center bg-green w-40 h-8 rounded-2xl " href="">
            <p className="w-full text-center">Sign out</p>
          </a>
        </div>
        <div className="flex flex-col p-20">
          <h1 className="text-8xl">Lost</h1>
          <p className="text-center">Choose a category and select the type of item(s) you’re looking for.</p>
        </div>
      </div>
      {ItemImage("asd")}
    </div>
  );
};

export default Lost;
