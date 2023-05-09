import { useRouter } from "next/router";

import styles from "./styles.module.sass"

const BackButton = ({text}: {text: string}) => {
    const router = useRouter();

    return (
        <button className={styles["back-button"]} onClick={router.back}>
            {text}
        </button>
    )
}

export default BackButton