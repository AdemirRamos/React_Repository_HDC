import propTypes from 'prop-types'

export default function Item(marca, ano, lançamento) {
    return(
        <>
        
            <li>{marca} - {ano} - {lançamento}</li>
            <p>Teste.</p>
        
        </>
    )
}

Item.propTypes = { //Além de se definir o tipo de uma "props", também se pode definir se ela será mandatória ou não ("isRequired"):
    marca: propTypes.string.isRequired,
    ano: propTypes.number,
    lançamento: propTypes.number
}

//Definindo valores padrões para propriedades:

Item.defaultProps = {
    marca: 'Marca ausente.',
    ano: 0,
    lançamento: 0
}
