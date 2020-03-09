import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { colors } from 'utils/colors';
import { spacing } from 'utils/spacing';
import { WrenchIcon } from 'icons/WrenchIcon';

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

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 550px;
  grid-gap: ${spacing.XLARGE};
  margin: 3rem 0 6rem;
`;

const Card = styled.div<{ delay: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1rem;
  height: 100%;
  width: 100%;
  background: ${colors.WHITE};
  border-radius: 20px;
  box-shadow: -1px -1px 10px 1px rgba(32, 35, 43, 0.3);
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.3s ease-in-out;
  transition-delay: ${({ delay = 0 }) => `${delay}ms`};

  &.fade-enter {
    opacity: 0;
    transform: translateY(100px);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateY(0);
  }
  &.fade-enter-done {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CardTitle = styled.h3`
  margin-top: ${spacing.SMALL};
  color: ${colors.PRIMARY};
  font-size: ${spacing.LARGE};
`;

const CardList = styled.ul`
  padding: 0;
  width: 35%;
`;

const CardListItem = styled.li`
  margin-bottom: ${spacing.MEDIUM};
  width: 100%;
  color: ${colors.GRAY};
`;

const Divider = styled.hr`
  width: 35%;
  margin: 1.5rem 0;
`;

const skillsCardsData = [
  {
    Icon: WrenchIcon,
    title: 'Languages',
    skills: LANGUAGES,
  },
  {
    Icon: WrenchIcon,
    title: 'Frameworks',
    skills: FRAMEWORKS,
  },
  {
    Icon: WrenchIcon,
    title: 'Build Tools & Testing',
    skills: BUILD_TOOLS,
  },
];

interface CardDataProps {
  Icon: React.FunctionComponent<SvgProps>;
  title: string;
  skills: string[];
}

export const SkillsCardsContainer = () => {
  const [showCards, toggleShowCards] = React.useState(false);
  const containerRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    const target = containerRef.current as Element;
    const onContainerIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries.length && entries[0] && entries[0].isIntersecting) {
        toggleShowCards(true);
      } else {
        toggleShowCards(false);
      }
    };

    const containerObserver = new IntersectionObserver(onContainerIntersection, {
      threshold: 0.4,
    });
    containerObserver.observe(target);

    return () => {
      if (target) {
        containerObserver.unobserve(target);
      }
    };
  });

  const renderCards = (skillsCardsData: CardDataProps[]) => {
    return skillsCardsData.map(({ Icon, title, skills }: CardDataProps, index: number) => {
      return (
        <CSSTransition
          key={title}
          classNames="fade"
          mountOnEnter
          in={showCards}
          timeout={300 + 100 * index}
        >
          <Card delay={100 * index}>
            <Icon size={50} color={colors.PRIMARY} />
            <CardTitle>{title}</CardTitle>
            <Divider />
            <CardList>
              {skills.map(skill => (
                <CardListItem className="skill" key={skill}>
                  {skill}
                </CardListItem>
              ))}
            </CardList>
          </Card>
        </CSSTransition>
      );
    });
  };

  return <Wrapper ref={containerRef}>{renderCards(skillsCardsData)}</Wrapper>;
};
