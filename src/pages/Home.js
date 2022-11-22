import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import Spacer from "../components/Spacer";

export default function Home() {
  return <div id="home" className="col centerChildren">

    <h1>F53</h1>

    <panel className="about">
      <h2>About Me</h2>
      <ul>
        <li>19 year old full stack developer, recent graduate of <a href="https://flatironschool.com/campuses/denver/" className="link">FlatIron</a>.</li>
        <li>I spend most of my free time in an IDE developing mods or automating repetitive tasks.</li>
        <li>Fluent in Java, Python, JS, ReactJS, Ruby, Ruby on Rails</li>
        <li>I mainly socialize on Discord, but try check my Email at-least twice daily.</li>
      </ul>
    </panel>

    <panel className="links col">
      <h2>Links</h2>

      <ul className="row centered centerChildren">
        <li><SocialIcon className="button" url="mailto:fseusb@gmail.com"/></li>
        <li><SocialIcon className="button" url="https://twitter.com/CodeF53"/></li>
        <li><SocialIcon className="button" url="https://github.com/CodeF53"/></li>
        <li><SocialIcon className="button" url="https://discord.gg/kWajt8G4"/></li>
      </ul>

      <ul className="row centered">
        <Spacer/>
        <li><a href="https://blog.f53.dev"><button>blog</button></a></li>
        <li><Link to="/projects"><button>projects</button></Link></li>
        <Spacer/>
      </ul>
    </panel>
  </div>
}