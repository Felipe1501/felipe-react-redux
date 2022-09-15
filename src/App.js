import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
        <Card title="Card 1" red>
          VERMELHO
        </Card> 
        <Card title="Card 2" blue>
          AZUL
        </Card> 


      </div>
      <div className='linha'>
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
