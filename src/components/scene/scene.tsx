import { story } from '../../assets/story';
import { StyledDiv } from '../styled-components/styled-div';

export function showStory() {
  return story.map((sentence) => (
    <StyledDiv>
      <h3>{sentence}</h3>
    </StyledDiv>
  ));
}