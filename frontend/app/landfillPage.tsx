import { Pressable, Text, View, StyleSheet } from 'react-native';
import Button from '@/components/Button'; 
import { Image } from 'react-native'; 
import ImageViewer from '@/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const PlaceholderImage = require("@/assets/images/imageOfPaperBall3.jpg");
const HomeImage = require("@/assets/images/homeButton.png");
const backImage = require("@/assets/images/logo.png");
const landFill = require("@/assets/images/landfillImage.png");

export default function CompostScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={backImage} style={{ width: 326, height: 100,flexShrink: 0,}} />
      <View style={styles.imageContainer}>
      <Image source ={landFill} style={{ width: 298, height: 300,flexShrink: 0,}} />
      </View>
    <View style={styles.footerContainer}>
    <View style={styles.homeContainer}>
    <Pressable onPress={() => router.push('/')}>
        <Image source={HomeImage} style={{ width: 100, height: 125,paddingBottom: 25, flexShrink:0,}} />
    </Pressable>
</View>
<View style ={styles.bottomBar}></View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7CAF8D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  footerContainer: {
    width: 390,
    height: 80.5,
    backgroundColor: '#A97142',
    alignItems: 'center',       // center horizontally
    justifyContent: 'center',   // center vertically
    overflow: 'visible',
    paddingBottom:10,
  },
  homeContainer: {
    overflow: 'visible',
        paddingVertical: 10,
        alignItems: 'center',
        height: 125,
      },
      bottomBar: {
        width: 390,
        height: 30.5,
        flexShrink: 0,
        borderRadius: 20,
        backgroundColor: '#A97142',
        alignItems: 'center',       // center horizontally
        paddingTop: 5,
    
      },
      imageContainer: {
        flex: 1,
        paddingTop: 50,
        paddingLeft:10,
        paddingRight:10,
        width: 359.458,
        height: 347.029,
        flexShrink: 0,
        borderRadius: 2,
        alignItems: 'center',
        marginTop: 20,
    
      },
});