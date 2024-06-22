import "./BoxGroupFarma.css";

const BoxGroupFarma = ({ question }) => {
  const { title, description } = question;

  return (
    <div className="group-box-farma-column">
      <div className="farma-list-item-box-title">{title}</div>
      <div className="farma-list-item-box-description">{description}</div>
    </div>
  );
};

export default BoxGroupFarma;
