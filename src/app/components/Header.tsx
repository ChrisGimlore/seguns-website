import Image from "next/image";
import React from "react";
import logo from "../../../assets/Segun.png";
import Link from "next/link";

const Header = () => {
  const styles = {
    button: `hover:text-gray-200`,
  };

  return (
    <div className="top-0 left-0 relative w-full h-[100px] bg-black shadow-md z-10">
      <div className="flex flex-col items-center py-4 bg-black">
        <Image alt="logo" width={150} height={75} src={logo} />
        <div className="justify-between flex flex-row w-[80%] bg-black text-white">
          <Link href={"/"}>
            <button className={styles.button}>Home</button>
          </Link>
          <Link href={"/shows"}>
            <button className={styles.button}>Shows</button>
          </Link>
          <Link href={"/gallery"}>
            <button className={styles.button}>Gallery</button>
          </Link>
          {/* 
                    <Link href={'/blog'}>
                        <button className={styles.button}>
                            Blog
                        </button>
                    </Link> */}

          <Link href={"/music"}>
            <button className={styles.button}>Music</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
