import React, { useState } from 'react';
import { ActivityIndicator, Pressable } from 'react-native';
import WebView from 'react-native-webview';
import { WebViewScreenProps } from './types';
import { StyledWebViewModalHeader, StyledWebViewModalText } from './styles';

const WebViewScreen: React.FC<WebViewScreenProps> = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { url } = route?.params || {};

  return (
    <>
      <StyledWebViewModalHeader>
        <Pressable
          hitSlop={{ top: 4, right: 4, bottom: 4, left: 4 }}
          onPress={() => navigation?.goBack()}
        >
          <StyledWebViewModalText>Close WebView</StyledWebViewModalText>
        </Pressable>
      </StyledWebViewModalHeader>
      {isLoading ? <ActivityIndicator size='large' /> : null}
      <WebView
        source={{
          uri: String(url),
        }}
        onLoadEnd={() => setIsLoading(false)}
      />
    </>
  );
};

export default WebViewScreen;
