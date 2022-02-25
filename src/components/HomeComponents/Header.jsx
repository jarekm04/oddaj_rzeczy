import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";
import {animateScroll as scroll} from 'react-scroll';
import {auth} from "../../firebase";
import {signOut} from "firebase/auth";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {MdQuestionAnswer} from "react-icons/md";
import {GiOrganigram} from "@react-icons/all-files/gi/GiOrganigram";
import {BsFillPatchQuestionFill} from "react-icons/bs";
import {FaCompressArrowsAlt} from "@react-icons/all-files/fa/FaCompressArrowsAlt";
import {TiInfoLargeOutline} from "@react-icons/all-files/ti/TiInfoLargeOutline";
import {FiLogIn} from "@react-icons/all-files/fi/FiLogIn";
import {BsPencilSquare} from "@react-icons/all-files/bs/BsPencilSquare";
import {FiLogOut} from "@react-icons/all-files/fi/FiLogOut";
import {FaHandHoldingHeart} from "@react-icons/all-files/fa/FaHandHoldingHeart";

const Header = ({isUserLogged, setIsUserLogged}) => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            setIsUserLogged(false);
        }).catch(err => {
            alert(err.message);
        });
    };

    return (
        <>
            <header className="header desktop">
                {isUserLogged ? (
                    <section className="header__loginArea">
                        <p className="userName">Cześć {localStorage.getItem("userName")}</p>
                        <Link to="/oddaj-rzeczy" className="give__btn">Oddaj rzeczy</Link>
                        <Link onClick={handleSignOut} to="/wylogowano" className="loginArea__btn">Wyloguj</Link>
                    </section>
                ) : (
                    <section className="header__loginArea">
                        <Link to="/logowanie" className="loginArea__btn">Zaloguj</Link>
                        <Link to="/rejestracja" className="loginArea__btn">Załóż konto</Link>
                    </section>
                )}
                <nav className="header__menu">
                    <Link to="/" className="menu__btn">Start</Link>
                    <LinkScroll to="simpleStepsID" smooth={true} duration={500} offset={-55} className="menu__btn">O co
                        chodzi?</LinkScroll>
                    <LinkScroll to="aboutUsID" smooth={true} duration={500} className="menu__btn">O nas</LinkScroll>
                    <LinkScroll to="foundationID" smooth={true} duration={500} offset={-70} className="menu__btn">Fundacja
                        i organizacje</LinkScroll>
                    <LinkScroll to="contactID" smooth={true} duration={500} className="menu__btn">Kontakt</LinkScroll>
                </nav>
            </header>
            <header className="header mobile">
                {sidebar ? <AiOutlineCloseCircle onClick={showSidebar}/> : <GiHamburgerMenu onClick={showSidebar}/>}
                {isUserLogged ? <p className="userName">Cześć {localStorage.getItem("userName")}</p> : null}
                <nav className={sidebar? "header__mobileMenu active" : "header__mobileMenu"}>
                    <section className="mobileMenu__items">
                        <Link to="/" className="menu__btn" onClick={() => {showSidebar(); scroll.scrollToTop()}}><FaCompressArrowsAlt/>Start</Link>
                        <LinkScroll to="simpleStepsID" smooth={true} duration={500} offset={-100} className="menu__btn" onClick={showSidebar}><BsFillPatchQuestionFill/>O co
                            chodzi?</LinkScroll>
                        <LinkScroll to="aboutUsID" smooth={true} duration={500} offset={-220} className="menu__btn" onClick={showSidebar}><TiInfoLargeOutline/>O nas</LinkScroll>
                        <LinkScroll to="foundationID" smooth={true} duration={500} offset={-90} className="menu__btn" onClick={showSidebar}><GiOrganigram/>Fundacja
                            i organizacje</LinkScroll>
                        <LinkScroll to="contactID" smooth={true} duration={500} className="menu__btn" onClick={showSidebar}><MdQuestionAnswer/>Kontakt</LinkScroll>
                    </section>
                    {isUserLogged ? (
                        <section className="mobileMenu__loginArea">
                            <Link to="/oddaj-rzeczy" className="give__btn" onClick={showSidebar}><FaHandHoldingHeart/>Oddaj rzeczy</Link>
                            <Link onClick={() => {handleSignOut(); showSidebar()}} to="/wylogowano" className="loginArea__btn"><FiLogOut/>Wyloguj</Link>
                        </section>
                    ) : (
                        <section className="mobileMenu__loginArea">
                            <Link to="/logowanie" className="loginArea__btn" onClick={showSidebar}><FiLogIn/>Zaloguj</Link>
                            <Link to="/rejestracja" className="loginArea__btn" onClick={showSidebar}><BsPencilSquare/>Załóż konto</Link>
                        </section>
                    )}
                </nav>
            </header>
        </>
    );
};

export default Header;