import './App.css';
import { useState } from 'react';
import { story } from './assets/story';
import { ShowStory } from './components/scene';
import { SceneBackground } from './styled-components/scene-background';
import { SceneButton } from './styled-components/scene-buttons';
import { WelcomeScreen } from './components/welcomeScreen';
import { WelcomeScreenBackground } from './styled-components/welcomeScreen-background';
import { WelcomeScreenButton } from './styled-components/welcomeScreen-button';

function App() {
  const [welcomeScreen, showWelcomeScreen] = useState(true);
  const [activeSentenceId, setActiveSentenceId] = useState(1);

  const hideScreen = () => {
    showWelcomeScreen(false);
  };

  const previousSentence = () => {
    activeSentenceId === 1 ?
    setActiveSentenceId(story.length) :
    setActiveSentenceId(activeSentenceId - 1)
  };

  const nextSentence = () => {
    activeSentenceId === story.length ?
    setActiveSentenceId(1) :
    setActiveSentenceId(activeSentenceId + 1)
  };

  return (
    <>
      {welcomeScreen ? (
        <WelcomeScreenBackground>
          < WelcomeScreen/>
          <WelcomeScreenButton onClick={ hideScreen }>Començar</WelcomeScreenButton>
        </WelcomeScreenBackground>
      ) : (
        <SceneBackground img={`${story[activeSentenceId -1].image}`} >
          <SceneButton onClick={ previousSentence }>Anterior</SceneButton>
          <SceneButton onClick={ nextSentence }>Següent</SceneButton>
          <ShowStory activeSentence={ activeSentenceId } />
        </SceneBackground>
      )}
    </>
  );
}

export default App;
