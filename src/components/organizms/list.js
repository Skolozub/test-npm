import React from "react";
import { Lib } from "../atoms/lib";

export const List = ({ list, isLoading }) => {
  if (isLoading)
    return <Lib.PageWrapper>Wait... Content is loading</Lib.PageWrapper>;
  if (list.length < 1) return <Lib.PageWrapper>Empty data...</Lib.PageWrapper>;

  return (
    <Lib.PageWrapper>
      <Lib.Ul>
        {list.map(item => (
          <Lib.Li key={item.name}>
            {item.name} - {item.birth_year}
          </Lib.Li>
        ))}
      </Lib.Ul>
    </Lib.PageWrapper>
  );
};
