import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Found.module.css";
import { InputLabel, Select, TextField, ThemeProvider } from "@mui/material";
import { orangeTheme } from "./muiTheme";
import categories from "./categories";
import React, { useState } from "react";

// should redirect to login page if not logged in

export type Found = {
  name: string,
  categories: string,
  date: string,
  location: string,
  description: string,
};

const Found: NextPage = () => {

  const [found, setFound] = useState({ name: '', categories: '', date: '', location: '', description: '' });

  const handleChange = (event: any) => {
    setFound({ ...found, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    // TODO: Connect to firebase
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
          <h1>Found</h1>
          <p className="text-center">Provide identifying information for the item you found.</p>
        </div>
      </div>
      <div className="flex flex-row gap-20 justify-center align-center ">
        <div className="flex flex-col justify-center w-80 h-80 bg-green-light">

          <Image className="inline" src="/uploadicon.svg" width="32px" height="32px" alt="upload icon" />
          <p className="inline text-center text-2xl">upload image</p> {/* ideally multiple images can be uploaded */}
        </div>
        <div className="w-80 flex flex-col">
          <ThemeProvider theme={orangeTheme}>
            <form action=""onSubmit={handleSubmit}>
              <TextField className="mb-5 w-full" type="text" name="name" id="name" value={found.name} placeholder="item name" variant="standard" />
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
              <Select className="mb-5 w-full" native id="categories" label="Thigny" value={found.categories}>
                <option aria-label="None" value="category item">Select category</option>
                {
                  categories.map((supercat) => {
                    return (
                      <optgroup key={supercat.name} label={supercat.name}>
                        {
                          supercat.subcategories.map((subcat) => {
                            return (
                              <option key={subcat} value={subcat}>{subcat}</option>
                            );
                          })
                        }
                      </optgroup>
                    );
                  })
                }
              </Select>

              <TextField
                className="mb-5 w-full"
                id="date"
                label="Select date"
                type="date"
                name="date"
                value={new Date().toISOString().slice(0, 10)}
              />
              <TextField className="mb-5 w-full" type="text" name="location" id="location" placeholder="location found" variant="standard" />
              <TextField
                className="mb-5"
                value={found.description}
                id="outlined-multiline-static"
                label="enter description here"
                multiline
                fullWidth={true}
                rows={4}
              />
              <div className="flex flex-col items-end">
                <input className="bg-green w-40 h-8 rounded-2xl" type="submit" value="Submit" />
              </div>
            </form>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default Found;
