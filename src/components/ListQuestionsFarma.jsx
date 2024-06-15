import axios from "axios";

const deleteQuestionFarma = async (id) => {
    const response = await axios.delete(
        `http://localhost:3001/api/farma/${id}`
    );
    response.data;
    return window.location.reload();
};

const ListQuestionsFarma = ({ questionsFarma }) => {
    return (
        <div className="list-questions-farma">
            <ul className="farma-list">
                {questionsFarma.map((question, index) => (
                    <li key={index} className="farma-list-item">
                        <div className="farma-list-item-box-edited">
                            <i
                                className="fa-solid fa-xmark xmark"
                                onClick={() => deleteQuestionFarma(question.id)}
                            ></i>
                        </div>
                        {
                            isNaN(question.title) ? (
                                <div className="group-box-farma-column">
                                    <div className="farma-list-item-box-title">
                                        {question.title}
                                    </div>
                                    <div className="farma-list-item-box-description">
                                        {question.description}
                                    </div>
                                </div>
                            ) : null
                        }
                        {
                            isNaN(question.pd) ? (
                                <div
                                    className="group-box-farma-column">
                                    <div className="farma-list-item-box-title">
                                        Побочное действие
                                    </div>
                                    <div className="farma-list-item-box-description">
                                        {question.pd}
                                    </div>
                                </div>
                            ) : null
                        }
                        {
                            isNaN(question.lp) ? (
                                <div
                                    className="group-box-farma-column">
                                    <div className="farma-list-item-box-title">
                                        ЛП
                                    </div>
                                    <div className="farma-list-item-box-description">
                                        {question.lp}
                                    </div>
                                </div>
                            ) : null
                        }
                        {isNaN(question.md) ? (
                            <div className="group-box-farma-column">
                                <div className="farma-list-item-box-title">
                                    МД
                                </div>
                                <div className="farma-list-item-box-description">
                                    {question.md}
                                </div>
                            </div>
                        ) : null}
                        {isNaN(question.fe) ? (
                            <div className="group-box-farma-column">
                                <div className="farma-list-item-box-title">
                                    ФЭ
                                </div>
                                <div className="farma-list-item-box-description">
                                    {question.fe}
                                </div>
                            </div>
                        ) : null}
                        {isNaN(question.pp) ? (
                            <div
                                className="group-box-farma-column">
                                <div className="farma-list-item-box-title">
                                    ПП
                                </div>
                                <div className="farma-list-item-box-description">
                                    {question.pp}
                                </div>
                            </div>
                        ) : null}
                        {isNaN(question.pe) ? (
                            <div className="group-box-farma-column">
                                <div className="farma-list-item-box-title">
                                    ПЭ
                                </div>
                                <div className="farma-list-item-box-description">
                                    {question.pe}
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