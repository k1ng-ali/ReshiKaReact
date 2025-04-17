import React, {Component} from 'react'
import Tasks from "./Tasks.jsx";
import "../Styles/ContentStyle.css";

export default class Content extends Component{
    render() {
        if(!this.props.posts){
            return (<p>Loading</p>)
        }
        return (
            <div className="content">
                {this.props.posts.map(post =>(
                    <Tasks key={post.id}
                    title={post.title}
                    author={post.author}
                    date={post.date}
                    content={post.content}
                    likes={post.likes}
                    answers={post.answers}/>
                ))}
            </div>
        )
    }
}
