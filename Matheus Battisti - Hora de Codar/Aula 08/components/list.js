import Item from './item'

export function List() {
    return(
        <>
        
            <h1>Minha Lista</h1>

            <ul>

                <Item marca="Ferrari" ano={1985} lançamento={1985}/>
                <Item marca="Fiat" ano={1964} lançamento={1964}/>
                <Item marca="Renault"/>
                <Item ano="1969"/>
                
                {/*A ausência da propriedade "marca" gerará um erro no navegador.*/}
                {/*A propriedade "ano", recebendo uma "string", também gerará um erro.*/}

                <Item/>

                {/*O conteúdo visto nesta aula serve como uma ferramenta navita do React para uma pequena validação de dados.*/}

            </ul>
        
        </>
    )
}

export default List();
