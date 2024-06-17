import "./ListQuestions.css";
import axios from "axios";
import ItemListQuestions from "./ItemListQuestions.jsx";

const ListQuestions = ({ questions }) => {

    const deleteQuestion = async (id) => {
        try {
            const { data } = await axios.delete(`http://localhost:3001/api/${id}`);
            return window.location.reload();
        } catch (e) {
            console.error(e.message);
        }
    };

  return (
    <div className="list-questions">
      <ul className="questions-list">
        {
            questions.map((question, index) =>
                (
                    <ItemListQuestions
                        key={index}
                        question={question}
                        index={index}
                        deleteQuestion={deleteQuestion}/>
                ))}
      </ul>
    </div>
  );
};

export default ListQuestions;
