import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';

function SingleQuestion({ question, id, activeId, handleActiveId }) {
  const isActive = activeId === id;
  return (
    <article className='question' onClick={() => handleActiveId(id)}>
      <div className='question-header'>
        <h2 className='question-header-title'>{question.question}</h2>
        <button className='question-btn'>
          {isActive ? (
            <FaMinus cursor={'pointer'} />
          ) : (
            <FaPlus cursor={'pointer'} />
          )}
        </button>
      </div>
      <p className={`question-body ${isActive && 'active'}`}>
        {isActive && question.answer}
      </p>
    </article>
  );
}

export default SingleQuestion;
