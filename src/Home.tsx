import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from './components/Header';
import { white, red } from './config/color';
import { SIZE } from './config/size';
import { List } from './components/List';
import { INavigation } from './types';
import { trackScreenView } from './utils/analyticsUtils';

type Props = INavigation;

class Home extends React.Component<Props> {
  static navigationOptions = {
    title: 'Home',
  };

  public componentDidMount() {
    trackScreenView('HomeScreen');
  }

  public render() {
    const list = [
      {
        id: '001',
        name: 'book',
        handlePress: () => {
          this.props.navigation.navigate('Book');
        },
      },
      {
        id: '002',
        name: 'cards',
        handlePress: () => {
          this.props.navigation.navigate('Cards');
        },
      },
    ];

    const chartList = [
      {
        id: '011',
        name: 'chartKitCharts',
        handlePress: () => {
          this.props.navigation.navigate('ChartKitCharts');
        },
      },
      {
        id: '012',
        name: 'svgCharts',
        handlePress: () => {
          this.props.navigation.navigate('SvgCharts');
        },
      },
    ];

    const otherList = [
      {
        id: '101',
        name: 'uploadImage',
        handlePress: () => {
          this.props.navigation.navigate('UploadImage');
        },
      },
    ];

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header title="Game List" />
        </View>
        <View style={styles.content}>
          <List data={list} />
        </View>
        <View style={styles.header}>
          <Header title="Chart List" />
        </View>
        <View style={styles.content}>
          <List data={chartList} />
        </View>
        <View style={styles.header}>
          <Header title="Other List" />
        </View>
        <View style={styles.content}>
          <List data={otherList} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: SIZE.MAX_HEIGHT,
  },
  header: {
    height: '10%',
    backgroundColor: red,
    borderWidth: 1,
    borderColor: white,
    borderRadius: 5,
    paddingLeft: 20,
  },
  content: {
    marginTop: 10,
    paddingLeft: 20,
  },
});

export default Home;
