import Button from "./CreatTaskButton.jsx"
import {SearchArea} from "./SearchArea.jsx";
import Filter from "./ContentFilter.jsx";

export const ContentActions = () => {
    return (
        <div className={"ContentActions"}>
            <Button/>
            <SearchArea/>
            <Filter/>
        </div>
    )
}
