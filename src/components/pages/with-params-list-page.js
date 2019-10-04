import React from "react";
import PaginationInitContainer from "./pagination-init-container";
import WithParamsListContainer from "./with-params-list-container";

export const WithParamsListPage = () => (
  <PaginationInitContainer paginationName="withparams">
    <WithParamsListContainer />
  </PaginationInitContainer>
);