import { FlatList } from "react-native";
import Item from "./Item";

export default function List({ todos, setTodos }) {
  return <FlatList data={todos} renderItem={({ item }) => <Item item={item} setTodos={setTodos} />} keyExtractor={(item) => item.id} />;
}
