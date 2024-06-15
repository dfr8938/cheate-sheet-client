import axios from "axios";

const deleteRecipe = async (id) => {
    const response = await axios.delete(
        `http://localhost:3001/api/recipe/${id}`
    );
    response.data;
    return window.location.reload();
};

const ListQuestionsFarma = ({ recipe }) => {
    return (
        <div className="list-questions-farma">
            <ul className="farma-list">
                {recipe.map((rec, index) => (
                    <li key={index} className="farma-list-item">
                        <div className="farma-list-item-box-edited">
                            <i
                                className="fa-solid fa-xmark xmark"
                                onClick={() => deleteRecipe(rec.id)}
                            ></i>
                        </div>
                        {
                            isNaN(rec.title) ? (
                                <div className="group-box-farma-column">
                                    <div className="farma-list-item-box-title">
                                        {rec.title}
                                    </div>
                                    <div className="farma-list-item-box-description">
                                        {rec.description}
                                    </div>
                                </div>
                            ) : null
                        }
                        {
                            isNaN(rec.fg) ? (
                                <div
                                    className="group-box-farma-column">
                                    <div className="farma-list-item-box-title">
                                        ФГ
                                    </div>
                                    <div className="farma-list-item-box-description">
                                        {rec.fg}
                                    </div>
                                </div>
                            ) : null
                        }
                        {
                            isNaN(rec.fd) ? (
                                <div
                                    className="group-box-farma-column">
                                    <div className="farma-list-item-box-title">
                                        ФД
                                    </div>
                                    <div className="farma-list-item-box-description">
                                        {rec.fd}
                                    </div>
                                </div>
                            ) : null
                        }
                        {isNaN(rec.pp) ? (
                            <div className="group-box-farma-column">
                                <div className="farma-list-item-box-title">
                                    ПП
                                </div>
                                <div className="farma-list-item-box-description">
                                    {rec.pp}
                                </div>
                            </div>
                        ) : null}
                        {isNaN(rec.pd) ? (
                            <div className="group-box-farma-column">
                                <div className="farma-list-item-box-title">
                                    ПД
                                </div>
                                <div className="farma-list-item-box-description">
                                    {rec.pd}
                                </div>
                            </div>
                        ) : null}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListQuestionsFarma;