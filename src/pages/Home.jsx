import { FlatList, StyleSheet, Text, View } from "react-native";
import ChatItem from "../components/Home/ChatItem";
import MyFloatingButton from "../components/Home/FloatingButton";

export default function HomeScreen() {
    // const navigation = useN()

    const data = [
        { id: '1', sender: 'John', message: 'Hello', time: '10:00 AM' },
        { id: '2', sender: 'Jane', message: 'Hi', time: '10:05 AM' },
        { id: '3', sender: 'Jane', message: 'Hi', time: '10:05 AM' },
        { id: '4', sender: 'Jane', message: 'Hi', time: '10:05 AM' },
        { id: '5', sender: 'Jane', message: 'Hi', time: '10:05 AM' },
        { id: '6', sender: 'John', message: 'Hello', time: '10:00 AM' },
        { id: '7', sender: 'Jane', message: 'Hi', time: '10:05 AM' },
        { id: '8', sender: 'Jane', message: 'Hi', time: '10:05 AM' },
        { id: '9', sender: 'Jane', message: 'Hi', time: '10:05 AM' },
        { id: '10', sender: 'Jane', message: 'Hi', time: '10:05 AM' },
        { id: '11', sender: 'John', message: 'Hello', time: '10:00 AM' },
        { id: '12', sender: 'Jane', message: 'Hi', time: '10:05 AM' },
        { id: '13', sender: 'Jane', message: 'Hi', time: '10:05 AM' },
        { id: '14', sender: 'Jane', message: 'Hi', time: '10:05 AM' },
        { id: '15', sender: 'Jane', message: 'Hi', time: '10:05 AM' },
        { id: '16', sender: 'John', message: 'Hello', time: '10:00 AM' },
        { id: '17', sender: 'Jane', message: 'Hi', time: '10:05 AM' },
        { id: '18', sender: 'Jane', message: 'Hi', time: '10:05 AM' },
        { id: '19', sender: 'Jane', message: 'Hi', time: '10:05 AM' },
        { id: '20', sender: 'Jane', message: 'Hi', time: '10:05 AM' }
    ];

    const renderItem = ({ item }) => (
        <ChatItem
            message={item.message}
            sender={item.sender}
            time={item.time}
            onPress={() => {console.log('first')}}
        />
    );

    return (
        <View style={{
            height: '100%',
        }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}