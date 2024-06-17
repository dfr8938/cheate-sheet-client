import "./BoxGroupFarma.css";

const BoxGroupFarma = ({ question }) => {
    return (
        <div className="group-box-farma-column">
            <div className="farma-list-item-box-title">
                {question.title}
            </div>
            <div className="farma-list-item-box-description">
                {question.description}
            </div>
        </div>
    );
};

export default BoxGroupFarma;