import { story } from '../assets/story';
import { SceneSentencesDiv } from '../styled-components/sceneSentences-div';
import { FC } from 'react';

interface Props {
  activeSentence: number
}

export const ShowStory:FC<Props> = ({ activeSentence }) => {
  return (
    <>
      {
        story.map(( sentence ) => (
          <SceneSentencesDiv key={ sentence.id } className={ sentence.id === activeSentence? 'active' : 'inactive' }>
            <h3>{ sentence.text }</h3>
          </SceneSentencesDiv>
        ))
      }
    </>
  )
}