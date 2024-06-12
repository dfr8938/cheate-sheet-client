import "./ListQuestions.css";
import axios from "axios";

const deleteQuestion = async (id) => {
  const response = await axios.delete(`http://localhost:3001/api/${id}`);
  response.data;
  return window.location.reload();
};

const ListQuestions = ({ questions }) => {
  return (
    <div className="list-questions">
      <ul className="questions">
        {questions.map((question, index) => (
          <li className="questions-item" key={index}>
            <div className="question-header">
              <div>Вопрос №{index + 1}</div>
              <div className="form-add-question-fa">
                <i className="fa-solid fa-pen pen"></i>
                <i
                  className="fa-solid fa-xmark xmark"
                  onClick={() => deleteQuestion(question.id)}
                ></i>
              </div>
            </div>
            <div className="question">{question.title}</div>
            <div className="answer">
              <div className="answer-checked">
                <i className="fa-regular fa-circle-check"></i>
              </div>
              {question.answer}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListQuestions;
