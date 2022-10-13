import styled from "@emotion/styled";
import React from "react";
import CompanyContainer from "./components/Company/CompanyContainer";

function App() {
  return (
    <AppContainer>
      <CompanyContainer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;

  & > div {
    max-width: 900px;
  }
`;

export default App;
