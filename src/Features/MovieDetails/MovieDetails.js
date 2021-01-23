import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import {AirbnbRating} from 'react-native-elements';

// component
import Roboto from '../../Shared/Components/Roboto';

// global
import {Card} from '../../Shared/Global/Style/Card';
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
  const date = new Date(info.release_date);
  const year = date.getFullYear().toString();

  const RenderPoster = () => {
    return (
      <View style={[styles.imageContainer, Card().large]}>
        <FastImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500${info.poster_path}`,
          }}
          resizeMode="contain"
          style={[
            {
              ...StyleSheet.absoluteFillObject,
            },
            styles.image,
            Card().shadow,
          ]}
        />
      </View>
    );
  };

  const RenderTitle = () => {
    return (
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
        size={Size.ms20}
        type="Bold"
      />
    );
  };

  const RenderGenres = () => {
    return (
      <View style={Layouting().flexRow}>
        <Roboto
          title={
            info.genres
              ? info.genres.map((genre) => genre.name).join(', ')
              : null
          }
          size={Size.ms12}
        />
      </View>
    );
  };

  const RenderRating = (params) => {
    return (
      <View style={[Layouting().flexRow, Layouting().spaceAround]}>
        <Roboto
          title={info.vote_average + ' / 10'}
          size={Size.ms14}
          type="Bold"
          style={{marginHorizontal: Size.wp4}}
        />
        <AirbnbRating
          count={5}
          showRating={false}
          isDisabled={true}
          defaultRating={info.vote_average * (50 / 100)}
          size={Size.ms20}
          fractions={1}
        />
      </View>
    );
  };

  const RenderNumberLanguage = (params) => {
    return (
      <View
        style={[
          Layouting().flexRow,
          Layouting().spaceBetween,
          {width: widthPercentageToDP(72)},
        ]}>
        <View style={Layouting().centered}>
          <Roboto title="Year" size={Size.ms12} />
          <Roboto title={year} size={Size.ms16} type="Bold" />
        </View>
        <View style={Layouting().centered}>
          <Roboto title="Popularity" size={Size.ms12} />
          <Roboto
            title={Math.round(info.popularity)}
            size={Size.ms16}
            type="Bold"
          />
        </View>
        <View style={Layouting().centered}>
          <Roboto title="Language" size={Size.ms12} />
          <Roboto
            title={info.original_language}
            size={Size.ms16}
            type="Bold"
            style={{textTransform: 'uppercase'}}
          />
        </View>
        <View style={Layouting().centered}>
          <Roboto title="Length" size={Size.ms12} />
          <Roboto title={info.runtime + ' min'} size={Size.ms16} type="Bold" />
        </View>
      </View>
    );
  };

  const RenderOverview = () => {
    return (
      <View>
        <Roboto
          title={info.overview}
          size={Size.ms12}
          style={{textAlign: 'justify'}}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={Layouting().flex1}>
      <ScrollView>
        <RenderPoster />

        <View style={[styles.detailsContainer, Layouting().centered]}>
          <View
            style={[
              Layouting().centerAlign,
              Layouting().spaceEvenly,
              {height: heightPercentageToDP(20)},
            ]}>
            <RenderTitle />
            <RenderGenres />
            <RenderRating />
            <RenderNumberLanguage />
          </View>

          <RenderOverview />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    zIndex: 10,
  },
  imageContainer: {
    flex: 9,
  },
  image: {
    marginHorizontal: Size.wp13,
    borderBottomLeftRadius: Size.ms200,
    borderBottomRightRadius: Size.ms200,
    transform: [{scaleX: 2}],
    position: 'absolute',
  },
  detailsContainer: {
    flex: 7,
    marginTop: Size.ms28,
    margin: Size.wp4,
    padding: Size.ms16,
  },
});

const mapStateToProps = (state) => {
  return {
    details: state.DetailsReducer.itemDetails,
  };
};

const mapDispatchToProps = {
  actionDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
