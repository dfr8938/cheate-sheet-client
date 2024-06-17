import EditQuestion from "./EditQuestion.jsx";
import {useState} from "react";

const ItemListQuestions = ({question, index, deleteQuestion}) => {

    const [upForm, setUpForm] = useState(false);

    return (
            <li className="questions-item" key={index}>
                <div className="question-header">
                    <div>Вопрос №{index + 1}</div>
                    <div
                        className="form-add-question-fa">
                        <i
                            className="fa-solid fa-pen pen"
                            onClick={() => setUpForm(!upForm)}
                        ></i>
                        <i
                            className="fa-solid fa-xmark xmark"
                            onClick={() => deleteQuestion(question.id)}
                        ></i>
                    </div>
                </div>
                <div className="question">{question.title}</div>
                <div className="answer">{question.answer}</div>
                <EditQuestion question={question} upForm={upForm}/>
            </li>
    );
};

export default ItemListQuestions;