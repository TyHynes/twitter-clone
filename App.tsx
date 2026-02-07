import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { USER_PROFILE, TWEETS, Tweet } from "./app/data";

export default function App() {
  const renderItem = ({ item }: { item: Tweet }) => (
    <View style={styles.tweetContainer}>
      <View style={styles.tweetHeader}>
        {item.pinned && (
          <View style={styles.pinnedContainer}>
            <Ionicons name="pricetag" size={12} color="#687684" />
            <Text style={styles.pinnedText}>Pinned</Text>
          </View>
        )}
        <View style={styles.tweetUserRow}>
          <Image source={{ uri: item.user.avatar }} style={styles.tweetAvatar} />
          <View style={styles.tweetContentColumn}>
            <View style={styles.tweetUserInfo}>
              <Text style={styles.tweetName}>{item.user.name}</Text>
              {USER_PROFILE.verified && (
                <Ionicons name="checkmark-circle" size={14} color="#1D9BF0" style={styles.verifiedIcon} />
              )}
              <Text style={styles.tweetHandle}>{item.user.handle} · {item.timestamp}</Text>
            </View>
            <Text style={styles.tweetText}>{item.content}</Text>
            <View style={styles.tweetMetrics}>
              <View style={styles.metricItem}>
                <Ionicons name="chatbubble-outline" size={16} color="#687684" />
                <Text style={styles.metricText}>{item.metrics.replies}</Text>
              </View>
              <View style={styles.metricItem}>
                <Ionicons name="repeat-outline" size={16} color="#687684" />
                <Text style={styles.metricText}>{item.metrics.reposts}</Text>
              </View>
              <View style={styles.metricItem}>
                <Ionicons name="heart-outline" size={16} color="#687684" />
                <Text style={styles.metricText}>{item.metrics.likes}</Text>
              </View>
              <View style={styles.metricItem}>
                <Ionicons name="stats-chart-outline" size={16} color="#687684" />
                <Text style={styles.metricText}>{item.metrics.views}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        {/* Search Header */}
        <View style={styles.searchHeader}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.searchBar}>
            <Text style={styles.searchPlaceholder}>Search</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>


        <FlatList
          data={TWEETS}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <View>
              {/* Banner */}
              <View style={styles.bannerContainer}>
                <Image source={{ uri: USER_PROFILE.banner }} style={styles.banner} />
              </View>

              {/* Profile Info */}
              <View style={styles.profileContainer}>
                <View style={styles.profileImageContainer}>
                  <Image source={{ uri: USER_PROFILE.avatar }} style={styles.profileImage} />
                  <TouchableOpacity style={styles.followButton}>
                    <Text style={styles.followButtonText}>Follow</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.userInfo}>
                  <Text style={styles.userName}>
                    {USER_PROFILE.name}
                    {USER_PROFILE.verified && (
                      <Ionicons name="checkmark-circle" size={18} color="#1D9BF0" style={{ marginLeft: 4 }} />
                    )}
                  </Text>
                  <Text style={styles.userHandle}>{USER_PROFILE.handle}</Text>
                </View>

                <Text style={styles.bio}>{USER_PROFILE.bio}</Text>

                <View style={styles.detailsContainer}>
                  <View style={styles.detailItem}>
                    <Ionicons name="briefcase-outline" size={14} color="#687684" />
                    <Text style={styles.detailText}>Education</Text>
                  </View>
                  <View style={styles.detailItem}>
                    <Ionicons name="location-outline" size={14} color="#687684" />
                    <Text style={styles.detailText}>{USER_PROFILE.location}</Text>
                  </View>
                  <View style={styles.detailItem}>
                    <Ionicons name="link-outline" size={14} color="#687684" />
                    <Text style={styles.detailText} numberOfLines={1}>{USER_PROFILE.website}</Text>
                  </View>
                  <View style={styles.detailItem}>
                    <Ionicons name="calendar-outline" size={14} color="#687684" />
                    <Text style={styles.detailText}>Joined {USER_PROFILE.joined}</Text>
                  </View>
                </View>

                <View style={styles.followCounts}>
                  <Text style={styles.countText}><Text style={styles.boldText}>{USER_PROFILE.following}</Text> Following</Text>
                  <Text style={styles.countText}><Text style={styles.boldText}>{USER_PROFILE.followers}</Text> Followers</Text>
                </View>

                <Text style={styles.commonFollowers}>Not followed by anyone you're following</Text>

                {/* Tabs */}
                <View style={styles.tabsContainer}>
                  <View style={[styles.tabItem, styles.activeTab]}>
                    <Text style={[styles.tabText, styles.activeTabText]}>Posts</Text>
                    <View style={styles.activeTabIndicator} />
                  </View>
                  <View style={styles.tabItem}>
                    <Text style={styles.tabText}>Replies</Text>
                  </View>
                  <View style={styles.tabItem}>
                    <Text style={styles.tabText}>Highlights</Text>
                  </View>
                  <View style={styles.tabItem}>
                    <Text style={styles.tabText}>Media</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    position: 'absolute',
    top: 40,
    zIndex: 10,
    width: '100%',
    justifyContent: 'space-between'
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 4
  },
  searchBar: {
    flex: 1,
    height: 36,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 18,
    marginHorizontal: 12,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  searchPlaceholder: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16
  },
  bannerContainer: {
    height: 150,
    backgroundColor: "#333",
  },
  banner: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  profileContainer: {
    paddingHorizontal: 16,
    top: -35,
    marginBottom: -35
  },
  profileImageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 8,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "black",
  },
  followButton: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 40
  },
  followButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },
  userInfo: {
    marginBottom: 12,
  },
  userName: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  userHandle: {
    color: "#687684",
    fontSize: 14,
  },
  bio: {
    color: "white",
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 20,
  },
  detailsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
    marginBottom: 4,
  },
  detailText: {
    color: "#687684",
    fontSize: 14,
    marginLeft: 4,
  },
  followCounts: {
    flexDirection: "row",
    marginBottom: 12,
  },
  countText: {
    color: "#687684",
    fontSize: 14,
    marginRight: 16,
  },
  boldText: {
    color: "white",
    fontWeight: "bold",
  },
  commonFollowers: {
    color: "#687684",
    fontSize: 13,
    marginBottom: 16
  },
  tabsContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#2F3336",
    marginBottom: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    position: 'relative'
  },
  activeTab: {
  },
  tabText: {
    color: "#687684",
    fontSize: 14,
    fontWeight: "bold",
  },
  activeTabText: {
    color: "white",
  },
  activeTabIndicator: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    backgroundColor: '#1D9BF0',
    width: '40%',
    borderRadius: 2
  },
  tweetContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#2F3336",
    padding: 16,
  },
  tweetHeader: {
    flexDirection: "column",
  },
  pinnedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    marginLeft: 48
  },
  pinnedText: {
    color: '#687684',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 4
  },
  tweetUserRow: {
    flexDirection: "row",
  },
  tweetAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  tweetContentColumn: {
    flex: 1
  },
  tweetUserInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  tweetName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    marginRight: 4,
  },
  verifiedIcon: {
    marginRight: 4,
  },
  tweetHandle: {
    color: "#687684",
    fontSize: 14,
  },
  tweetText: {
    color: "white",
    fontSize: 15,
    marginBottom: 12,
    lineHeight: 20,
  },
  tweetMetrics: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 24,
  },
  metricItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  metricText: {
    color: "#687684",
    fontSize: 12,
    marginLeft: 4,
  },
});
