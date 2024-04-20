import React from "react";
import Image from "next/image";
import Link from "next/link";

function LatestWorkCard() {
  return (
    <Link className="latestWorkCard bg-primary-200 h-[240px] w-[100%] block overflow-hidden relative group" href={'#'}>
      <Image src="/img/placeholder.jpg" alt="test" width={500} height={500} className="w-full group-hover:scale-110 group-hover:opacity-20 duration-500" />
      <h3 className="c-font-lg absolute left-0 top-0 text-dark-900 opacity-0 group-hover:opacity-100 duration-300">Project title</h3>
    </Link>
  );
}

export default LatestWorkCard;
