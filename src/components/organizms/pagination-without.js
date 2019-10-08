import React from "react";
import styled from "styled-components";

const PaginationWithout = props => {
  const { totalPages } = props;
  if (totalPages <= 1) return null;

  const { params, paginationName, paramName = "page", setPageHandler } = props;
  const currentPage = Number(params[paramName]);

  return (
    <Wrapper>
      <PrevBtn
        as={currentPage === 1 ? NotActiveBtn : PrevBtn}
        {...(currentPage === 1
          ? {}
          : {
              onClick: () =>
                setPageHandler({
                  paginationName,
                  params: { paramName, paramValue: currentPage - 1 }
                })
            })}
      >
        Previous
      </PrevBtn>

      {[...Array(totalPages)].map((_, index) => (
        <PageBtn
          key={index}
          as={currentPage === index + 1 && CurrentPage}
          onClick={() =>
            setPageHandler({
              paginationName,
              params: { paramName, paramValue: index + 1 }
            })
          }
        >
          {index + 1}
        </PageBtn>
      ))}

      <NextBtn
        as={currentPage === totalPages ? NotActiveBtn : NextBtn}
        {...(currentPage === totalPages
          ? {}
          : {
              onClick: () =>
                setPageHandler({
                  paginationName,
                  params: { paramName, paramValue: currentPage + 1 }
                })
            })}
      >
        Next
      </NextBtn>
    </Wrapper>
  );
};

export default PaginationWithout;

const Wrapper = styled.div`
  display: flex;
  margin: 20px;
`;
const Btn = styled.div`
  display: flex;
  padding: 0.5rem 0.75rem;
  line-height: 1.25;
  color: #007bff;
  border: 1px solid #dee2e6;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
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
