import React, { useState } from "react";
//import SearchIcon from "@mui/icons-material/Search";

import "./styles.css";

/*
type InputProps = {
  onClick(): void;
  name: string;
  children: React.ReactNode;
};

const idInput: React.FunctionComponent<InputProps> = ({children, ...props}) => {
  const {onClick , name} = props;
  return <><button onClick={onClick}>{children}</button></>
}
*/
const StudentMenu = () => {
  const [id, setId] = useState(2);

  const handleChange = ({ target: { value } }) => setId(value);
  return (
    <div className="student-menu">
      <input type="text" name = "id" value = {id} placeholder="학번" className="id-input" onChange={handleChange}></input>
      <button className="search-button">
        조회하기
      </button>
    </div>
  );
};

export default StudentMenu;
