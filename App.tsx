import React, {JSX, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import VisuallyHidden from './components/VisuallyHidden';

function App(): JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#ffffff');
  const [randomBackground1, setRandomBackground1] = useState('#2ecc72');
  const [randomBackground2, setRandomBackground2] = useState('#F3B431');
  const [randomBackground3, setRandomBackground3] = useState('#FF3031');
  const [randomBackground4, setRandomBackground4] = useState('#8B78E6');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let randomColor = '#';
    let randomColor1 = '#';
    let randomColor2 = '#';
    let randomColor3 = '#';
    let randomColor4 = '#';
    for (let i = 0; i < 6; i++) {
      randomColor += hexRange[Math.floor(Math.random() * 16)];
      randomColor1 += hexRange[Math.floor(Math.random() * 16)];
      randomColor2 += hexRange[Math.floor(Math.random() * 16)];
      randomColor3 += hexRange[Math.floor(Math.random() * 16)];
      randomColor4 += hexRange[Math.floor(Math.random() * 16)];
    }

    setRandomBackground(randomColor);
    setRandomBackground1(randomColor1);
    setRandomBackground2(randomColor2);
    setRandomBackground3(randomColor3);
    setRandomBackground4(randomColor4);
  };

  return (
    <>
      <StatusBar backgroundColor={'#000000'} />
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <View style={styles.shapeContainer}>
          <View style={[styles.square, {backgroundColor: randomBackground1}]}>
            <VisuallyHidden />
          </View>
          <View style={[styles.circle, {backgroundColor: randomBackground2}]}>
            <VisuallyHidden />
          </View>
        </View>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.shapeContainer}>
          <View style={[styles.circle, {backgroundColor: randomBackground3}]}>
            <VisuallyHidden />
          </View>
          <View style={[styles.square, {backgroundColor: randomBackground4}]}>
            <VisuallyHidden />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#0A79DF',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  shapeContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
  },
  circle: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 50,
  },
  square: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'green',
  },
});

export default App;
