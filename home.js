import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.welcomeTitle}>Welcome</Text>
        <Text style={styles.userName}>SRIJA GOUD</Text>
        <Text style={styles.subTitle}>Discover the Festive Delights</Text>
        
        <ScrollView horizontal style={styles.scrollContainer}>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
          {/* Add more cards as needed */}
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
          <Text style={[styles.footerText, { color: '#B71C1C' }]}>🏠</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('Participation')}>
          <Text style={styles.footerText}>📝</Text>
        </Pressable>
        <Pressable style={styles.footerItem}onPress={() => navigation.navigate('Post')}>
          <Text style={styles.footerText}>📰</Text>
        </Pressable>
        <Pressable style={styles.footerItem}onPress={() => navigation.navigate('Notifications')}>
          <Text style={styles.footerText}>🔔</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.footerText}>👤</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  content: {
    padding: 20,
  },
  welcomeTitle: {
    fontSize: 20,
    color: '#A9A9A9',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B71C1C',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B71C1C',
    marginVertical: 20,
  },
  scrollContainer: {
    marginVertical: 20,
  },
  card: {
    width: 150,
    height: 200,
    backgroundColor: '#E0E0E0',
    borderRadius: 15,
    marginRight: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 24,
    color: 'black',
  },
});
