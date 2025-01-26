import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBottleDroplet,
  faFaceAngry,
  faHandshakeAngle,
  faHeartCrack,
  faLaptop,
  faPeopleArrows,
  faPeopleRoof,
  faSadTear,
  faUserGroup,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";

const SIZE = "2xl";

const services = [
  {
    id: "terapia_online",
    label: "Terapia Online",
    icon: <FontAwesomeIcon icon={faLaptop} size={SIZE} />,
  },
  {
    id: "terapia_presencial",
    label: "Terapia Presencial",
    icon: <FontAwesomeIcon icon={faHandshakeAngle} size={SIZE} />,
  },
  {
    id: "violencia_genero",
    label: "Violencia de Género",
    icon: <FontAwesomeIcon icon={faVenusMars} size={SIZE} />,
  },
  {
    id: "dependencia_emocional",
    label: "Dependencia Emocional",
    icon: <FontAwesomeIcon icon={faPeopleArrows} size={SIZE} />,
  },
  {
    id: "relaciones_familiares",
    label: "Relaciones Familiares",
    icon: <FontAwesomeIcon icon={faPeopleRoof} size={SIZE} />,
  },
  {
    id: "terapia_pareja",
    label: "Terapia Pareja",
    icon: <FontAwesomeIcon icon={faUserGroup} size={SIZE} />,
  },
  {
    id: "baja_autoestima",
    label: "Baja Autoestima",
    icon: <FontAwesomeIcon icon={faHeartCrack} size={SIZE} />,
  },
  {
    id: "problemas_conductuales",
    label: "Problemas Conductuales",
    icon: <FontAwesomeIcon icon={faFaceAngry} size={SIZE} />,
  },
  {
    id: "ansiedad_depresion",
    label: "Ansiedad, Depresión",
    icon: <FontAwesomeIcon icon={faSadTear} size={SIZE} />,
  },
  {
    id: "addicciones",
    label: "Addicciones",
    icon: <FontAwesomeIcon icon={faBottleDroplet} size={SIZE} />,
  },
];

export default services;
