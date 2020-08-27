import React from 'react';
import {
    View,
    Text,
    Button,

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/MaterialIcons';





const HomeScreen = ({navigation}) => {
    return (
      
       
        <View style={{ flex:1, flexDirection:'row', flexWrap:'wrap',  marginTop:'40%', align:'center', justifyContent:'center'}}>
           
            <View style={{  height:50, width:'40%', marginLeft:'5%', marginRight:'5%', marginTop:'2%', marginBottom:'2%',alignContent:'stretch'}}>
                <Icon1.Button
                   
                    name="doctor"
                    backgroundColor="#3b5998"
                    onPress={()=>navigation.navigate('Family Doctors')}>
                    Add Your Family Doctors List 
                </Icon1.Button>
            </View>
            <View style={{  height:50, width:'40%', marginLeft:'5%', marginRight:'5%', marginTop:'2%', marginBottom:'2%',alignContent:'stretch'}}>
            <Icon1.Button
                
                name="heartbeat"
                backgroundColor="#3b5998"
                onPress={()=>navigation.navigate('My Health Assessment')}>
                <Text style={{ fontFamily: 'Arial', fontSize: 15 , color:'white'}}>
                My Health Assessment
                </Text>
                
            </Icon1.Button>
            </View>
            <View style={{  height:50, width:'40%', marginLeft:'5%', marginRight:'5%', marginTop:'2%', marginBottom:'2%',alignContent:'stretch'}}>
                <Icon.Button
                    
                    name="address-book"
                    backgroundColor="#3b5998"
                    onPress={()=>navigation.navigate('Near And Dear')}>
                    Add Your Near and Dear Contacts.
                </Icon.Button>
            </View>
            
            <View style={{  height:50, width:'40%', marginLeft:'5%', marginRight:'5%', marginTop:'2%', marginBottom:'2%',alignContent:'stretch'}}>
                <Icon2.Button
                    
                    name="file-upload"
                    backgroundColor="#3b5998"
                    onPress={()=>navigation.navigate('Medical Reports')}>
                    Upload Medical Reports
                </Icon2.Button>
            </View>
            <View style={{  height:50, width:'40%', marginLeft:'5%', marginRight:'5%', marginTop:'2%', marginBottom:'2%',alignContent:'stretch'}}>
                <Icon3.Button
                   
                    name="pharmacy"
                    backgroundColor="#3b5998"
                    onPress={()=>navigation.navigate('Pharmacy Contacts')}>
                    Add Your Pharmacy Contacts 
                </Icon3.Button>
            </View>
            <View style={{  height:50, width:'40%', marginLeft:'5%', marginRight:'5%', marginTop:'2%', marginBottom:'2%', alignContent:'stretch'}}>
                <Icon2.Button
                    
                    name="file-upload"
                    backgroundColor="#3b5998"
                    onPress={()=>navigation.navigate('Medical Prescriptions')}>
                    Upload Medical Prescriptions
                </Icon2.Button>
            </View>
            
            <View style={{  height:50, width:'40%', marginLeft:'5%', marginRight:'5%', marginTop:'2%', marginBottom:'2%',alignContent:'stretch'}}>
                <Icon.Button
                    
                    name="user-circle-o"
                    backgroundColor="#3b5998"
                    onPress={()=>navigation.navigate('My Profile')}>
                    My Profile 
                </Icon.Button>
            </View>
            
            <View style={{  height:50, width:'40%', marginLeft:'5%', marginRight:'5%', marginTop:'2%', marginBottom:'2%',alignContent:'stretch'}}>
                <Icon4.Button
                    
                    name="settings"
                    backgroundColor="#3b5998"
                    onPress={()=>navigation.navigate('App Theme Settings')}>
                    App Settings
                </Icon4.Button>
            </View>
        </View>
     
    );
  }

  function NearAndDearContacts({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home screen</Text>
        <Button
          title="Near And Dear Contacts"
     
        />
      </View>
    );
  }
  
  function MyHealthAssesment({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home screen</Text>
        <Button
          title="Near And Dear Contacts"
     
        />
      </View>
    );
  }

  function MedicalReportsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home screen</Text>
        <Button
          title="Near And Dear Contacts"
     
        />
      </View>
    );
  }

  function MedicalPrescriptionsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home screen</Text>
        <Button
          title="Near And Dear Contacts"
     
        />
      </View>
    );
  }

  function FamilyDoctorsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Family Doctors List</Text>
        <Button
          title="Near And Dear Contacts"
     
        />
      </View>
    );
  }

  function PharmacyContactsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home screen</Text>
        <Button
          title="Near And Dear Contacts"
     
        />
      </View>
    );
  }

  function AppThemeSettingsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings screen</Text>
        <Button
          title="Go to Details"
         
        />
      </View>
    );
  }

  function MyProfileScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
        <Button
          title="Go to Details"
          
        />
      </View>
    );
  }
  function LogoTitle() {
    return (
      <Text>Home Must</Text>
    )
  }
const HomeStack = createStackNavigator();

const  HomeStackScreen = ({navigation}) => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} 
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerLeft: () => (
            <Icon.Button
                    
                    name="indent"
                    backgroundColor="#3b5998"
                    onPress={() => navigation.openDrawer()}>
                
                </Icon.Button>
          ),
        }}
    
/>
        <HomeStack.Screen name="Near And Dear" component={NearAndDearContacts} />
        <HomeStack.Screen name="My Health Assessment" component={MyHealthAssesment} />
        <HomeStack.Screen name="Medical Reports" component={MedicalReportsScreen} />
        <HomeStack.Screen name="Medical Prescriptions" component={MedicalPrescriptionsScreen} />
        <HomeStack.Screen name="Family Doctors" component={FamilyDoctorsScreen} />
        <HomeStack.Screen name="Pharmacy Contacts" component={PharmacyContactsScreen} />
        <HomeStack.Screen name="My Profile" component={MyProfileScreen} />
        <HomeStack.Screen name="App Theme Settings" component={AppThemeSettingsScreen} />
       
      </HomeStack.Navigator>
    );
  }
  



  export default HomeStackScreen;




// import React from 'react';
// import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
// import { useTheme } from '@react-navigation/native';

// const HomeScreen = ({navigation}) => {

//   const { colors } = useTheme();

//   const theme = useTheme();
  
//     return (
//       <View style={styles.container}>
//         <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
//         <Text style={{color: colors.text}}>Home Screen</Text>
//       <Button
//         title="Go to details screen"
//         onPress={() => navigation.navigate("Details")}
//       />
//       </View>
//     );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center'
//   },
// });
