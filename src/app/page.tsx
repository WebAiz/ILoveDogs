import styles from "./page.module.scss";
import { Loader } from "@/components/Loader/Loader";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>ILoveDogs by Aizada Turarova</h1>
      <p>Начни поиск по породам!</p>
    </main>
  );
}
