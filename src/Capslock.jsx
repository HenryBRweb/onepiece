    //props vai chamar a propriedade
function Capslock(props) {
    //Criando uma constante e recebendo os valores dos componentes
    const TextoInserido = props.children;

    //Tag HTML pra deixar maiúsculo
    const TextoFinalizado = TextoInserido.toUpperCase()

    //Rotornando na tela
    return (
        <>
        <h1>{TextoFinalizado}</h1>
        </>
    )
}

export default Capslock;