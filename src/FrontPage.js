import React from "react";
import { render } from "react-dom";
import { Button, Navbar, Nav, Row, Col, Container } from "react-bootstrap";
import Person from "./Components/Person";
import Episode from "./Components/Episode";

export default class FrontPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        
        <Container fluid className="uh-100" id='home'>
          <Row>
            <Col xs={12} className="justify-content-center d-flex">
              <img
                width="100%"
                src="./img/OOBPNG.png"
                id="oobImage"
                className="m-auto"
              ></img>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="justify-content-center d-flex flex-column">
              <iframe
                src="https://open.spotify.com/embed-podcast/episode/1iOmbKV9p7RmD62wYvHpGZ"
                width="100%"
                height="232"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                className="spot  m-auto"
              ></iframe>
              <h2 className='mx-auto mb-4 text-light display-4'>The Crew</h2>
            </Col>
          </Row>
          <div className="bg-light" >
          <Row className="bg-light" id='about'>
              
            <Col md={3} className='p-0 ryan'>
              <Person src="./img/HS4-square.jpg" name='Ryan Werner' link='https://rswerner.com'>
                <h5 className='text-muted mt-4'>About</h5>
                  <p style={{minHeight: '100px'}}>Student Pharmacist, Web Developer, Friend. Ryan is looking to build the future of healthcare technology, and brings experience in web design, video production, and pharmaceuticals to the team.</p>
                  <h5 className='text-muted mt-4'>Major/Profession</h5>
                  <p>Pharamacy, Operations & Technology Management</p>
                  <h5 className='text-muted mt-4'>Favorite Dog</h5>
                  <p>Luna</p>
                  <h5 className='text-muted mt-4'>Top Priority</h5>
                  <p>Building a botnet to control the world</p>
              </Person>
            </Col>
            <Col md={3} className='p-0 bailey'>
              <Person src="./img/bcon.png" name='Bailey Conradt' link='https://baileyconradt.com'>
              <h5 className='text-muted mt-4'>About</h5>
                  <p style={{minHeight: '100px'}}>Bailey, Bacon, or B-Swizzle, is a smart kid looking for trouble. Experience in programming and management allows him to wrangle his favorite corgi, Luna (Usually away from Ryan).</p>
                  <h5 className='text-muted mt-4'>Major/Profession</h5>
                  <p>Computer and Political Science</p>
                  <h5 className='text-muted mt-4'>Favorite Dog</h5>
                  <p>Maisy</p>
                  <h5 className='text-muted mt-4'>Top Priority</h5>
                  <p>Taylor Swift</p>
              </Person>
            </Col>
            <Col md={3} className='p-0 eric'><Person src='./img/maccoux.png' name='Eric Maccoux' link='https://maccoux.com'>
            <h5 className='text-muted mt-4'>About</h5>
                    <p style={{minHeight: '100px'}}>When he's not announcing his 'Hot Takes', Eric is often working on algorithims or producing new music. His love of games (and distaste of consumerism) adds a spicy flare of passion in every episode.</p>
                    <h5 className='text-muted mt-4'>Major/Profession</h5>
                  <p>Computer Science</p>
                  <h5 className='text-muted mt-4'>Favorite Dog</h5>
                  <p>Sara</p>
                  <h5 className='text-muted mt-4'>Top Priority</h5>
                  <p>Stopping Ryan's botnet</p>
                </Person></Col>
            <Col md={3} className='p-0 aaraf'><Person src='./img/aaraf.png' name='Aaraf Khondaker'>
            <h5 className='text-muted mt-4'>About</h5>
                <p style={{minHeight: '100px'}}>Gamer by day; gamer by night. Aaraf hides in the shadows with his computer, playing the latest indie titles and picking up the hottest new zoomer slang. He may not be wise, but he's certainly something.</p>
                <h5 className='text-muted mt-4'>Major/Profession</h5>
                  <p>Computer Science</p>
                  <h5 className='text-muted mt-4'>Favorite Dog</h5>
                  <p>Himself</p>
                  <h5 className='text-muted mt-4'>Top Priority</h5>
                  <p>Sleep</p>
                  </Person></Col>
          </Row>
          <Row id='episodes' className='bg-light'>
            <h2 className='mx-auto my-5 display-4'>Episodes</h2>
            <Col md={12} className='d-flex flex-row flex-wrap justify-content-center'>
              <Episode link='https://open.spotify.com/episode/1iOmbKV9p7RmD62wYvHpGZ' title='Episode 1: Meet the Team'>Welcome to the first episode of the Out of Band Show! In this episode, we introduce the cast, talk about some good dogs (and not so good), discuss some space and tech news, and reminisce about the origins of the show.</Episode>
              <Episode link='https://open.spotify.com/episode/0EuS8fKSbhe5RGqLxvto4x' title='Episode 2: Gators and Pencils'>In this episode of the Out of Band Show, Eric talks about some exciting news for basketball fans, Aaraf worries us a little bit about his reddit habits, and Ryan investigates a past gift.</Episode>
              <Episode link='https://open.spotify.com/episode/6qmhTfPL5dwo0Y0cpXCf2j' title='Episode 3: Chickens and Space Shuttles'>Ryan professes his love for Microsoft products and Eric delivers some hot takes on childhood toys, while Bailey recalls his troubles with the Kerbal Space Program and Aaraf dishes on the new phone company related to a drug lord.</Episode>
              <Episode link='https://open.spotify.com/episode/1qx12HH01BgK7ZYdDmO2Bu' title='Episode 4: Tales from Canada'>In this exclusive interview with Owen Hunt, we discuss anything and everything from RGB monitors to whether you should fold or crinkle your toilet paper. Aaraf tries his best to describe potatoes while Owen hosts an exciting round of Rank 'Em, and Ryan remembers some strange dreams.</Episode>
              <Episode link='https://open.spotify.com/episode/3mMYlQzGYjVBMnRXsZPTUW' title='Episode 5: MaccouxOS'>This week on the show, we discuss Bailey's obsession with Apple and their latest updates (or lack thereof) at WWDC, while Eric finally gets to share his opinion on the age old question: "Do you fold or crinkle your toilet paper?"</Episode>
              <Episode link='https://open.spotify.com/episode/0XfGEmGAZfrWHiwj4Z7XH6' title='Episode 6: The 5 Letter Podcast'>In this episode featuring our good friend Dan Bonin, there are no rules! Bailey and Aaraf recall some injury stories while Ryan finds random objects in his closet. Eric dishes out some hot takes on scooters, and Aaraf offers up a surprising new budget laptop idea.</Episode>
              <Episode link='https://open.spotify.com/episode/64mvsn89IKHOMS5EuuYCe1' title='Episode 7: Santa Claus Apple'>Two words: Tik Tok! In this episode, the crew discusses security features and mishaps in everything from a new iOS update to a botched Ubisoft release. Would it really be a complete podcast without a couple Luna stories?</Episode>
              <Episode link='https://open.spotify.com/episode/3Cci26jeG1MDdLb4KXV7eR' title='Episode 8: My Sprout Love'>Why are manhole covers round? Aaraf investigates. Ryan inquires about Bailey's late night music writing, while Eric dishes out some relationship advice regarding Master Chef—or is it Master Chief?</Episode>
              <Episode link='https://open.spotify.com/episode/23SbzPiYDag244aFrNWpCI' title='Episode 9: Amazon Basics Dolphin'>Does your dolphin cost 26 million dollars? Well, have we got a deal for you! This week, Ryan tries to buy a robotic dolphin, Eric sues FEMA, Bailey gets classified as a simp, and Aaraf fights his co-hosts over petty hot takes.</Episode>
              <Episode link='https://open.spotify.com/episode/1nU8wveDSQ2q58QbnzHybu' title='Episode 10: Antitrust in U-Haul'>While Eric vents about massive telecommunications giant AT&T, Aaraf begins to contemplate life after Tik Tok. Between their banter, Bailey recounts the story of a failed technology product and drowns out Ryan's furious distaste with Uhaul customer service.</Episode>
            </Col>
          </Row>
          </div>
        </Container>
        <div className="flex-column uh-100"></div>
      </div>
    );
  }
}
