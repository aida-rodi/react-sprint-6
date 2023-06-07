import { story } from '../../assets/story';
import { StyledDiv } from '../styled-components/styled-div';
import { FC } from 'react';

interface Props {
  activeSentence: number
}

export const ShowStory:FC<Props> = ({ activeSentence }) => {
  return (
    <div>
      {
        story.map((sentence) => (
          <StyledDiv className={ sentence.id === activeSentence? 'active' : '' }>
            <h4>{sentence.text}</h4>
          </StyledDiv>
        ))
      }
    </div>
  )
}