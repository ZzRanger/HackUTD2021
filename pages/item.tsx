import type { NextPage } from "next";
import Image from "next/image";

// should redirect to login page if not logged in

const ItemView: NextPage = () => {
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
          <h2 className="font-display text-5xl pb-5">&#123;item.name&#125;</h2>
          <p className="-mt-2">&#123;item.category&#125;</p>
          <p>Found on &#123;item.date&#125; at &#123;item.location&#125;</p>
          <p>&#123;item.description&#125;</p>
          <br />
          <p>Contact &#123;item.reporter&#125; for more information</p>
        </div>
      </div>
    </div>
  );
};

export default ItemView;
