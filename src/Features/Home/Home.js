import React, {useEffect} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';

// header
import HeaderHome from './Header';

// component
import TrendingItem from '../../Shared/Components/TrendingItem';
import NowPlayingItem from '../../Shared/Components/NowPlayingItem';
import Roboto from '../../Shared/Components/Roboto';

// global
import {Layouting} from '../../Shared/Global/Style/Layout';
import {Size} from '../../Shared/Global/Config/Size';
import {Color} from '../../Shared/Global/Config/Color';

// redux
import {connect} from 'react-redux';

// actions
import {actionTrending} from '../../Store/Actions/actionTrending';
import {actionNowPlaying} from '../../Store/Actions/actionNowPlaying';

function Home(props) {
  useEffect(() => {
    props.actionNowPlaying();
    props.actionTrending();
  }, []);

  const screenDetailPage = (id) => {
    props.navigation.navigate('MovieDetails', id);
  };

  return (
    <SafeAreaView style={[Layouting().flex1, Size.wp92]}>
      <HeaderHome />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={props.trending}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TrendingItem
              movie={item}
              onPress={() => screenDetailPage(item.id)}
              opacity={1}
            />
          );
        }}
      />

      <View
        style={[
          Layouting().centerAlign,
          {marginTop: Size.ms28, marginBottom: Size.ms12},
        ]}>
        <Roboto
          title="NOW PLAYING"
          color={Color.red}
          size={Size.ms28}
          type="Black"
        />
      </View>

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={props.nowPlaying}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <NowPlayingItem
              movie={item}
              onPress={() => screenDetailPage(item.id)}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => {
  return {
    trending: state.TrendingReducer.trendingMovies,
    nowPlaying: state.NowPlayingReducer.nowPlayingMovies,
  };
};

const mapDispatchToProps = {
  actionTrending,
  actionNowPlaying,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
