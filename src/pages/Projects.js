import ProjectPreview from "../components/ProjectPreview";
import ProjectFolder from "../components/ProjectFolder";

import CardsIcon from "../assets/inhumane_cards/icon.png"
import FlapIcon from "../assets/flap/icon.png"

export default function Projects() {
  return <div id="projects" className="col centerChildren">
    <h1>Projects</h1>
    <ul className="col">
      <li>
        <ProjectPreview title="Inhumane Cards" dateRange="11/2022 - Present" desc="An online implementation of Cards Against Humanity" image={CardsIcon}/>
      </li>
      <li>
        <ProjectFolder title="Website Recreations" dateRange=""
          desc={ <p>
            Recreations of various websites for my project at the end of each phase at Flatiron.
            <br/>
            These were all made in a week, with 1-2 partners.
          </p> }
          projects={<>
            <ProjectPreview title="Chirp" dateRange="10/2022 - 11/2022" desc="A clone of Twitter" image="https://i.pinimg.com/originals/4c/c2/3e/4cc23e28035d3bef286c29139319c044.png"/>
            <ProjectPreview title="Yalp" dateRange="9/2022 - 10/2022" desc="A clone of Yelp" image="https://img.freepik.com/free-icon/yelp_318-193765.jpg?w=2000"/>
            <ProjectPreview title="Modrinth Clone" dateRange="8/2022 - 8/2022" desc="A clone of the Modrinth search frontend made with Pure JS and HTML" image="https://raw.githubusercontent.com/CodeF53/phase-1-project-modrinth-search/ddb9d5c772183470b602d70d31831971a9740879/assets/favicon.svg"/>
          </>}>
        </ProjectFolder>
      </li>
      <li>
        <ProjectFolder title="Minecraft Mods" dateRange="11/2021 - 7/2022"
          desc={ <p>
            Mods made for the popular Minecraft Java edition
            <br/>
            These are all QOL(quality of life), nice things to have that smooth the edges of a otherwise rough feature in the game.
          </p> }
          projects={<>
            <ProjectPreview title="Cardinal Ice Boats" dateRange="6/2022 - 7/2022" desc="Provides Several QOL Utilities for Ice Boating" image="https://cdn.modrinth.com/data/1m9s2ZhL/a4591cd24f7d52828ca964e339ad1e41ab7cf6de.png"/>
            <ProjectPreview title="For the Love of God Would You Shut Up" dateRange="4/2022 - 4/2022" desc="Reverts an annoying change related to note blocks" image="https://cdn.modrinth.com/data/hUFltDd4/icon.png"/>
            <ProjectPreview title="Horse Buff" dateRange="11/2021 - 7/2022" desc="QOL tweaks for horses" image="https://cdn.modrinth.com/data/IrrG0G8l/icon.png"/>
          </>}>
        </ProjectFolder>
      </li>
      <li>
        <ProjectPreview title="Mario Kart Mods" dateRange="3/2022 - 5/2022" desc="A set of mods that changed how Mario Kart 8 Deluxe Looked and Played" image="https://external-preview.redd.it/eQDrGAx61Azyz9TARuuDVNrQavH3TSru-EvPZjTbTmU.jpg?width=640&crop=smart&auto=webp&s=bce087a767663f35e42250fe9e60da6db1a0638a"/>
      </li>
      <li>
        <ProjectPreview title="Splitgate TriggerBot" dateRange="9/2021 - 3/2022" desc="A script made in Python that automated shooting when your crosshair is over an enemy" image="https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/cceafeaa5a753f129eb1aa664ec80a80.ico"/>
      </li>
      <li>
        <ProjectPreview title="Flappy Birb" dateRange="5/2019 - 11/2020" desc="A high quality clone of Flappy Bird, with ads, leaderboard, and achievements" image={FlapIcon}/>
      </li>
    </ul>
  </div>
}
