import type { FC } from 'react';
import './App.css';

type PropsTypes = {
  name: string;
};

const App: FC<PropsTypes> = ({ name }) => {
  return (
    <>
      <button
        className='py-2 px-4 bg-black text-white rounded-md'
        onClick={() => console.log('test react comp')}
      >
        This is React 1 {name}
      </button>
    </>
  );
};

export default App;
