import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

const VolunteerForm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Apply here for Volunteering:</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput placeholder='Name' style={styles.input} />
        <TextInput placeholder='Date of Birth' style={styles.input} />
        <TextInput placeholder='Email' style={styles.input} />
        <TextInput placeholder='Availability :' style={styles.input} />
        <TextInput placeholder='Select Volunteer Role :' style={styles.input} />
        <TextInput placeholder='Area of Interest *' style={styles.input} />
        <Pressable style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </Pressable>
        <Text style={styles.termsText}>By signing up, you agree to our Terms and Conditions</Text>
      </View>
    </View>
  );
};

export default VolunteerForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  backArrow: {
    fontSize: 24,
    color: '#B71C1C',
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B71C1C',
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
  },
  applyButton: {
    backgroundColor: '#B71C1C',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 15,
  },
  applyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});
