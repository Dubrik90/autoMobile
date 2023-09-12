import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
    Login: undefined,
    Ads: undefined,
    Scanner: undefined,
}

export enum RoutsPath {
    LOGIN = 'Login',
    ADS = 'Ads',
    SCANNER = 'Scanner',
}

export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type AdsProps = NativeStackScreenProps<RootStackParamList, 'Ads'>;
export type ScannerProps = NativeStackScreenProps<RootStackParamList, 'Scanner'>;