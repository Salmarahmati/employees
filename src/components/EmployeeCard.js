import "../index.css";
const EmployeeCard = (props) => {
  return (
    <div>
      <div className="employee-card">

        <img src={props.image} alt="Employee Name" />
        <h2>{props.name}</h2>
      </div>
    </div>
  );
};
export default EmployeeCard;
