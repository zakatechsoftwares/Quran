import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  SectionList,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from "react-native";
import quranMergedTranslation from "./assets/Quran.json/quranMergedTranslation";
import { toArabic } from "arabic-digits";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import sectionListGetItemLayout from "react-native-section-list-get-item-layout";

let hizbTranslations = {
  1: "ربع حزب",
  2: "نصف حزب",
  3: "ثلاثة أرباع حزب",
};

const SurahItem = ({
  englishTitle,
  arabicTitle,
  page,
  hizbQuarter,
  juz,
  setShowSurahs,
}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{englishTitle}</Text>
      <Text style={styles.headerText}>
        {hizbTranslations[(hizbQuarter % 4) - 1]
          ? `${
              hizbTranslations[(hizbQuarter % 4) - 1] +
              Math.ceil(hizbQuarter / 4)
            }`
          : Math.ceil(hizbQuarter / 4)}
        {hizbTranslations[(hizbQuarter % 4) - 1] === undefined &&
          (hizbQuarter % 8 === 0 || juz === 1) &&
          juz}
      </Text>
      <TouchableOpacity onPress={() => setShowSurahs(true)}>
        <Text style={styles.headerText}>{arabicTitle}</Text>
      </TouchableOpacity>
    </View>
    // <View style={styles.surahItem}>
    //   <Text style={styles.surahTitle}>{name}</Text>
    // </View>
  );
};

const AyahItem = ({ text, arabicText, number }) => (
  <View style={styles.verse}>
    <Text style={styles.verseText}>
      <Text style={styles.verseNumber}>{number}. </Text>
      {text}
    </Text>

    <Text style={styles.arabicText}>
      {arabicText + "  "}

      {toArabic(number)}
    </Text>
  </View>
);

const App = () => {
  const [currentView, setCurrentView] = useState(currentView);
  const [showSurahs, setShowSurahs] = useState(false);
  const [loaded, error] = useFonts({
    uthmani: require("../assets/fonts/KFGQPC Uthmanic Script HAFS Regular.otf"),
  });

  const sectionListRef = useRef(null);

  const scrollToSurah = (index) => {
    sectionListRef.current.scrollToLocation({
      sectionIndex: index,
      itemIndex: 5,
    });
    setShowSurahs(false);
  };

  const onScrollToIndexFailed = (error) => {
    const offset = error.averageItemLength * error.index;
    sectionListRef.current.scrollToOffset(offset);
    setTimeout(() => {
      sectionListRef.current.scrollToIndex({ index: error.index });
    }, 100);
  };

  const scrollToItem = (itemName) => {
    let sectionIndex = 0;
    let itemIndex = 0;
    let found = false;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      for (let j = 0; j < section.data.length; j++) {
        if (section.data[j].name === itemName) {
          sectionIndex = i;
          itemIndex = j;
          found = true;
          break;
        }
      }
      if (found) break;
    }

    if (found) {
      sectionListRef.current.scrollToLocation({
        sectionIndex,
        itemIndex,
        viewPosition: 0.5, // Optional: Specifies the position where the item will appear in the viewport
      });
    } else {
      console.warn(`Item with name "${itemName}" not found.`);
    }
  };

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const sections = quranMergedTranslation.data.surahs.map((surah) => ({
    englishTitle: surah.englishName,
    arabicTitle: surah.name,
    data: surah.ayahs,
  }));

  const getItemLayout = sectionListGetItemLayout({
    getItemHeight: (rowData, sectionIndex, rowIndex) =>
      sectionIndex === 0 ? 100 : 50,
  });

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={showSurahs}
        style={styles.container}
        onRequestClose={() => setShowSurahs(false)}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Go to</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Juz</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setShowSurahs(false)}
                style={[styles.button, styles.selectedButton]}
              >
                <Text style={[styles.buttonText, styles.selectedButtonText]}>
                  {showSurahs ? "close" : "surahs"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {quranMergedTranslation.data.surahs && (
            <FlatList
              style={styles.container}
              data={quranMergedTranslation.data.surahs}
              keyExtractor={(item) => item.number}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={[styles.surahItem, styles.container, styles.verse]}
                  onPress={() => scrollToSurah(index)}
                >
                  <Text style={[styles.englishText, styles.verseText]}>
                    {item.id} {item.englishName}
                  </Text>
                  <Text style={styles.arabicText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </Modal>
      <SectionList
        ref={sectionListRef}
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index }) => (
          <View>
            {item.arabicText.includes("۞") && (
              <Text style={{ textAlign: "center" }}>one-eight</Text>
            )}
            <AyahItem
              text={item.text}
              arabicText={item.arabicText}
              number={item.numberInSurah}
              index={index}
            />
          </View>
        )}
        renderSectionHeader={({ section: { englishTitle, arabicTitle } }) => (
          <SurahItem
            englishTitle={englishTitle}
            arabicTitle={arabicTitle}
            page={currentView?.item.page}
            hizbQuarter={currentView?.item.hizbQuarter}
            juz={currentView?.item.juz}
            setShowSurahs={setShowSurahs}
            // englishNameTranslation={englishNameTranslation}
          />
        )}
        getItemLayout={getItemLayout}
        stickySectionHeadersEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f5e9",
  },
  surahItem: {
    backgroundColor: "#f9c2ff",
    padding: 10,
  },
  surahTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  ayahItem: {
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  ayahText: {
    fontSize: 16,
  },

  verse: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#8d99ae",
    flexDirection: "row",
    height: "auto",
  },
  verseNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },
  verseText: {
    fontSize: 16,
    marginVertical: 5,
    width: "50%",
    textAlign: "start",
    paddingEnd: 5,
  },
  arabicText: {
    fontSize: 24,
    textAlign: "right",
    color: "#2b2d42",
    fontFamily: "ottoman",
    width: "50%",
    marginVertical: 5,
    paddingStart: 5,
    fontFamily: "uthmani",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#4caf50",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
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

export default App;
