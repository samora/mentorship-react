import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { incrementAction } from '../store/modules/counter';

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
    count: PropTypes.number.isRequired,
    incrementer: PropTypes.func.isRequired
  }

  _increment = () => this.incrementer()

  render() {
    const { count, incrementer } = this.props;
    return (
      <View style={styles.container}>
        <Text>{count}</Text>
        <Button title="Increment" onPress={incrementer}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  incrementer: incrementAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
