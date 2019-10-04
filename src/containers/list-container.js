import React, { Component } from "react";
import axios from "axios";
import { List } from "../components/organizms/list";

export class ListContainer extends Component {
  // -----------------Methods-------------------

  fetchList = async params => axios.get("/people", { params });

  loadData = async params => {
    this.setState({ isLoading: true });
    const { data } = await this.fetchList(params);
    this.setState({ list: data.results, isLoading: false });
  };

  withTimeout = fn => {
    const { queryId } = this.state;
    clearTimeout(queryId);

    const newQueryId = setTimeout(fn, 500);

    this.setState({
      queryId: newQueryId
    });
  };

  // ----------------Lifecycle------------------

  componentDidMount = () => {
    const { params } = this.props;

    this.loadData(params);
  };

  componentDidUpdate = prevProps => {
    const { params } = this.props;

    if (prevProps.params !== params)
      this.withTimeout(() => this.loadData(params));
  };

  state = {
    list: [],
    isLoading: false,
    queryId: 0
  };

  render = () => (
    <List list={this.state.list} isLoading={this.state.isLoading} />
  );
}