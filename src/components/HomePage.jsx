import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
        <h1>Şehir Uygulamasına Hoş Geldiniz!</h1>
        <nav>
          <Link to="/add-city">
            <button>Şehir Ekle</button>
          </Link>
          <Link to="/city-list">
            <button>Şehir Listesi</button>
          </Link>
        </nav>
      </div>
    )
}

export default HomePage;