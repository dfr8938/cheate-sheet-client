import styles from "./ItemListRecipe.module.css";
import {useState} from "react";
import axios from "axios";

const ItemListRecipe = ({ rec, deleteRecipe, index }) => {

    const { id, title, description, fg, fd, pp, pd } = rec;

    const [upForm, setUpForm] = useState(false)

    const [valueTitleRecipe,setValueTitleRecipe] = useState(`${title}`);
    const [valueDescRecipe,setValueDescRecipe] = useState(`${description}`);
    const [valueFGRecipe,setValueFGRecipe] = useState(`${fg}`);
    const [valueFDRecipe,setValueFDRecipe] = useState(`${fd}`);
    const [valuePPRecipe,setValuePPRecipe] = useState(`${pp}`);
    const [valuePDRecipe,setValuePDRecipe] = useState(`${pd}`);

    const updateQuestion = async (title, description, fg, fd, pp, pd) => {
        try {
            const { data } = await axios.put(`http://localhost:3001/api/recipe/${id}`, {
                title, description, fg, fd, pp, pd
            })
            return window.location.reload();
        } catch (e) {
            console.error(e.message);
        }
    }

    const onSubmitFormUpdateRecipe = async (e) => {
        e.preventDefault();
        return updateQuestion(valueTitleRecipe,
            valueDescRecipe, valueFGRecipe,
            valueFDRecipe, valuePPRecipe, valuePDRecipe);
    };

    return (
        <li className={styles.item} key={index}>
            <div className={styles.header}>
                <i
                    className="fa-solid fa-pen pen"
                    onClick={() => setUpForm(!upForm)}
                ></i>
                <i
                    className="fa-solid fa-xmark xmark"
                    onClick={() => deleteRecipe(id)}
                ></i>
            </div>
            {
                isNaN(title) ? (
                    <div className={styles.box}>
                        <div className={styles.title}>
                        {title}
                        </div>
                        <div className={styles.description}>
                            {description}
                        </div>
                    </div>
                ) : null
            }
            {
                isNaN(fg) ? (
                    <div className={styles.box}>
                        <div className={styles.title}>
                            Фармакологическая группа
                        </div>
                        <div className={styles.description}>
                            {fg}
                        </div>
                    </div>
                ) : null
            }
            {
                isNaN(fd) ? (
                    <div className={styles.box}>
                        <div className={styles.title}>
                            Фармакологическое действие
                        </div>
                        <div className={styles.description}>
                            {fd}
                        </div>
                    </div>
                ) : null
            }
            {isNaN(pp) ? (
                <div className={styles.box}>
                    <div className={styles.title}>
                        Показания к применению
                    </div>
                    <div className={styles.description}>
                        {pp}
                    </div>
                </div>
            ) : null}
            {isNaN(pd) ? (
                <div className={styles.box}>
                    <div className={styles.title}>
                        Побочное действие
                    </div>
                    <div className={styles.description}>
                        {pd}
                    </div>
                </div>
            ) : null}
            <div className={styles.box}>
                {upForm ? <form className={styles.edit} onSubmit={onSubmitFormUpdateRecipe}>
                    <h2>Изменить вопрос</h2>
                    <input
                        value={valueTitleRecipe}
                        onChange={e => setValueTitleRecipe(e.target.value)}
                        type="text"/>
                    <textarea
                        value={valueDescRecipe}
                        onChange={(e) => setValueDescRecipe(e.target.value)}
                        rows="14"
                        cols="10"
                    />
                    <textarea
                        value={valueFGRecipe}
                        onChange={(e) => setValueFGRecipe(e.target.value)}
                        rows="14"
                        cols="10"
                    />
                    <textarea
                        value={valueFDRecipe}
                        onChange={(e) => setValueFDRecipe(e.target.value)}
                        rows="14"
                        cols="10"
                    />
                    <textarea
                        value={valuePPRecipe}
                        onChange={(e) => setValuePPRecipe(e.target.value)}
                        rows="14"
                        cols="10"
                    />
                    <textarea
                        value={valuePDRecipe}
                        onChange={(e) => setValuePDRecipe(e.target.value)}
                        rows="14"
                        cols="10"
                        placeholder="введите описание"
                    />
                    <button>Изменить</button>
                </form> : null}
            </div>
        </li>
    );
};

export default ItemListRecipe;