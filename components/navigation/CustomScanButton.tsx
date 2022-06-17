import { TouchableOpacity, View } from "react-native-ui-lib";
import COLORS from "../../constants/colors";

export default function CustomScanButton({children, onPress}) {
	return (
		<TouchableOpacity style={{top: -30, justifyContent: 'center', alignItems: "center"}} activeOpacity={0.9} onPress={onPress}>
			<View style={{backgroundColor: COLORS.primary, width: 70, height: 70, borderRadius: 35}}>
				{children}
			</View>
		</TouchableOpacity>
	)
}