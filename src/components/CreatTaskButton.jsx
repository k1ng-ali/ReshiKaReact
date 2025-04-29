import { IoIosAddCircle } from "react-icons/io";

export default function CreatTaskButton() {
    return (
        <div className={"creat-task-button"}>
            <button className={`primary-btn`}>
                Добавить вопрос
            </button>
            <IoIosAddCircle className={`secondary-btn`} style={{display: "none"
            }}/>
            <IoIosAddCircle className={`secondary-btn icon-btn-2`} style={{display: "none"
            }}/>
        </div>
    );
}
