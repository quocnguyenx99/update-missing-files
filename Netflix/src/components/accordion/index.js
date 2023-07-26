import React, {
  createContext, useContext, useMemo, useState
} from 'react';
import {
  Container, Inner, Title, Item, Header, Body
} from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem ({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  const value = useMemo(() => ({ toggleShow, setToggleShow }));
  return <ToggleContext.Provider value={value}><Item {...restProps}>{children}</Item></ToggleContext.Provider>;
};

Accordion.Header = function AccordionHeader ({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  const handleToggle = () => {
    setToggleShow((prev) => !prev);
  };
  return (
    <Header onClick={handleToggle} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="./images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="./images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody ({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
