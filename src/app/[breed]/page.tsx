"use client";
import styles from "./page.module.scss";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import dogService from "@/services/dog";
import Image from "next/image";
import { Button } from "@mui/material";
import { Loader } from "@/components/Loader/Loader";
import * as React from "react";

export default function Breed() {
  const { breed = "" } = useParams();
  const [dog, setDog] = useState("");
  const [subBreedList, setSubBreedList] = useState([]);
  const [subDog, setSubDog] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getSubBreed = (subBreed: string) => {
    setIsLoading(true);
    // @ts-ignore
    dogService.getSubBreedImageRandom(breed, subBreed).then((res) => {
      setSubDog(res.message);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    if (breed) {
      setIsLoading(true);
      // @ts-ignore
      dogService.getDogsImageByBreed(breed).then((res) => {
        setDog(res.message);
        setIsLoading(false);
      });
      // @ts-ignore
      dogService.getAllSubBreeds(breed).then((res) => {
        setSubBreedList(res.message);
        setIsLoading(false);
      });
    }
  }, []);
  return (
    <main className={styles.main}>
      <h2>{breed}</h2>
      {dog && (
        <div className={styles.grid}>
          <div className={styles.img}>
            <Image
              className={styles.img}
              src={dog}
              alt={"dog"}
              width={300}
              height={300}
            />
          </div>
          {!!subBreedList.length && (
            <ul className={styles.list}>
              <h4>Sub Breeds</h4>
              {subBreedList.map((el, index) => (
                <li>
                  <Button onClick={() => getSubBreed(el)} key={index}>
                    {el}
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      <div>
        {subDog && (
          <Image
            className={styles.img}
            src={subDog}
            alt={"subDog"}
            width={300}
            height={300}
          />
        )}
      </div>
      {isLoading && <Loader />}
    </main>
  );
}
