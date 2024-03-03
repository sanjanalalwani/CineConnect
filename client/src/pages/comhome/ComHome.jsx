import Stories from "../../components/stories/Stories";
import "./comhome.scss";
import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share";
const ComHome=()=>{
    return(
        <div className="ComHome">
            {/* <Stories/> */}
            <Posts/>
            <Share />
        </div>
        
    )
}
export default ComHome;