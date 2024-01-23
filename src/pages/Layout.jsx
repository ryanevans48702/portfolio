import { Outlet, useNavigate } from "react-router-dom";
import Particlestest from "../components/particles";

const Layout = () => {
    const navigate = useNavigate();
    const changePage = (e) => {
        navigate(e)
    }
  return (
    <>
      <nav className="navbar unselect">
        <section className="name clickable">
            Ryan Evans
        </section>
        <section>
            <nav>
                <div className="clickable" onClick={(e) => changePage('/')}>
                    Home
                </div>
                <div className="clickable" onClick={(e) => changePage('/about')}>
                    About
                </div>
                <div className="clickable" onClick={(e) => changePage('/projects')}>
                    Projects
                </div>
                <div className="clickable" onClick={(e) => changePage('/contact')}>
                    Contact
                </div>
            </nav>
        </section>
        <section>
            <div className="resume clickable">
                Resume
            </div>
        </section>
      </nav>
      <div>
        <Particlestest/>
        <Outlet />
      </div>
    </>
  )
};

export default Layout;