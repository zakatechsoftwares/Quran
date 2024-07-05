// import React from "react";
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
// } from "react-native";

// const App = () => {
//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.time}>08:16</Text>
//         <Image
//           source={require("./assets/icons/battery.png")}
//           style={styles.icon}
//         />
//       </View>

//       <View style={styles.main}>
//         <Text style={styles.zohr}>Zohr</Text>
//         <Text style={styles.timeMain}>12:12</Text>
//         <Text style={styles.date}>Dhu'l-Hijjah 26, 1445 AH*</Text>
//         <Text style={styles.date}>Jul 03, 2024</Text>
//         <Text style={styles.zohrStart}>Zohr starts in 3h 55m 13s</Text>
//       </View>

//       <View style={styles.grid}>
//         <TouchableOpacity style={styles.gridItem}>
//           <Image
//             source={require("./assets/icons/readQuran.png")}
//             style={styles.gridIcon}
//           />
//           <Text style={styles.gridText}>Read Quran</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.gridItem}>
//           <Image
//             source={require("./assets/icons/hifz.png")}
//             style={styles.gridIcon}
//           />
//           <Text style={styles.gridText}>Hifz</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.gridItem}>
//           <Image
//             source={require("./assets/icons/qibla.png")}
//             style={styles.gridIcon}
//           />
//           <Text style={styles.gridText}>Qibla Direction</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.gridItem}>
//           <Image
//             source={require("./assets/icons/tajweed.png")}
//             style={styles.gridIcon}
//           />
//           <Text style={styles.gridText}>Learn Tajweed</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.gridItem}>
//           <Image
//             source={require("./assets/icons/prayerTimes.png")}
//             style={styles.gridIcon}
//           />
//           <Text style={styles.gridText}>Prayer Times</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.gridItem}>
//           <Image
//             source={require("./assets/icons/tasbeeh.png")}
//             style={styles.gridIcon}
//           />
//           <Text style={styles.gridText}>Tasbeeh</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.gridItem}>
//           <Image
//             source={require("./assets/icons/hijri.png")}
//             style={styles.gridIcon}
//           />
//           <Text style={styles.gridText}>Hijri</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.gridItem}>
//           <Image
//             source={require("./assets/icons/eQuran.png")}
//             style={styles.gridIcon}
//           />
//           <Text style={styles.gridText}>E-Quran</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.engagement}>
//         <Text style={styles.engagementTitle}>Quran Engagement Time</Text>
//         <View style={styles.engagementContent}>
//           <View style={styles.engagementItem}>
//             <Text style={styles.engagementText}>Yours this week</Text>
//             <Text style={styles.engagementTime}>1h 24m</Text>
//             <Text style={styles.engagementLifetime}>Lifetime: 144h 16m</Text>
//           </View>
//           <View style={styles.engagementItem}>
//             <Text style={styles.engagementText}>Sadqa Jaria Gift Pool</Text>
//             <TouchableOpacity style={styles.giftButton}>
//               <Text style={styles.giftButtonText}>Purchase Gifts</Text>
//             </TouchableOpacity>
//             <Text style={styles.engagementLifetime}>0 Quran copies gifted</Text>
//           </View>
//         </View>
//       </View>

//       <View style={styles.adBanner}>
//         <Text style={styles.adText}>
//           Tired of ads? Try Quran Majeed Pro for 3 days free
//         </Text>
//         <TouchableOpacity style={styles.upgradeButton}>
//           <Text style={styles.upgradeButtonText}>Upgrade Now</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5F5F5",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 16,
//   },
//   time: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   icon: {
//     width: 20,
//     height: 20,
//   },
//   main: {
//     alignItems: "center",
//     padding: 16,
//   },
//   zohr: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   timeMain: {
//     fontSize: 48,
//     fontWeight: "bold",
//   },
//   date: {
//     fontSize: 16,
//     color: "#888",
//   },
//   zohrStart: {
//     fontSize: 16,
//     color: "#888",
//     marginTop: 8,
//   },
//   grid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     padding: 16,
//   },
//   gridItem: {
//     alignItems: "center",
//     margin: 8,
//   },
//   gridIcon: {
//     width: 50,
//     height: 50,
//     marginBottom: 8,
//   },
//   gridText: {
//     fontSize: 14,
//     textAlign: "center",
//   },
//   engagement: {
//     padding: 16,
//     backgroundColor: "#FFF",
//     margin: 16,
//     borderRadius: 8,
//     elevation: 2,
//   },
//   engagementTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   engagementContent: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//   },
//   engagementItem: {
//     alignItems: "center",
//   },
//   engagementText: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   engagementTime: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   engagementLifetime: {
//     fontSize: 14,
//     color: "#888",
//     marginTop: 4,
//   },
//   giftButton: {
//     backgroundColor: "#28A745",
//     padding: 8,
//     borderRadius: 4,
//     marginTop: 8,
//   },
//   giftButtonText: {
//     color: "#FFF",
//     fontSize: 14,
//   },
//   adBanner: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 16,
//     backgroundColor: "#FFEB3B",
//     alignItems: "center",
//   },
//   adText: {
//     fontSize: 14,
//   },
//   upgradeButton: {
//     backgroundColor: "#FF5722",
//     padding: 8,
//     borderRadius: 4,
//   },
//   upgradeButtonText: {
//     color: "#FFF",
//     fontSize: 14,
//   },
// });

