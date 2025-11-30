import { Pressable, StyleSheet, View } from "react-native";

export default function ButtonSecondary({ children, onPress }) {
  return (
    <View>
      <Pressable onPress={onPress} style={({ pressed }) => (pressed ? [styles.button, styles.pressed] : [styles.button])}>
        {children}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingBlock: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  pressed: {
    opacity: 0.5,
  },
});
