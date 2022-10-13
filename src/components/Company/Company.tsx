import styled from "@emotion/styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Typography,
} from "@mui/material";
import { CompanyType } from "../../types";
import CompanyDetails from "./CompanyDetails";
import CompanyL1Detail from "./CompanyL1Detail";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

type Props = {
  company: CompanyType;
};

export default function Company(props: Props) {
  const { company } = props;

  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <Container>
      <CompanyName>{company.name}</CompanyName>
      <L1DetailsContainer>
        <CompanyL1Detail detailKey="State" detailValue={company.state} />
        <CompanyL1Detail
          detailKey="Employees"
          detailValue={company.numEmployees}
        />
        <CompanyL1Detail detailKey="Year" detailValue={company.year} />
      </L1DetailsContainer>
      <StyledAccordion onChange={(_, expanded) => setAccordionOpen(expanded)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="body1">
            {accordionOpen ? "Show less" : "Show more"}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CompanyDetails company={company} />
        </AccordionDetails>
      </StyledAccordion>
    </Container>
  );
}

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CompanyName = styled.h1`
  font-size: 24px;
`;

const L1DetailsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const StyledAccordion = styled(Accordion)`
  width: 100%;
`;
