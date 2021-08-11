import React, { Component } from "react"
import Project from './ProjectUI';
import Level5 from '../../assets/images/level5.png';
import BLsite from '../../assets/images/ben_site.png';
import EventApp from '../../assets/images/RainProofApp.png';
import Weather from '../../assets/images/weather_app.png';
import PasGen from '../../assets/images/password_gen.png';

class Projects extends Component {

    render() {
        return (
            <div className="container fluid-xxl projects">
                <Project imgsrc={Level5} imgalt={"Level 5 Projects website"} title={"Level 5 Projects"} description={"I worked with Left Brain Solutions to help create a custom website for Level 5 Projects. It is a responsive website that uses Joomla for the cms."} link={"https://level5projects.com.au"} />
                <Project imgsrc={BLsite} imgalt={"Ben Locket website"} title={"Ben Locket"} description={"I worked with Ben to create a website to display his portfolio of Film and T.V cues in a contemporary minimalist style."} link={"http://benlocket.com"} />
                <Project imgsrc={EventApp} imgalt={"Event Finder App"} title={"Event Finder App"} description={"An app that finds events by date and location that uses Ticketmaster API."} link={"https://willbill84.github.io/rainProof/"} />
                <Project imgsrc={Weather} imgalt={"Weather dashboard app"} title={"Weather API App"} description={"A Weather dashboard app that shows current weather and a 5 day forecast based on location searches."} link={"https://github.com/WillBill84/Weather-App"} />
                <Project imgsrc={PasGen} imgalt={"Password generator app"} title={"Password Generator"} description={"App that creates random passwords based on user selected criteria."} link={"https://github.com/WillBill84/Homework_week3"} />
            </div>

        );

    }

}

export default Projects;