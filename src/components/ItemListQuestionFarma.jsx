import styles from "./ItemListQuestionFarma.module.css";
import BoxGroupFarma from "./BoxGroupFarma.jsx";
import {useState} from "react";
import axios from "axios";

const ItemListQuestionFarma = ({question, deleteQuestionFarma}) => {

    const { id, title, description, pd, lp, md, fe, pp, pe } = question;

    console.log(id);

    const [formUp, setFormUp] = useState(true);

    const [valueTitleFarmaUp, setValueTitleFarmaUp] = useState(`${title}`);
    const [valueDescriptionFarmaUp, setValueDescriptionFarmaUp] = useState(`${description}`);
    const [valuePDFarmaUp, setValuePDFarmaUp] = useState(`${pd}`);
    const [valueLPFarmaUp, setValueLPFarmaUp] = useState(`${lp}`);
    const [valueMDFarmaUp, setValueMDFarmaUp] = useState(`${md}`);
    const [valueFEFarmaUp, setValueFEFarmaUp] = useState(`${fe}`);
    const [valuePPFarmaUp, setValuePPFarmaUp] = useState(`${pp}`);
    const [valuePEFarmaUp, setValuePEFarmaUp] = useState(`${pe}`);

    const updateQuestionFarma = async (title, description, pd, lp, md, fe, pp, pe) => {
        try {
            const { data } = await axios.put(`http://localhost:3001/api/farma/${id}`, {
                title, description, pd, lp, md, fe, pp, pe
            })
            return window.location.reload();
        } catch (e) {
            console.error(e.message);
        }
    }

    const onSubmitFormUpdateQuestionFarma = async (e) => {
        e.preventDefault();
        return await updateQuestionFarma(valueTitleFarmaUp, valueDescriptionFarmaUp, valuePDFarmaUp,
            valueLPFarmaUp, valueMDFarmaUp, valueFEFarmaUp, valuePPFarmaUp, valuePEFarmaUp);
    };

    return (
        <div>
            {formUp ? <li className={styles.item}>
                    <div className={styles.config}>
                        <div className={styles.edit}>
                            <i className="fa-solid fa-pen pen" onClick={() => setFormUp(!formUp)}></i>
                        </div>
                        <div className={styles.delete}>
                            <i className="fa-solid fa-xmark xmark farma-xmark"
                               onClick={() => deleteQuestionFarma(id)}></i>
                        </div>
                    </div>

                    {isNaN(title) ? <BoxGroupFarma question={question}/> : null}
                    {
                        isNaN(pd) ? (
                            <div
                                className="group-box-farma-column">
                                <div className="farma-list-item-box-title">
                                    Побочное действие
                                </div>
                                <div className="farma-list-item-box-description">
                                    {pd}
                                </div>
                            </div>
                        ) : null
                    }
                    {
                        isNaN(lp) ? (
                            <div
                                className="group-box-farma-column">
                                <div className="farma-list-item-box-title">
                                    Лекарственный препарат
                                </div>
                                <div className="farma-list-item-box-description">
                                    {lp}
                                </div>
                            </div>
                        ) : null
                    }
                    {isNaN(md) ? (
                        <div className="group-box-farma-column">
                            <div className="farma-list-item-box-title">
                                Механизм действия
                            </div>
                            <div className="farma-list-item-box-description">
                                {md}
                            </div>
                        </div>
                    ) : null}
                    {isNaN(fe) ? (
                        <div className="group-box-farma-column">
                            <div className="farma-list-item-box-title">
                                Фармакологический эффект
                            </div>
                            <div className="farma-list-item-box-description">
                                {fe}
                            </div>
                        </div>
                    ) : null}
                    {isNaN(pp) ? (
                        <div
                            className="group-box-farma-column">
                            <div className="farma-list-item-box-title">
                                Противопоказания
                            </div>
                            <div className="farma-list-item-box-description">
                                {pp}
                            </div>
                        </div>
                    ) : null}
                    {isNaN(pe) ? (
                        <div className="group-box-farma-column">
                            <div className="farma-list-item-box-title">
                                Побочные эффекты
                            </div>
                            <div className="farma-list-item-box-description">
                                {pe}
                            </div>
                        </div>
                    ) : null}
            </li> :
                <div className={styles.box_form}>
                    <form className={styles.form} onSubmit={onSubmitFormUpdateQuestionFarma}>
                        <div className={styles.header}>
                            <i className="fa-solid fa-xmark"
                               onClick={() => setFormUp(!formUp)}></i>
                        </div>
                        <h2>Изменить вопрос</h2>
                        <input
                            value={valueTitleFarmaUp}
                            onChange={(e) => setValueTitleFarmaUp(e.target.value)}
                            type="text"
                            placeholder="введите заголовок"
                        />
                        <textarea
                            value={valueDescriptionFarmaUp}
                            onChange={(e) => setValueDescriptionFarmaUp(e.target.value)}
                            rows="14"
                            cols="10"
                            placeholder="введите описание"
                        />
                        <textarea
                            value={valuePDFarmaUp}
                            onChange={(e) => setValuePDFarmaUp(e.target.value)}
                            rows="14"
                            cols="10"
                            placeholder="введите побочные действия"
                        />
                        <textarea
                            value={valueLPFarmaUp}
                            onChange={(e) => setValueLPFarmaUp(e.target.value)}
                            rows="14"
                            cols="10"
                            placeholder="введите лекарственный препарат"
                        ></textarea>
                        <textarea
                            value={valueMDFarmaUp}
                            onChange={(e) => setValueMDFarmaUp(e.target.value)}
                            rows="14"
                            cols="10"
                            placeholder="введите механизм действия"
                        />
                        <textarea
                            value={valueFEFarmaUp}
                            onChange={(e) => setValueFEFarmaUp(e.target.value)}
                            rows="14"
                            cols="10"
                            placeholder="введите фармакологический эффект"
                        />
                        <textarea
                            value={valuePPFarmaUp}
                            onChange={(e) => setValuePPFarmaUp(e.target.value)}
                            rows="14"
                            cols="10"
                            placeholder="введите противопоказания"
                        ></textarea>
                        <textarea
                            value={valuePEFarmaUp}
                            onChange={(e) => setValuePEFarmaUp(e.target.value)}
                            rows="14"
                            cols="10"
                            placeholder="введите побочные эффекты"
                        />
                        <button>Изменить</button>
                    </form>
                </div>}
        </div>);
};

export default ItemListQuestionFarma;