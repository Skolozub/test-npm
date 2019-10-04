import React from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import styled from "styled-components";

export const Pagination = props => {
  const { totalPages } = props;
  if (totalPages <= 1) return null;

  const { location, params, paramName = "page" } = props;
  const { pathname } = location;

  const currentPage = Number(params[paramName]);

  return (
    <Wrapper>
      <PrevBtn
        as={currentPage === 1 ? NotActiveBtn : Link}
        to={`${pathname}?${queryString.stringify({
          ...params,
          [paramName]: currentPage - 1
        })}`}
      >
        Previous
      </PrevBtn>

      {[...Array(totalPages)].map((_, index) => (
        <PageBtn
          key={index}
          as={currentPage === index + 1 && CurrentPage}
          to={`${pathname}?${queryString.stringify({
            ...params,
            [paramName]: index + 1
          })}`}
        >
          {index + 1}
        </PageBtn>
      ))}

      <NextBtn
        as={currentPage === totalPages ? NotActiveBtn : Link}
        to={`${pathname}?${queryString.stringify({
          ...params,
          [paramName]: currentPage + 1
        })}`}
      >
        Next
      </NextBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 20px;
`;
const Btn = styled(Link)`
  display: flex;
  padding: 0.5rem 0.75rem;
  line-height: 1.25;
  color: #007bff;
  border: 1px solid #dee2e6;
  text-decoration: none;
  user-select: none;
`;
const PrevBtn = styled(Btn)`
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
`;
const NextBtn = styled(Btn)`
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
`;
const PageBtn = styled(Btn)``;
const NotActiveBtn = styled.div`
  color: #b3b3b3;
  cursor: default;
`;
const CurrentPage = styled.div`
  background: #007bff;
  color: #fff;
  cursor: default;
`;
