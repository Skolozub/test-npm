import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Menu = props => (
  <>
    <Navigation>
      <NavigationLink to="/documentation" activeClassName="active">
        Документация
      </NavigationLink>
      <NavigationLink
        to="/pagination-with-params/?some-param=505"
        activeClassName="active"
      >
        Пагинация&nbsp;с&nbsp;учетом&nbsp;параметров
      </NavigationLink>
      <NavigationLink
        to="/pagination-without-params/?some-param=505"
        activeClassName="active"
      >
        Пагинация&nbsp;без&nbsp;учета&nbsp;параметров
      </NavigationLink>
    </Navigation>
    {props.children}
  </>
);

const Navigation = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #343a40;
`;
const NavigationLink = styled(NavLink)`
  display: flex;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
  &:hover {
    color: rgba(255, 255, 255, 0.75);
  }
  &.active {
    color: #fff;
  }
`;
