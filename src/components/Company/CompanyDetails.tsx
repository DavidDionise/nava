import styled from "@emotion/styled";
import { CompanyType } from "../../types";
import CompanyDetail from "./CompanyDetail";
import numberToMoneyString from "../../utils/numberToMoneyString";

type Props = {
  company: CompanyType;
};

export default function CompanyDetails(props: Props) {
  return (
    <OuterContainer>
      <InnerContainer>
        <CompanyDetail
          detailKey="Premium"
          detailValue={`${numberToMoneyString(props.company.premiumSum)}`}
        />
        <CompanyDetail
          detailKey="Participants"
          detailValue={props.company.participants.toString()}
        />
        <CompanyDetail
          detailKey="Broker Commissions"
          detailValue={`$${props.company.brokerCommission.toString()}`}
        />
      </InnerContainer>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  & > div {
    padding-top: 6px;
  }
`;
