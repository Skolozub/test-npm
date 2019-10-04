import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Lib } from "../atoms/lib";

export const DocumentationPage = () => (
  <Lib.PageWrapper>
    <Lib.H1>Документация</Lib.H1>
    <Lib.H2>Установка пагинации</Lib.H2>
    <Lib.P>
      Для монтажа компонентов пагинации необходимо вызвать функцию регистрации
      компонента - <Lib.Mark>registerPagination</Lib.Mark>. Вызов осуществляется
      вне компонента. В параметре передаётся объект, который обязательно должен
      содержать ссылку на текущий <Lib.Mark>store и paginationName</Lib.Mark> -
      имя регистрируемой пагинации. Остальные параметры опциональны. По
      умолчанию <Lib.Mark>paramName</Lib.Mark> равен "page", а{" "}
      <Lib.Mark>withparams</Lib.Mark> равен false. Функция возвращает
      зарегистрированный контейнер пагинации, который необходимо поместить в
      рендер.
    </Lib.P>
    <SyntaxHighlighter language="javascript" style={tomorrow} showLineNumbers>
      {paginstionWithPropsCode}
    </SyntaxHighlighter>
    <Lib.P>
      Далее необходимо поместить компонент{" "}
      <Lib.Mark>PaginationContainer</Lib.Mark> в компонент, где необходимо
      разместить пагинацию. Данный компонент должен содержать обязательный пропс{" "}
      <Lib.Mark>paginationName</Lib.Mark>, который должен быть равен
      аналогичному значению из функции регистарии компонента.
    </Lib.P>
    <Lib.H2>Пропсы</Lib.H2>
    <Lib.Ul>
      <Lib.Li>
        <Lib.Mark>paginationName [string: required]</Lib.Mark> - id пагинации,
        которое будет внесено в store.pagination{" "}
        <Lib.Mark>{`store: { pagination: { [paginationName]: { data } }}`}</Lib.Mark>
      </Lib.Li>
      <Lib.Li>
        <Lib.Mark>withparams [boolean: optional, default = false]</Lib.Mark> -
        определяет, будут ли парситься данные из get-параметров строки URL
      </Lib.Li>
      <Lib.Li>
        <Lib.Mark>paramName [string: optional, default = 'page']</Lib.Mark> -
        задаёт имя параметра пагинации, по умолчанию оно равно "page"
      </Lib.Li>
      <Lib.Li>
        <Lib.Mark>saveParams [boolean: optional, default = false]</Lib.Mark> -
        определяет, будут ли удаляться параметры данной пагинации из store,
        когда компонент будет размонтирован
      </Lib.Li>
    </Lib.Ul>
    <Lib.H2>Примеры</Lib.H2>
    <Lib.P>
      <Link to="/params/?some-param=505">Пагинация с параметрами</Link>
    </Lib.P>
    <SyntaxHighlighter language="javascript" style={tomorrow} showLineNumbers>
      {paginstionWithPropsCode}
    </SyntaxHighlighter>
    <Lib.P>
      <Link to="/only-page-param/?some-param=505">
        Пагинация без параметров
      </Link>
    </Lib.P>
    <SyntaxHighlighter language="javascript" style={tomorrow} showLineNumbers>
      {paginstionWithoutPropsCode}
    </SyntaxHighlighter>
  </Lib.PageWrapper>
);

const paginstionWithPropsCode = `import React from "react";
import { connect } from "react-redux";
import { store } from "../../constants/store";
import { registerPagination } from "../../containers";
import ListPaginationContainer from "./list-pagination-container";
import ListContainer from "./list-container";

// функция регистрации пагинации
const RegisteredPaginationContainer = registerPagination({
  store,
  paginationName: "withparams",
  paramName: "stage",
  withparams: true
});

const ListWithParamsPaginationContainer = ({ params }) => (
  <RegisteredPaginationContainer>
    <ListPaginationContainer params={params} paramName="stage" />
    <ListContainer params={params} />
  </RegisteredPaginationContainer>
);

const mapStateToProps = state => ({
  params: state.pagination.withparams.params
});

export default connect(mapStateToProps)(ListWithParamsPaginationContainer);

`;

const paginstionWithoutPropsCode = `import React from "react";
import { connect } from "react-redux";
import { store } from "../../constants/store";
import { registerPagination } from "../../containers";
import ListPaginationContainer from "./list-pagination-container";
import ListContainer from "./list-container";

const RegisteredPaginationContainer = registerPagination({
  store,
  paginationName: "wihtoutparams"
});

const ListWithoutParamsPaginationContainer = ({ params }) => (
  <RegisteredPaginationContainer>
    <ListPaginationContainer params={params} />
    <ListContainer params={params} />
  </RegisteredPaginationContainer>
);

const mapStateToProps = state => ({
  params: state.pagination.wihtoutparams.params
});

export default connect(mapStateToProps)(ListWithoutParamsPaginationContainer);

`;
