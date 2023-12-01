import "./projectdash.scss";
import { Link } from "react-router-dom";

function ProjectDash() {
    return(
        <div className="project-dash">
        <div className="title">
            <div className="title-left">
            <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/Project.svg" alt="" />
            <h4>Projects</h4>
            </div>
            <div className="title-right">
            <div className="create">
            <Link to="/project-create">
                <button className="create-dash">Create</button>
            </Link>
            </div>
            </div>
           
            
        </div>
        <div className="list-container">
            <div className="list-item">
                <h5>Project 1</h5>
                <div className="element">
                    <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/no-img.jpg" alt="" />
                    <p>Example Project ...</p>
                </div>
            </div>
            
            
        </div>
       <div className="explore">
       <button className="explore-more">Explore More</button>
       </div>
       
       
    </div>
    )
}

export default ProjectDash