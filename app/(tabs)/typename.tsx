import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function NameScreen() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleContinue = () => {
    if (name.trim() === '') {
      alert('Please enter your name');
      return;
    }
    router.push({ pathname: '/greeting', params: { name } });
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.iconWrapper}>
        <Ionicons name="person-outline" size={50} color="#14B8A6" />
      </View>

      <Text style={styles.title}>What’s Your Name?</Text>
      <Text style={styles.subtitle}>Let’s make this app special for you!</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Type your name here</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name..."
          value={name}
          onChangeText={setName}
        />

        <Pressable style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Let’s Go</Text>
        </Pressable>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  iconWrapper: {
    backgroundColor: '#E0F7F5',
    borderRadius: 50,
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#14B8A6',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    marginBottom: 30,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingVertical: 25,
    paddingHorizontal: 20,
    width: '90%',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    color: '#6B7280',
    marginBottom: 12,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#14B8A6',
    borderRadius: 8,
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
  },
});
