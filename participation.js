import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';

const Participation = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Participation</Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.participationCard}>
          <Text style={styles.participationText}>
            Click below to apply and be a part of this vibrant Diwali celebration Melbourne!
          </Text>
          <Pressable
            style={styles.participationButton}
            onPress={() => navigation.navigate('EngageForm')}
          >
            <Text style={styles.buttonText}>Join to Engage</Text>
          </Pressable>
        </View>

        <View style={styles.participationCard}>
          <Text style={styles.participationText}>
            Join our vibrant team of volunteers and help make the event an unforgettable experience!
          </Text>
          <Pressable
            style={styles.participationButton}
            onPress={() => navigation.navigate('VolunteerForm')}
          >
            <Text style={styles.buttonText}>Join to Volunteer</Text>
          </Pressable>
        </View>

        <View style={styles.participationCard}>
          <Text style={styles.participationText}>
            Showcase your products or services at the Melbourne Diwali Festival by setting up a stall!
          </Text>
          <Pressable
            style={styles.participationButton}
            onPress={() => navigation.navigate('DisplayForm')}
          >
            <Text style={styles.buttonText}>Join to Display</Text>
          </Pressable>
        </View>

        <View style={styles.participationCard}>
          <Text style={styles.participationText}>
            Apply to perform at Melbourne’s vibrant Diwali Festival. Join now to shine bright!
          </Text>
          <Pressable
            style={styles.participationButton}
            onPress={() => navigation.navigate('PerformForm')}
          >
            <Text style={styles.buttonText}>Join to Perform</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Participation;

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
  cardContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  participationCard: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  participationText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  participationButton: {
    backgroundColor: '#B71C1C',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
