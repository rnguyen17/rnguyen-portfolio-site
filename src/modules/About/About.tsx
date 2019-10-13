import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from 'utils/colors';
const imageSvg = require('assets/icons/responsive-design-symbol.svg');
import { WrenchIcon } from 'icons/WrenchIcon';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const LANGUAGES = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'Svelte',
  'Python (Basic)',
  'Java (Basic)',
  'Kotlin (Basic)',
];

const FRAMEWORKS = [
  'jQuery',
  'React/Redux',
  'Angular 5+',
  'Vue',
  'Node JS',
  'Next.js',
  'Svelte/Sapper',
  'Jest',
  'Cypress',
];

const BUILD_TOOLS = [
  'Gulp.js',
  'Webpack',
  'Git',
  'Jenkins',
  'AWS',
  'Docker',
  'Gradle',
  'Kubernetes',
  'Cloud Formation',
];

const AboutWrapper = styled.section`
  position: relative;
  padding: 60px 0 0;
  width: 100%;

  &:after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 26.5rem;
    background: ${colors.LIGHT_GREEN};
  }
`;

const Divider = styled.hr`
  width: 35%;
  margin: 1.5rem 0;
`;

const AboutContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

const AboutName = styled.h2`
  margin-bottom: 0.5rem;
  color: ${colors.SECONDARY};
  font-size: 3rem;
`;

const AboutInfo = styled.span`
  display: block;
  font-size: 1.5rem;
  line-height: 2.2rem;
  font-style: italic;
  color: ${colors.GRAY};
  max-width: 900px;
`;

const SkillsCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 550px;
  grid-gap: 2rem;
  margin: 3rem 0 6rem;
`;

class SkillsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting) {
        const children = entries[0].target.children;

        for (var i = 0; i < children.length; i++) {
          children[i].style.transitionDelay = `${0.1 * i}s`;
          children[i].style.transform = 'translateY(0)';
          children[i].style.opacity = 1;
        }
      }
    };
    const observer = new IntersectionObserver(callback, { threshold: 1 });
    observer.observe(this.ref.current);
  }

  render() {
    return <SkillsCardContainer ref={this.ref}>{this.props.children}</SkillsCardContainer>;
  }
}

const SkillsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: -1px -1px 10px 1px rgba(32, 35, 43, 0.3);
  background: ${colors.WHITE};
  padding: 2.5rem 1rem;
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.3s ease-in-out;
`;

const SkillCardTitle = styled.h3`
  color: ${colors.PRIMARY};
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const SkillList = styled.ul`
  padding: 0;
  width: 35%;
`;

const SkillListItem = styled.li`
  color: ${colors.GRAY};
  margin-bottom: 1rem;
  width: 100%;
`;

export const About = () => (
  <AboutWrapper id="about">
    <AboutContainer>
      <AboutName>Hi, I'm Richard Nguyen</AboutName>
      <AboutInfo>
        I am a full-stack software engineer based out of Austin, TX. With over 5 years of experience
        developing enterprise-level applications, I work tirelessly to deliver beautiful user
        interfaces to consumers and businesses alike.
      </AboutInfo>
      <SkillsContainer className="billy-bob">
        <SkillsCard>
          <WrenchIcon size={50} color={colors.PRIMARY} />
          <SkillCardTitle>Languages</SkillCardTitle>
          <Divider />
          <SkillList>
            {LANGUAGES.map(language => (
              <SkillListItem className="skill" key={language}>
                {language}
              </SkillListItem>
            ))}
          </SkillList>
        </SkillsCard>
        <SkillsCard>
          <WrenchIcon size={50} color={colors.PRIMARY} />
          <SkillCardTitle>Frameworks</SkillCardTitle>
          <Divider />
          <SkillList>
            {FRAMEWORKS.map(framework => (
              <SkillListItem className="skill" key={framework}>
                {framework}
              </SkillListItem>
            ))}
          </SkillList>
        </SkillsCard>
        <SkillsCard>
          <WrenchIcon size={50} color={colors.PRIMARY} />
          <SkillCardTitle>Build Tools & Testing</SkillCardTitle>
          <Divider />
          <SkillList>
            {BUILD_TOOLS.map(tool => (
              <SkillListItem className="skill" key={tool}>
                {tool}
              </SkillListItem>
            ))}
          </SkillList>
        </SkillsCard>
      </SkillsContainer>
    </AboutContainer>
  </AboutWrapper>
);
