import React from 'react';
import {
    View,
    Text,
    Button,
    FlatList,
    Dimensions,
    StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import FamilyDoctorsList from './home-screens/FamilyDoctorsList';




const HomeScreen = ({navigation}) => {
    return (
      <React.Fragment>

   
      <View style={styles.header}>
      <Animatable.Image 
          animation="bounceIn"
          duraton="1500"
      source={require('../assets/lifeline.jpeg')}
      style={styles.logo}
      resizeMode="stretch"
      />
  </View>
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
        </React.Fragment>
    );
  }

  function NearAndDearContacts({ navigation }) {
    return (
      
        <React.Fragment>
            <FlatList
        data={[
          {key: 'Devin',mobile:'3456778'},
          {key: 'Dan',mobile:'3456778'},
          {key: 'Dominic',mobile:'3456778'},
          {key: 'Jackson',mobile:'3456778'},
          {key: 'James',mobile:'3456778'},
          {key: 'Joel',mobile:'3456778'},
          {key: 'John',mobile:'3456778'},
          {key: 'Jillian',mobile:'3456778'},
          {key: 'Jimmy',mobile:'3456778'},
          {key: 'Julie',mobile:'3456778'},
        ]}
        renderItem={({item}) => 
        <View style={styles.itemContainer}>
           <Text style={styles.item}>{item.key}</Text>
           <Text style={styles.item}>{item.mobile}</Text>
           <Icon.Button
                    
                    name="pencil"
                    backgroundColor="#fff"
                    color="black"
                    onPress={()=>alert('Edit Doctors Details')}>
                  
                </Icon.Button>
                <Icon.Button
                  color="black"
                  name="trash"
                  backgroundColor="#fff"
                  onPress={()=>alert('Delete The Doctor')}>
                
              </Icon.Button>
        </View>
        
       }
      />
        <View style={{  height:50, width:'40%', marginLeft:'5%', marginRight:'5%', marginTop:'2%', marginBottom:'2%',alignContent:'stretch'}}>
                <Icon.Button
                  
                    name="user-plus"
                    backgroundColor="#3b5998"
                    onPress={()=>alert('Family Doctors')}>
                    Add your Near And Dear Contact
                </Icon.Button>
        </View>
  
        </React.Fragment>
            );
  }
  
  function MyHealthAssesment({ navigation }) {
    return (
      <React.Fragment>
      <FlatList
  data={[
    {key: 'Blood Group',keyValue:'O+'},
    {key: 'Preexisting Diseases',keyValue:'13'},
    {key: 'Blood Pressure Levels',keyValue:'Normal'},
    {key: 'Diabetes Levels',keyValue:'Normal'},
    {key: 'Cholestral levels',keyValue:'3456778'},
    {key: 'Last visit to a Hospital',keyValue:'1 month ago'},
    {key: 'Lastest Consulting Doctor Name',keyValue:'Dr Harini'},
    {key: 'Smoking Habits',keyValue:'no'},
    {key: 'Drinking Habits',keyValue:'no'},
    {key: 'Veg/NonVeg',keyValue:'NonVegetarian'},
    
  ]}
  renderItem={({item}) => 
  <View style={styles.itemContainer}>
     <Text style={styles.healthItem}>{item.key}</Text>
     <Text style={styles.item}>{item.keyValue}</Text>
     <Icon.Button
              
              name="pencil"
              backgroundColor="#fff"
              color="black"
              onPress={()=>alert('Edit Doctors Details')}>
            
          </Icon.Button>
          <Icon.Button
            color="black"
            name="trash"
            backgroundColor="#fff"
            onPress={()=>alert('Delete The Doctor')}>
          
        </Icon.Button>
  </View>
  
 }
/>
  <View style={{  height:50, width:'50%', marginLeft:'5%', marginRight:'5%', marginTop:'2%', marginBottom:'2%',alignContent:'stretch'}}>
          <Icon.Button
            
              name="user-plus"
              backgroundColor="#009387"
              onPress={()=>alert('Family Doctors')}>
              Add Some More Details of about your Health.
          </Icon.Button>
  </View>

  </React.Fragment>
    );
  }

  function MedicalReportsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>There No Medical Reports Uploaded.Kindly Upload</Text>
        <Icon3.Button
            
              name="briefcase-upload"
              backgroundColor="#009387"
              onPress={()=>alert('Family Doctors')}>
              Upload Medical Reports
          </Icon3.Button>
      </View>
    );
  }

  function MedicalPrescriptionsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>There No Medical Prescriptions Uploaded.Kindly Upload</Text>
        <Icon3.Button
            
              name="briefcase-upload"
              backgroundColor="#3b5998"
              onPress={()=>alert('Family Doctors')}>
              Upload Medical Prescriptions
          </Icon3.Button>
      </View>
    );
  }

  function FamilyDoctorsScreen({ navigation }) {
    return (
      <React.Fragment>
          <FlatList
      data={[
        {key: 'Dr Harini',mobile:'3456778'},
        {key: 'Dr Ram Reddy',mobile:'3456778'},
        {key: 'Dr Srinath Reddy',mobile:'3456778'},
        {key: 'Dr Pranith',mobile:'3456778'},
      ]}
      renderItem={({item}) => 
      <View style={styles.itemContainer}>
         <Text style={styles.item}>{item.key}</Text>
         <Text style={styles.item}>{item.mobile}</Text>
         <Icon.Button
                  
                  name="pencil"
                  backgroundColor="#fff"
                  color="black"
                  onPress={()=>alert('Edit Doctors Details')}>
                
              </Icon.Button>
              <Icon.Button
                color="black"
                name="trash"
                backgroundColor="#fff"
                onPress={()=>alert('Delete The Doctor')}>
              
            </Icon.Button>
      </View>
      
     }
    />
      <View style={{  height:50, width:'40%', marginLeft:'5%', marginRight:'5%', marginTop:'2%', marginBottom:'2%',alignContent:'stretch'}}>
              <Icon.Button
                
                  name="user-plus"
                  backgroundColor="#009387"
                  onPress={()=>alert('Family Doctors')}>
                  Add a Doctor
              </Icon.Button>
      </View>

      </React.Fragment>
          );
  }

  function PharmacyContactsScreen({ navigation }) {
    return (
      <React.Fragment>
      <FlatList
  data={[
    {key: 'Apollo Pharmacy-Lalapet',mobile:'3456778'},
    {key: 'Mediplus-Malkajgiri',mobile:'3456778'},
    {key: 'Srinivasa Medicals',mobile:'3456778'},
    {key: 'Medicity-Somajiguda',mobile:'3456778'},
    {key: 'Apollo Pharmacy-kondapur',mobile:'3456778'},
    {key: 'Mediplus-kondapur',mobile:'3456778'},
    {key: 'Navaneetha Medicals',mobile:'3456778'},
    {key: 'Medicity-Hyderguda',mobile:'3456778'},
  ]}
  renderItem={({item}) => 
  <View style={styles.itemContainer}>
     <Text style={styles.pharmacyItemKey}>{item.key}</Text>
     <Text style={styles.item}>{item.mobile}</Text>
     <Icon.Button
              
              name="pencil"
              backgroundColor="#fff"
              color="black"
              onPress={()=>alert('Edit Doctors Details')}>
            
          </Icon.Button>
          <Icon.Button
            color="black"
            name="trash"
            backgroundColor="#fff"
            onPress={()=>alert('Delete The Doctor')}>
          
        </Icon.Button>
  </View>
  
 }
/>
  <View style={{  height:50, width:'50%', marginLeft:'5%', marginRight:'5%', marginTop:'2%', marginBottom:'2%',alignContent:'stretch'}}>
          <Icon3.Button
            
              name="pharmacy"
              backgroundColor="#009387"
              onPress={()=>alert('Family Doctors')}>
              Add Pharmacy Contact
          </Icon3.Button>
  </View>

  </React.Fragment>
      
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
      <React.Fragment>
      <FlatList
  data={[
    {key: 'Name',keyValue:'Pranith'},
    {key: 'Age',keyValue:'13'},
    {key: 'Sex',keyValue:'male'},
    {key: 'Blood Group',keyValue:'O+'},
    {key: 'mobile',keyValue:'3456778'},
    {key: 'email',keyValue:'abc@abc.com'},
    {key: 'address',keyValue:'kondapur'},
    
    
  ]}
  renderItem={({item}) => 
  <View style={styles.itemContainer}>
     <Text style={styles.profileItem}>{item.key}</Text>
     <Text style={styles.item}>{item.keyValue}</Text>
     <Icon.Button
              
              name="pencil"
              backgroundColor="#fff"
              color="black"
              onPress={()=>alert('Edit Doctors Details')}>
            
          </Icon.Button>
          <Icon.Button
            color="black"
            name="trash"
            backgroundColor="#fff"
            onPress={()=>alert('Delete The Doctor')}>
          
        </Icon.Button>
  </View>
  
 }
/>
  <View style={{  height:50, width:'50%', marginLeft:'5%', marginRight:'5%', marginTop:'2%', marginBottom:'2%',alignContent:'stretch'}}>
          <Icon.Button
            
              name="user-plus"
              backgroundColor="#009387"
              onPress={()=>alert('This will navigate to add more detials screen')}>
              Add Details. 
          </Icon.Button>
  </View>

  </React.Fragment>
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

  const {height} = Dimensions.get("screen");
  const height_logo = height *0.28;

  const styles = StyleSheet.create({
    healthItem:{
      padding: 10,
      fontSize: 18,
      height: 44,
      width:'50%'
    },
    header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:-300,
      marginTop:-150
  },
    profileItem:{
      padding: 10,
      fontSize: 18,
      height: 44,
      width:'50%'
    },
    pharmacyItemKey:{
      padding: 10,
      fontSize: 18,
      height: 44,
      width:'50%'
    },
    logo: {
      width: height_logo ,
      height: height_logo,
      borderRadius:100
  },
    itemContainer:{
      flex: 1,
      flexDirection: 'row',
    },
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      width:'25%'
    },
  });

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
