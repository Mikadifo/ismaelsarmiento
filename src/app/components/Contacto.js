import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//TODO: add instegram brand icon

const Contacto = () => {
  return (
    <div className="px-8 py-16 bg-lightBlue text-white text-base">
      <h3 className="text-center font-bold text-xl mb-8">Contacto</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-3">
          <FontAwesomeIcon icon={faLocationDot} size="xl" />
          <a href="#TODO" className="underline underline-offset-4">
            Calle El Oro y del Batán (Edificio Medicenter)
          </a>
        </div>
        <div className="flex gap-3">
          <FontAwesomeIcon icon={faPhone} size="xl" />
          <a href="#TODO" className="underline underline-offset-4">
            +593 99 009 4848
          </a>
        </div>
        <div className="flex gap-3">
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
          <a
            href="mailto:contacto@ismaelsarmiento.com"
            className="underline underline-offset-4"
          >
            contacto@ismaelsarmiento.com
          </a>
        </div>
        <div className="flex gap-3">
          <FontAwesomeIcon icon={faLocationDot} size="xl" />
          <a href="#TODO" className="underline underline-offset-4">
            /psic.ismaelsar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
