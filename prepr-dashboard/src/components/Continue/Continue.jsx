import './continue.scss'
import calendar from '../../assets/images/calendar.png'

function Continue (){
    return(
        <div className="continue">
            <h3>Continue Where You Left Off</h3>
            <p>Start your PreprLabs journey now!</p>
          
            <div className="explore">
            <img src={calendar} alt="" />
           <button className="explore-more">Explore More</button>
           </div>
        </div>
    )

}

export default Continue