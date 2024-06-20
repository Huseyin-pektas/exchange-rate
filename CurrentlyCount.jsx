import React, { useState } from 'react'
import "./src/assets/Style.css"
import { FaArrowCircleRight } from "react-icons/fa";
import axios from 'axios';
const APİ_KEY = "fca_live_StOWAMg2UX3OI1K0XdZhBovvTiO6r692FEgPQJrk"
const BASE_URL = "https://api.freecurrencyapi.com/v1/latest"


const CurrentlyCount = () => {
    const [amount, setAmount] = useState(0);
    const [currency1, setCurrency1] = useState("USD");
    const [currency2, setCurrency2] = useState("TRY");
    const [result, setResult] = useState(0);


    const Cevir = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${APİ_KEY}&base_currency=${currency1}`)
        const sonuc = (response.data.data[currency2]) * amount;
        setResult(sonuc.toFixed(2));
        // console.log(sonuc)


    }




    return (
        <div className="content">
            <div className='card1'>
                <div className=' card'>
                    <input value={amount}
                        onChange={(e) => setAmount(parseFloat(e.target.value))}
                        className='ınput' type="number" placeholder='sayı giriniz' />

                    <select onChange={(e) => setCurrency1(e.target.value)} className='select' >
                        <option value="USD" >USD</option>
                        <option value="EUR">EUR</option>
                        <option value="AUD" >AUD</option>
                        <option value="GBP" >GBP</option>
                        <option value="JPY">JPY</option>
                        <option value="TRY" >TRY</option>
                    </select>
                    <FaArrowCircleRight style={{ fontSize: 40, color: "black" }} />
                    <select onChange={(e) => setCurrency2(e.target.value)} className='select'>
                        <option value="TRY">TRY</option>
                        <option value="USD" >USD</option>
                        <option value="EUR">EUR</option>
                        <option value="AUD">AUD</option>
                        <option value="GBP">GBP</option>
                        <option value="JPY">JPY</option>

                    </select>
                    <input
                        value={result}
                        className='ınput' type="number" placeholder='sonuç' />

                </div>
                <div className='button'>
                    <button className="button1"
                        onClick={Cevir}
                    >Çevir</button>
                </div>
            </div>
        </div>
    )
}

export default CurrentlyCount
