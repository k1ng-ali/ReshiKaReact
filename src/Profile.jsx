import {Component} from "react";
import "./Styles/ProfileStyle.css"
import UserInfo from "./components/UserInfo.jsx";
import {UserQuestions, UserAnswers} from "./components/UserContents.jsx";

class Profile extends Component {
    render() {
        return (
            <div className="Profile">
                <UserInfo />
                <UserQuestions/>
                <UserAnswers/>
            </div>
        )
    }
}

export default Profile;