// import React from "react";
// import { connect } from "react-redux";
// import { store } from "../../constants/store";
// import { registerPagination } from "../../containers";
// import ListPaginationContainer from "./list-pagination-container";
// import ListContainer from "./list-container";

// const RegisteredPaginationContainer = registerPagination({
//   store,
//   paginationName: "wihtoutparams"
// });

// const ListWithoutParamsPaginationContainer = ({ params }) => (
//   <RegisteredPaginationContainer>
//     <ListPaginationContainer params={params} />
//     <ListContainer params={params} />
//   </RegisteredPaginationContainer>
// );

// const mapStateToProps = state => ({
//   params: state.pagination.wihtoutparams.params
// });

// export default connect(mapStateToProps)(ListWithoutParamsPaginationContainer);
