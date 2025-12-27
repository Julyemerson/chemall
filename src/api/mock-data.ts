import imgSolventes from "../assets/imgs/categories/solventes.png";
import imgAcidos from "../assets/imgs/categories/acidos.png";
import imgBases from "../assets/imgs/categories/bases.png";
import imgReagentes from "../assets/imgs/categories/reagentes.png";

import AcidoCloridricoImg from "../assets/imgs/products/ácido-cloridrico.jpeg";
import HidroxidoSodioImg from "../assets/imgs/products/hidroxido-sodio.png";
import MetanolImg from "../assets/imgs/products/metanol.png";
import AcetonaImg from "../assets/imgs/products/acetona.png";
import AlcoolIsopropilicoImg from "../assets/imgs/products/alcool-isopropilico.png";
import HidroxidoSodioImg2 from "../assets/imgs/products/hidroxido-sodio.png";
import AcidoSulfuricoImg from "../assets/imgs/products/acido-sufurico.png";

export const MOCK_CATEGORIES = [
  {
    id: 1,
    title: "Solventes",
    desc: "Ampla gama de solventes para diversas aplicações.",
    img: imgSolventes,
  },
  {
    id: 2,
    title: "Ácidos",
    desc: "Ácidos de alta pureza para laboratório e indústria.",
    img: imgAcidos,
  },
  {
    id: 3,
    title: "Bases",
    desc: "Bases fortes e fracas para suas necessidades.",
    img: imgBases,
  },
  {
    id: 4,
    title: "Reagentes Analíticos",
    desc: "Reagentes de alta qualidade para análises precisas.",
    img: imgReagentes,
  },
];

export const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Acetona",
    cas: "67-64-1",
    formula: "C₃H₆O",
    purity: ">99.5%",
    price: 45.0,
    unit: "Litro",
    description:
      "Acetona de alta pureza, ideal para uso em laboratórios e processos industriais diversos.",
    image: AcetonaImg,
    specs: [
      { label: "Pureza", value: "≥ 99.5%" },
      { label: "Densidade", value: "0.791 g/cm³" },
      { label: "Ponto de Ebulição", value: "56 °C" },
      { label: "Massa Molar", value: "58.08 g/mol" },
    ],
  },
  {
    id: 2,
    name: "Álcool Isopropílico",
    cas: "67-63-0",
    formula: "C₃H₈O",
    purity: "Grau Técnico",
    price: 32.5,
    unit: "Litro",
    description:
      "Álcool isopropílico de alta pureza, ideal para uso em laboratórios e processos industriais diversos.",
    image: AlcoolIsopropilicoImg,
    specs: [
      { label: "Pureza", value: "≥ 99.5%" },
      { label: "Densidade", value: "0.785 g/cm³" },
      { label: "Ponto de Ebulição", value: "82.6 °C" },
      { label: "Massa Molar", value: "60.10 g/mol" },
    ],
  },
  {
    id: 3,
    name: "Hidróxido de Sódio",
    cas: "1310-73-2",
    formula: "NaOH",
    purity: "Grau Farmacêutico",
    price: 75.0,
    unit: "Kg",
    description:
      "Hidróxido de sódio em escamas de alta pureza, ideal para uso em laboratórios e processos industriais diversos.",
    image: HidroxidoSodioImg2,
    specs: [
      { label: "Pureza", value: "≥ 98%" },
      { label: "Aparência", value: "Sólido branco em escamas" },
      { label: "Densidade", value: "2.13 g/cm³" },
      { label: "Ponto de Fusão", value: "318 °C" },
    ],
  },
  {
    id: 4,
    name: "Metanol",
    cas: "67-56-1",
    formula: "CH₄O",
    purity: ">99.8%",
    price: 28.9,
    unit: "Litro",
    description:
      "Metanol de alta pureza, ideal para uso em laboratórios e processos industriais diversos.",
    image: MetanolImg,
    specs: [
      { label: "Pureza", value: "≥ 99.8%" },
      { label: "Densidade", value: "0.792 g/cm³" },
      { label: "Ponto de Ebulição", value: "64.7 °C" },
      { label: "Massa Molar", value: "32.04 g/mol" },
    ],
  },
  {
    id: 5,
    name: "Ácido Clorídrico",
    cas: "7647-01-0",
    formula: "HCl",
    purity: "37%",
    price: 50.0,
    unit: "Litro",
    description:
      "Ácido clorídrico concentrado, ideal para uso em laboratórios e processos industriais diversos.",
    image: AcidoCloridricoImg,
    specs: [{ label: "Concentração", value: "37%" }],
  },

  {
    id: 6,
    name: "Ácido Sulfúrico 98% P.A.",
    cas: "7664-93-9",
    formula: "H₂SO₄",
    purity: "P.A.",
    price: 120.0,
    unit: "Litro",
    description:
      "Produto químico de alta pureza para uso em análises laboratoriais e processos industriais rigorosos.",
    image: AcidoSulfuricoImg,
    specs: [
      { label: "Pureza", value: "≥ 98%" },
      { label: "Densidade", value: "1.84 g/cm³" },
      { label: "Ponto de Ebulição", value: "337 °C" },
      { label: "Massa Molar", value: "98.079 g/mol" },
    ],
  },
];

export const MOCK_CART = [
  {
    id: 1,
    productId: 5,
    name: "Ácido Clorídrico (HCl)",
    cas: "#AC12345",
    img: AcidoCloridricoImg,
    price: 50,
    qty: 2,
  },
  {
    id: 2,
    productId: 3,
    name: "Hidróxido de Sódio (NaOH)",
    cas: "#HS67890",
    img: HidroxidoSodioImg,
    price: 75,
    qty: 1,
  },
];
