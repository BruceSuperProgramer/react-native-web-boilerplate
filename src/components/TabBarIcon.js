import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import {colors} from '../styles';

const styles = StyleSheet.create({
  tabSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    marginTop: 10,
    borderRadius: 20,
    width: 40,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class TabBarIcon extends React.Component {
  render() {
    const {name, focused} = this.props;

    return (
      <View style={styles.tabSection}>
        <View style={styles.tabIcon}>
          <Icon
            style={{color: focused ? colors.purple : '#c1c1c1'}}
            name={name}
          />
        </View>
      </View>
    );
  }
}

export default TabBarIcon;
