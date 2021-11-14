import { DocumentData } from "firebase/firestore";
import { CSSProperties } from "react";
import { deleteEntry } from "../firebase/firebase";

export default function ProfileCard({ item }: DocumentData) {
  function ItemImage({ item }: any): JSX.Element {
    const imageStyle: CSSProperties = {
      backgroundImage:
        "url('/api/images?id=" + item + "'), url('/graytangle.png')",
    };

    return (
      <div
        className="flex justify-items-stretch items-stretch w-40 h-40"
        style={imageStyle}
      >
        {/* <a className="w-full" href={"/item?id=" + item}>
              <p className="relative top-1 left-1 text-white italic"></p>
            </a> */}
      </div>
    );
  }

  return (
    <div className="flex flex-row mb-4">
      <ItemImage itemId={item} />
      <div className="p-5">
        <p className="text-lg">{item.name}</p>
        <p className="text-lg">Found on {item.date} at {item.location}</p>
        <div className="flex flex-row gap-5 mt-5">
          <a
            className="flex items-center bg-green w-20 h-8 rounded-2xl "
            href=""
          >
            <p className="w-full text-center">Edit</p>
          </a>
          <button
                      className="flex items-center bg-green w-20 h-8 rounded-2xl "
                      onClick={() => deleteEntry(item)}
          >
            <p className="w-full text-center">Delete</p>
          </button>
        </div>
      </div>
    </div>
  );
}
