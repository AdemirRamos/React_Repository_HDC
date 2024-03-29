function Lista({itens}) {
	return(
		<>

			<h1>Lista de Coisas:</h1>

			{
				itens.length > 0 ? (
				itens.map((item, index) => {
					<p key={index}>{item}</p>
				}) : (
					<p>Não há itens na lista.</p>
				))
			}

		</>
	)
}

export default Lista()
