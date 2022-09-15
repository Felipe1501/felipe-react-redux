import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
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
      <Card title="Card 2" blue>
          AZUL
        </Card> 
        <Card title="Card 3" green>
         VERDE
        </Card>
        <Card title="Card 4" purple>
          ROXO
        </Card>


      </div>
    </div>
  );
}

export default App;
