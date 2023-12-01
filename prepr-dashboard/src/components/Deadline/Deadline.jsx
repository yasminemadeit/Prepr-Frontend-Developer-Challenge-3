import './deadline.scss'

function Deadline (){
    return(
        <div className="deadline">
            <h3>Upcoming Challenge Deadlines</h3>
            <div className="list">
            <div className="list-item-container">
                <div className="list-item">
                    <img src="https://preprlabs.org/assets/images/dashboard/calendar-normal.svg" alt="" />
                    <span className="texts">
                        <h4>Developer Challenge 1</h4>
                        <p>Due November 30</p>
                    </span>
            
            </div>
            <hr class="divider"></hr>
            </div>    
            <div className="list-item-container">
                <div className="list-item">
                    <img src="https://preprlabs.org/assets/images/dashboard/calendar-normal.svg" alt="" />
                    <span className="texts">
                        <h4>Developer Challenge 2</h4>
                        <p>Due November 30</p>
                    </span>
            
            </div>
            <hr class="divider"></hr>
            </div>    
            <div className="list-item-container">
                <div className="list-item">
                    <img src="https://preprlabs.org/assets/images/dashboard/calendar-normal.svg" alt="" />
                    <span className="texts">
                        <h4>Developer Challenge 3</h4>
                        <p>Due November 30</p>
                    </span>
            
            </div>
            <hr class="divider"></hr>
            </div>    
           


           
            </div>
        </div>
    )

}

export default Deadline