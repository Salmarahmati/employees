import EmployeeCard from "./EmployeeCard";
import "../index.css";
export default function TotalCards(props) {
  const employeesData = props.data;
  const result = employeesData.map((item) => (
    <di>
      {
        <EmployeeCard
          image={item.image}
          name={item.name}
        ></EmployeeCard>
      }
    </di>
  ));
  return result;
}
