import imgSolventes from "../assets/imgs/categories/solventes.png";
import imgAcidos from "../assets/imgs/categories/acidos.png";
import imgBases from "../assets/imgs/categories/bases.png";
import imgReagentes from "../assets/imgs/categories/reagentes.png";

import AcidoCloridricoImg from "../assets/imgs/products/ácido-cloridrico.jpeg";
import HidroxidoSodioImg from "../assets/imgs/products/hidroxido-sodio.png";



export const MOCK_CATEGORIES = [
  { id: 1, title: "Solventes", desc: "Ampla gama de solventes para diversas aplicações.", img: imgSolventes },
  { id: 2, title: "Ácidos", desc: "Ácidos de alta pureza para laboratório e indústria.", img: imgAcidos },
  { id: 3, title: "Bases", desc: "Bases fortes e fracas para suas necessidades.", img: imgBases },
  { id: 4, title: "Reagentes Analíticos", desc: "Reagentes de alta qualidade para análises precisas.", img: imgReagentes },
];

export const MOCK_PRODUCTS = [
  { id: 1, name: "Acetona", cas: "67-64-1", formula: "C₃H₆O", purity: ">99.5%", price: 45.00 },
  { id: 2, name: "Álcool Isopropílico", cas: "67-63-0", formula: "C₃H₈O", purity: "Grau Técnico", price: 32.50 },
  { id: 3, name: "Hidróxido de Sódio", cas: "1310-73-2", formula: "NaOH", purity: "Grau Farmacêutico", price: 75.00 },
  { id: 4, name: "Metanol", cas: "67-56-1", formula: "CH₄O", purity: ">99.8%", price: 28.90 },
  { id: 5, name: "Ácido Clorídrico", cas: "7647-01-0", formula: "HCl", purity: "37%", price: 50.00 },
];

export const MOCK_CART = [
  { id: 1, productId: 5, name: "Ácido Clorídrico (HCl)", cas: "#AC12345", img: AcidoCloridricoImg, price: 50, qty: 2 },
  { id: 2, productId: 3, name: "Hidróxido de Sódio (NaOH)", cas: "#HS67890", img: HidroxidoSodioImg, price: 75, qty: 1 },
];