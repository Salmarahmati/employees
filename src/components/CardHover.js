import "../index.css";
import React from "react";


const Hovering = (props) => {
    return (
        <div>
            <div className="employee-card">

                <img src={props.image} alt="Employee Name" />
                <h2>{props.name}</h2>
                <p>Age:{props.age}</p>
                <p>Department: {props.department} </p>
            </div>
        </div>
    );
};


function HoverInfo(props) {
    const employeesData = props.data;
    const result = employeesData.map((item) => (
        <di>
            {
                <Hovering
                    image={item.image}
                    name={item.name}
                    age={item.age}
                    department={item.department}
                ></Hovering>
            }
        </di>
    ));
    return result;
}
export default HoverInfo;
