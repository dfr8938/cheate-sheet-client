import {useEffect, useRef, useState} from "react";
import axios from "axios";

import "./Recipe.css";
import ListRecipe from "../components/ListRecipe.jsx";

const Recipe = () => {
    const [recipe, setRecipe] = useState([]);

    const [valueTitleRecipe, setValueTitleRecipe] = useState('');
    const [valueFGRecipe, setValueFGRecipe] = useState('');
    const [valueFDRecipe, setValueFDRecipe] = useState('');
    const [valuePPRecipe, setValuePPRecipe] = useState('');
    const [valuePDRecipe, setValuePDRecipe] = useState('');

    const [valueDescriptionRecipe, setValueDescriptionRecipe] = useState("");

    const getAllRecipe = async () => {
        const { data } = await axios.get(`http://localhost:3001/api/recipe`);
        setRecipe(data);
    };

    useEffect(() => {
        getAllRecipe();
    }, []);

    const createRecipe = async (
        title, description, fg, fd, pp, pd
    ) => {
        const { data } = await axios.post(`http://localhost:3001/api/recipe`, {
            title, description, fg, fd, pp, pd
        });
        return window.location.reload();
    };

    const onSubmitFormCreateRecipe = async (e) => {
        e.preventDefault();
        return createRecipe(
            valueTitleRecipe,
            valueDescriptionRecipe,
            valueFGRecipe,
            valueFDRecipe,
            valuePPRecipe,
            valuePDRecipe
        );
    };

    const [searchTermRecipe, setSearchTermRecipe] = useState("");
    const [searchResultRecipe, setSearchResultRecipe] = useState([]);

    const [hiddenRecipe, setHiddenRecipe] = useState(false);

    const inputElRecipe = useRef("");

    const searchHandlerRecipe = (searchTermRecipe) => {
        setSearchTermRecipe(searchTermRecipe);
        if (searchTermRecipe !== "") {
            const newRecipe = recipe.filter((r) => {
                return Object.values(r)
                    .join(" ")
                    .toLowerCase()
                    .includes(searchTermRecipe.toLowerCase());
            });
            setSearchResultRecipe(newRecipe);
        } else {
            setSearchResultRecipe(recipe);
        }
    };

    const getSearchTermRecipe = () => {
        searchHandlerRecipe(inputElRecipe.current.value);
    };

    return (
        <div className="farma-container" style={{padding: "20px"}}>
            <div className="input-search-box">
                <input
                    style={{
                        width: "300px",
                        height: "30px",
                        borderRadius: "5px",
                        textIndent: "10px",
                        border: "2px solid #eee",
                        outline: "none",
                        margin: "20px",

                    }}
                    ref={inputElRecipe}
                    value={searchTermRecipe}
                    onChange={getSearchTermRecipe}
                    type="text"
                    placeholder="введите текст..."/>
                <div className="questions">
                    {
                        <div>[{recipe.length}]</div>
                    }
                </div>
            </div>
            <div className="questions">
                <ListRecipe recipe={searchTermRecipe.length < 1 ? recipe : searchResultRecipe}/>
            </div>
            <div className="input-question-box">
                {
                    hiddenRecipe !== true ? (<form
                        className="form-add-question"
                        onSubmit={onSubmitFormCreateRecipe}
                    >
                        <div className="form-add-question-header">
                            <i className="fa-solid fa-xmark" onClick={() => setHiddenRecipe(!hiddenRecipe)}></i>
                        </div>
                        <input
                            className="input-question"
                            type="text"
                            value={valueTitleRecipe}
                            onChange={(e) => setValueTitleRecipe(e.target.value)}
                            placeholder="Title"
                        />
                        <textarea
                            rows="14"
                            cols="10"
                            className="input-question-textarea"
                            value={valueDescriptionRecipe}
                            onChange={(e) => setValueDescriptionRecipe(e.target.value)}
                            placeholder="Description"
                        />
                        <textarea
                            rows="14"
                            cols="10"
                            className="input-question-textarea"
                            value={valueFGRecipe}
                            onChange={(e) => setValueFGRecipe(e.target.value)}
                            placeholder="ФГ"
                        />
                        <textarea
                            rows="14"
                            cols="10"
                            className="input-question-textarea"
                            value={valueFDRecipe}
                            onChange={(e) => setValueFDRecipe(e.target.value)}
                            placeholder="ФД"
                        />
                        <textarea
                            rows="14"
                            cols="10"
                            className="input-question-textarea"
                            value={valuePPRecipe}
                            onChange={(e) => setValuePPRecipe(e.target.value)}
                            placeholder="ПП"
                        />
                        <textarea
                            rows="14"
                            cols="10"
                            className="input-question-textarea"
                            value={valuePDRecipe}
                            onChange={(e) => setValuePDRecipe(e.target.value)}
                            placeholder="ПД"
                        />
                        <button className="question-btn">Create</button>
                    </form>) : <i className="fa-solid fa-plus" onClick={() => setHiddenRecipe(!hiddenRecipe)}></i>
                }

            </div>
        </div>
    );
};

export default Recipe;
