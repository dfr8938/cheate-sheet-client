import styles from "./FormFarmaModule.module.css";

const FormFarmaModule = (
    {
        clickClose, setClickClose, onSubmit,
        valueTitleFarma, valueDescriptionFarma,
        valuePD, valueLP, valueMD, valueFE, valuePE, valuePP,
        setValueTitleFarma, setValueDescriptionFarma, setValueFE,
        setValuePE, setValueLP, setValueMD, setValuePD, setValuePP
    }) => {

    return (
        <>
        {clickClose && <div className={styles.form_module}>
            <form className={styles.form} onSubmit={onSubmit}>
                <i className="fa-solid fa-xmark" onClick={() => setClickClose(!clickClose)}></i>
                <h2>Добавить вопрос</h2>
                <div className={styles.form_box_row}>
                            <input
                                value={valueTitleFarma}
                                onChange={(e) => setValueTitleFarma(e.target.value)}
                                type="text"
                                placeholder="введите заголовок"
                            />
                            <textarea
                                value={valueDescriptionFarma}
                                onChange={(e) => setValueDescriptionFarma(e.target.value)}
                                rows="14"
                                cols="10"
                                placeholder="введите описание"
                            />
                            <textarea
                                value={valuePD}
                                onChange={(e) => setValuePD(e.target.value)}
                                rows="14"
                                cols="10"
                                placeholder="введите побочные действия"
                            />
                            <textarea
                                value={valueLP}
                                onChange={(e) => setValueLP(e.target.value)}
                                rows="14"
                                cols="10"
                                placeholder="введите лекарственный препарат"
                            ></textarea>
                            <textarea
                                value={valueMD}
                                onChange={(e) => setValueMD(e.target.value)}
                                rows="14"
                                cols="10"
                                placeholder="введите механизм действия"
                            />
                            <textarea
                                value={valueFE}
                                onChange={(e) => setValueFE(e.target.value)}
                                rows="14"
                                cols="10"
                                placeholder="введите фармакологический эффект"
                            />
                            <textarea
                                value={valuePP}
                                onChange={(e) => setValuePP(e.target.value)}
                                rows="14"
                                cols="10"
                                placeholder="введите противопоказания"
                            ></textarea>
                            <textarea
                                value={valuePE}
                                onChange={(e) => setValuePE(e.target.value)}
                                rows="14"
                                cols="10"
                                placeholder="введите побочные эффекты"
                            />
                            <button>Добавить</button>
                </div>
            </form>
        </div>}
        </>
    );
};

export default FormFarmaModule;