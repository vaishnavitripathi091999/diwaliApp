import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <View style={styles.avatarContainer}>
        <Image
          source={require('../../../assets/images/splashArt.png')} // Replace with user's profile image
          style={styles.avatar}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput style={styles.input} value="Srija goud" editable={false} />

        <Text style={styles.label}>Last Name</Text>
        <TextInput style={styles.input} value="Durgam" editable={false} />

        <Text style={styles.label}>Email id</Text>
        <TextInput style={styles.input} value="Sarascare.co.au" editable={false} />
      </View>

      <Pressable style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logoutButtonText}>Log out</Text>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#B71C1C',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  avatarContainer: {
    marginVertical: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  formContainer: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#B71C1C',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    borderColor: '#E0E0E0',
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  logoutButton: {
    borderColor: '#B71C1C',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 40,
    paddingVertical: 15,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#B71C1C',
    fontSize: 18,
    fontWeight: '600',
  },
});
