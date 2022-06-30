import './App.css';
import Componente from '../components/first_component'

function App() {

    const name = 'Ademir'
    const new_name = name.toUpperCase()
    
    function soma(a, b) {
        return a + b
    }

    const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">

      <Componente/>

      <h1>Olá, React!</h1>
      <p>Meu primeiro App. {`${name}) | ${new_name}.`}</p>
      <p>Soma: {2 + 2}</p>
      <p>Soma: {soma(2, 4)}</p>
      <img src={url} alt='Uma imagem qualquer.'/>
    
    </div>
  );
}

export default App;
