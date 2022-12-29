import styled from "styled-components";
import Input from "./components/Input/Input";
import "./style/App.css";
import React, { useState } from "react";
import UserData from "./components/UserData/UserData";
import Api from "./api/Api";

const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;
  border: 5px solid #cb1c8d;
  border-radius: 5px;
`;

function App() {
  const [data, setData] = useState({});
  const [repo, setRepo] = useState([]);

  const getUserData = (user) => {
    Api.get(`https://api.github.com/users/${user}`).then((data) => {
      setData(data);
      Api.get(data.repos_url).then((repo) => {
        setRepo(repo);
      });
    });
  };
  return (
    <Container>
      <Input getUserData={getUserData} />
      <UserData userData={data} repoData={repo} />
    </Container>
  );
}

export default App;
