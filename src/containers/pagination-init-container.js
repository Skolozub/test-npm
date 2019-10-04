import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import {
  setPaginationPage,
  deletePagination
} from "../actions/pagination-actions";

class PaginationInitContainer extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    this.setPageToStore(location);
  }

  // -----------------Methods-------------------

  setPageToStore = location => {
    const { paginationName, paramName = "page", setPageHandler } = this.props;
    const params = queryString.parse(location.search);
    setPageHandler({
      paginationName,
      params: { paramName, paramValue: params[paramName] || "1" }
    });
  };

  // ----------------Lifecycle------------------

  componentDidUpdate = prevProps => {
    const { location } = this.props;
    const paramsHasChanged = prevProps.location.search !== location.search;
    if (!paramsHasChanged) return null;

    this.setPageToStore(location);
  };

  componentWillUnmount = () => {
    const { paginationName, deletePaginationHandler, saveParams } = this.props;
    if (!saveParams) deletePaginationHandler({ paginationName });
  };

  render = () => <>{this.props.children}</>;
}

const mapStateToProps = state => ({
  location: state.router.location
});

const mapDispatchToProps = dispatch => ({
  setPageHandler: payload => dispatch(setPaginationPage(payload)),
  deletePaginationHandler: payload => dispatch(deletePagination(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationInitContainer);
