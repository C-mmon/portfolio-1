import React, { useContext } from 'react';
import Helmet from 'react-helmet-async';
import styled from 'styled-components/macro';
import ProgressiveImage from '../components/ProgressiveImage';
import { useScrollToTop } from '../utils/Hooks';
import Footer from '../components/Footer';
import {
  ProjectContainer, ProjectSection, ProjectSectionContent, ProjectImage,
  ProjectSectionHeading/*, ProjectSectionText*/, ProjectBackground, ProjectHeader, ProjectFooter
} from '../components/Project';
import { Media } from '../utils/StyleUtils';
import { AppContext } from '../app/App';
import placeholder2 from '../assets/placeholder.png';
import background from '../assets/BellsGC/background.webp';
import render from '../assets/BellsGC/BellsGC.png';
import renderPlaceholder from '../assets/BellsGC/BellsGCPlaceholder.png';
import branding from '../assets/BellsGC/branding.png';
import splash from '../assets/BellsGC/Splash.png';
import home from '../assets/BellsGC/Home.png';
import store from '../assets/BellsGC/Store.png';
import events from '../assets/BellsGC/Events.png';
import about from '../assets/BellsGC/About.png';
const prerender = navigator.userAgent === 'ReactSnap';
const title = 'Bell\'s GC';
const description = 'A website featuring a storefront, events calendar, and games\' dashboard for a local game store.';
const roles = [
  'Front-end Development',
  'Back-end Development',
  'Visual Design',
  'UI / UX Design',
  'Branding & Identity',
  'Creative Direction',
];

function Robotics(props) {
  const { status } = useContext(AppContext);
  useScrollToTop(status);

  return (
    <React.Fragment>
      <Helmet
        title={`Projects | ${title}`}
        meta={[{ name: 'description', content: description, }]}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${background} 1000w, ${background} 1920w`}
          opacity={0.8}
          entered={!prerender}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://bells.gq"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage entered={!prerender}>
              <ProgressiveImage
                srcSet={`${render} 800w, ${render} 1920w`}
                placeholder={renderPlaceholder}
                alt=""
                sizes={`(max-width: ${Media.mobile}) 100vw, (max-width: ${Media.tablet}) 90vw, 80vw`}
              />
            </ProjectImage>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <SidebarImagesText>
              <ProjectSectionHeading>Visual Identity</ProjectSectionHeading>
            </SidebarImagesText>
            <SidebarImages>
              <SidebarImage
                srcSet={`${branding}`}
                placeholder={placeholder2}
                alt=""
                sizes={`(max-width: ${Media.mobile}) 500px, (max-width: ${Media.tablet}) 800px, 1000px`}
              />
            </SidebarImages>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Website</ProjectSectionHeading>
            </ProjectTextRow>
            <ProgressiveImage
              srcSet={`${splash} 800w, ${splash} 1440w`}
              placeholder={placeholder2}
              alt=""
              sizes={`(max-width: ${Media.mobile}) 500px, (max-width: ${Media.tablet}) 800px, 1000px`}
            />
            <ProgressiveImage
              srcSet={`${home} 800w, ${home} 1440w`}
              placeholder={placeholder2}
              alt=""
              sizes={`(max-width: ${Media.mobile}) 500px, (max-width: ${Media.tablet}) 800px, 1000px`}
            />
            <ProgressiveImage
              srcSet={`${store} 800w, ${store} 1440w`}
              placeholder={placeholder2}
              alt=""
              sizes={`(max-width: ${Media.mobile}) 500px, (max-width: ${Media.tablet}) 800px, 1000px`}
            />
            <ProgressiveImage
              srcSet={`${events} 800w, ${events} 1440w`}
              placeholder={placeholder2}
              alt=""
              sizes={`(max-width: ${Media.mobile}) 500px, (max-width: ${Media.tablet}) 800px, 1000px`}
            />
            <ProgressiveImage
              srcSet={`${about} 800w, ${about} 1440w`}
              placeholder={placeholder2}
              alt=""
              sizes={`(max-width: ${Media.mobile}) 500px, (max-width: ${Media.tablet}) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectFooter
          title='Bell&#39;s Gaming Center'
          url="/#work"
        />
      </ProjectContainer>
      <Footer />
    </React.Fragment>
  );
}

const ProjectTextRow = styled.div`
  max-width: 660px;
  align-self: center;
  margin-bottom: 80px;
`;

const ProjectSectionColumns = styled(ProjectSectionContent)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 70px;
  margin: 20px 0 60px;

  @media (max-width: ${Media.tablet}) {
    grid-template-columns: 1fr;
    margin: 0 0 60px;
  }
`;

/*const ProjectSectionGrid = styled(ProjectSectionContent)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 70px;
  margin: 40px 0;

  @media (max-width: ${Media.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectSectionGridBackground = styled.div`
  grid-column: 1;
  grid-row: 1;

  @media (max-width: ${Media.tablet}) {
    padding: 0 120px;
  }

  @media (max-width: ${Media.mobile}) {
    padding: 0 60px;
  }
`;

const ProjectSectionGridText = styled.div`
  padding-top: 80px;

  @media (max-width: ${Media.desktop}) {
    padding-top: 40px;
  }

  @media (max-width: ${Media.tablet}) {
    padding-top: 0;
  }
`;*/

const SidebarImages = styled.div`
  display: grid;
/*  grid-template-columns: repeat(6, [col] 1fr);*/
  align-items: center;

  @media (max-width: ${Media.tablet}) {
    padding: 0 80px;
    margin-top: 60px;
  }

  @media (max-width: ${Media.mobile}) {
    padding: 0 20px;
    margin-top: 40px;
  }
`;

const SidebarImagesText = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding-right: 10px;

  @media (max-width: ${Media.tablet}) {
    padding-right: 0;
  }
`;

const SidebarImage = styled(ProgressiveImage)`
  &:first-child {
    grid-column: col 1 / span 4;
    grid-row: 1;
    position: relative;
    top: 5%;
  }

  &:last-child {
    grid-column: col 3 / span 4;
    grid-row: 1;
    position: relative;
    top: -5%;
  }
`;

export default Robotics;