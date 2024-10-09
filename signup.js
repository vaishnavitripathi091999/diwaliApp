import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sign Up</Text>
      </View>
      <Text style={styles.welcomeTitle}>Join Melbourne Diwali</Text>
      <Text style={styles.subTitle}>Be a part of joyous mega celebrations and delightful community</Text>

      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        placeholderTextColor="#A9A9A9"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#A9A9A9"
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#A9A9A9"
        secureTextEntry
      />

      <Pressable style={styles.signUpButton} onPress={() => {}}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </Pressable>

      <View style={styles.footerTextContainer}>
        <Text style={styles.footerText}>Already have an account ?</Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signInText}> Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    width: '100%',
    backgroundColor: '#B71C1C', // Darker red color for header
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#B71C1C',
    marginTop: 40,
  },
  subTitle: {
    fontSize: 16,
    color: '#A9A9A9',
    marginBottom: 30,
  },
  input: {
    width: '90%',
    borderColor: '#E0E0E0',
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  signUpButton: {
    backgroundColor: '#F8BBD0', // Lighter red for sign-up button
    borderRadius: 25,
    paddingHorizontal: 40,
    paddingVertical: 15,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  footerTextContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footerText: {
    color: '#A9A9A9',
    fontSize: 16,
  },
  signInText: {
    color: '#B71C1C',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
