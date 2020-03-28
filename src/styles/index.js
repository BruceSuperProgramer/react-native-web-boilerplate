import {StyleSheet} from 'react-native';
import colors from './colors';
import theme, {fonts} from './theme';

const borderRadius = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-around',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
  },
  header: {
    height: 40,
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    shadowColor: '#aaa',
    elevation: 1,
  },
  card: {
    flexDirection: 'column',
    alignItems: 'stretch',
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: borderRadius,
    shadowOpacity: 1.0,
    shadowColor: '#aaa',
    elevation: 1,
    borderRadius: borderRadius,
    backgroundColor: colors.white,
    width: '100%',
  },
  layer: {
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    elevation: 2,
    zIndex: 1,
    position: 'relative',
    top: -5,
    height: 60,
  },
  usersList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
    flex: 1,
    position: 'absolute',
    right: 0,
    bottom: 10,
  },
  userAvatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  image: {
    width: '100%',
    height: 100,
  },
  input: {
    width: 300,
    height: 40,
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#50E3C2',
  },
  text: {
    paddingVertical: 15,
  },
  selected: {
    shadowColor: '#50E3C2',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 7,
  },
  buttonGrouper: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonWrapper: {
    margin: 20,
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    borderStyle: 'solid',
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 50,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    shadowColor: '#aaa',
    elevation: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 30,
    textAlign: 'center',
    color: colors.white,
    justifyContent: 'center',
  },
  buttonDisabled: {
    elevation: 0,
    margin: 20,
    backgroundColor: colors.black,
    shadowOpacity: 0,
  },
});

export {colors, styles, fonts, theme};
