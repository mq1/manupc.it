export type AttributeName =
  | "cpu-am4"
  | "cpu-am5"
  | "cpu-lga1700"
  | "ram"
  | "ssd"
  | "wifi"
  | "vesa"
  | "usb2"
  | "os"
  | "nr200p"
  | "gpu";

export interface Attribute {
  label: string;
  options: { [key: string]: number };
}

export const attributes: Record<AttributeName, Attribute> = {
  "cpu-am4": {
    label: "Processore",
    options: {
      "Ryzen 3 4300G": 125,
      "Ryzen 5 4600G": 140,
      "Ryzen 5 5600G": 175,
      "Ryzen 7 5700G": 270,
    },
  },
  "cpu-am5": {
    label: "Processore",
    options: {
      "Ryzen 5 7600X": 285,
    },
  },
  "cpu-lga1700": {
    label: "Processore",
    options: {
      "Intel Core i3-12100": 175,
      "Intel Core i5-12400": 220,
      "Intel Core i5-13400": 355,
      "Intel Core i5-14500": 385,
    },
  },
  ram: {
    label: "RAM",
    options: {
      "8GB": 25,
      "16GB": 50,
    },
  },
  ssd: {
    label: "SSD",
    options: {
      "250GB": 30,
      "500GB": 50,
      "1TB": 80,
      "2TB": 145,
    },
  },
  gpu: {
    label: "Scheda video",
    options: {
      "AMD Radeon RX6400": 165,
      "Intel Arc A580": 255,
    },
  },
  wifi: {
    label: "Wi-Fi",
    options: {
      No: 0,
      Sì: 25,
    },
  },
  vesa: {
    label: "Adattatore VESA",
    options: {
      No: 0,
      Sì: 10,
    },
  },
  usb2: {
    label: "2x porte USB 2.0 aggiuntive",
    options: {
      No: 0,
      Sì: 10,
    },
  },
  os: {
    label: "Sistema Operativo",
    options: {
      "Windows 10 Home": 25,
      "Windows 10 Pro": 35,
      "Linux Mint": 0,
    },
  },
  nr200p: {
    label: "Case",
    options: {
      Nero: 110,
      Bianco: 115,
      Rosa: 125,
      Azzurro: 145,
      Viola: 145,
      Arancione: 205,
    },
  },
};
