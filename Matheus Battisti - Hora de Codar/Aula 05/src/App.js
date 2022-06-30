import './App.css';
import Componente from '../components/first_component'
import Nome from '../components/nome'
import Pessoa from '../components/pessoa'

function App() {

  const nome = 'Ramos'

  return (
    <div className="App">

      <Componente/>
      <Nome nome='Ademir'/>
      <Nome nome_dois={nome}/>
      <Pessoa nome='Ademir' idade={99} peso={99}/>
    
    </div>
  );
}

export default App;
