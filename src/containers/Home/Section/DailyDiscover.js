import React from 'react';
import { ProductList } from 'components';
import PropTypes from 'prop-types';

const DailyDiscover = ({ navigation }) => (
  <ProductList
    navigation={navigation}
    title="Daily Discover"
  />
);

DailyDiscover.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DailyDiscover;
