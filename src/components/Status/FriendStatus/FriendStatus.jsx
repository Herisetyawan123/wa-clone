import { View, Text } from "react-native";

export default function FriendStatus(){
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 20,
            marginBottom: 15,
        }}>
            <View style={{
                borderRadius: 50,
                backgroundColor: 'green',
                height: 60,
                width: 60,
                position: 'relative'
            }}>
            </View>
            <View style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Text style={{
                    color: "#fff",
                    fontSize: 20,
                    fontWeight: '600',
                    marginBottom: 5,
                }}>Joko Kendil</Text>
                <Text style={{
                    color: 'grey',

                }}>31 menit yang lalu</Text>
            </View>
        </View>
    );
}