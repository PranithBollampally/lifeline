import React,{useState} from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';
import { RadioButton,Checkbox,Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';

const AmbulanceScreen = ({navigation}) => {
  const [checked, setChecked] = useState('first');
  const [patientCondition, setPatientCondition] = useState('first');
  // const [accident, setAccident] = useState(false);
  // const [heartStroke, setHeartStroke] = useState(false);
  // const [fits, setFits] = useState(false);
  // const [snakeBite, setSnakeBite] = useState(false);
  const [criticallySerious, setCriticallySerious] = useState(false);
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
        <Text style={styles.questionLabel}>Type of emergency</Text>
         <View style={styles.checkboxContainer}>
            <RadioButton 
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked('first');
                }}
            />
            <Text style={styles.label}>Accident</Text>
       </View>
       <View style={styles.checkboxContainer}>
            <RadioButton 
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked('second');
                }}
            />
            <Text style={styles.label}>HeartStroke</Text>
       </View>
       <View style={styles.checkboxContainer}>
            <RadioButton 
                value="third" 
                status={checked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked('third');
                }}
            />
            <Text style={styles.label}>Paralysis</Text>
       </View>
       <View style={styles.checkboxContainer}>
            <RadioButton 
                value="fourth"
                status={checked === 'fourth' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked('fourth');
                }}
            />
            <Text style={styles.label}>Injured</Text>
       </View>
       <View style={styles.checkboxContainer}>
            <RadioButton 
                value="fifth"
                status={checked === 'fifth' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked('fifth');
                }}
            />
            <Text style={styles.label}>Convulsions</Text>
       </View>
       
        <Text style={styles.questionLabel}>Patient condition?</Text>
         <View style={styles.checkboxContainer}>
            <RadioButton  
                value="first"
                status={patientCondition === 'first' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setPatientCondition('first');
                }}
            />
            <Text style={styles.label}>Critically Serious</Text>
       </View>
       <View style={styles.checkboxContainer}>
            <RadioButton 
                value="second"
                status={patientCondition === 'second' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setPatientCondition('second');
                }}
            />
            <Text style={styles.label}>Very Serious</Text>
       </View>
       <View style={styles.checkboxContainer}>
            <RadioButton 
                value="third"
                status={patientCondition === 'third' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setPatientCondition('third');
                }}
            />
            <Text style={styles.label}>Serious</Text>
       </View>
       <View style={styles.checkboxContainer}>
            <RadioButton 
                value="fourth"
                status={patientCondition === 'fourth' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setPatientCondition('fourth');
                }}
            />
            <Text style={styles.label}>Normal</Text>
       </View>
       <Text style={styles.questionLabel}>Check the below you would like to share</Text>
         <View style={styles.checkboxContainer}>
            <Checkbox 
                status={currentLocation? 'checked' : 'unchecked'}
            />
            <Text style={styles.label}>Current Location</Text>
       </View>
       <View style={styles.checkboxContainer}>
            <Checkbox 
                status={medicalReports ? 'checked' : 'unchecked'}
                onPress={() => {
                  setMedicalReports(!medicalReports);
                }}
            />
            <Text style={styles.label}>Medical Reports</Text>
       </View>
       <View style={styles.checkboxContainer}>
            <Checkbox 
                status={familyContacts ? 'checked' : 'unchecked'}
                onPress={() => {
                  setFamilyContacts(!familyContacts);
                }}
            />
            <Text style={styles.label}>Your Family Contacts</Text>
       </View>
       
       <View style={styles.checkboxContainer}>
          <Text style={styles.label}>Are you Diabetic</Text>
          <Switch value={isSugarOn} onValueChange={onToggleSugar} />
       </View>  
       <View style={styles.checkboxContainer}>
          <Text style={styles.label}>Blood Pressure?</Text>
          <Switch value={isBPOn} onValueChange={onToggleBP} />
       </View>         
       <View style={  styles.buttonContainer}>
       <View style={{  height:50, width:'45%', marginLeft:'0%', marginRight:'5%', marginTop:'2%', marginBottom:'2%',alignContent:'stretch'}}>
                        <Icon.Button
                            
                            name="whatsapp"
                            backgroundColor="#e63900"
                            onPress={()=>navigation.navigate('Near And Dear')}>
                            Alert message
                        </Icon.Button>
                </View>
                <View style={{  height:50, width:'50%', marginLeft:'0%', marginRight:'5%', marginTop:'2%', marginBottom:'2%',alignContent:'stretch'}}>
                <Icon1.Button
                    
                    name="md-call"
                    backgroundColor="#e63900"
                    onPress={()=>navigation.navigate('Near And Dear')}>
                    Place a Call
                </Icon1.Button>
        </View>
        </View>
       
        
      </View>
      
      
      
    );
};

export default AmbulanceScreen;

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
    marginTop:10,
    fontWeight:'bold'
  },
  buttonContainer:{
    flex: 1, 
    flexDirection:'row',
    alignItems: 'flex-start', 
    justifyContent: 'center',
    marginLeft:-20
  }
});
