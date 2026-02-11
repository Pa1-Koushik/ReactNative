import react from "react";
import{View,Text,Button} from 'react-native'

const Demo =({countvalue})=>{
    return(
        <View>
            <Text>demo Screen</Text>
            <Text>Countvalue : {countvalue} </Text>
        </View>
    )
}

export default Demo;