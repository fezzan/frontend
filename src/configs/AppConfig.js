import { SIDE_NAV_LIGHT, NAV_TYPE_SIDE } from 'constants/ThemeConstant';
import { env } from './EnvironmentConfig'

export const APP_NAME = 'CONTRORG';
export const API_BASE_URL = `http://160.119.254.32:${process.env.BACKENDPORT || 4000}/`
export const IMAGE_BASE_URL = API_BASE_URL + "images/";
export const APP_PREFIX_PATH = '/app';
export const AUTH_PREFIX_PATH = '/auth';

export const THEME_CONFIG = {
	navCollapsed: false,
	sideNavTheme: SIDE_NAV_LIGHT,
	locale: 'en',
	navType: NAV_TYPE_SIDE,
	topNavColor: '#3e82f7',
	headerNavColor: '',
	mobileNav: false,
	currentTheme: 'light'
};
