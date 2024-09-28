import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, useTheme, Card, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { navigate } from "@react-navigation/routers/src/CommonActions";

export default function Login() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [text, setText] = React.useState("");

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Card style={styles.card}>
        <Card.Title title="Login" titleVariant='displayMedium' />
        <Card.Content>
          <Text>Hello World!</Text> 
        </Card.Content>
        <Button
          mode="outlined"
          onPress={() => { navigation.navigate("PostLogin") }}
        >Go to Post Login</Button>
      </Card>
      <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%'
  }
})
