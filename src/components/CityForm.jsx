import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCity } from "../features/citySlice";


const CityForm = () => {

    const[city, setCity] = useState('');
    const[district, setDistrict] = useState('');
    const dispatch = useDispatch();
    
    const cityList = useSelector((state) => state.cities.cityList)

    const handleAddCity = () => {

        const cityListFiltered = cityList.filter(item => item.city.toLowerCase() === city.toLowerCase())

        
        if(cityListFiltered.length > 0) {
            alert("Bu Şehir Eklenmiş Gülüm.")
        } else if(!city || !district){
            alert("Alanlar Boş Bırakılamaz.")
        } else {
            dispatch(addCity({ city, district}));
            setCity('');
            setDistrict('');
        }
    }

    return (
        <div>
            <h1>Şehir Ekle</h1>
            <form>
                <input type="text" placeholder="İl" value={city} onChange={(e) => setCity(e.target.value)}></input>
                <input type="text" placeholder="İlçe" value={district} onChange={(e) => setDistrict(e.target.value)}></input>
                <button type="button" onClick={handleAddCity}>Ekle</button>
            </form>
        </div>
    )
};

export default CityForm;