//import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import './home.scss'
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import ProjectDash from '../../components/ProjectDash/ProjectDash';
import LabDash from '../../components/LabDash/LabDash';
import ChallengeDash from '../../components/ChallengeDash/ChallengeDash';
import Continue from '../../components/Continue/Continue';
import Progress from '../../components/Progress/Progress';
import Deadline from '../../components/Deadline/Deadline';
import medal from '../../assets/images/medal.png'

function Home() {

    return(

       
        <div className="home">
            <div className="header">
                <h3>Good evening, Yasmine.</h3>
            </div>
            <div className="home-container">
            <div className="box box1">
            <Progress/>
            </div>
            <div className="box box2">
            <Continue/>
            </div>
            <div className="box box3">
            <Deadline/>
            </div>
            <div className="box box4">
                <LabDash/>
            </div>
            <div className="box box5">
                <ChallengeDash/>
            </div>
            <div className="box box6">
                <ProjectDash/>
            </div>
            <div className="box box7">
                <Leaderboard/>
            </div>
            <div className="box box8">
                <div className="box8-title">
                    <img src={medal} alt="" />
                    <h3>Latest Achievement</h3>
                </div>
                <div className="medal-container">
                    <img src={medal} alt="" />
                </div>
                <h4>Innovator & Disruptor</h4>
                <div className="box8-btns">
                   <button className="detail">View Detail</button>
                   <button className="share">Share</button>
                </div>

            </div>

            </div>
           
        </div>
    );
}

export default Home