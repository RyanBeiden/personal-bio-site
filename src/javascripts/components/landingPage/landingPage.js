import utils from '../../helpers/utils';
import projects from '../projects/projects';
import './landingPage.scss';
import '../../../styles/main.scss';

let domString = '';

const buildLandingPage = () => {
  domString += `
    <div class="socials">
      <a href="https://github.com/RyanBeiden" target="_blank"><i class="fab fa-github"></i></a>
      <a href="https://www.instagram.com/ryanbeiden" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
    <nav class="landing-page">
      <h1>Ryan Beiden</h1>
      <h3>Software Developer | Travel Photographer | Culture Enthusiast</h3>
      <ul class="button-group">
        <span style="margin: 20px;"><a id="bio"><li>Bio</li></a></span>
        <span style="margin: 20px;"><a id="tech"><li>Technologies</li></a></span>
        <span style="margin: 20px;"><a id="proj"><li>Projects</li></a></span>
      </ul>
    </nav>
  `;
  utils.printToDom('#web-page', domString);
  $('body').on('click', '#proj', projects.buildProjectCards);
};

export default { buildLandingPage };
