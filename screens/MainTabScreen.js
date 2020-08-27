import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import AmbulanceScreen from './AmbulanceScreen';
import ChildrensScreen from './ChildrensScreen';
import DoctorsScreen from './DoctorsScreen';
import PharmacyScreen from './PharmacyScreen';
import PoliceScreen from './PoliceScreen';
import ProfileScreen from './ProfileScreen';
import HomeStackScreen from './HomeScreen';
import NeighboursAndFriends from './NeighboursAndFriends';
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Doctors"
        component={DoctorsStackScreen}
        options={{
          tabBarLabel: 'Doctors',
          tabBarColor: '#617705',
          tabBarIcon: ({ color }) => (
            <Icon1  name="doctor" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Childrens"
        component={ChildrensStackScreen}
        options={{
          tabBarLabel: 'Childrens',
          tabBarColor: '#ff00ff',
          tabBarIcon: ({ color }) => (
            <Icon name="group" color={color} size={20} />
          ),
        }}
      />
     <Tab.Screen
        name="Police"
        component={PoliceStackScreen}
        options={{
          tabBarLabel: 'Police',
          tabBarColor: '#0000b3',
          tabBarIcon: ({ color }) => (
            <Icon name="product-hunt" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Ambulance"
        component={AmbulanceStackScreen}
        options={{
          tabBarLabel: 'Ambulance',
          tabBarColor: '#e63900',
          tabBarIcon: ({ color }) => (
            <Icon name="ambulance" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Pharmacy"
        component={PharmacyStackScreen}
        options={{
          tabBarLabel: 'Pharmacy',
          tabBarColor: '#009933',
          tabBarIcon: ({ color }) => (
            <Icon name="plus-square" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Near And Dear"
        component={NearAndDearStackScreen}
        options={{
          tabBarLabel: 'Near And Dear',
          tabBarColor: '#ff8c1a',
          tabBarIcon: ({ color }) => (
            <Icon name="group" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

// const HomeStackScreen = ({navigation}) => (
// <HomeStack.Navigator screenOptions={{
//         headerStyle: {
//         backgroundColor: '#009387',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//         fontWeight: 'bold'
//         }
//     }}>
//         <HomeStack.Screen name="Home" component={HomeScreen} options={{
//         title:'Overview',
//         headerLeft: () => (
//             <Icon.Button name="indent" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
//         )
//         }} />
// </HomeStack.Navigator>
// );
const DoctorsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#617705',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <DetailsStack.Screen name="Family Doctors " component={DoctorsScreen} options={{
          headerLeft: () => (
              <Icon.Button name="indent" size={25} backgroundColor="#617705" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </DetailsStack.Navigator>
  );
const ChildrensStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#ff00ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Childrens" component={ChildrensScreen} options={{
        headerLeft: () => (
            <Icon.Button name="indent" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</DetailsStack.Navigator>
);

const PoliceStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#0000b3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <DetailsStack.Screen name="Police" component={PoliceScreen} options={{
          headerLeft: () => (
              <Icon.Button name="indent" size={25} backgroundColor="#0000b3" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </DetailsStack.Navigator>
  );
  const AmbulanceStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#e63900',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <DetailsStack.Screen name="Ambulance" component={AmbulanceScreen} options={{
            headerLeft: () => (
                <Icon.Button name="indent" size={25} backgroundColor="#e63900" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </DetailsStack.Navigator>
    );

    const PharmacyStackScreen = ({navigation}) => (
      <DetailsStack.Navigator screenOptions={{
              headerStyle: {
              backgroundColor: '#009933',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold'
              }
          }}>
              <DetailsStack.Screen name="Pharmacy" component={PharmacyScreen} options={{
              headerLeft: () => (
                  <Icon.Button name="indent" size={25} backgroundColor="#009933" onPress={() => navigation.openDrawer()}></Icon.Button>
              )
              }} />
      </DetailsStack.Navigator>
      );

      const NearAndDearStackScreen = ({navigation}) => (
        <DetailsStack.Navigator screenOptions={{
                headerStyle: {
                backgroundColor: '#ff8c1a',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold'
                }
            }}>
                <DetailsStack.Screen name="Near And Dear" component={NeighboursAndFriends} options={{
                headerLeft: () => (
                    <Icon.Button name="indent" size={25} backgroundColor="#ff8c1a" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
                }} />
        </DetailsStack.Navigator>
        );