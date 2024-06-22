import styles from "./List.module.css";
import ItemList from "./ItemList.jsx";

const List = ({questions, anatQuestions, setAnatQuestions, setClickClose}) => {
    return (
        <ul className={styles.list}>
            {
                questions.map((question, index) => (
                    <ItemList
                        key={index}
                        question={question}
                        index={index}
                        questions={anatQuestions}
                        setQuestions={setAnatQuestions}
                        setClickClose={setClickClose}
                    />
                ))
            }
        </ul>
    );
};

export {List};