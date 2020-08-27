import React,{useState} from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';
import { RadioButton,Checkbox,Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const PharmacyScreen = ({navigation}) => {
//   const [checked, setChecked] = useState('first');
//   const [patientCondition, setPatientCondition] = useState('first');
  // const [accident, setAccident] = useState(false);
  // const [heartStroke, setHeartStroke] = useState(false);
  // const [fits, setFits] = useState(false);
  // const [snakeBite, setSnakeBite] = useState(false);
  const [medicalPrescription, setMedicalPrescription] = useState(false);
  const [verySerious, setVerySerious] = useState(false);
  const [serious, setSerious] = useState(false);
  const [normal, setNormal] = useState(false);
  const [medicalReports, setMedicalReports] = useState(false);
  const [familyContacts, setFamilyContacts] = useState(false);
  const [nearAndDear, setNearAndDear] = useState(false);


  const [currentLocation, setCurrentLocation] = useState(true);

  const [isSugarOn, setIsSugarOn] = useState(false);
  const [isBPOn, setIsBPOn] = useState(false);

const onToggleSugar = () => setIsSugarOn(!isSugarOn);
const onToggleBP = () => setIsBPOn(!isBPOn);
    return (
      <View style={styles.container}>
        
       <Text style={styles.questionLabel}>Check the below you would like to share</Text>
         <View style={styles.checkboxContainer}>
            <Checkbox 
                status={currentLocation? 'checked' : 'unchecked'}
            />
            <Text style={styles.label}>Current Location</Text>
       </View>
       <Text style={styles.questionLabel}>Check the below you would like to share</Text>
         <View style={styles.checkboxContainer}>
            <Checkbox 
                status={medicalPrescription? 'checked' : 'unchecked'}
                onPress={() => {
                    setMedicalPrescription(!medicalPrescription);
                  }}
            />
            <Text style={styles.label}>Medical Prescription</Text>
       </View>
      
      

       <View style={styles.checkboxContainer}>
          <Text style={styles.label}>Do You Have Sugar</Text>
          <Switch value={isSugarOn} onValueChange={onToggleSugar} />
       </View>  
       <View style={styles.checkboxContainer}>
          <Text style={styles.label}>Do You Have Blood Pressure</Text>
          <Switch value={isBPOn} onValueChange={onToggleBP} />
       </View>         
       <View style={{  height:50, width:'50%', marginLeft:'0%', marginRight:'5%', marginTop:'2%', marginBottom:'2%',alignContent:'stretch'}}>
                <Icon.Button
                    
                    name="address-book"
                    backgroundColor="#3b5998"
                    onPress={()=>navigation.navigate('Near And Dear')}>
                    Submit The Above Info
                </Icon.Button>
        </View>
        
       
        
      </View>
    );
};

export default PharmacyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    
    alignItems: 'flex-start', 
    justifyContent: 'center',
    marginLeft:40
  },
  checkboxContainer: {
    flexDirection: "row",
    
  },
  label: {
    
    margin:8
  },
  questionLabel:{
    marginTop:10
  },
  buttonContainer:{
    flex: 1, 
    flexDirection:'row',
    alignItems: 'flex-start', 
    justifyContent: 'center',
    marginLeft:-30
  }
});
