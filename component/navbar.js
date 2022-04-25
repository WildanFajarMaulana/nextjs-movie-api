import Link from "next/link";
import style from "../styles/index.module.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link href="/">
            <a className={style.navbarBrand}>
              Xil<span>flix</span>
            </a>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link href="/">
                  <a className={style.navLink}>
                    Home <span className="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/movie/">
                  <a className={style.navLink}>Movie</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          background-color: black;
        }
        span {
          color: orange;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
