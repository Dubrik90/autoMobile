
export type AuthToken = string;

export interface CarDetailType  {
    company: string;
    model: string;
    series: string;
    yearFrom: number;
    yearTo: number;
    engineVolume: string;
    engineType: string;
    mileageFrom: number;
    mileageTo: number;
    priceFrom: number;
    priceTo: number;
    city: string;
    gearBox: string;
    state: string;
    page: number;
};

export interface UserType  {
    id: number;
    login: string | null;
    firstName: string;
    email: string;
    roleId: number;
    token: string;
}

export type CarType = {
    id: number;
    company: string;
    model: string | null;
    year: number;
    engineVolume: string;
    engineType: string;
    mileage: number;
    price: number;
    sity: string;
    date: string | null;
    link: string;
    imgLink: string;
    description: string | null;
    dateCreatedUtc: string;
};

