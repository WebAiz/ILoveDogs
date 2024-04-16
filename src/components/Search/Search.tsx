// @flow
import * as React from 'react';
import styles from './Search.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import { Input } from "@mui/material";

type Props = {};

export function Search(props: Props) {
  return (
    <div className={styles.search}>
      Search
      <Input />
      <SearchIcon />
    </div>
  );
};