// export default App;

//-------------------------------Page generated from gemini.js-------------------------------

// import React from "react";
// import { View, Text, StyleSheet, ScrollView } from "react-native";

// const Koran = () => {
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style={styles.time}>Zohr starts in 2h 34m 10s</Text>
//           <Text style={styles.carrier}>Zohr at 12:12</Text>
//         </View>
//         <View style={styles.header}>
//           <Text style={styles.time}>Zohr starts in 2h 34m 10s</Text>
//           <Text style={styles.carrier}>Zohr at 12:12</Text>
//         </View>
//         <View style={styles.content}>
//           <View style={styles.header}>
//             <Text style={styles.time}>Zohr </Text>
//             <Text style={styles.carrier}>Jz</Text>
//             <Text style={styles.carrier}>Zohr </Text>
//           </View>
//           <View style={[styles.header]}>
//             <Text style={styles.englishText}>
//               {"\n"}
//               (24. Then truly I would be in error manifest.) {"\n"}
//               (25. Lo! I have believed in your Lord, so hear me!) {"\n"}
//               (26. It was said (unto him): Enter paradise. He said: Would that
//               my people knew) {"\n"}
//               (27. With what (munificence) my Lord hath pardoned me and made me
//               of the honoured ones!) {"\n"}
//             </Text>
//             <Text style={styles.arabicText}>
//               وَلَا يُنقِذُونِ {"\n"}
//               مباين (٢٤) {"\n"}
//               إِنِّي ءَامَنتُ بِرَبِّكُمْ فَاسْمَعُونِ {"\n"}
//               قِيلَ ادْخُلِ الْجَنَّةَ قَالَ يَلَيْتَ قَوْمِي {"\n"}
//               بِمَا غَفَرَ لِي رَبِّي وَجَعَلَنِي مِنَ الْمُكْرَمِينَ {"\n"}
//             </Text>
//           </View>

//           <View style={styles.controls}>
//             <Text>Play</Text>
//             <Text>Bookmarks</Text>
//             <Text>Auto Scroll</Text>
//             <Text>Share</Text>
//             <Text>Translation</Text>
//             <Text>More</Text>
//           </View>
//           <Text style={styles.surah}>We sent not...</Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 10,
//   },
//   time: {
//     fontSize: 16,
//   },
//   carrier: {
//     fontSize: 16,
//   },
//   content: {
//     padding: 10,
//   },
//   notification: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   prayer: {
//     fontSize: 16,
//   },
//   surah: {
//     fontSize: 17,
//     marginVertical: 10,
//   },
//   arabicText: {
//     fontSize: 18,
//     //fontFamily: "Arabic", // Assuming you have an Arabic font installed
//     textAlign: "right",
//     width: "50%",
//     paddingStart: 10,
//   },
//   englishText: {
//     fontSize: 18,
//     //fontFamily: "Arabic", // Assuming you have an Arabic font installed
//     textAlign: "justify",
//     width: "50%",
//     paddingEnd: 10,
//   },
//   controls: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginVertical: 15,
//   },
// });

// export default Koran;

//--------------------------Page generated from open chat gpts------------------------

import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import quran from "./assets/Quran.json/quran-uthmani.json";
import quranAsadTranslation from "./assets/Quran.json/quranAsadTranslation.json";
import { useFonts } from "expo-font";
const QuranPage = () => {
  const [fontLoaded] = useFonts({
    ottoman: require("../assets/fonts/ottoman.ttf"),
  });
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Juz 22</Text>
        <Text style={styles.headerText}>441</Text>
        <Text style={styles.headerText}>Ya-Seen</Text>
      </View>
      <View style={styles.verse}>
        {/* {quranAsadTranslation.data.surahs.map(({ ayahs }, index) => {
          return (
            <View key={index}>
              {ayahs.map(({ text, number }, i) => {
                return (
                  <Text style={styles.verseText} key={i}>
                    <Text style={styles.verseNumber}>{number}. </Text> {text}
                  </Text>
                );
              })}
            </View>
          );
        })} */}
        {quran.data.surahs.map(({ ayahs }, index) => {
          return (
            <View key={index} style={{ width: "50%" }}>
              {ayahs.map(({ text, number }, i) => {
                return (
                  <Text style={styles.arabicText} key={i}>
                    {text}
                    {number}
                  </Text>
                );
              })}
            </View>
          );
        })}
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Play</Text>
        <Text style={styles.footerText}>Bookmarks</Text>
        <Text style={styles.footerText}>Auto Scroll</Text>
        <Text style={styles.footerText}>Share</Text>
        <Text style={styles.footerText}>Translation</Text>
        <Text style={styles.footerText}>More</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf2f4",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#2b2d42",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
  },
  verse: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#8d99ae",
    flexDirection: "row",
  },
  verseNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },
  verseText: {
    fontSize: 16,
    marginVertical: 5,
    width: "50%",
  },
  arabicText: {
    fontSize: 24,
    textAlign: "right",
    color: "#2b2d42",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#2b2d42",
  },
  footerText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default QuranPage;
