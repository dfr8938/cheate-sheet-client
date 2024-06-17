import {useEffect, useRef, useState} from "react";
import axios from "axios";

import styles from "./Recipe.module.css";
import ListRecipe from "../components/ListRecipe.jsx";
import SearchInput from "../components/SearchInput.jsx";
import FormRecipeModule from "../components/FormRecipeModule.jsx";

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

    const [clickClose, setClickClose] = useState(false);

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
        <div className={styles.container}>
            <div className={styles.container_box}>
                <SearchInput inputEl={inputElRecipe} searchTerm={searchTermRecipe}
                             getSearchTerm={getSearchTermRecipe}
                             questions={searchTermRecipe.length < 1 ? recipe : searchResultRecipe}/>
                <i className="fa-solid fa-plus" onClick={() => setClickClose(!clickClose)}></i>
            </div>
            <ListRecipe recipe={searchTermRecipe.length < 1 ? recipe : searchResultRecipe}/>
            <FormRecipeModule
                onSubmit={onSubmitFormCreateRecipe}
                clickClose={clickClose}
                setClickClose={setClickClose}
                valueTitleRecipe={valueTitleRecipe}
                valueDescriptionRecipe={valueDescriptionRecipe}
                valueFGRecipe={valueFGRecipe}
                valueFDRecipe={valueFDRecipe}
                valuePPRecipe={valuePPRecipe}
                valuePDRecipe={valuePDRecipe}
                setValueTitleRecipe={setValueTitleRecipe}
                setValueDescriptionRecipe={setValueDescriptionRecipe}
                setValueFGRecipe={setValueFGRecipe}
                setValueFDRecipe={setValueFDRecipe}
                setValuePPRecipe={setValuePPRecipe}
                setValuePDRecipe={setValuePDRecipe}
            />
        </div>
    );
};

export default Recipe;
