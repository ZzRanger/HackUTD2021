import { DocumentData } from "firebase/firestore";
import { CSSProperties } from "react";

export default function ProfileCard({ item }: DocumentData) {
  console.log(item);
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
    <div className="flex flex-row justify-between mt-4">
      <div className="flex flex-row">
        <ItemImage itemId={item} />
        <div className="flex flex-col ">
          <div>{item.name}</div>
          <div>{item.date}</div>
          <div>
            <button> Edit </button>
            <button> Delete </button>
          </div>
        </div>
      </div>
      <div className="justify-self-end">{item.location}</div>
    </div>
  );
}
