export interface CompanyAddress {
  street: string;
  city: string;
  province: string;
  zip: string;
}

export interface CompanyContact {
  phone: string;
  email: string;
}

export interface CompanyData {
  name: string;
  shortName: string;
  legalForm: string;
  address: CompanyAddress;
  contact: CompanyContact;
  areas: string[];
  vatNumber: string;
}
