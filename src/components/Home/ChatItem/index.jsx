import { Button, StyleSheet, Text, Touchable, TouchableHighlight, TouchableOpacity, View } from "react-native";

const ChatItem = ({ message, sender, time, onPress }) => {

    return (
        <TouchableOpacity 
        style={{
            opacity: 1,
        }} 
        onPress={onPress}
        // accessible={false}
        // accessibilityIgnoresInvertColors={true}
        >
            <View style={styles.messageContainer}>
                <View style={{
                    borderRadius: 50,
                    height: 50,
                    width: 50,
                    backgroundColor: '#ece5dd',
                }}></View>
                <View style={styles.messageContent}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 2,
                    }}>
                        <Text style={styles.sender}>{sender}</Text>
                        <Text style={styles.time}>{time}</Text>
                    </View>

                    <Text style={styles.message}>{message}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    messageContainer: {
        flexDirection: 'row',
        padding: 20,
    },
    sender: {
        fontWeight: 'bold',
        marginRight: 5,
        fontSize: 18,
        color: '#fff'
    },

    messageContent: {
        flex: 1,
        marginLeft: 10,
    },
    message: {
        color: '#ece5dd',
    },
    time: {
        color: '#ece5dd',
        marginTop: 5,
    },
});

export default ChatItem;


