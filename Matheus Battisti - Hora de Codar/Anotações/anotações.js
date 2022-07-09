/*

	Anotações:

	- Como manipular o DOM em React:

	* O primeiro passo é importar o "useRef": import React, {useRef} from 'react';

	* Depois se cria uma "const" que armazene o "useRef": const containerRef = useRef();

	* Então a "const" com "useRef" é passada para o elemento em que se deseja fazer alterações: "<div ref={container}></div>";

	* Também é preciso usar o "hook" "useLayoutEffect" para acessar o valor passado para o container que se deseja manipular;

	* O "hook" mencionado no comentário acima é executado a cada vez que o container for atualizado;

	* A seguir, se cria uma função para ULE e lá serão feitas as alterações: useLayoutEffect(() => {
		
		console.log(containerRef.current)

	}).

	Manipular DOM através do React: https://youtu.be/Y4eLtNOuKak

	Manipular DOM através do React (vídeo 2): https://youtu.be/Rmpz99Aj2EQ

*/
