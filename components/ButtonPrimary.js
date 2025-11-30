import { Pressable, StyleSheet, View } from "react-native";

export default function ButtonPrimary({ children, onPress, color = "#000" }) {
  const propsStyles = { backgroundColor: color, borderColor: color };
  return (
    <View>
      <Pressable onPress={onPress} style={({ pressed }) => (pressed ? [styles.button, propsStyles, styles.pressed] : [styles.button, propsStyles])}>
        {children}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    paddingBlock: 15,
    paddingHorizontal: 20,
  },
  pressed: {
    opacity: 0.5,
  },
});
