import React from "react";
import Image from "next/image";
import Link from "next/link";

function LatestWorkCard() {
  return (
    <Link className="latestWorkCard bg-dark-700 h-[240px] w-[100%] block" href={'#'}>
      <div className="h-full w-full bg-primary-200 bg-opacity-50 opacity-0 hover:opacity-100 py-4 px-6 duration-150">
        <h3 className="c-font-md">Project title</h3>
        <p className="c-font-base">Category</p>
      </div>
    </Link>
  );
}

export default LatestWorkCard;
