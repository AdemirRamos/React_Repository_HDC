import React from 'react'

export default function From() {

	function cadastrarUsuário(e) {
		e.preventDefault() //"preventDefault()" impede que um determinado elemento execute a sua função padrão.
		console.log('Usuário cadastrado com sucesso!')
	}

	return(

		<div>

			<h1>Meu Cadastro</h1>

			<form action="" onSubmit={cadastrarUsuário}>

				<div>

					<p><label>Nome</label><input type="text" placeholder="Digite o seu nome."></p>
					<p><input type="submit" value="Cadastrar"></p>

				</div>

			</form>

		</div>

	)
}
