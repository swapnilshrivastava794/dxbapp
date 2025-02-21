import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const bookmarks = [
  { id: "1", image: { uri: "https://img.youtube.com/vi/ANd5zEOqwTg/mqdefault.jpg" }, text: "Environment Agency – Abu Dhabi (EAD) honored in Vienna for excellence in quality management with the prestigious Quality Achievements Award." },
  { id: "2", image: { uri: "https://www.dxbnewsnetwork.com/upload/blog/Technology_6.jpg" }, text: "Rabdan Academy, a world leader in safety, security, defense, emergency readiness, and crisis management." },
  { id: "3", image: { uri: "https://www.dxbnewsnetwork.com/upload/blog/Smart_Tourism.jpg" }, text: "The Custodian of the Two Holy Mosques, King Salman, approved the Saudi riyal symbol, strengthening its identity.", isVideo: true },
  { id: "4", image: { uri: "https://markaziasolutions.com/mi-hrms/assets/front_end/images/hero_1.jpg" }, text: "Sheikh Sultan bin Ahmed Al Qasimi inaugurated Xposure 2025 at Aljada, Sharjah." },
  { id: "5", image: { uri: "https://www.dxbnewsnetwork.com/upload/blog/Barbie-Hsu.jpg" }, text: "KEmirates, the world’s largest international airline, has partnered with West Africa’s biggest carrier." },
  { id: "6", image: { uri: "https://www.dxbnewsnetwork.com/upload/blog/Plane_80LWmyu.jpg" }, text: "A Bangladesh Airlines flight from Dhaka to Dubai made an emergency landing at Nagpur airport this morning due to a technical issue.", isVideo: true },
  { id: "7", image: { uri: "https://www.dxbnewsnetwork.com/upload/blog/Ajman.jpg" }, text: "Ajman Tourism begins UK tour to showcase attractions, services, and tourism offerings", isVideo: true },
  { id: "8", image: { uri: "https://www.dxbnewsnetwork.com/upload/blog/UAE_C10esTt.jpg" }, text: "Award-winning documentaries & short films screen till Feb 26 at Sharjah’s Aljada", isVideo: true },
  { id: "9", image: { uri: "https://www.dxbnewsnetwork.com/upload/blog/Delta-plain.jpg" }, text: "US airline Delta is offering $30,000 to every passenger aboard the plane that crashed while landing at Toronto airport earlier this week.", isVideo: true },
];

const BookmarkScreen = () => {
  const [isGridView, setIsGridView] = useState(false);

  console.log("BookmarkScreen is rendering..."); // Debugging

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Bookmarks</Text>
          <TouchableOpacity onPress={() => setIsGridView(!isGridView)}>
            <Icon name={isGridView ? "view-list" : "view-grid"} size={26} color="black" />
          </TouchableOpacity>
        </View>

        {/* Bookmark List */}
        <FlatList
          data={bookmarks}
          key={isGridView ? "grid" : "list"} // Prevents incorrect layout caching
          keyExtractor={(item) => item.id}
          numColumns={isGridView ? 2 : 1}
          renderItem={({ item }) => (
            <View style={isGridView ? styles.gridItem : styles.listItem}>
              {/* Image or Video Thumbnail */}
              <View style={styles.imageContainer}>
                {item.isVideo ? (
                  <View>
                    <Image source={item.image} style={isGridView ? styles.gridImage : styles.listImage} />
                    <View style={styles.playIcon}>
                      <Icon name="play-circle" size={32} color="white" />
                    </View>
                  </View>
                ) : (
                  <Image source={item.image} style={isGridView ? styles.gridImage : styles.listImage} />
                )}
              </View>

              {/* Text Description */}
              <View style={styles.textContainer}>
                <Text style={styles.text} numberOfLines={3}>{item.text}</Text>
              </View>

              {/* Bookmark Icon */}
              <TouchableOpacity style={styles.bookmarkIcon}>
                <Icon name="bookmark-outline" size={22} color="blue" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    top: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 10,
    alignItems: "left",
  },
  imageContainer: {
    position: "relative",
  },
  listImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: "cover",
  },
  gridImage: {
    width: "100%",  
    height: 150,   
    borderRadius: 10,
    resizeMode: "cover", 
  },  
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 14,
    color: "#333",
    textAlign: "left",
  },
  bookmarkIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  playIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -16 }, { translateY: -16 }],
  },
});

export default BookmarkScreen;
