import styles from "./page.module.scss";
import { Loader } from "@/components/Loader/Loader";

export default function Home() {
  return (
    <main className={styles.main}>
      <Loader />
    </main>
  );
}
