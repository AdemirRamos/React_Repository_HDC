import React, {useState} from 'react'

//Outra maneira de importar "useState": import {useState} from 'react'.

export default function From() {

	const [nome, set_nome] = useState('Ademir')
	const [senha, set_senha] = useState()

	function cadastrarUsuário(e) {
		e.preventDefault() //"preventDefault()" impede que um determinado elemento execute a sua função padrão.
		console.log('Usuário cadastrado com sucesso!')

		console.log(`Usuário: ${nome} | Senha: ${senha}.`)
	}

	return(

		<div>

			<h1>Meu Cadastro</h1>

			<form action="" onSubmit={cadastrarUsuário}>

				<div>

					<p><label>Nome: </label htmlFor="nome"><input type="text" id="nome" name="nome" placeholder="Digite o seu nome." onChange={(e) => set_nome(e.target.value)} /*valie={nome}*/></p>
					<p><label>Senha: </label htmlFor="senha"><input type="password" id="senha" name="senha" placeholder="Digite a sua senha aqui." onChange={(e) => set_senha(e.target.value)></p>
					<p><input type="submit" value="Cadastrar"></p>

					/*O atributo "for", de "label", em React, se torna "htmlFor" por conta do "for" do JS.*/
					/*O valor de "value" define o estado inicial do "input".*/

				</div>

			</form>

		</div>

	)
}
