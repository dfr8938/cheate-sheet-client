import styles from "./List.module.css";
import {ItemList} from "./ItemList.jsx";

const List = ({questions, patQuestions, setPatQuestions, setClickClose}) => {
    return (
        <ul className={styles.list}>
            {
                questions.map((question, index) => (
                    <ItemList
                        key={index}
                        question={question}
                        index={index}
                        questions={patQuestions}
                        setQuestions={setPatQuestions}
                        setClickClose={setClickClose}
                    />
                ))
            }
        </ul>
    );
};

export {List};