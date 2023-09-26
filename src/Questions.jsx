import { useState } from 'react';
import { questions } from './data';

import SingleQuestion from './SingleQuestion';

function Questions() {
  const [activeId, setActiveId] = useState(null);

  const handleActiveId = (id) => {
    if (id === activeId) {
      setActiveId(null);
      return;
    }
    setActiveId(id);
  };
  return (
    <section className='questions' id='questions'>
      <div className='question-title-container'>
        <div className='section-title-bar'></div>
        <h1 className='question-title'>FAQs</h1>
      </div>
      <div className='section-center question-center'>
        {questions.map((question, id) => (
          <SingleQuestion
            key={question.id}
            question={question}
            activeId={activeId}
            handleActiveId={handleActiveId}
            id={id}
          />
        ))}
      </div>
    </section>
  );
}

export default Questions;
