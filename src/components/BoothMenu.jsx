import React, { useState } from "react";

import "./styles.css";

const BoothMenu = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = ({ target: { value } }) => setId(value);
  const handlePasswordChange = ({ target: { value } }) => setPassword(value);
  return (
    <div className="booth-menu">
      <input
        type="text"
        name="id"
        value={id}
        placeholder="부스 아이디"
        className="id-input"
        onChange={handleIdChange}
      ></input>
      <input
        type="password"
        name="password"
        value={password}
        placeholder="비밀번호"
        className="pw-input"
        onChange={handlePasswordChange}
      ></input>
      <button className="search-button">조회하기</button>
    </div>
  );
};

export default BoothMenu;
