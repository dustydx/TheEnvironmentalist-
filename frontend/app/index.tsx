import { Pressable, View, Text, StyleSheet } from 'react-native';
import Button from '@/components/Button'; 
import { Image } from 'react-native'; 
import ImageViewer from '@/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';


const PlaceholderImage = require("@/assets/images/imageOfPaperBall3.jpg");
const HomeImage = require("@/assets/images/SelectButton.png");
const backImage = require("@/assets/images/otherLOGO.png");
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API}`;


export default function Index() {
  // Create state variable holding the value of selected image
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  
  
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      // Pick first uri from  assets array
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  const handleClassifyImage = async () => {
    if (!selectedImage) {
      alert("Please choose a photo first.");
      return;
    }
  
    try {
      const fileBase64 = await FileSystem.readAsStringAsync(selectedImage, {
        encoding: FileSystem.EncodingType.Base64,
      });
  
      const response = await axios.post(
        GEMINI_URL,
        {
          contents: [
            {
              parts: [
                {
                  inlineData: {
                    mimeType: 'image/jpeg',
                    data: fileBase64,
                  },
                },
                {
                  text: "I want you to tell me if this item is 'Recyclable', 'Compostable', 'Landfill', or 'Is not disposable' only.",
                },
              ],
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      const responseText = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
      console.log("Gemini Vision Response:", responseText);
      alert(responseText || "No response from Gemini.");
    } catch (error) {
      console.error("Error with Gemini API:", error.response?.data || error.message);
      alert("Something went wrong. Check the console.");
    }
  };
  


 
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
       <Image source={backImage} style={{width: 342,height: 97,flexShrink: 0,}} />
       </View>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.buttonContainer}>

        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
      </View>
      <View style={styles.footerContainer}>
      <View style={styles.homeContainer}>
      <Pressable onPress={handleClassifyImage}> 
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
    backgroundColor: '#FFF7CC',
    alignItems: 'center',
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
    paddingTop: 28,
    paddingLeft:10,
    paddingRight:10,
    width: 359.458,
    height: 347.029,
    flexShrink: 0,
    borderRadius: 2,
    alignItems: 'center',

  },
  homeContainer: {
overflow: 'visible',
    paddingVertical: 10,
    alignItems: 'center',
    height: 125,

  },
  buttonContainer: {
    flex: 1 / 3,
    alignItems: 'center',
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
  logoContainer: {
    paddingTop: 20,
  }
});