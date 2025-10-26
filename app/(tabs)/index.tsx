import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Alert, Animated, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focused, setFocused] = useState<'email' | 'password' | null>(null);
  const bounceAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter(); // ✅ Add router for navigation

  // ✅ Heart bounce animation
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, { toValue: -10, duration: 600, useNativeDriver: true }),
        Animated.timing(bounceAnim, { toValue: 0, duration: 600, useNativeDriver: true }),
      ])
    ).start();
  }, [bounceAnim]);

  function handleLogin() {
    if (!email.trim() || !password) {
      Alert.alert('Validation', 'Please enter both email and password');
      return;
    }

    // ✅ Navigate directly to Landing Page
    router.push('/landingpage'); // ← make sure your file is named `landingPage.tsx`
  }

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: 'Login' }} />

      {/* ❤️ Animated Heart Icon */}
      <Animated.View style={{ transform: [{ translateY: bounceAnim }] }}>
        <Ionicons name="heart" size={50} color="#14B8A6" style={styles.heartIcon} />
      </Animated.View>

      <ThemedText type="title" style={styles.title}>
        My Daily Helper
      </ThemedText>

      <ThemedText type="default" style={styles.paragraph}>
        Supporting independence, one task at a time
      </ThemedText>

      {/* ✅ White container for the form */}
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <ThemedText type="default" style={styles.label}>
            Email
          </ThemedText>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="parent@example.com"
            placeholderTextColor="#A0AEC0"
            autoCapitalize="none"
            keyboardType="email-address"
            style={[
              styles.input,
              { borderColor: focused === 'email' ? '#1E90FF' : '#E2E8F0' },
            ]}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused(null)}
          />

          <ThemedText type="default" style={styles.label}>
            Password
          </ThemedText>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            placeholderTextColor="#A0AEC0"
            secureTextEntry
            style={[
              styles.input,
              { borderColor: focused === 'password' ? '#1E90FF' : '#E2E8F0' },
            ]}
            onFocus={() => setFocused('password')}
            onBlur={() => setFocused(null)}
          />

          {/* ✅ Gradient Sign-In Button */}
          <Pressable onPress={handleLogin} style={styles.buttonContainer}>
            <LinearGradient
              colors={['#00C6A7', '#1E90FF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Sign in</Text>
            </LinearGradient>
          </Pressable>

          {/* ✅ Sign up + Forgot password */}
          <View style={styles.linkContainer}>
            <Text style={styles.linkText}>
              Don’t have an account?{' '}
              <Text
                style={styles.signUpLink}
                onPress={() => Alert.alert('Navigate', 'Go to Sign Up screen')}
              >
                Sign up
              </Text>
            </Text>

            <Pressable
              onPress={() => Alert.alert('Navigate', 'Go to Forgot Password screen')}
            >
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* ✅ Tagline under container */}
      <ThemedText type="default" style={styles.bottomText}>
        A safe space for children to learn daily living skills with guidance and support
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
  },
  heartIcon: {
    marginBottom: 8,
  },
  title: {
    textAlign: 'center',
    marginBottom: 4,
    color: '#14B8A6',
    fontSize: 28,
    fontWeight: '700',
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 24,
    color: '#475569',
    fontSize: 16,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  form: {
    gap: 12,
  },
  label: {
    color: '#1E293B',
    fontWeight: '600',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#F9FAFB',
    color: '#1E293B',
  },
  buttonContainer: {
    marginTop: 12,
    borderRadius: 8,
    overflow: 'hidden',
  },
  button: {
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkContainer: {
    marginTop: 16,
    alignItems: 'center',
    gap: 8,
  },
  linkText: {
    color: '#475569',
    fontSize: 14,
  },
  signUpLink: {
    color: '#14B8A6',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  forgotPassword: {
    color: '#14B8A6',
    fontSize: 14,
    fontWeight: '500',
  },
  bottomText: {
    marginTop: 24,
    textAlign: 'center',
    color: '#475569',
    fontSize: 15,
    lineHeight: 20,
    paddingHorizontal: 16,
  },
});
