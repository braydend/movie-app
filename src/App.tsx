import React from 'react';
import './App.css';
import Wrapper, { Variant as WrapperVariants} from './styled-components/Wrapper';
import ApiProvider from './utils/ApiProvider';
import Movies from './components/Movies';

function App() {
  return (
    <ApiProvider>
      <Wrapper variant={WrapperVariants.Yellow}>
        <Movies />
      </Wrapper>
    </ApiProvider>
  );
}

export default App;
