import styled from "@emotion/styled";
import { CompanyType, ApiStatus } from "../../types";
import { useEffect, useState } from "react";
import useCompanyFetch from "../../hooks/useCompanyFetch";
import Company from "./Company";

export default function ConpanyContainer() {
  const [companies, setCompanies] = useState<Array<CompanyType>>([]);
  const [apiStatus, executeCompanyFetch] = useCompanyFetch();

  useEffect(() => {
    executeCompanyFetch().then(setCompanies);
  }, []);

  return (
    <Container>
      {apiStatus === ApiStatus.PENDING
        ? "Loading . . . "
        : companies.map((company) => {
            return <Company key={company.ein} company={company} />;
          })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  & > div {
    margin-bottom: 12px;
  }
`;
