import styles from "./page.module.css";

interface CourseBlockProps {
    title: string;
    author: string;
    icon: string;
    price: string;
}

const CourseBlock: React.FC<CourseBlockProps> = ({ title, author, icon, price }) => (
    <div className={styles.bb}>
        <div>{title}</div>
        <div>{author}</div>
        <div className={styles.mb}>{icon}</div>
        <div className={styles.text}>{price}</div>
    </div>
);

export default CourseBlock;