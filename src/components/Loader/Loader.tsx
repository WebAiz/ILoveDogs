// @flow
import * as React from "react";
import Image from "next/image";
import loader from "@/assets/gifs/loading_white.gif";

type Props = {};

export function Loader(props: Props) {
  return (
    <div>
      <Image src={loader} alt={"load"} />
    </div>
  );
}
