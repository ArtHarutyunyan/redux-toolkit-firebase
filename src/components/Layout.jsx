import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/login">Loign</Link>
        <Link to="/register">Register</Link>
      </header>
      <div className="container">
        <Outlet />
      </div>
      <footer className="container">2022</footer>
    </>
  );
};

export { Layout };
