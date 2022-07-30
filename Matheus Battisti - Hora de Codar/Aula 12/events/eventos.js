import Button from './button'

export default function Evento() {
	return(

		function meuEvento() {
			console.log(`Ativando o primeiro evento.`)
		}

		function segundoEvento() {
			console.log('Ativando o segundo evento.')
		}

		<div>

			<p>Clique aqui para disparar um evento.</p>

			<Button event={meuEvento} text="Primeiro evento."/>
			<Button event={segundoEvento} text="Segundo evento."/>

		</div>

	)
}
