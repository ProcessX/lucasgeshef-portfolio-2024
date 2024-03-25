import React from "react";
import Image from "next/image";

function LatestWorkCard() {
  return (
    <div className="latestWorkCard bg-dark-700 h-[240px]">
      <Image
        className="latestWorkCard__thumbnail"
        src="/img/placeholder.jpg"
        alt="thumbnail"
        height={240}
        width={320}
      />
    </div>
  );
}

export default LatestWorkCard;
