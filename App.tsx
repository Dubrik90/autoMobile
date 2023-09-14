import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from "react-redux";
import {store} from "./src/app/store/store";
import {Navigator} from "./src/components/navigator/Navigator";
import {ThemeProvider} from "./src/app/theme/provider/ThemeContext";


export default function App() {
  return (
      <Provider store={store}>
          <ThemeProvider>
              <Navigator />
          </ThemeProvider>
      </Provider>
  );
}
// function HomeScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Home Screen</Text>
//             <Button
//                 title="Go to Details"
//                 onPress={() => {
//                     /* 1. Navigate to the Details route with params */
//                     navigation.navigate('Details', {
//                         itemId: 86,
//                         otherParam: 'anything you want here',
//                     });
//                 }}
//             />
//         </View>
//     );
// }
// const Stack = createNativeStackNavigator();
// export default function App() {
//     return (
//         <Provider store={store}>
//             <NavigationContainer>
//                 <Stack.Navigator initialRouteName="Home">
//                     <Stack.Screen name="Home" component={HomeScreen} />
//                     <Stack.Screen name="Details" component={DetailsScreen} />
//                 </Stack.Navigator>
//             </NavigationContainer>
//         </Provider>
//     );
// }
//
// function DetailsScreen({route, navigation}) {
//     const { itemId, otherParam } = route.params;
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Details Screen</Text>
//             <Text>itemId: {itemId}</Text>
//             <Text>otherParam: {otherParam}</Text>
//             <Button
//                 title="Go to Details... again"
//                 onPress={() =>
//                     navigation.push('Details', {
//                         itemId: Math.floor(Math.random() * 100),
//                     })
//                 }
//             />
//             <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//             <Button title="Go back" onPress={() => navigation.goBack()} />
//         </View>
//     );
// }
//
//



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
