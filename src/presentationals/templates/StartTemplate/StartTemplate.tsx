import React, {memo} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export interface StartTemplateTemplateProps {
  navigateToHome: () => void;
}

export const StartTemplate = memo(
  ({navigateToHome}: StartTemplateTemplateProps) => {
    const isDarkMode = useColorScheme() === 'dark';

    console.log('navigateToHome =', navigateToHome);
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}
        />
        <TouchableOpacity onPress={navigateToHome}>
          <Text>Navigation To Home</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  },
);
