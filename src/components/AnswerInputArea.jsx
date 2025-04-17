import React, { useState, useRef, useEffect } from 'react';

export default function AnswerInputArea() {
    const [value, setValue] = useState('');
    const textareaRef = useRef(null);

    // Функция для обновления высоты textarea
    const adjustHeight = () => {
        if (textareaRef.current) {
            // Сбрасываем высоту, чтобы правильно пересчитать ее в следующем шаге
            textareaRef.current.style.height = 'auto';
            // Устанавливаем новую высоту, основываясь на scrollHeight
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    useEffect(() => {
        adjustHeight(); // Применяем изменение высоты после первого рендера
    }, []);

    const handleInputChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <textarea
            ref={textareaRef}
            className={`answer-input`}
            value={value}
            onChange={handleInputChange}
            onInput={adjustHeight} // Слушаем событие ввода
            style={{
                resize: 'none', // Запрещаем изменение размера вручную
                overflow: 'hidden', // Скроем полосы прокрутки
                minHeight: '10px', // Минимальная высота
                maxHeight: '200px', // Максимальная высота
                lineHeight: '1em', // Размер строки
            }}
        />
    );
}


