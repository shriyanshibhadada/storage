import React, { useState } from "react";
import { Container } from "@material-ui/core";
import Form from "./Form.js";
import Files from "./Files";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));
  if (user == null) {
    history.push("/auth");
  }
  return (
    <div>
      <Container>
        <Form />
        <Files />
      </Container>
    </div>
  );
};

export default Home;
