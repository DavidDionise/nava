import styled from "@emotion/styled";

type Props = {
  detailKey: string;
  detailValue: string | number;
};

export default function CompanyL1Detail(props: Props) {
  return (
    <div>
      <Key>{props.detailKey}</Key>
      <Value>{props.detailValue}</Value>
    </div>
  );
}

const Key = styled.p``;

const Value = styled.p`
  font-weight: bold;
`;
