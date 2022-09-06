import {useState} from 'react'

function Condicional() {

	const [email, set_email] = useState()
	const [userEmail, set_userEmail] = useState()

	function enviarEmail(e) {
		e.preventDefault()
		set_userEmail(email)

		console.log(userEmail)
	}

	function limparEmail() {
		set_userEmail('')
	}

	return(
		<div>

			<h1>Cadastro o seu e-mail:</h1>

			<form action="">

				<input type="email" placeholder="Digite o seu e-mail aqui">
				<button type="submit" onClick={enviarEmail} onChange={(e) => {set_email(e.target.value)}}>Enviar E-mail</button>

				{userEmail && ( //Pesquisar.
					<p>O e-mail do usuário é: {userEmail}.</p>

					<button onClick={limparEmail}>Limpar E-mail</button>
				)}

			</form>

		</div>
	)
}

export default Condicional;
