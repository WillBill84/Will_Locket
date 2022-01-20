import React, { Component } from "react"
import Container from 'react-bootstrap/Container';
import Project from './ProjectUI';
import Level5 from '../../assets/images/level5.png';
import BLsite from '../../assets/images/ben_site.png';
import PCR from '../../assets/images/PCR_Mockup.png';
import JSG from '../../assets/images/jsg.jpg';

class Projects extends Component {

    render() {
        return (
            <section id="projects" className="projects">
            <Container fluid="xxl" >
            <h1 className="bigHeader">Projects</h1>
            <Project imgsrc={JSG} imgalt={"Jenny Smith Gardens"} title={"Jenny Smith Gardens"} description={"I did the UX/UI designs and was involved with the development of this custom responsive website while working at Left Brain Solutions."} link={"http://www.jsg.net.au/"} />
                <Project imgsrc={Level5} imgalt={"Level 5 Projects website"} title={"Level 5 Projects"} description={"I worked with Left Brain Solutions to help create a custom website for Level 5 Projects. It is a responsive website that uses Joomla for the cms."} link={"https://level5projects.com.au"} />
                <Project imgsrc={BLsite} imgalt={"Ben Locket website"} title={"Ben Locket"} description={"I worked with Ben to customise his Wordpress website to display his portfolio of Film and T.V cues in a contemporary minimalist style."} link={"http://benlocket.com"} />
                <Project imgsrc={PCR} imgalt={"Penguin Coolroom Hire"} title={"Penguin Coolroom Hire"} description={"UX/UI template redesign and mockups for Penguin Coolroom Hire's responsive website."} link={"https://xd.adobe.com/view/84523429-9084-4bef-86a0-50543cecf5e6-d101/screen/f9d1dad5-6533-4f3f-9d05-c0f37f8eb4ae?hints=off"} />
            </Container>
            </section>

        );

    }

}

export default Projects;