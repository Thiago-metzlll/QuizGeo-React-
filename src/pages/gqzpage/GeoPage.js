import { useState } from 'react';
import './Geoquiz.css';
import ContainerPoints from './components/container/ContainerPoints';
import QuizBlock from './components/container/QuizBlock';
import quizData from './components/QuestionsArray';




function GeoquizPage() {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);

  const pergunta = quizData[perguntaAtual];

  const handleRespostaClick = (index) => {
    if (respostaSelecionada !== null) return;

    setRespostaSelecionada(index);
    if (index === pergunta.correta) {
      setPontuacao((prev) => prev + 1);
      setFeedback("✅ Resposta correta!");
    } else {
      setFeedback("❌ Resposta errada.");
    }
  };

  const handleProxima = () => {
    setRespostaSelecionada(null);
    setFeedback('');
    if (perguntaAtual + 1 < quizData.length) {
      setPerguntaAtual(perguntaAtual + 1);
    } else {
      setMostrarResultado(true);
    }
  };


  return (
    <div className="App">
      <main>
        {!mostrarResultado ? (
          <QuizBlock
            pergunta={pergunta}
            respostaSelecionada={respostaSelecionada}
            handleRespostaClick={handleRespostaClick}
            handleProxima={handleProxima}

            feedback={feedback} />
        ) : (
          <ContainerPoints pontuacao={pontuacao} total={quizData.length} />
        )}
      </main>
    </div>
  );
}

export default GeoquizPage;
