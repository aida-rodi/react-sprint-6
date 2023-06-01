// import { FC } from 'react';
import { story } from '../../assets/story';

export function showStory() {
  return (
        story.map((sentence) => (
            <div style={ {display: 'flex'} }>
              <h3>{sentence}</h3>
            </div>
        ))
  );
};

// EXAMPLE
/* const possibleSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

interface Props {
    selectedSize: string;
    onSizeChange: ( size: string ) => void;
}

export const SizeSelector: FC<Props> = ({ selectedSize, onSizeChange }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {
        possibleSizes.map((size) => (
            <button 
                key={size}
                className={ selectedSize === size ? 'active' : '' }
                onClick={ () => onSizeChange( size ) }
            >
                { size }
            </button>
        ))
      }
    </div>
  );
}; */