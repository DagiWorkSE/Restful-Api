import React,{Fragment} from 'react';
import './App.css';
import Inputtodo from './Components/input';
import Listtodo from './Components/list';

function App() {
  return (
    <Fragment>
      <div className='container mt-5'>
        <Inputtodo/>
        <Listtodo/>
      </div>
    </Fragment>
  );
}

export default App;
