import TeX from "../assets/tex-brands-solid.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faJsSquare, faReact, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';
import { TypescriptPlainIcon, BootstrapPlainIcon, CPlainIcon, DartPlainIcon, FlutterPlainIcon } from 'react-devicons';

const LanguageDict = ({ language }) => {
    const color = "black";

    const languages = {
        JS: () => <FontAwesomeIcon icon={faJsSquare} />,
        Java: () => <FontAwesomeIcon icon={faJava} />,
        React: () => <FontAwesomeIcon icon={faReact} />,
        HTML: () => <FontAwesomeIcon icon={faHtml5} />,
        CSS: () => <FontAwesomeIcon icon={faCss3} />,
        TS: () => <TypescriptPlainIcon color={color} />,
        Bootstrap: () => <BootstrapPlainIcon color={color} />,
        C: () => <CPlainIcon color={color} />,
        Dart: () => <DartPlainIcon color={color} />,
        Flutter: () => <FlutterPlainIcon color={color} />,
        LaTeX: () => <img src={TeX} height={20} width={20} />,
    };

    const Icon = languages[language];
    return Icon ? <Icon /> : null;
};

export default LanguageDict;