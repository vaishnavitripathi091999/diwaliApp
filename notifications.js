import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const Notifications = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>You have no new notifications at this time.</Text>
      </View>

      <View style={styles.footer}>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.footerText}>🏠</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('Participation')}>
          <Text style={styles.footerText}>📝</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('Post')}>
          <Text style={styles.footerText}>📰</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('Notifications')}>
          <Text style={[styles.footerText, { color: '#B71C1C' }]}>🔔</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.footerText}>👤</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Notifications;

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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B71C1C',
  },
  notificationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationText: {
    fontSize: 18,
    color: '#333',
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
