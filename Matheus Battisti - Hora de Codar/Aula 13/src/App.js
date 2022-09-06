import './App.css'
import Lista from '../components/lista'

export default function App() {

	const meusItens = ['React', 'Vue', 'Angular', {framework: 'X', alunos: 23}]

	return(
		<div className="App">

			<h1>Renderização de Listas</h1>
			<Lista Item={meusItens}/>
			<Lista Item={}/>

		</div>
	)
}
