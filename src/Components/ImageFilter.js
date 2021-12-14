import React from "react";
import Alimentacao from "../assets/images/alimentacao.svg";
import Outros from "../assets/images/outros.svg";
import Saude from "../assets/images/saude.svg";
import Transporte from "../assets/images/transporte.svg";
import Utilidades from "../assets/images/utilidades.svg";
import { Icone } from '../Components/UI';

export default (type) => {
	const Images = {
		Restaurante: <Icone src={Alimentacao} alt="Restaurante" />,
		Utilidades: <Icone src={Utilidades} alt="Utilidades" />,
		Saude: <Icone src={Saude} alt="Saude" />,
		Transporte: <Icone src={Transporte} alt="Transporte" />,
		Outros: <Icone src={Outros} alt="Outros" />,
	};

	return Images[type] || Images.default;
};