export interface CompanyAddress {
  street: string;
  city: string;
  province: string;
  zip: string;
}

export interface CompanyCoordinates {
  lat: number;
  lng: number;
}

export interface CompanyContact {
  phone: string;
  email: string;
}

export interface CompanyData {
  name: string;
  shortName: string;
  legalForm: string;
  legalAddress: CompanyAddress;
  operationalAddress: CompanyAddress;
  operationalCoordinates: CompanyCoordinates;
  contact: CompanyContact;
  /** PEC da mostrare solo nel footer e nei dati societari */
  pec: string;
  /** Partita IVA = Codice Fiscale */
  vatNumber: string;
  rea: string;
}
