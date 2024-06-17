import axios from "axios";
import ItemListQuestionFarma from "./ItemListQuestionFarma.jsx";

import styles from "./ListQuestionsFarma.module.css";

const ListQuestionsFarma = ({ questionsFarma }) => {

    const deleteQuestionFarma = async (id) => {
        try {
            const response = await axios.delete(
                `http://localhost:3001/api/farma/${id}`
            );
            response.data;
            return window.location.reload();
        } catch (e) {
            console.error(e.message);
        }
    };
    
    return (
        <ul className={styles.list}>
            {questionsFarma.map((question, index) => (
                <ItemListQuestionFarma
                    key={index}
                    question={question}
                    deleteQuestionFarma={deleteQuestionFarma}
                />
            ))}
        </ul>
    );
};

export default ListQuestionsFarma;