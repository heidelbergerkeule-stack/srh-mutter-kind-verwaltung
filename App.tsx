import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SRH Mutter-Kind Verwaltung</Text>
      <Text style={styles.subtitle}>Mobile App</Text>

      <View style={styles.buttonContainer}>
        <Text style={styles.button} onPress={() => navigation.navigate('Bewohner')}>
          👥 Bewohner
        </Text>
        <Text style={styles.button} onPress={() => navigation.navigate('Bildungswerk')}>
          🏫 Bildungswerk
        </Text>
        <Text style={styles.button} onPress={() => navigation.navigate('Foerdergelder')}>
          💰 Fördergelder
        </Text>
        <Text style={styles.button} onPress={() => navigation.navigate('Jugendamt')}>
          🏛️ Jugendamt
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

function BewohnerScreen() {
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.screenTitle}>Bewohner Verwaltung</Text>
      <Text style={styles.text}>Verwaltung der Bewohnerinnen und ihrer Kinder</Text>
    </ScrollView>
  );
}

function BildungswerkScreen() {
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.screenTitle}>Bildungswerk</Text>
      <Text style={styles.text}>Verwaltung der Bildungswerke</Text>
    </ScrollView>
  );
}

function FoerdergeldScreen() {
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.screenTitle}>Fördergelder</Text>
      <Text style={styles.text}>Verwaltung der Fördergelder und Abrechnungen</Text>
    </ScrollView>
  );
}

function JugendamtScreen() {
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.screenTitle}>Jugendamt</Text>
      <Text style={styles.text}>Verwaltung der Jugendämter</Text>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Startseite' }} />
        <Stack.Screen name="Bewohner" component={BewohnerScreen} />
        <Stack.Screen name="Bildungswerk" component={BildungswerkScreen} />
        <Stack.Screen name="Foerdergelder" component={FoerdergeldScreen} />
        <Stack.Screen name="Jugendamt" component={JugendamtScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    color: 'white',
    padding: 15,
    borderRadius: 8,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});
