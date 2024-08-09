import { Inter } from "next/font/google";
import styles from './header.module.css'
import Image from "next/image";
import { ArrowBigUp, ChevronDown } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
    return (
        <div className={styles.head}>
            <Image src="/topbar_logo_small.svg" alt="logo" width={35} height={35}/>
            <p>

                <span className={styles.phrase}>
                    Каталог
                    <ChevronDown width={15} height={15} />
                </span>
                <span className={styles.phrase}>Моё обучение</span>
                <span className={styles.phrase}>Преподавание</span>
            </p>

            <Image className={styles.icon} src="/usir.png" alt=""  width={35} height={35}/>
        </div>
    );
}
