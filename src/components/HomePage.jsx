import { Link } from "react-router-dom";

const HomePage = () => {
    return (
      <div className="home_page_container">
        <h1>Şehir Uygulamasına Hoş Geldiniz!</h1>

          <div className="home_page_button">
          <Link to="/add-city">
            <button>Şehir Ekle</button>
          </Link>
          <Link to="/city-list" style={{marginLeft: '1rem'}}>
            <button>Şehir Listesi</button>
          </Link>
          </div>

      </div>
    )
}

export default HomePage;