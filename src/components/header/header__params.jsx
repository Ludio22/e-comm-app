import React, { useState } from 'react';
import './style.css';

const HeaderParams = () => {
    const [isLangActive, setLang] = useState("disable");
    const [isCurrencyActive, setCurrency] = useState("disable");

    const handleLang = () => {
        isLangActive === "disable" ? setLang("enable") : setLang("disable");
    }
    const handleCurrency = () => {
        isCurrencyActive === "disable" ? setCurrency("enable") : setCurrency("disable");
    }

    return (
        <div className="header__params-item">
            <div className="header__lang">
                <div onClick={handleLang} className="header__current-lang">
                    <p>en</p>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.99097 4.13965L0.657959 0.139648H7.32495L3.99097 4.13965Z" fill="#22262A" />
                    </svg>
                </div>
                <div className={isLangActive}>
                    <p>ru</p>
                </div>
            </div>
            <div className="header__currency">
                <div onClick={handleCurrency} className="current__current-currency">
                    <p>usd</p>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.99097 4.13965L0.657959 0.139648H7.32495L3.99097 4.13965Z" fill="#22262A" />
                    </svg>
                </div>
                <div className={isCurrencyActive}>
                    <p>rub</p>
                </div>
            </div>
        </div>
    );
}

export default HeaderParams;