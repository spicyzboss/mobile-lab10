import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Parallel from "../screens/Parallel";
import Sequence from "../screens/Sequence";
import Spring from "../screens/Spring";
import { MaterialCommunityIcons, Octicons, Entypo } from "@expo/vector-icons";

const BottomTabNavigator = createBottomTabNavigator<BottomTabScreen>();

const BottomTab = () => (
  <BottomTabNavigator.Navigator>
    <BottomTabNavigator.Screen
      name="Spring"
      component={Spring}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="lightbulb-cfl-spiral"
            size={24}
            color="black"
          />
        ),
      }}
    />
    <BottomTabNavigator.Screen
      name="Sequence"
      component={Sequence}
      options={{
        tabBarIcon: () => <Octicons name="stack" size={24} color="black" />,
      }}
    />
    <BottomTabNavigator.Screen
      name="Parallel"
      component={Parallel}
      options={{
        tabBarIcon: () => <Entypo name="flow-tree" size={24} color="black" />,
      }}
    />
  </BottomTabNavigator.Navigator>
);

const Navigation = () => (
  <NavigationContainer>
    <BottomTab />
  </NavigationContainer>
);

export default Navigation;
