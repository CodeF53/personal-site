import ProjectPreview from "../components/ProjectPreview";
import ProjectFolder from "../components/ProjectFolder";

import baritoneIcon from "../assets/project-icons/baritone.png"
import flapIcon from "../assets/project-icons/flap.png"
import horsebuffIcon from "../assets/project-icons/horsebuff.png"
import iceboatIcon from "../assets/project-icons/iceboat.png"
import inhumaneCardsIcon from "../assets/project-icons/inhumane-cards.png"
import mk8Icon from "../assets/project-icons/mk8.png"
import modrinthIcon from "../assets/project-icons/modrinth.png"
import packXBRIcon from "../assets/project-icons/packxbr.png"
import splitgateIcon from "../assets/project-icons/splitgate.png"
import stfuIcon from "../assets/project-icons/stfu.png"
import testWorldIcon from "../assets/project-icons/testworld.png"
import twitterIcon from "../assets/project-icons/twitter.png"
import yelpIcon from "../assets/project-icons/yelp.png"

export default function Projects() {
  return <div id="projects" className="col centerChildren">
    <h1>Projects</h1>
    <ul className="col">
      <li>
        <ProjectPreview
          title="Inhumane Cards"
          dateRange="11/2022 - Present"
          desc="An online implementation of Cards Against Humanity"
          image={inhumaneCardsIcon}
          video="https://youtu.be/Y1EwHOdUrEI"
          site="https://inhumanecards.com"
          github="https://github.com/CodeF53/inhumane-cards/"
        />
      </li>
      <li>
        <ProjectFolder title="Website Recreations" dateRange=""
          desc={ <p>
            Recreations of various websites for my project at the end of each phase at Flatiron.
            <br/>
            These were all made in a week, with 1-2 partners.
          </p> }
          projects={<>
            <ProjectPreview
              title="Chirp"
              dateRange="10/2022 - 11/2022"
              desc="A clone of Twitter"
              image={twitterIcon}
              github="https://github.com/CodeF53/phase-4-project-chirp"
            />
            <ProjectPreview
              title="Yalp"
              dateRange="9/2022 - 10/2022"
              desc="A clone of Yelp"
              image={yelpIcon}
              site="http://yelpclone.petefowler.dev/"
              github="https://github.com/dalytimdaly/phase-3-yelp-frontend"
            />
            <ProjectPreview
              title="Modrinth Clone"
              dateRange="8/2022 - 8/2022"
              desc="A clone of the Modrinth search frontend made with Pure JS and HTML"
              image={modrinthIcon}
              site="https://codef53.github.io/phase-1-project-modrinth-search/"
              github="https://github.com/CodeF53/phase-1-project-modrinth-search"
            />
          </>}>
        </ProjectFolder>
      </li>
      <li>
        <ProjectFolder
          title="Minecraft Mods"
          dateRange="8/2021 - 7/2022"
          desc={ <p>
            Mods made for the popular Minecraft Java edition
            <br/>
            These are all QOL(quality of life), nice things to have that smooth the edges of a otherwise rough feature in the game.
            <br/>
            I am continuing to maintain these to this day
          </p> }
          projects={<>
            <ProjectPreview
              title="Quick Test World"
              dateRange="7/2022 - 8/2022"
              desc="Adds a new world type for quickly making test worlds"
              image={testWorldIcon}
              video="https://youtu.be/ptrmyV0QTWk"
              site="https://modrinth.com/mod/testworld"
              github="https://github.com/CodeF53/QuickTestWorld"
            />
            <ProjectPreview
              title="Cardinal Ice Boats"
              dateRange="6/2022 - 7/2022"
              desc="Provides Several QOL Utilities for Ice Boating"
              image={iceboatIcon}
              video="https://youtu.be/pn4UsN_QQ1w"
              site="https://modrinth.com/mod/cardinalboats"
              github="https://github.com/CodeF53/CardinalIceBoats"
            />
            <ProjectPreview
              title="For the Love of God Would You Shut Up"
              dateRange="4/2022 - 4/2022"
              desc="Reverts an annoying change related to note blocks"
              image={stfuIcon}
              video="https://youtu.be/OQ2EmVMYguU"
              site="https://modrinth.com/mod/ftlogwysu"
              github="https://github.com/CodeF53/ForTheLoveOfGodWouldYouShutUp-Fabric"
            />
            <ProjectPreview
              title="Horse Buff"
              dateRange="11/2021 - 7/2022"
              desc="QOL tweaks for horses"
              image={horsebuffIcon}
              site="https://modrinth.com/mod/horsebuff"
              github="https://github.com/CodeF53/Horse-Buff"
            />
            <ProjectPreview
              title="AltoClef"
              dateRange="8/2021 - 8/2021"
              desc="Automation Tools, I made a big pull request for migrating the project to Fabric"
              image={baritoneIcon}
              github="https://github.com/gaucho-matrero/altoclef/commit/75f9c78e0e747631ebd55b81a4c36300dc6d4e24"
            />
          </>}>
        </ProjectFolder>
      </li>
      <li>
        <ProjectPreview
          title="Mario Kart Mods"
          dateRange="3/2022 - 5/2022"
          desc="A set of mods that changed how Mario Kart 8 Deluxe Looked and Played"
          image={mk8Icon}
        />
      </li>
      <li>
        <ProjectPreview
          title="Splitgate TriggerBot"
          dateRange="9/2021 - 3/2022"
          desc="A script made in Python that automated shooting when your crosshair is over an enemy"
          image={splitgateIcon}
        />
      </li>
      <li>
        <ProjectPreview
          title="PackXBR"
          dateRange="5/2020 - 5/2022"
          desc="A utility for automatic application of the XBR scaling algorithm to game textures."
          image={packXBRIcon}
          video="https://user-images.githubusercontent.com/37855219/165995159-6b8c2c81-4f74-4c7b-be39-377ad06bcea6.mp4"
          github="https://github.com/CodeF53/PackXBR"
        />
      </li>
      <li>
        <ProjectPreview
          title="Flappy Birb"
          dateRange="5/2019 - 11/2020"
          desc="A high quality clone of Flappy Bird, with ads, leaderboard, and achievements"
          image={flapIcon}
        />
      </li>
    </ul>
  </div>
}
