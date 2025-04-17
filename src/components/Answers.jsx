import React, {Component} from 'react'
import {formatDate} from '../utils/formatDate.js';
import {TbArrowBigDownFilled, TbArrowBigUpFilled} from "react-icons/tb";

export default class Answers extends Component{
    render() {
        const {author, date, content, likes} = this.props;
        return (
            <div className={`answers-wrapper`}>
                <div className="crt_info">
                    <p className={`author`}>{author}</p>
                    <p className={`date`}>{formatDate(date)}</p>
                </div>
                <p className={`text`}>{content}</p>
                <div className={`answers-footer`}>
                    <div className={`reaction-content`}>
                        <div className={`up`}>
                            <TbArrowBigUpFilled className={`up-icon`}/>
                        </div>
                        <p className="likes-count">+{likes}</p>
                    </div>
                    <div className={`to-answer-btn`}>ответить</div>
                </div>
            </div>
        )
    }
}
