import { useEffect, useRef, useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";

export default function CreatTaskButton() {
    const [offset, setOffset] = useState(0);
    const timeoutRef = useRef(null);
    const lastScroll = useRef(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;
            const diff = current - lastScroll.current;

            setOffset(diff * 0.3); // плавное смещение
            lastScroll.current = current;

            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                setOffset(0); // возврат
            }, 150);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <button className={`creat-task-button title-btn`}
                style={{
                    transform: `translateY(${offset}px)`,
                }}
            >
                Добавить вопрос

            </button>
            <IoIosAddCircle className={`creat-task-button icon-btn`} style={{
                transform: `translateY(${offset}px)`,
            }}/>
            <IoIosAddCircle className={`creat-task-button icon-btn-2`} style={{
                transform: `translateY(${offset}px)`,
            }}/>
        </div>
    );
}
