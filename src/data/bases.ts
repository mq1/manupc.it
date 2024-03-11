import type { AttributeName } from "./attributes";

export interface Base {
  id: string;
  name: string;
  attributes: AttributeName[];
  images: string[];
  shortdesc: string;
  description: string;
  link?: string;
  price: number;
  size: string;
}

export const bases: Base[] = [
  {
    id: "asrock-deskmini-x300",
    name: "Mini PC AMD",
    attributes: ["cpu-am4", "ram", "ssd", "wifi", "vesa", "usb2", "os"],
    images: [
      "/src/assets/DeskMini X300 Series(L1).png",
      "/src/assets/DeskMini X300 Series(L2).png",
      "/src/assets/DeskMini X300 Series(L3).png",
      "/src/assets/DeskMini X300 Series(L4).png",
    ],
    shortdesc: "Adatto a chi cerca una soluzione economica e performante",
    description:
      "Un mini PC compatto ed economico! Basato su Asrock DeskMini X300",
    link: "https://asrock.com/nettop/AMD/DeskMini X300 Series/index.it.asp",
    price: 200,
    size: "155 x 155 x 80 mm",
  },
  {
    id: "asrock-deskmini-b760",
    name: "Mini PC Intel",
    attributes: ["cpu-lga1700", "ram", "ssd", "wifi", "vesa", "usb2", "os"],
    images: [
      "/src/assets/DeskMini B760 Series(L1).png",
      "/src/assets/DeskMini B760 Series(L2).png",
      "/src/assets/DeskMini B760 Series(L3).png",
      "/src/assets/DeskMini B760 Series(L4).png",
    ],
    shortdesc: "Adatto a chi cerca stabilità e affidabilità",
    description:
      "Con i potenti processori Intel di ultima generazione! Basato su Asrock DeskMini B760",
    link: "https://asrock.com/nettop/Intel/DeskMini B760 Series/index.it.asp",
    price: 275,
    size: "155 x 155 x 80 mm",
  },
  {
    id: "coolermaster-masterbox-nr200p-amd",
    name: "Mini PC Gaming AMD Colorato",
    attributes: ["nr200p", "cpu-am5", "ram", "gpu", "ssd", "os"],
    images: [
      "/src/assets/nr200p_colour_webpages_4000x4000_gallery-13-zoom.png",
      "/src/assets/nr200p_colour_webpages_4000x4000_gallery-1-zoom.png",
      "/src/assets/nr200p_colour_webpages_4000x4000_gallery-16-zoom.png",
      "/src/assets/nr200p_colour_webpages_4000x4000_gallery-6-zoom.png",
      "/src/assets/nr200p-gallery-1-zoom.png",
      "/src/assets/nr200p-gallery-10-zoom.png",
    ],
    shortdesc:
      "Per chi vuole giocare, ma senza rinunciare allo spazio. Disponibile in varie colorazioni!",
    description:
      "Basato su CoolerMaster MasterBox NR200P e scheda madre con Wi-Fi incluso!",
    price: 350,
    size: "376 x 185 x 292 mm",
  },
  {
    id: "coolermaster-masterbox-nr200p-intel",
    name: "Mini PC Gaming Intel Colorato",
    attributes: ["nr200p", "cpu-lga1700", "ram", "gpu", "ssd", "os"],
    images: [
      "/src/assets/nr200p_colour_webpages_4000x4000_gallery-13-zoom.png",
      "/src/assets/nr200p_colour_webpages_4000x4000_gallery-1-zoom.png",
      "/src/assets/nr200p_colour_webpages_4000x4000_gallery-16-zoom.png",
      "/src/assets/nr200p_colour_webpages_4000x4000_gallery-6-zoom.png",
      "/src/assets/nr200p-gallery-1-zoom.png",
      "/src/assets/nr200p-gallery-10-zoom.png",
    ],
    shortdesc:
      "Per chi vuole giocare, ma senza rinunciare allo spazio. Disponibile in varie colorazioni!",
    description:
      "Basato su CoolerMaster MasterBox NR200P e scheda madre con Wi-Fi incluso!",
    price: 315,
    size: "376 x 185 x 292 mm",
  },
];
