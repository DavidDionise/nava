import styled from "@emotion/styled";

type Props = {
  detailKey: string;
  detailValue: string;
};

export default function CompanyDetail(props: Props) {
  return (
    <Container>
      <DetailKey>{props.detailKey}:</DetailKey>
      <DetailValue>{props.detailValue}</DetailValue>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const DetailKey = styled.p`
  font-weight: bold;
`;

const DetailValue = styled.p``;
