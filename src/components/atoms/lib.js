import { H1 } from "./h1";
import { H2 } from "./h2";
import { P } from "./p";
import { Ul } from "./ul";
import { Li } from "./li";
import { Mark } from "./mark";
import { PageWrapper } from "./page-wrapper";

export const Lib = ({ children }) => children;

Lib.H1 = H1;
Lib.H2 = H2;
Lib.P = P;
Lib.Ul = Ul;
Lib.Li = Li;
Lib.Mark = Mark;
Lib.PageWrapper = PageWrapper;
