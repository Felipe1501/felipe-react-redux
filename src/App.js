import logo from './logo.svg';
import './App.css';
import Average from './components/Average';
import Sum from './components/Sum';
import Sorteio from './components/Sorteio';
import Interval from './components/Interval';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
        <Interval >
          VERMELHO
        </Interval> 



      </div>
      <div className='linha'>
      <Average></Average>
      <Sum></Sum>
      <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
