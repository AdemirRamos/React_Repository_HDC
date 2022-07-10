export default function Evento({number}) {
	return(

		function meuEvento() {
			console.log(`Evento ativado com sucesso. - Número passado: ${number}`)
		}

		<div>

			<p>Clique aqui para disparar um evento.</p>
			<button onClick={meuEvento}>Ativar</button>

		</div>

	)
}
