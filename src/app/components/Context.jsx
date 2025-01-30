"use client";
import useLenis from "../../hooks/useLenis";
const Content = ({ children }) => {
  useLenis();

  return <div className="content-wrapper">{children}</div>;
};
export default Content;
