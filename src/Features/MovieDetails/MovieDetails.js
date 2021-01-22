import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

// component
import Roboto from '../../Shared/Components/Roboto';

// global
import {Layouting} from '../../Shared/Global/Style/Layout';
import {Size} from '../../Shared/Global/Config/Size';

// redux
import {connect} from 'react-redux';

// action
import {actionDetails} from '../../Store/Actions/actionDetails';
import {SafeAreaView} from 'react-native-safe-area-context';

function MovieDetails(props) {
  useEffect(() => {
    props.actionDetails(props.route.params);
  }, []);

  const info = props.details;

  return (
    <SafeAreaView style={Layouting().flex1}>
      <View style={{height: 200}}>
        <FastImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500${info.poster_path}`,
          }}
          resizeMode="contain"
          style={{...StyleSheet.absoluteFillObject}}
        />
      </View>
      <Roboto
        title={
          info.title !== undefined
            ? info.title
            : info.name !== undefined
            ? info.name
            : info.original_title !== undefined
            ? info.original_title
            : info.original_name
        }
        size={Size.ms12}
      />
      <Roboto
        title={
          info.genres ? info.genres.map((genre) => genre.name).join() : null
        }
        size={Size.ms12}
      />
      <Roboto title={info.vote_average + ' / 10'} size={Size.ms12} />
      <Roboto title={info.popularity} size={Size.ms12} />
      <Roboto title={info.runtime} size={Size.ms12} />
      <Roboto title={info.release_date} size={Size.ms12} />
      <Roboto title={info.original_language} size={Size.ms12} />
      <Roboto title={info.overview} size={Size.ms12} />
    </SafeAreaView>
  );
}
const mapStateToProps = (state) => {
  return {
    details: state.DetailsReducer.itemDetails,
  };
};

const mapDispatchToProps = {
  actionDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
