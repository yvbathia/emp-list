import React from "react";
import style from "./Home.module.scss";
import Dropdown from "../../Components/Dropdown/Dropdown";

const teamEmpList = [
  {
    team: "Engineering",
    employees: ["Lawana Fan", "Larry Rainer", "Rahul Malik", "Leah Shumway"],
  },
  {
    team: "Executive",
    employees: ["Rohan Gupta", "Ronda Dean", "Robby Maharaj"],
  },
  {
    team: "Finance",
    employees: ["Caleb Brown", "Carol Smithson", "Carl Sorensen"],
  },
  {
    team: "Sales",
    employees: ["Ankit Jain", "Anjali Maulingkar"],
  },
];

const Home = () => {
  const [teams] = React.useState(teamEmpList.map((team) => team.team));
  const [selectedTeam, setSelectedTeam] = React.useState(null);
  const [selectedEmp, setSelectedEmp] = React.useState(null);
  const [employees, setEmployees] = React.useState(
    teamEmpList.map((obj) => obj.employees).flat()
  );
  console.log(employees);

  React.useEffect(() => {
    if (selectedTeam) {
        debugger;
      const selectedEmp = teamEmpList.filter(
        (obj) => obj.team === selectedTeam
      );
      if (selectedEmp.length === 1) {
        setEmployees(selectedEmp[0].employees);
      } else {
        setEmployees(teamEmpList.map((obj) => obj.employees).flat());
        setSelectedEmp(null);
      }
    } else {
      setEmployees(teamEmpList.map((obj) => obj.employees).flat());
      setSelectedEmp(null);
    }
  }, [selectedTeam]);

  React.useEffect(() => {
    if (selectedEmp) {
      teamEmpList.forEach((element) => {
        if (element.employees.includes(selectedEmp)) {
          setSelectedTeam(element.team);
        }
      });
    }
  }, [selectedEmp]);

  return (
    <div className={style.root}>
      <div className={style.container}>
        <h1 className={style.head}>Select an Employee</h1>
        <div className={style.checkbox}>
          <input type="checkbox" name="welcome" />
          <span>Send welcome email to employee</span>
        </div>
        <Dropdown
          head="Select team in the organization"
          onChange={setSelectedTeam}
          selectedValue={selectedTeam}
          setSelectedValue={setSelectedTeam}
          data={teams}
        />
        <Dropdown
          head="Select an Employee"
          onChange={setSelectedEmp}
          selectedValue={selectedEmp}
          setSelectedValue={setSelectedEmp}
          data={employees}
        />
        <div className={style.btnContainer}>
            <button className={style.btn}>Cancel</button>
            <button className={style.btnPrimary}>Ok</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
