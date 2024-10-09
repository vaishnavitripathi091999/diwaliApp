

// Updated PerformForm.js to use radio buttons for group selection
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native';

const PerformForm = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Apply here to Perform:</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput placeholder='Name' style={styles.input} />
        <TextInput placeholder='Email' style={styles.input} />
        <TextInput placeholder='Phone Number *' style={styles.input} />

        <Text style={styles.categoryLabel}>Category *</Text>
        <View style={styles.categoryContainer}>
          {['Solo', 'Duo', 'Trio', 'Group (4-16)'].map((category) => (
            <TouchableOpacity
              key={category}
              style={styles.categoryOption}
              onPress={() => setSelectedCategory(category)}
            >
              <View style={styles.radioButtonOuter}>
                <View style={selectedCategory === category ? styles.radioButtonInner : null} />
              </View>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Pressable style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </Pressable>
        <Text style={styles.termsText}>By signing up, you agree to our Terms and Conditions</Text>
      </View>
    </View>
  );
};

export default PerformForm;

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
  categoryLabel: {
    fontSize: 16,
    color: '#B71C1C',
    marginBottom: 10,
  },
  categoryContainer: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 15,
  },
  categoryOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  radioButtonOuter: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#B71C1C',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioButtonInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#B71C1C',
  },
  categoryText: {
    fontSize: 16,
    color: '#B71C1C',
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