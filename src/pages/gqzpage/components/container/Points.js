function Points({ pontuacao, quizData }) {
  if (typeof pontuacao !== 'number' || !Array.isArray(quizData)) {
    return null; 
  }
    
return<>
 <p id="pontuacao-final" style={{ fontSize: '24px' }}>
              Você acertou {pontuacao} de {quizData.length} perguntas!
            </p>
</>
}

export default Points