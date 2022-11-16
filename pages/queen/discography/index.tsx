import Image from "next/image";
import Link from "next/link";

import type { NextPage } from "next";

import styles from "styles/queen-discography.module.sass";

const QueenDiscographyPage: NextPage = () => (
  <>
    <h1>Queen Discography</h1>
    <div className={styles["image-wrapper"]}>
      <Image
        src="/images/queen.jpeg"
        alt="Queen band"
        width="800"
        height="450"
      />
    </div>
    <Link href="/queen/discography/singles">Queen singles</Link>
  </>
);

export default QueenDiscographyPage;
