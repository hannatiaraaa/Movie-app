import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
// redux
import {connect} from 'react-redux';

// action
import {actionDetails} from '../../Store/Actions/actionDetails';

function MovieDetails(props) {
  useEffect(() => {
    props.actionDetails(props.route.params);
  }, []);

  return (
    <View>
      <Text>{props.details.original_title}</Text>
    </View>
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
