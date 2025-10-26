import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

export default function LandingPage() {
  return (
    <ThemedView style={styles.container}>
      {/* ✅ Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/ritmo-icon.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* ✅ Main Content */}
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          {/* Added icon into the title section */}
          <IconSymbol name="sparkles" size={36} color="#14B8A6" style={styles.sparkleIcon} />
          <FontAwesome name="star" size={22} color="#FFD700" />
          <ThemedText type="title" style={styles.title}>
            Ritmo Daily Helper
          </ThemedText>
          <FontAwesome name="star" size={22} color="#FFD700" />
        </View>

        <ThemedText style={styles.subtitle}>
          Let's have a great day together! I'll help you with all your daily activities.
        </ThemedText>

        <Link href="/step" asChild>
          <Pressable style={styles.button}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              Let's start
            </ThemedText>
          </Pressable>
        </Link>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 48,
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 140,
    height: 140,
  },
  content: {
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 10,
  },
  sparkleIcon: {
    marginRight: 4,
  },
  title: {
    color: '#14B8A6',
    fontSize: 28,
  },
  subtitle: {
    textAlign: 'center',
    maxWidth: 340,
    color: '#6B7280',
    fontSize: 16,
    marginTop: 4,
  },
  button: {
    marginTop: 28,
    backgroundColor: '#14B8A6',
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 12,
    shadowColor: '#14B8A6',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 }, // ✅ FIXED HERE
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
