import React, { Component } from 'react';
import {
    Image,
    TouchableOpacity
} from 'react-native';
const logoImage = require('../assets/images/eco-logo.png');

class Logo extends Component {
  goHome = () => {
      this.props.navigation.navigate('Products');
  }
  render() {
    return (
      <TouchableOpacity onPress={this.goHome}>
          <Image source={logoImage} style={{width:25, height:25,resizeMode:'center',marginLeft:10,}}/>
      </TouchableOpacity>
    );
  }
}
export default Logo;