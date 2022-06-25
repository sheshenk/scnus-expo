import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import CustomScanButton from "./CustomScanButton"
import TabBarIcon from "./TabBarIcon"
import { MERCHANT_TABS } from "../../constants/tabs"

const Tab = createBottomTabNavigator()

export default function MerchantTabs() {
	const createTabIcon = (tab) => (props) => <TabBarIcon icon={tab.icon} name={tab.name} {...props}/>
	
	const tabElements = MERCHANT_TABS.map(tab => (
		{
			...tab,
			options: {
				tabBarIcon: createTabIcon(tab), 
				...(tab.name === 'Scan' && { 
					tabBarButton: (props) => <CustomScanButton {...props}/>
				})
			}
		}
	)).map(props => <Tab.Screen key={props.name} {...props}/>)

	return (
		<Tab.Navigator screenOptions={{
			tabBarStyle: [{
				position: 'absolute',
				bottom: 0,
				left: 0,
				right: 0,
				elevation: 0,
				backgroundColor: 'white',
				borderTopColor: 'transparent',
				height: 100
			}],
			tabBarShowLabel: false,
			headerShown: false
		}}>
			{tabElements}
		</Tab.Navigator>
	)
}