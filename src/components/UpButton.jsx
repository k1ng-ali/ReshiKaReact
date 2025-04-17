import { TbArrowBigUpFilled } from "react-icons/tb";
import { useRef, useEffect } from "react";

export default function UpButton() {
    const wrapperRef = useRef(null);
    const intervalRef = useRef(null);

    const createSnowflake = () => {
        const wrapper = wrapperRef.current;
        const flake = document.createElement("div");
        flake.className = "snowflake";
        flake.style.left = Math.random() * 100 + "%";
        //flake.style.top = Math.random() * 100 + "%";
        flake.style.animationDuration = 1 + Math.random()*0.1  + "s";
        flake.style.opacity = Math.random();
        wrapper.appendChild(flake);

        // Удалить после анимации
        setTimeout(() => flake.remove(), 5000);
    };

    const handleMouseEnter = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(createSnowflake, 20);
        }
    };

    const handleMouseLeave = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    useEffect(() => {
        return () => clearInterval(intervalRef.current); // очистка при размонтировании
    }, []);

    return (
        <div
            className="icon-snow-wrapper"
            ref={wrapperRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <TbArrowBigUpFilled className="icon-main" />
        </div>
    );
}
