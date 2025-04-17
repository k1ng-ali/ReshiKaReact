import React, { Component } from "react";
import Answers from "./Answers.jsx";
import { formatDate } from "../utils/formatDate.js";
import InputArea from "./AnswerInputArea.jsx";
import { TbArrowBigUpFilled, TbArrowBigDownFilled } from "react-icons/tb";
import UpButton from "./UpButton.jsx";
export default class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleCount: 0 // изначально отображается 0 ответов
        };
    }

    // Метод для показа ещё 3 ответов
    loadMore = () => {
        this.setState((prevState, props) => {
            // Не показываем больше, чем есть ответов
            const newCount = Math.min(prevState.visibleCount + 3, props.answers.length);
            return { visibleCount: newCount };
        });
    };

    // Метод для скрытия ответов
    hideAnswers = () => {
        this.setState({ visibleCount: 0 });
    };

    render() {
        const { title, author, date, content, likes, answers } = this.props;
        const { visibleCount } = this.state;

        return (
            <div className="task" id="tasks" onClick={visibleCount===0 && this.loadMore}>
                <h3>{title}</h3>
                <div className="crt_info">
                    <div>
                        <p className="author">{author}</p>
                        <p className="date">{formatDate(date)}</p>
                    </div>
                    <button className={`subscribe`}>подписаться</button>
                </div>
                <p className="text">{content}</p>
                <div className="active-info">
                    <div className={`reaction-content`}>
                        <div className={`up`}>
                            <TbArrowBigUpFilled className={`up-icon`}/>
                            <p className={`interesting`}>Интересно •</p>
                            <span className="trail"/>
                        </div>
                        <p className="likes-count">+{likes}</p>
                        <TbArrowBigDownFilled style={{fill: `white`,}} />
                    </div>
                    <p className="answers-count">{answers.length} ответов</p>
                </div>
                <div className={`answers ${visibleCount > 0 ? "open" : "close"}`}>
                    {/* Отображаем только нужное количество ответов */}
                    {answers.slice(0, visibleCount).map(answer => (
                        <Answers
                            key={answer.id}
                            author={answer.author}
                            date={answer.date}
                            content={answer.content}
                            likes={answer.likes}
                        />
                    ))}
                </div>
                <div className={`task-btn`}>
                    {/* Кнопка для добавления ещё ответов */}
                    {(visibleCount < answers.length && visibleCount > 0) && (
                        <div className={`show-more ${visibleCount > 0 ? "show-more-active" : " "}`} onClick={this.loadMore}>показать еще...</div>
                    )}
                    {/* Кнопка для скрытия ответов */}
                    {visibleCount > 0 && (
                        <div className={`hide-answers ${visibleCount < answers.length ? "hide-answers-active" : " "}`} onClick={this.hideAnswers}>скрыть</div>
                    )}
                </div>
                {visibleCount > 0 && (
                    <div className={`answer-input-area`}>
                        <InputArea/>
                        <div className={`answer-btn-cnt`}>
                            <p className="author answer-to">{author}</p>
                            <button className={`send-answer-button`}>ответить</button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
