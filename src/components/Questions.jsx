






import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { soruData } from '../helpers/Data';
import { Container, Row, Col } from 'react-bootstrap';
// import './Questions.css'; // Import CSS file for styling

function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleNextButton = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  return (
    <Container className='main-container' >
      <Row>
        {soruData.map(({ id, num, resim, soru, a, b, c, d, interview, cevap }) => (
          <Col xs={4} sm={4} md={3} lg={2} key={id}>
            <Card className='question-card' style={{ width: '20rem', gap: '1rem' }}>
              <img className='question-image' src={resim} alt='' />
              <Card.Body>
                <Card.Title>Question NO: {num}</Card.Title>
                <Card.Text>{soru}</Card.Text>
                <Button variant='primary' onClick={() => handleAnswerClick(a === cevap)}>
                  {a}
                </Button>
                <Button variant='primary' onClick={() => handleAnswerClick(b === cevap)}>
                  {b}
                </Button>
                <Button variant='primary' onClick={() => handleAnswerClick(c === cevap)}>
                  {c}
                </Button>
                <Button variant='primary' onClick={() => handleAnswerClick(d === cevap)}>
                  {d}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button id='next-btn' onClick={handleNextButton}>
        {currentQuestionIndex < soruData.length - 1 ? 'Next' : 'Play Again'}
      </Button>
      {currentQuestionIndex === soruData.length - 1 && (
        <div className='score'>
          Your Score: {score} / {soruData.length}
        </div>
      )}
    </Container>
  );
}

export default Questions;






// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { soruData } from '../helpers/Data';
// import { Container, Row, Col } from 'react-bootstrap';

// function Questions() {
//   const [flippedCard, setFlippedCard] = useState(null);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);

//   const handleCardClick = (id) => {
//     setFlippedCard(id);
//   };

//   const handleAnswerClick = (answer, correctAnswer) => {
//     setSelectedAnswer(answer === correctAnswer ? 'correct' : 'incorrect');
//   };

//   const resetSelection = () => {
//     setFlippedCard(null);
//     setSelectedAnswer(null);
//   };

//   return (
//     <Container className='main-container'>
//       <Row>
//         {soruData.map(({ id, num, soru, a, b, c, d, img, resim, interview, cevap }) => (
//           <Col xs={4} sm={4} md={3} lg={2} key={id}>
//             <div onClick={() => handleCardClick(id)}>
//               <Card style={{ width: '20rem', gap: '1rem' }}>
//                 <Card.Img variant="top" src={resim} />
//                 <Card.Body style={{ display: flippedCard === id ? 'block' : 'none' }}>
//                   <Card.Title>Question NO: {num}</Card.Title>
//                   <Card.Text>{soru}</Card.Text>
//                   <img src={img} alt="" className='' style={{ width: '100%' }} />
//                   <p>{interview}</p>
//                   <Button
//                     variant={selectedAnswer === 'correct' ? 'success' : 'primary'}
//                     onClick={() => handleAnswerClick('a', cevap)}
//                   >
//                     {a}
//                   </Button>
//                   <Button
//                     variant={selectedAnswer === 'correct' ? 'success' : 'primary'}
//                     onClick={() => handleAnswerClick('b', cevap)}
//                   >
//                     {b}
//                   </Button>
//                   <Button
//                     variant={selectedAnswer === 'correct' ? 'success' : 'primary'}
//                     onClick={() => handleAnswerClick('c', cevap)}
//                   >
//                     {c}
//                   </Button>
//                   <Button
//                     variant={selectedAnswer === 'correct' ? 'success' : 'primary'}
//                     onClick={() => handleAnswerClick('d', cevap)}
//                   >
//                     {d}
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </div>
//           </Col>
//         ))}
//       </Row>
//       <Button onClick={resetSelection}>Reset</Button>
//     </Container>
//   );
// }

// export default Questions;







// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { soruData } from '../helpers/Data';
// import CardText from 'react-bootstrap/esm/CardText';
// import CardBody from 'react-bootstrap/esm/CardBody';
// import { Container, Row, Col } from 'react-bootstrap';

// function Questions() {
//   return (
//     <Container className='main-container'>
//       <Row>
//         {soruData.map(({ id, num, soru, a, b, c, d, img, resim, interview, cevap }) => (
//           <Col xs={4} sm={4} md={3} lg={2} key={id}>
//             <Card style={{ width: '20rem',gap:'1rem' }}>
//               <Card.Img variant="top" src={resim} />
//               <Card.Body>
//                 <Card.Title>Question NO: {num}</Card.Title>
//                 <Card.Text>{soru}</Card.Text>
//                 <img src={img} alt="" className='' style={{ width: '100%' }} />
//                 <p>{interview}</p>
//                 <Button variant="primary">{a}</Button>
//                 <Button variant="primary">{b}</Button>
//                 <Button variant="primary">{c}</Button>
//                 <Button variant="primary">{d}</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default Questions;
