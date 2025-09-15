import React from "react";
import { ImTelegram } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { SlSocialVkontakte } from "react-icons/sl";
import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="fot1">
            <div className="logo">
              <Link>
                <h1>QPICK</h1>
              </Link>
            </div>
          </div>
          <div className="fot2">
            <div className="fotMenu1">
              <Link>Избранное</Link>
              <Link>Корзина</Link>
              <Link>Контакты</Link>
            </div>
          </div>
          <div className="fot3">
            <h2> Условия сервиса</h2>

            <div className="fotLenguage">
              <span className="languageIcon" >
                <MdLanguage/>
              </span>
              <span>Каз</span>
              <span>Рус</span>
              <span>Eng</span>
            </div>
          </div>

          <div className="fot4">
            <span>
              <SlSocialVkontakte />
            </span>
             <span>
              <IoLogoInstagram />
            </span>
             <span>
              <ImTelegram /> 
            </span>
            <span>
              <SiWhatsapp />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
