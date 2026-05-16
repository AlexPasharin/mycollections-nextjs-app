import styles from "./styles.module.sass"
import Link from "next/link";

const LinkButton = ({ text, href }: { text: string, href: string }) => {
    return (
        <Link href={href}>
            <button className={styles["back-button"]}>{text}</button>
        </Link>
    );
};

export default LinkButton;
