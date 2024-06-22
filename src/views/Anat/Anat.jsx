import styles from "./Anat.module.css";
import SearchInput from "../../components/SearchInput.jsx";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {List} from "../../components/Anat/List.jsx";
import FormModule from "../../components/Anat/FormModule.jsx";

const Anat = () => {

    const [anatQuestions, setAnatQuestions] = useState([]);

    const [valueTitle, setValueTitle] = useState("");
    const [valueDescription, setValueDescription] = useState("");

    const [clickClose, setClickClose] = useState(false);

    const getAllAnatQuestion = async () => {
        const { data } = await axios.get(`http://localhost:3001/api/anat`);
        setAnatQuestions(data);
    };

    useEffect(() => {
        getAllAnatQuestion();
    }, []);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const ref = useRef("");

    const searchHandler = (searchTerm) => {
        setSearchTerm(searchTerm);
        if (searchTerm !== "") {
            const newQuestion = anatQuestions.filter((question) => {
                return Object.values(question)
                    .join(" ")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            });
            setSearchResult(newQuestion);
        } else {
            setSearchResult(anatQuestions);
        }
    };

    const getSearchTerm = () => {
        searchHandler(ref.current.value);
    };

    const createQuestion = async (
        title, description
    ) => {
        const { data } = await axios.post(`http://localhost:3001/api/anat`, {
            title, description
        });
        const questions = anatQuestions;
        setAnatQuestions([{...data}, ...questions]);

        setClickClose(!clickClose);
    };

    const onSubmitFormCreate = async (e) => {
        e.preventDefault();
        return createQuestion( valueTitle, valueDescription
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <SearchInput inputEl={ref} searchTerm={searchTerm}
                             getSearchTerm={getSearchTerm}
                             questions={searchTerm.length < 1 ? anatQuestions : searchResult}/>
                <i className="fa-solid fa-plus plus" onClick={() => setClickClose(!clickClose)}></i>
            </div>
            <List
                setAnatQuestions={setAnatQuestions}
                anatQuestions={anatQuestions}
                setClickClose={setClickClose}
                questions={searchTerm.length < 1 ? anatQuestions : searchResult}/>
            <FormModule
                onSubmit={onSubmitFormCreate}
                clickClose={clickClose}
                setClickClose={setClickClose}
                valueTitle={valueTitle}
                valueDescription={valueDescription}
                setValueTitle={setValueTitle}
                setValueDescription={setValueDescription}
            />
        </div>
    );
};

export {Anat};