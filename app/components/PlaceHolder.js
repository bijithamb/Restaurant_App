import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';
class PlaceHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  LoadingCard = () => {
    return (
      <Placeholder Animation={Fade}>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View>
            <PlaceholderMedia style={{height: 100, width: 100}} size={90} />
          </View>
          <View style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
            <PlaceholderLine width={80} />
            <PlaceholderLine width={40} />
            <PlaceholderLine width={60} />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View>
            <PlaceholderMedia style={{height: 100, width: 100}} size={90} />
          </View>
          <View style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
            <PlaceholderLine width={80} />
            <PlaceholderLine width={40} />
            <PlaceholderLine width={60} />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View>
            <PlaceholderMedia style={{height: 100, width: 100}} size={90} />
          </View>
          <View style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
            <PlaceholderLine width={80} />
            <PlaceholderLine width={40} />
            <PlaceholderLine width={60} />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View>
            <PlaceholderMedia style={{height: 100, width: 100}} size={90} />
          </View>
          <View style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
            <PlaceholderLine width={80} />
            <PlaceholderLine width={40} />
            <PlaceholderLine width={60} />
          </View>
        </View>
      </Placeholder>
    );
  };
  render() {
    return <View style={{paddingHorizontal: 10}}>{this.LoadingCard()}</View>;
  }
}

export default PlaceHolder;
