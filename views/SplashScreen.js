import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#091a39',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#C6C6C6',
    fontSize: 22
  },  
  linkBlock: {
    marginTop: 30
  },  
  link: {
    color: '#b8cce4',
    fontSize: 18,
    textDecorationLine: 'underline'
  }
});

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  nextPage= () => {
    this.props.navigation.navigate('Drawer');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Splash Screen!</Text>
        <TouchableOpacity onPress={() => this.nextPage()} style={styles.linkBlock}>
          <Text style={styles.link}>Go to Home Screen</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default SplashScreen;


