import {useEffect, useRef, useState} from "react";
import axios from "axios";

import ListQuestionsFarma from "../components/ListQuestionsFarma.jsx";
import SearchInput from "../components/SearchInput.jsx";

import styles from "./Farma.module.css";
import FormFarmaModule from "../components/FormFarmaModule.jsx";

const Farma = () => {
  const [questionsFarma, setQuestionsFarma] = useState([]);
  const [valueTitleFarma, setValueTitleFarma] = useState("");
  const [valueDescriptionFarma, setValueDescriptionFarma] = useState("");
  const [valuePD, setValuePD] = useState("");
  const [valueLP, setValueLP] = useState("");
  const [valueMD, setValueMD] = useState("");
  const [valueFE, setValueFE] = useState("");
  const [valuePP, setValuePP] = useState("");
  const [valuePE, setValuePE] = useState("");

  const getAllQuestionsFarma = async () => {
      try {
          const { data } = await axios.get(`http://localhost:3001/api/farma`);
          setQuestionsFarma(data);
      } catch (e) {
          console.error(e.message);
      }
  };

  useEffect(() => {
    getAllQuestionsFarma();
  }, []);

  const createQuestionFarma = async (
    title, description, pd,
    lp, md, fe, pp, pe
  ) => {
      try {
          const { data } = await axios.post(`http://localhost:3001/api/farma`, {
              title, description, pd,
              lp, md, fe, pp, pe,
          });
          return window.location.reload();
      } catch (e) {
          console.error(e.message);
      }
  };

  const onSubmitFormCreateQuestionFarma = async (e) => {
    e.preventDefault();
    return createQuestionFarma(
      valueTitleFarma, valueDescriptionFarma,
      valuePD, valueLP, valueMD, valueFE, valuePP, valuePE
    );
  };

  const [searchTermFarma, setSearchTermFarma] = useState("");
  const [searchResultFarma, setSearchResultFarma] = useState([]);

  const inputElFarma = useRef("");

    const searchHandlerFarma = (searchTermFarma) => {
        try {
            setSearchTermFarma(searchTermFarma);
            if (searchTermFarma !== "") {
                const newQuestion = questionsFarma.filter((question) => {
                    return Object.values(question)
                        .join(" ")
                        .toLowerCase()
                        .includes(searchTermFarma.toLowerCase());
                });
                setSearchResultFarma(newQuestion);
            } else {
                setSearchResultFarma(questionsFarma);
            }
        } catch (e) {
            console.log(e.message);
        }
    };

    const getSearchTermFarma = () => {
        searchHandlerFarma(inputElFarma.current.value);
    };

    const [ clickClose, setClickClose ] = useState(false);

  return (
      <div className={styles.container}>
          <div className={styles.container_box}>
              <SearchInput
                  inputEl={inputElFarma}
                  searchTerm={searchTermFarma}
                  getSearchTerm={getSearchTermFarma}
                  questions={searchTermFarma.length < 1 ? questionsFarma : searchResultFarma}
              />
              <i className="fa-solid fa-plus" onClick={() => setClickClose(!clickClose)}></i>
          </div>
          <ListQuestionsFarma
              questionsFarma={searchTermFarma.length < 1 ? questionsFarma : searchResultFarma}/>

          <FormFarmaModule
              clickClose={clickClose}
              setClickClose={setClickClose}
              onSubmit={onSubmitFormCreateQuestionFarma}
              valueTitleFarma={valueTitleFarma}
              valueDescriptionFarma={valueDescriptionFarma}
              valuePD={valuePD}
              valueLP={valueLP}
              valueMD={valueMD}
              valueFE={valueFE}
              valuePP={valuePP}
              valuePE={valuePE}
              setValueTitleFarma={setValueTitleFarma}
              setValueDescriptionFarma={setValueDescriptionFarma}
              setValuePD={setValuePD}
              setValueLP={setValueLP}
              setValueMD={setValueMD}
              setValueFE={setValueFE}
              setValuePP={setValuePP}
              setValuePE={setValuePE}
          />
      </div>
  );
};

export default Farma;
