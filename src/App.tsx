// import { useState } from 'react';
import { showStory } from './components/scene/scene';
import './App.css';

function App() {

  return (
    showStory()
  );
/*   const [currentSize, setCurrentSize] = useState('');

  return(
    <div>
      <h1>Talla seleccionada: { currentSize }</h1>
      <SizeSelector
        selectedSize={ currentSize }
        onSizeChange={ (size) => setCurrentSize(size) }
      />
    </div>
  ); */
  
}

export default App
