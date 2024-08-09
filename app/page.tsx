"use client";
import { useState } from "react";
import { ArrowDown } from "lucide-react";
import styles from "./page.module.css";
import CourseBlock from "./CourseBlock";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const courseData = [
    {
        title: 'хиты',
        courses: [
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '1000 ₽' },
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '1000 ₽' },
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '1000 ₽' },
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '1000 ₽' },
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '1000 ₽' },
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '1000 ₽' },
        ],
    },
    {
        title: 'пакеты курсов',
        courses: [
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '5000 ₽' },
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '5000 ₽' },
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '5000 ₽' },
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '5000 ₽' },
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '5000 ₽' },
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '5000 ₽' },],
    },
    {
        title: 'актуальные скидки',
        courses: [
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '10000 ₽' },
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '10000 ₽' },
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '10000 ₽' },
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '10000 ₽' },
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '10000 ₽' },
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '10000 ₽' },
        ],
    },
    {
        title: 'выбирают компании',
        courses: [
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '50000 ₽' },
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '50000 ₽' },
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '50000 ₽' },
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '50000 ₽' },
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '50000 ₽' },
            { title: 'название курса', author: 'автор', icon: 'иконка', price: '50000 ₽' },
        ],
    },
];

export default function Home() {
    const [visibleBlock, setVisibleBlock] = useState(0); // 0 - только первый блок виден

    const handleShowBlocks = (blockIndex: number) => {
        setVisibleBlock(blockIndex); // индекс видимого блока
    };

    return (
        <main className={styles.main}>
            <h1 className={styles.header}>
                Онлайн курсы
                <ArrowDown width={28} height={28} />
            </h1>
            <div className={styles.buttons}>
                {courseData.map((course, index) => (
                    <button
                        key={index}
                        className={styles.button}
                        onClick={() => handleShowBlocks(index)}
                    >
                        <h3>{course.title}</h3>
                    </button>
                ))}
            </div>
            <div className={styles.div}>
                <div className={styles.obj}>
                    {courseData[visibleBlock]?.courses.map((course, idx) => (
                        <CourseBlock
                            key={idx}
                            title={course.title}
                            author={course.author}
                            icon={course.icon}
                            price={course.price}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
