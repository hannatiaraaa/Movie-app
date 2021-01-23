import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import { Rating, AirbnbRating } from 'react-native-ratings';

// component
import Roboto from '../../Shared/Components/Roboto';
import {RobotoBold} from '../../Shared/Components/Roboto';
import {RobotoJustify} from '../../Shared/Components/Roboto';
import {RobotoBoldUppercase} from '../../Shared/Components/Roboto';

// global
import {Layouting} from '../../Shared/Global/Style/Layout';
import {Size} from '../../Shared/Global/Config/Size';

// redux
import {connect} from 'react-redux';

// action
import {actionDetails} from '../../Store/Actions/actionDetails';
import {SafeAreaView} from 'react-native-safe-area-context';
import DetailsHeader from './MovieDetailsHeader';

function MovieDetails(props) {
  useEffect(() => {
    props.actionDetails(props.route.params);
  }, []);

  const info = props.details;
  return (
    <SafeAreaView style={Layouting().flex1}>
      <DetailsHeader/>
      {/* poster area */}
      <View style={{height: Size.h45}}>
        <FastImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500${info.poster_path}`,
          }}
          // resizeMode="contain"
          style={{...StyleSheet.absoluteFillObject,
            marginHorizontal: Size.wp13,
            borderBottomLeftRadius: Size.detailRadius,
            borderBottomRightRadius: Size.detailRadius,
            transform: [{scaleX:2}],
            elevation: 30,
          }}
        />
      </View>
      {/*end of poster area */}

      {/* details area */}
      <View style={{marginTop: Size.ms28, paddingHorizontal: Size.wp9}}>
          <View style={{flexDirection: 'row', justifyContent:'center', paddingBottom: Size.h1,}}>
            <RobotoBold
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
            />
          </View>          
          <View style={{flexDirection: 'row', justifyContent:'center', paddingBottom: Size.h1,}}>
            <Roboto
              title={
                info.genres ? info.genres.map((genre) => genre.name).join() : null
              }
              size={Size.ms12}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent:'center', paddingBottom: Size.h1,}}>
            {/* <RobotoBold title={info.vote_average + ' / 10'} size={Size.ms12} /> */}
            {/* <AirbnbRating            
              count={5}
              showRating = {false}
              isDisabled = {true}            
              defaultRating={info.vote_average * (50/100)}
              size={20}        
              fractions = {2}    
            />     */}
            <Rating
              type='custom'
              ratingCount={5}
              startingValue = {info.vote_average * 50/100}
              imageSize={20}
              tintColor = '#F2F2F2'
              ratingTextColor = 'transparent'              
              ratingBackgroundColor = {'silver'}
              readonly = {true}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent:'space-around', paddingBottom: Size.h1,}}>
            {/* <Roboto title={info.popularity} size={Size.ms12} /> */}
            <View style={{alignItems: 'center', width: Size.wp23}}>
              <Roboto title="Year" size={Size.ms12}/>
              <RobotoBold title={info.release_date.substring(0, 4)} size={Size.ms16} />
            </View>            
            <View style={{alignItems: 'center', width: Size.wp23}}>
              <Roboto title="Language" size={Size.ms12} />
              <RobotoBoldUppercase title={info.original_language} size={Size.ms16}/>
            </View> 
            <View style={{alignItems: 'center', width: Size.wp23}}>
              <Roboto title="Length" size={Size.ms12}/>
              <RobotoBold title={info.runtime + " min"} size={Size.ms16} />
            </View>             
          </View>   
          <View>
            <RobotoJustify title={info.overview} size={Size.ms12}/>
          </View>          
      </View>
      {/*end of details area */}
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
