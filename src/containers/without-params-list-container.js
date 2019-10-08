import React from "react";
import { connect } from "react-redux";
import { setPaginationPage } from "@skolozub/react-redux--pagination";
import PaginationWithout from "../components/organizms/pagination-without";
import { ListContainer } from "./list-container";

const WithoutParamsListContainer = ({
  totalPages,
  page,
  setPageHandler,
  paramName
}) => (
  <>
    <PaginationWithout
      {...{
        totalPages,
        paginationName: "withoutparams",
        params: { page },
        paramName,
        setPageHandler
      }}
    />
    <ListContainer params={{ page }} />
  </>
);

const mapStateToProps = state => ({
  page: state.pagination.withoutparams.page,
  totalPages: 5
});

const mapDispatchToProps = dispatch => ({
  setPageHandler: props => dispatch(setPaginationPage(props))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithoutParamsListContainer);
