import Image from "next/image";
import MainLogo from "../../assets/images/Booki@3x.png";
import React from "react";

type Props = {};

function Logo({}: Props) {
  return (
    <div className="relative w-40 h-24">
      <Image src={MainLogo} alt={"logo"} fill />
    </div>
  );
}

export default Logo;
