import Home from "../screens/Home"
import Tokens from "../screens/Tokens"
import Scan from "../screens/Scan"
import Settings from "../screens/Settings"
import Merchants from "../screens/Merchants"
import home from '../assets/icons/home.png'
import merchants from '../assets/icons/merchants.png'
import tokens from '../assets/icons/tokens.png'
import settings from '../assets/icons/settings.png'
import scan from '../assets/icons/scan.png'
import MerchantHome from "../screens/MerchantHome"
import MerchantScan from "../screens/MerchantScan"

export const TABS = [
	{
		name: "Home",
		component: Home, 
		icon: home
	},
	{
		name: "Tokens",
		component: Tokens, 
		icon: tokens
	},
	{
		name: "Scan",
		component: Scan, 
		icon: scan
	},
	{
		name: "Merchants",
		component: Merchants, 
		icon: merchants
	},
	{
		name: "Settings",
		component: Settings, 
		icon: settings
	},
]


export const MERCHANT_TABS = [
	{
		name: "Home",
		component: MerchantHome, 
		icon: home
	},
	{
		name: "Scan",
		component: MerchantScan, 
		icon: scan
	},
	{
		name: "Settings",
		component: Settings, 
		icon: settings
	},
]