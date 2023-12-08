import React, { useState } from 'react'
// React Router Dom
import { Link } from 'react-router-dom'
// Import icons
import { IoMdSearch, IoMdCart, IoMdHeart, IoIosArrowDown, IoMdClose } from 'react-icons/io'


const Navbar = () => {
    const [search, setSearch] = useState(false);
    const handleSearch = () => setSearch(!search);

    const [isOpenPay, setIsOpenPay] = useState(false);
    const handlePay = () => {
        setIsOpenPay(!isOpenPay);
    };

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        onSelect(option.value);
        setIsOpenPay(false);
    };

    const options = [
        { value: '1', label: 'USD' },
        { value: '2', label: 'RUB' },
        { value: '3', label: 'SUM' },
    ];

    const [isOpenLang, setIsOpenLang] = useState(false);
    const handleLang = () => {
        setIsOpenLang(!isOpenLang);
    };

    const [selectedLang, setSelectedLang] = useState(null);
    const handleLangClick = (lang) => {
        setSelectedLang(lang);
        onSelect(lang.value);
        setIsOpenLang(false);
    };

    const languages = [
        { value: '1', label: 'English' },
        { value: '2', label: 'Русский' },
        { value: '3', label: 'Uzbekcha' },
    ];

    return (
        <nav>
            <div className="container">
                <div className={!search ? 'search' : 'search_none'}>
                    <div className="none" onClick={handleSearch}>
                    </div>
                    <div className="search_flex container">
                        <Link to={'/'} className='nav_logo'>MARKT</Link>
                        <div className="search_input">
                            <i className='nav_i'>
                                <IoMdSearch />
                            </i>
                            <input type="text" placeholder='Search' />
                        </div>
                        <div className="serach_close" onClick={handleSearch}>
                            <i>
                                <IoMdClose />
                            </i>
                        </div>
                    </div>
                </div>
                <div className="nav_box">
                    <Link to={'/'} className='nav_logo'>MARKT</Link>
                    <div className="nav_links">
                        <Link to={'/'} className='nav_link'>Laptops</Link>
                        <Link to={'/'} className='nav_link'>Phones</Link>
                        <Link to={'/'} className='nav_link'>Accessories</Link>
                        <Link to={'/'} className='nav_link'>Acoustic</Link>
                        <Link to={'/'} className='nav_link'>Others</Link>
                        <Link to={'/'} className='nav_link nav_link_gold'>Sale*</Link>
                    </div>
                    <div className="nav_end">
                        <div className="nav_search_btn" onClick={handleSearch}>
                            <i className='nav_i'>
                                <IoMdSearch />
                            </i>
                            <p className='nav_search'>search</p>
                        </div>
                        <Link to={'/'} className="nav_icon">
                            <i className='nav_i'>
                                <IoMdCart />
                            </i>
                            <b>0</b>
                        </Link>
                        <Link to={'/'} className="nav_icon">
                            <i className='nav_i'>
                                <IoMdHeart />
                            </i>
                            <b>0</b>
                        </Link>
                        <div className="nav_usd_box">
                            <div className="nav_usd_box_text" onClick={handlePay}>{selectedOption ? selectedOption.label : 'USD'}</div>
                            <div className={!isOpenPay ? 'nav_little_box' : 'nav_little_box_open'}>
                                {
                                    options.map((option) => (
                                        <div
                                            className={`nav_usd_box_text ${selectedOption === option ? 'selected' : ''}`}
                                            key={option.value}
                                            onClick={() => handleOptionClick(option)}>
                                            {option.label}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="nav_usd_box nav_lang_box">
                            <div className="nav_usd_box_text" onClick={handleLang}>
                                {selectedLang ? selectedLang.label : 'English'}
                                <i className='nav_i'>
                                    <IoIosArrowDown />
                                </i>
                            </div>
                            <div className={!isOpenLang ? 'nav_little_box' : 'nav_little_box_open'}>
                                {
                                    languages.map((lang) => (
                                        <div
                                            className={`nav_usd_box_text ${selectedLang === lang ? 'selected' : ''}`}
                                            key={lang.value}
                                            onClick={() => handleLangClick(lang)}>
                                            {lang.label}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="nav_sing_in">
                            Log in
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;