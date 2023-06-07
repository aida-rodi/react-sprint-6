import { ShowStory } from './components/scene/scene';
import { StyledButton } from './components/styled-components/styled-button';
import './App.css';
import { useState } from 'react';
import { story } from './assets/story';

function App() {

  const [activeSentenceId, setActiveSentenceId] = useState(1)

  const previousSentence = () => {
    if (activeSentenceId === 1) {
      setActiveSentenceId(story.length);
    } else {
      setActiveSentenceId(activeSentenceId -1)
    }
  }

  const nextSentence = () => {
    if (activeSentenceId === story.length) {
      setActiveSentenceId(1);
    } else {
      setActiveSentenceId(activeSentenceId +1)
    }
  }

  return (
    <div>
      <StyledButton onClick={ previousSentence }>Anterior</StyledButton>
      <StyledButton onClick={ nextSentence }>Següent</StyledButton>
      <ShowStory 
        activeSentence={ activeSentenceId }
      />
    </div>
  ) 
  

};

export default App;
