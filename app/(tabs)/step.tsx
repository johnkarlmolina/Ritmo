import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // ✅ Import router for navigation
import React, { useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Step() {
  const router = useRouter(); // ✅ Initialize router
  const [step, setStep] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const steps = [
    {
      icon: 'home-outline',
      title: 'Daily Task',
      text: "You'll see all your daily tasks on the home screen. Each task has easy steps to follow!",
    },
    {
      icon: 'checkmark-circle-outline',
      title: 'Complete Tasks',
      text: 'Click on a task to see video guides and step-by-step instructions. Check them off when you’re done!',
    },
    {
      icon: 'star-outline',
      title: 'Earn Stars',
      text: 'Every time you complete a task, you earn stars! Collect stars to unlock special rewards.',
    },
    {
      icon: 'gift-outline',
      title: 'Get Rewards',
      text: 'Unlock badges and achievements as you complete more tasks. You’re doing great!',
    },
  ];

  const handleNext = () => {
    if (step === steps.length - 1) {
      // ✅ Go to TypeName.tsx when finish
      router.push('/typename');
      return;
    }

    // 🟢 Animate fade for next step
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0, duration: 250, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 250, useNativeDriver: true }),
    ]).start(() => {
      setStep((prev) => (prev + 1) % steps.length);
    });
  };

  const handleSkip = () => {
    // ✅ Skip and go to TypeName.tsx
    router.push('/typename');
  };

  const current = steps[step];

  return (
    <ThemedView style={styles.container}>
      {/* 🟩 Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>How This App Works</Text>
        <Text style={styles.subtitle}>Let’s learn together</Text>
      </View>

      {/* 🟩 Animated Card Section */}
      <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
        <View style={styles.iconContainer}>
          <Ionicons name={current.icon as any} size={60} color="#14B8A6" />
        </View>
        <Text style={styles.cardTitle}>{current.title}</Text>
        <Text style={styles.cardSubtitle}>{current.text}</Text>
      </Animated.View>

      {/* 🟩 Button Section */}
      <Pressable style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>
          {step === steps.length - 1 ? 'Finish' : 'Next >'}
        </Text>
      </Pressable>

      <Pressable onPress={handleSkip}>
        <Text style={styles.skipText}>Skip Tutorial</Text>
      </Pressable>
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

  header: {
    alignItems: 'center',
    marginBottom: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#14B8A6',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },

  card: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 40,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 4,
    width: '90%',
    marginBottom: 40,
  },

  iconContainer: {
    backgroundColor: '#E0F7F5',
    padding: 20,
    borderRadius: 50,
    marginBottom: 20,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 10,
  },

  cardSubtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
  },

  nextButton: {
    backgroundColor: '#14B8A6',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 50,
    marginBottom: 20,
  },

  nextButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },

  skipText: {
    color: '#6B7280',
    fontSize: 15,
  },
});
