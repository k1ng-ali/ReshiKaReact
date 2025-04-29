import React, {Component} from 'react';
import Content from "./components/Content.jsx";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    };

    componentDidMount() {
        fetch("/Data/Tasks.json")
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Ошибка загрузки: ${res.status}`);
                }
                return res.json();
            })
            .then(data => this.setState({ posts: data }))
            .catch(error => console.error("Ошибка:", error));
    }

    render() {
        return (
            <div className={"Home"}>
                <Content posts={this.state.posts}/>
            </div>
        );
    }
}

export default Home;
