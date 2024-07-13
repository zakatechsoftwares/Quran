import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import quranMergedTranslation from "../assets/Quran.json/quranMergedTranslation.json";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Quran</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Go to</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Juz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.selectedButton]}>
            <Text style={[styles.buttonText, styles.selectedButtonText]}>
              Sura
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {quranMergedTranslation.data.surahs && (
        <FlatList
          data={quranMergedTranslation.data.surahs}
          keyExtractor={(item) => item.number}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.surahItem}>
              <Text style={styles.englishText}>
                {item.id} {item.englishName}
              </Text>
              <Text style={styles.arabicText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f5e9",
    paddingTop: 20,
  },
  surahItem: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    borderColor: "#4caf50",
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  englishText: {
    fontSize: 18,
    color: "#000",
  },
  arabicText: {
    fontSize: 18,
    color: "#000",
  },
  header: {
    backgroundColor: "#4caf50",
    paddingBottom: 10,
    paddingHorizontal: 20,

    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    backgroundColor: "#66bb6a",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#388e3c",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  selectedButtonText: {
    fontWeight: "bold",
  },
});
