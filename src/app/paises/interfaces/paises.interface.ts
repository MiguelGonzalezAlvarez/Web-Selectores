export interface Pais {
    name:         Name;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    cioc?:        string;
    independent:  boolean;
    status:       Status;
    unMember:     boolean;
    currencies:   Currencies;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       Region;
    subregion:    Subregion;
    languages:    { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Region[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    gini?:        { [key: string]: number };
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Region {
    Africa = "Africa",
    Asia = "Asia",
}

export interface Currencies {
    LYD?: TartuGecko;
    XAF?: TartuGecko;
    RWF?: TartuGecko;
    NGN?: TartuGecko;
    AOA?: TartuGecko;
    KMF?: TartuGecko;
    NAD?: TartuGecko;
    ZAR?: TartuGecko;
    BWP?: TartuGecko;
    EGP?: TartuGecko;
    SCR?: TartuGecko;
    SZL?: TartuGecko;
    DZD?: TartuGecko;
    KES?: TartuGecko;
    XOF?: TartuGecko;
    EUR?: TartuGecko;
    SOS?: TartuGecko;
    GMD?: TartuGecko;
    MAD?: TartuGecko;
    GNF?: TartuGecko;
    SDG?: Sdg;
    GBP?: TartuGecko;
    SHP?: TartuGecko;
    CVE?: TartuGecko;
    ZWL?: TartuGecko;
    MZN?: TartuGecko;
    BIF?: TartuGecko;
    ETB?: TartuGecko;
    LSL?: TartuGecko;
    MUR?: TartuGecko;
    MWK?: TartuGecko;
    MGA?: TartuGecko;
    DJF?: TartuGecko;
    SSP?: TartuGecko;
    LRD?: TartuGecko;
    ZMW?: TartuGecko;
    STN?: TartuGecko;
    TND?: TartuGecko;
    TZS?: TartuGecko;
    UGX?: TartuGecko;
    MRU?: TartuGecko;
    SLL?: TartuGecko;
    ERN?: TartuGecko;
    CDF?: TartuGecko;
    GHS?: TartuGecko;
    USD?: TartuGecko;
}

export interface TartuGecko {
    name:   string;
    symbol: string;
}

export interface Sdg {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex:  string;
}

export enum StartOfWeek {
    Monday = "monday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
}

export enum Subregion {
    EasternAfrica = "Eastern Africa",
    MiddleAfrica = "Middle Africa",
    NorthernAfrica = "Northern Africa",
    SouthernAfrica = "Southern Africa",
    WesternAfrica = "Western Africa",
}
