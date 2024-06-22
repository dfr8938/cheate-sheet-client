import styles from "./Pat.module.css";
import SearchInput from "../../components/SearchInput.jsx";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {List} from "../../components/Pat/List.jsx";
import {FormModule} from "../../components/Pat/FormModule.jsx";

const Pat = () => {

    const [patQuestions, setPatQuestions] = useState([]);

    const [valueTitle, setValueTitle] = useState("");
    const [valueDescription, setValueDescription] = useState("");

    const [clickClose, setClickClose] = useState(false);

    const getAllPatQuestion = async () => {
        const { data } = await axios.get(`http://localhost:3001/api/pat`);
        setPatQuestions(data);
    };

    useEffect(() => {
        getAllPatQuestion();
    }, []);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const ref = useRef("");

    const searchHandler = (searchTerm) => {
        setSearchTerm(searchTerm);
        if (searchTerm !== "") {
            const newQuestion = patQuestions.filter((question) => {
                return Object.values(question)
                    .join(" ")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            });
            setSearchResult(newQuestion);
        } else {
            setSearchResult(patQuestions);
        }
    };

    const getSearchTerm = () => {
        searchHandler(ref.current.value);
    };

    const createQuestion = async (
        title, description
    ) => {
        const { data } = await axios.post(`http://localhost:3001/api/pat`, {
            title, description
        });
        const questions = patQuestions;
        setPatQuestions([{...data}, ...questions]);

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
                             questions={searchTerm.length < 1 ? patQuestions : searchResult}/>
                <i className="fa-solid fa-plus plus" onClick={() => setClickClose(!clickClose)}></i>
            </div>
            <List
                setPatQuestions={setPatQuestions}
                patQuestions={patQuestions}
                setClickClose={setClickClose}
                questions={searchTerm.length < 1 ? patQuestions : searchResult}/>
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

export {Pat};