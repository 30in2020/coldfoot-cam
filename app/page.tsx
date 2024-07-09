import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.image}
        src="/i.jpg"
        alt="image"
        width={1800}
        height={1468}
        priority
      />
    </main>
  );
}
