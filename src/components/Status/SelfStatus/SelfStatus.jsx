import { View, Text } from "react-native";

export default function SelfStatus(){
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 20,
        }}>
            <View style={{
                borderRadius: 50,
                backgroundColor: 'grey',
                height: 60,
                width: 60,
                position: 'relative'
            }}>
                <View style={{
                    position: 'absolute',
                    backgroundColor: '#25d366',
                    height: 25,
                    width: 25,
                    borderRadius: 25,
                    bottom: -2,
                    right: -2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 18,
                        fontWeight: '800'
                    }}>+</Text>
                </View>
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
                }}>Status Saya</Text>
                <Text style={{
                    color: 'grey',

                }}>Ketuk untuk memperbarui status</Text>
            </View>
        </View>
    );
}