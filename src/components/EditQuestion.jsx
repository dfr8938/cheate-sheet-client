import axios from "axios";
import {useState} from "react";

import styles from "./EditQuestion.module.css";

const EditQuestion = ({question, upForm}) => {

    const { id, title, answer } = question;
    console.log(title, answer);

    const [valueTitleUpdate, setValueTitleUpdate] = useState(`${title}`);
    const [valueAnswerUpdate, setValueAnswerUpdate] = useState(`${answer}`);

    const updateQuestion = async (title, answer) => {
        try {
            const { data } = await axios.put(`http://localhost:3001/api/${id}`, {
                title,
                answer,
            })
            return window.location.reload();
        } catch (e) {
            console.error(e.message);
        }
    }

    const onSubmitFormUpdateQuestion = async (e) => {
        e.preventDefault();
        return updateQuestion(valueTitleUpdate, valueAnswerUpdate);
    };

    return (
        <>
            {upForm ? (<div className={styles.edit_question}>
                <form onSubmit={onSubmitFormUpdateQuestion}>
                    <div className={styles.form_group}>
                        <h2>Изменить вопрос</h2>
                        <input
                            value={valueTitleUpdate}
                            onChange={e=> setValueTitleUpdate(e.target.value)}
                            className="edit-question-input"
                            type="text"
                            placeholder="title"/>
                        <input
                            value={valueAnswerUpdate}
                            onChange={e=> setValueAnswerUpdate(e.target.value)}
                            className="edit-question-input"
                            type="text"
                            placeholder="answer"/>
                        <button className="edit-question-btn">Изменить</button>
                    </div>
                </form>
            </div>) : null}
        </>
    );
};

export default EditQuestion;