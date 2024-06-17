import styles from "./FormRecipeModule.module.css";

const FormRecipeModule = ({
                              onSubmit, valueTitleRecipe, valueDescriptionRecipe,
        valueFGRecipe, valueFDRecipe, valuePPRecipe, valuePDRecipe, setValueTitleRecipe,
                              setValueDescriptionRecipe, setValueFGRecipe,
                          setValueFDRecipe, setValuePPRecipe, setValuePDRecipe, clickClose, setClickClose}) => {

    return (
        <>
        {clickClose && <div className={styles.form_module}>
            <form className={styles.form} onSubmit={onSubmit}>
                <i className="fa-solid fa-xmark" onClick={() => setClickClose(!clickClose)}></i>
                <h2>Добавить вопрос</h2>
                <div className={styles.form_box_row}>
                            <input
                                value={valueTitleRecipe}
                                onChange={(e) => setValueTitleRecipe(e.target.value)}
                                type="text"
                                placeholder="введите заголовок"
                            />
                            <textarea
                                value={valueDescriptionRecipe}
                                onChange={(e) => setValueDescriptionRecipe(e.target.value)}
                                rows="14"
                                cols="10"
                                placeholder="введите описание"
                            />
                            <textarea
                                value={valueFGRecipe}
                                onChange={(e) => setValueFGRecipe(e.target.value)}
                                rows="14"
                                cols="10"
                                placeholder="введите побочные действия"
                            />
                            <textarea
                                value={valueFDRecipe}
                                onChange={(e) => setValueFDRecipe(e.target.value)}
                                rows="14"
                                cols="10"
                                placeholder="введите лекарственный препарат"
                            ></textarea>
                            <textarea
                                value={valuePPRecipe}
                                onChange={(e) => setValuePPRecipe(e.target.value)}
                                rows="14"
                                cols="10"
                                placeholder="введите механизм действия"
                            />
                            <textarea
                                value={valuePDRecipe}
                                onChange={(e) => setValuePDRecipe(e.target.value)}
                                rows="14"
                                cols="10"
                                placeholder="введите фармакологический эффект"
                            />
                            <button>Добавить</button>
                </div>
            </form>
        </div>}
        </>
    );
};

export default FormRecipeModule;