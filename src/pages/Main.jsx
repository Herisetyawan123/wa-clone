import { Text, View, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import StatusScreen from "./Status";
import ProfileScreen from "./Profile";
import { useState } from "react";
import HomeScreen from "./Home";
import MyFloatingButton from "../components/Home/FloatingButton";

const listPage = SceneMap({
    first: HomeScreen,
    second: StatusScreen,
    third: ProfileScreen,
})

export default function MainScreen() {
    const [index, setIndex] = useState(0);
    const layout = useWindowDimensions();

    const [routes] = useState([
        { key: 'first', title: 'Chats' },
        { key: 'second', title: 'Status' },
        { key: 'third', title: 'Log' },
      ]);

      const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: '#25d366' }}
          activeColor="#25d366"
          style={{ backgroundColor: '#075e54' }}
        />
      );

    return (
     
            <TabView
             navigationState={{ index, routes }}
             renderScene={listPage}
             onIndexChange={setIndex}
             initialLayout={{ width: layout.width }}
             renderTabBar={renderTabBar}
             style={{
                backgroundColor: '#075e54',
             }}         
            />
           
     
    );
}
  