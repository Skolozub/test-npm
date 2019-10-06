import React from "react";
import { PaginationInitContainer } from "@skolozub/react-redux-pagination-v2";
import WithParamsListContainer from "../../containers/with-params-list-container";

export const WithParamsListPage = () => (
  <PaginationInitContainer paginationName="withparams">
    <WithParamsListContainer />
  </PaginationInitContainer>
);
