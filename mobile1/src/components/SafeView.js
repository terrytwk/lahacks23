import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const SafeView = ({ children, scrollable = false, style = {} }) => {
  return (
    // full screen (no safeareaview)
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1, ...style }}
      >
        {scrollable ? (
          <ScrollView style={{ flex: 1 }}>{children}</ScrollView>
        ) : (
          children
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SafeView;
