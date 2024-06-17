import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ListQuestions from "./ListQuestions.jsx";

import "./InputQuestion.css";
import AdminPanel from "./AdminPanel.jsx";
import SearchInput from "./SearchInput.jsx";

const InputQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [valueTitle, setValueTitle] = useState("");
  const [valueAnswer, setValueAnswer] = useState("");
  const [closeForm, setCloseForm] = useState(false);

  const inputEl = useRef("");

  const getAllQuestions = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/api`);
      setQuestions(data);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getAllQuestions();
  }, []);

  const searchHandler = (searchTerm) => {
    try {
      setSearchTerm(searchTerm);
      if (searchTerm !== "") {
        const newQuestion = questions.filter((question) => {
          return Object.values(question)
              .join(" ")
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
        });
        setSearchResult(newQuestion);
      } else {
        setSearchResult(questions);
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  const getSearchTerm = () => {
    searchHandler(inputEl.current.value);
  };

  const createQuestion = async (title, answer) => {
    try {
      const { data } = await axios.post(`http://localhost:3001/api`, {
        title,
        answer,
      });
      return window.location.reload();
    } catch (e) {
      console.error(e.message)
    }
  };

  const onSubmitFormCreateQuestion = async (e) => {
    e.preventDefault();
    return createQuestion(valueTitle, valueAnswer);
  };

  return (
      <div className="container">
        <SearchInput
            inputEl={inputEl}
            searchTerm={searchTerm}
            getSearchTerm={getSearchTerm}
            questions={searchTerm.length < 1 ? questions : searchResult}
        />
        <div className="output-questions">
          <ListQuestions
              questions={searchTerm.length < 1 ? questions : searchResult}
          />
        </div>
        <div className="input-question-box">
          {!closeForm ? (
              <i
                  className="fa-solid fa-plus open-form"
                  onClick={() => setCloseForm(!closeForm)}
              ></i>
          ) : (
              <i
                  className="fa-solid fa-xmark open-form"
                  onClick={() => setCloseForm(!closeForm)}
              ></i>
          )}
          {closeForm && (
              <form
                  className="form-add-question"
                  onSubmit={onSubmitFormCreateQuestion}
                  style={{display: "flex", flexDirection: "column"}}
              >
                <h2 className="title-form-add-question">Добавить вопрос</h2>
                <input
                    type="text"
                    className="input-question"
                    value={valueTitle}
                    onChange={(e) => setValueTitle(e.target.value)}
                    placeholder="введите вопрос..."
                />
                <input
                    type="text"
                    className="input-question"
                    value={valueAnswer}
                    onChange={(e) => setValueAnswer(e.target.value)}
                    placeholder="введите ответ..."
                />
                <div className="box-question-btn">
                  <button className="question-btn" type="submit">
                    Добавить
                  </button>
                </div>
              </form>
          )}
        </div>
        <AdminPanel
            valueTitle={valueTitle}
            valueAnswer={valueAnswer}
            setValueTitle={setValueTitle}
            setValueAnswer={setValueAnswer}
            onSubmitFormCreateQuestion={onSubmitFormCreateQuestion}
        />
      </div>
  );
};

export default InputQuestion;
