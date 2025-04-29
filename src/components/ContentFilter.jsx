import React from 'react'
import Filter from './Filter';

export default function ContentFilter() {
    const [elements, setElements] = React.useState({
        "Интересные": false,
        "Популярные": false,
        "За неделю": false,
        "За месяц": false,
        "Алгоритм": false,
        "Технология": false,
        "Развития": false,
    });

    const handleChange = (e) => {
        setElements(prev => ({ ...prev, [name]: e.target.value }));
    }

    return (
        <div className={'ContentFilter'}>
            <li className={'filter-list'}>
                <Filter filter="Интересные"/>
                <Filter filter="Популярные"/>
                <Filter filter="За неделю"/>
                <Filter filter="За месяц"/>
                <Filter filter="Алгоритм"/>
                <Filter filter="Технология"/>
                <Filter filter="Технология"/>
                <Filter filter="Развития"/>
            </li>
            <input className={"filter-search"} placeholder="найти..."/>
        </div>
    )
}
