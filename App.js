import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    // JET 2.0
    // <WebView source={{ uri: 'https://jet.com' }} />
    // Example Shopify Store
    <WebView source={{ uri: 'https://narrative-theme-earthy.myshopify.com' }} />
  );
}

