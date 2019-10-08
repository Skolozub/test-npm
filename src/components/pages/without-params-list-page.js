import React from "react";
import { PaginationInitContainer } from "@skolozub/react-redux--pagination";
import WithoutParamsListContainer from "../../containers/without-params-list-container";

export const WithoutParamsListPage = () => (
  <PaginationInitContainer paginationName="withoutparams">
    <WithoutParamsListContainer />
  </PaginationInitContainer>
);
