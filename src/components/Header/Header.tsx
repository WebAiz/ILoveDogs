// @flow
import * as React from 'react';
import styles from "./Header.module.scss";
import Image from "next/image";

type Props = {};

export function Header(props: Props) {
  return (
    <header className={styles.header}>
      <Image
        src="/logo.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      />
    </header>
  );
};