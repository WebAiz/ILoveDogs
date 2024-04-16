// @flow
import * as React from "react";
import Image from "next/image";
import loader from "@/assets/gifs/loading_white.gif";
import { Modal } from "@mui/base";
import styles from "./Loader.module.scss";

type Props = {};

export function Loader(props: Props) {
  return (
    <div className={styles.loader}>
      <Image src={loader} alt={"load"} />
    </div>
  );
}
