import React from 'react'
import './App.css'
import Evento from './events/eventos'
import Form from './components/form'

export default function App() {
	return(
		<div>

			<h1>Testando Eventos</h1>

			<Evento/>
			<Form/>

		</div>
	)
}
