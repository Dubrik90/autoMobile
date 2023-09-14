import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_KEY = 'currentTheme';

export type Theme = 'light' | 'dark';

export const saveCurrentTheme = async (theme: Theme): Promise<void> => {
    try {
        await AsyncStorage.setItem(THEME_KEY, theme);
    } catch (error) {
        console.error('Ошибка при сохранении темы:', error);
    }
};

export const loadCurrentTheme = async (): Promise<Theme> => {
    try {
        const theme = await AsyncStorage.getItem(THEME_KEY);
        return (theme as Theme) || 'dark';
    } catch (error) {
        console.error('Ошибка при загрузке темы:', error);
        return 'dark';
    }
};
