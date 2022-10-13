import { ApiStatus, CompanyType, Maybe } from "../types";
import mockResponse from "../resources/mockCompanyResponse.json";
import { useState } from "react";

type CompanyDto = {
  ein: string;
  company_name: string;
  plan_year: number;
  employee_count: number;
  company_state: string;
  premium_sum: number;
  broker_commission_sum: number;
  participants_sum: number;
};

/**
 * @description Fetches company data
 * @returns Tuple with the API fetch status, and the function to execute the fetch
 */
export default function useCompanyFetch(): [
  Maybe<ApiStatus>,
  () => Promise<Array<CompanyType>>
] {
  const responseData = mockResponse as unknown as Array<CompanyDto>;

  const [apiStatus, setApiStatus] = useState<Maybe<ApiStatus>>(null);

  //  a strategy for an actual API call
  const executeFetch = () => {
    return new Promise<Array<CompanyType>>((resolve, __) => {
      setApiStatus(ApiStatus.PENDING);
      setTimeout(() => {
        setApiStatus(ApiStatus.SUCCESS);
        resolve(responseData.map(companyDtoToCompany));
      }, 2000);
    });
  };

  return [apiStatus, executeFetch];
}

function companyDtoToCompany(dto: CompanyDto): CompanyType {
  return {
    ein: dto.ein,
    name: dto.company_name,
    year: dto.plan_year,
    numEmployees: dto.employee_count,
    state: dto.company_state,
    premiumSum: dto.premium_sum,
    participants: dto.broker_commission_sum,
    brokerCommission: dto.participants_sum,
  };
}
