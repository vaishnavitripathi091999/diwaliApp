import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <Pressable style={styles.googleButton} onPress={() => {}}>
        <Image
          source={require('../../../assets/images/splashArt.png')} // Use G symbol image as placeholder
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </Pressable>

      <Pressable style={styles.createAccountButton} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.createAccountButtonText}>Create Account</Text>
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

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black', // Bright, festive color for the festival vibe
    marginBottom: 50,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D32F2F', // Darker red color
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 40,
    paddingVertical: 15,
    marginBottom: 20,
    width: '80%',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  createAccountButton: {
    backgroundColor: '#B71C1C', // Darker red color
    borderRadius: 25,
    paddingHorizontal: 40,
    paddingVertical: 15,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  createAccountButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  footerTextContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footerText: {
    color: 'gray',
    fontSize: 16,
  },
  signInText: {
    color: '#B71C1C', // Darker red color
    fontSize: 16,
    fontWeight: 'bold',
  },
});
