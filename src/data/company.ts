import type { CompanyData } from "@/types/company";

export const company: CompanyData = {
  name: "Costruzioni Generali Biasuzzi S.R.L.",
  shortName: "Biasuzzi",
  legalForm: "Società a responsabilità limitata",
  legalAddress: {
    street: "Via Morganella Ovest 55",
    city: "Ponzano Veneto",
    province: "TV",
    zip: "31050",
  },
  operationalAddress: {
    street: "Via Feltrina 230/232",
    city: "Treviso",
    province: "TV",
    zip: "31100",
  },
  operationalCoordinates: {
    lat: 45.69159603888619,
    lng: 12.195370382347715,
  },
  contact: {
    phone: "0422 440474",
    email: "info@biasuzzi.it",
  },
  pec: "costrgenbiasuzzi@legalmail.it",
  vatNumber: "01162920266",
  rea: "TV - 144854",
};
