function Result({ feedback }) {
  if (typeof feedback !== 'string') {
    return null; 
  }
  return <>
    <p
      id="resultado"
      style={{
        color: feedback.includes('correta') ? 'green' : 'red',
        fontSize: '20px',
        minHeight: '50px',
        marginTop: '20px',
      }}
    >
      {feedback}
    </p>
  </>
}

export default Result