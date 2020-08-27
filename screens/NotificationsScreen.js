import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NotificationsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Notifications Screen</Text>
        <Button
          title="Click Here"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
