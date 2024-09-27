import {Searchbar, Text, useTheme} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {View, StyleSheet, TextInput} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useState} from "react";

export default function CctvMaps() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
          paddingHorizontal: 15,
        }
        ]
    }
    >
      <Searchbar
        placeholder='Search'
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
        style={{
          marginVertical: 10
        }}
      />
      <View
        style={{
          flex: 0.6,
          backgroundColor: theme.colors.secondaryContainer,
          minWidth: '100%',
          borderRadius: 15,
          alignItems: 'center',
          marginVertical: 5,
        }}
      >
        <Text>Map View</Text>
      </View>
      <View
        style={{
          flex: 0.4,
          backgroundColor: theme.colors.secondaryContainer,
          minWidth: '100%',
          borderRadius: 15,
          alignItems: 'center',
          marginVertical: 5,
        }}
      >
        <Text>Card View</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})
