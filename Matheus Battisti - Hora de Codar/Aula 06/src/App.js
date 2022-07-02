import './App.css';
import Componente from '../components/first_component'
import Nome from '../components/nome'
import Pessoa from '../components/pessoa'
import Frase from '../components/frase'

function App() {

  const nome = 'Ramos'

  return (
    <div className="App">

      <h1>Texto de Teste</h1>
      <Frase/>
      <Componente/>
      <Nome nome='Ademir'/>
      <Nome nome_dois={nome}/>
      <Pessoa nome='Ademir' idade={99} peso={99}/>
    
    </div>
  );
}

export default App;
