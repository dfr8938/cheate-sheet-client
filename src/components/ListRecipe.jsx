import axios from "axios";

import styles from "./ListRecipe.module.css";
import ItemListRecipe from "./ItemListRecipe.jsx";

const deleteRecipe = async (id) => {
    const response = await axios.delete(
        `http://localhost:3001/api/recipe/${id}`
    );
    response.data;
    return window.location.reload();
};

const ListRecipe = ({ recipe }) => {
    return (
            <ul className={styles.list}>
                {recipe.map((rec, index) => (
                    <ItemListRecipe key={index} rec={rec} index={index} deleteRecipe={deleteRecipe}/>
                ))}
            </ul>
    );
};

export default ListRecipe;