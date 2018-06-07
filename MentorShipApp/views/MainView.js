import React from 'react';
import { StyleSheet, Image, View, Button } from 'react-native';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getRandomDogAction } from '../store/modules/dogs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class MainView extends React.Component {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    getDog: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { getDog } = this.props;
    getDog();
  }

  render() {
    const { imageUrl, getDog } = this.props;
    return (
      <View style={styles.container}>
        <Image source={{uri: imageUrl}} style={{width: 400, height: 400}}/>
        <Button title="Get Image" onPress={getDog}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    imageUrl: state.dogs.dogImage
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getDog: getRandomDogAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
