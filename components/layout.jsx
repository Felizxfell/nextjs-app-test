import Navar from "./Navar";

export default function Layout({ children }) {
  return (
    <>
      <Navar />
      <h1>Es te es mi layout</h1>

      {children}
    </>
  );
}
