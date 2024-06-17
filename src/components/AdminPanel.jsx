import "./AdminPanel.css";
import { useState } from "react";

const AdminPanel = ({
  valueTitle,
  valueAnswer,
  setValueTitle,
  setValueAnswer,
  onSubmitFormCreateQuestion,
}) => {
  const [isOpenWin, setIsOpenWin] = useState(false);

  return (
    <>
      {!isOpenWin ? (
        <div className="admin-panel" onClick={() => setIsOpenWin(!isOpenWin)}>
          <i className="fa-solid fa-chevron-left chewron-left"></i>
        </div>
      ) : null}
      {isOpenWin && (
        <div className="admin-panel-win">
          <div
            className="admin-panel-win-control-container"
            onClick={() => setIsOpenWin(!isOpenWin)}
          >
            <i className="fa-solid fa-chevron-right chewron-right"></i>
          </div>
          <div className="form-horizontal-container">
            <form
              onSubmit={onSubmitFormCreateQuestion}
              className="form-horizontal"
            >
              <h2 className="form-horizontal-title">Добавить вопрос</h2>
              <input
                value={valueTitle}
                onChange={(e) => setValueTitle(e.target.value)}
                className="form-horizontal-input"
                type="text"
                placeholder="введите вопрос..."
              />
              <input
                value={valueAnswer}
                onChange={(e) => setValueAnswer(e.target.value)}
                className="form-horizontal-input"
                type="text"
                placeholder="введите ответ..."
              />
              <div className="form-horizontal-button-container">
                <button className="form-horizontal-button">Добавить</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPanel;
