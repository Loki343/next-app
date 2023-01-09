import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Image } from "next/image";

const Navbar = () => {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontSize: "30px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Link style={{color:'white',textDecoration:'none'}} href="/">Kausik Bhaumik</Link>
      <Link style={{color:'white',textDecoration:'none'}} href="/projects">Projects</Link>
      <Link style={{color:'white',textDecoration:'none'}} href="/experience">Experience</Link>
      <img
        alt="pic"
        src="https://avatars.githubusercontent.com/u/106387298?s=400&u=805acac7f1fcd2071bee13ca5eeb423a0dccc416&v=4"
        width={30}
        height={30}
        style={{borderRadius:'50%'}}
      />
    </div>
  );
};

export default Navbar;
