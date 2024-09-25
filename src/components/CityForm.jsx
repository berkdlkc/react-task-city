import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCity } from "../features/citySlice";
import { Link } from "react-router-dom";

const CityForm = () => {

    const[city, setCity] = useState('');
    const[district, setDistrict] = useState('');
    const dispatch = useDispatch();
    
    const handleAddCity = () => {

        if (!city || !district){
            alert("Alanlar Boş Bırakılamaz.")
        } else {
            dispatch(addCity({ city, district}));
            setCity('');
            setDistrict('');
        }
    }

    return (
        <div className="form-container">

            <div className="link-container">
                <Link to="/city-list" className="city-list-link">
                    Şehir Listesine Git
                </Link>
            </div>

            <h1>Şehir Ekle</h1>
            <form>
                <input
                    type="text"
                    placeholder="İl"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="İlçe"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                />
                <button type="button" onClick={handleAddCity}>Ekle</button>
            </form>
        </div>
    )
};

export default CityForm;