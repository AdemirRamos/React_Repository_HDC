export default function Pessoa({nome, idade, peso}) {
    //É possível usar, no lugar de "props", já os atributos recebidos de outro componente.

    return(
        <>
        
            <p>Nome: {nome} | Idade: {idade} | Peso: {peso}.</p>
        
        </>
    )
}
