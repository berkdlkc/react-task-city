import { useSelector } from "react-redux";

const CityList = () => {
    const cityList = useSelector((state) => state.cities.cityList)

    // console.log("liste ->", cityList)

    return (
        <div>
            <h1>Şehir Listesi</h1>
            <table>
                <thead>
                    <tr>
                        <td>İl</td>
                        <td>İlçe</td>
                    </tr>
                </thead>

                <tbody>
                    {cityList.length > 0 ? (
                        cityList.map((item,index) => (
                            <tr key={index}>
                                <td>{item.city}</td>
                                <td>{item.district}</td>
                            </tr>
                        ))
                    ):(
                        <tr>
                            <td colSpan="2">Kayıtlı Şehir Yok.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default CityList;