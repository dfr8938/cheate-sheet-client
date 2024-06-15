import {useEffect, useRef, useState} from "react";
import axios from "axios";

import "./Farma.css";
import ListQuestionsFarma from "../components/ListQuestionsFarma.jsx";

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
    const { data } = await axios.get(`http://localhost:3001/api/farma`);
    setQuestionsFarma(data);
  };

  useEffect(() => {
    getAllQuestionsFarma();
  }, []);

  const createQuestionFarma = async (
    title,
    description,
    pd,
    lp,
    md,
    fe,
    pp,
    pe
  ) => {
    const { data } = await axios.post(`http://localhost:3001/api/farma`, {
      title,
      description,
      pd,
      lp,
      md,
      fe,
      pp,
      pe,
    });
    return window.location.reload();
  };

  const onSubmitFormCreateQuestionFarma = async (e) => {
    e.preventDefault();
    return createQuestionFarma(
      valueTitleFarma,
      valueDescriptionFarma,
      valuePD,
      valueLP,
      valueMD,
      valueFE,
      valuePP,
      valuePE
    );
  };

  const [searchTermFarma, setSearchTermFarma] = useState("");
  const [searchResultFarma, setSearchResultFarma] = useState([]);

  const [hidden, setHidden] = useState(false);

  const inputElFarma = useRef("");

    const searchHandlerFarma = (searchTermFarma) => {
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
    };

    const getSearchTermFarma = () => {
        searchHandlerFarma(inputElFarma.current.value);
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
                  ref={inputElFarma}
                  value={searchTermFarma}
                  onChange={getSearchTermFarma}
                  type="text"
                  placeholder="введите текст..."/>
              <div className="questions">
                  {
                      <div>[{questionsFarma.length}]</div>
                  }
              </div>
          </div>
          <div className="questions">
              <ListQuestionsFarma questionsFarma={searchTermFarma.length < 1 ? questionsFarma : searchResultFarma}/>
          </div>
          <div className="input-question-box">
              {
                  hidden !== true ? (<form
                      className="form-add-question"
                      onSubmit={onSubmitFormCreateQuestionFarma}
                  >
                      <div className="form-add-question-header">
                          <i className="fa-solid fa-xmark" onClick={() => setHidden(!hidden)}></i>
                      </div>
                      <input
                          className="input-question"
                          type="text"
                          value={valueTitleFarma}
                          onChange={(e) => setValueTitleFarma(e.target.value)}
                          placeholder="Заголовок"
                      />
                      <textarea
                          rows="14"
                          cols="10"
                          className="input-question-textarea"
                          type="text"
                          value={valueDescriptionFarma}
                          onChange={(e) => setValueDescriptionFarma(e.target.value)}
                          placeholder="Описание"
                      />
                      <textarea
                          rows="14"
                          cols="10"
                          className="input-question-textarea"
                          type="text"
                          value={valuePD}
                          onChange={(e) => setValuePD(e.target.value)}
                          placeholder="ПД"
                      />
                      <textarea
                          rows="14"
                          cols="10"
                          className="input-question-textarea"
                          type="text"
                          value={valueLP}
                          onChange={(e) => setValueLP(e.target.value)}
                          placeholder="ЛП"
                      />
                      <textarea
                          rows="14"
                          cols="10"
                          className="input-question-textarea"
                          type="text"
                          value={valueMD}
                          onChange={(e) => setValueMD(e.target.value)}
                          placeholder="МД"
                      />
                      <textarea
                          rows="14"
                          cols="10"
                          className="input-question-textarea"
                          type="text"
                          value={valueFE}
                          onChange={(e) => setValueFE(e.target.value)}
                          placeholder="ФЕ"
                      />
                      <textarea
                          rows="14"
                          cols="10"
                          className="input-question-textarea"
                          type="text"
                          value={valuePP}
                          onChange={(e) => setValuePP(e.target.value)}
                          placeholder="ПП"
                      />
                      <textarea
                          rows="14"
                          cols="10"
                          className="input-question-textarea"
                          type="text"
                          value={valuePE}
                          onChange={(e) => setValuePE(e.target.value)}
                          placeholder="ПЕ"
                      />
                      <button className="question-btn">Create</button>
                  </form>) : <i className="fa-solid fa-plus" onClick={() => setHidden(!hidden)}></i>
              }

          </div>
      </div>
  );
};

export default Farma;
