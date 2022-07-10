import React from 'react'
import './App.css'
import Evento from './components/eventos'
import Form from './components/form'

export default function App() {
	return(
		<div>

			<h1>Testando Eventos</h1>

			<Evento number="1"/>
			<Evento number="2"/>
			<Form/>

		</div>
	)
}
