import { ScrollView, StyleSheet, Text, View } from "react-native";
import SelfStatus from "../components/Status/SelfStatus/SelfStatus";
import FriendStatus from "../components/Status/FriendStatus/FriendStatus";

const style = StyleSheet.create({
    container: {
        padding: 20,
    }
})

export default function StatusScreen() {
    return (
        <ScrollView>
            <View style={style.container}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 15,
                }}>
                    <Text style={{
                        color: '#fff',
                        fontWeight: '700',
                        fontSize: 24,
                    }}>Status</Text>
                </View>
                <SelfStatus />
                <Text style={{
                    marginVertical: 20,
                    color: 'grey'
                }}>Pembaruan Terkini</Text>
                <FriendStatus/>
                <FriendStatus/>
                <FriendStatus/>
                <FriendStatus/>
                <FriendStatus/>
                <FriendStatus/>
                <FriendStatus/>
                <FriendStatus/>
                <FriendStatus/>
            </View>
        </ScrollView>
    )
}