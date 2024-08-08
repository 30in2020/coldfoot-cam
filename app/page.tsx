/** @format */

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.image}
        src="/i2.jpg"
        alt="image"
        width={1784}
        height={1338}
        priority
      />
    </main>
  );
}
