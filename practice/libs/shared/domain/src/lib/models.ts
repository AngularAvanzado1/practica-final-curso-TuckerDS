export interface Region {
  id: string;
  code: string;
  iso2Code: string;
  name: string;
}

export interface Country {
  id: string;
  iso2Code: string;
  name: string;
  region: Metadata;
  incomeLevel: Metadata;
  lendingType: Metadata;
  capitalCity: string;
  longitude: string;
  latitude: string;
}

export interface Metadata {
  id: string;
  iso2Code: string;
  value: string;
}
