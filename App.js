import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  // 클릭하면 투명되는 애니메이션 
  TouchableOpacity,
  //요소를 클릭할때 배경이 바뀜
  TouchableHighlight,
  //화면상 변경은 없지만 이벤트만 실행할때 사용
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { theme } from "./colors";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        {/* 클릭하면 투명되는 애니메이션 */}
        <TouchableOpacity>
          <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.btnText}>Travel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
    color: "white",
  },
});