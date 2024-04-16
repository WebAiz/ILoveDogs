// @flow
"use client";
import * as React from "react";
import styles from "./Search.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, Input, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import dogService from "@/services/dog";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/Loader/Loader";

type Props = {};

export function Search(props: Props) {
  const [list, setList] = useState<string[]>([]);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSelect = (event: any, value: string | null) => {
    if (value) router.push(`/${value}`);
  };
  useEffect(() => {
    setIsLoading(true);
    dogService.getAllDogs().then((res) => {
      const keys = Object.keys(res.message);
      setList(keys);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className={styles.search}>
        Найти собаку по породе
        <Autocomplete
          disablePortal
          id="autocomplete"
          options={list}
          onChange={onSelect}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Порода" />}
        />
        <SearchIcon />
      </div>
      {isLoading && <Loader />}
    </>
  );
}
