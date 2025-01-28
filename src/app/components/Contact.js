import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="px-8 py-16 bg-lightBlue text-white text-base">
      <h3 className="text-center font-bold text-xl mb-8">Contacto</h3>
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 max-w-[1024px]">
          <div className="flex gap-3">
            <FontAwesomeIcon icon={faLocationDot} size="xl" />
            <a
              href="https://maps.app.goo.gl/wjDXoPmXkvKUp1H88"
              target="_blank"
              className="underline underline-offset-4"
            >
              Calle El Oro y del Batán (Edificio Medicenter)
            </a>
          </div>
          <div className="flex gap-3">
            <FontAwesomeIcon icon={faPhone} size="xl" />
            <a
              href="https://wa.me/593990094848"
              target="_blank"
              className="underline underline-offset-4"
            >
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
            <FontAwesomeIcon icon={faInstagramSquare} size="xl" />
            <a
              href="https://www.instagram.com/psic.ismaelsar/"
              target="_blank"
              className="underline underline-offset-4"
            >
              /psic.ismaelsar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
