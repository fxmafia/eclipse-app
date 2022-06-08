import React from 'react';
import {
  Text, GradientBlock, SmallTile,
} from 'components';
import {
  ScrollView, StyleSheet, View, TouchableOpacity,
} from 'react-native';
import { getNProducts } from 'mocks/products';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import Colors from 'themes/colors';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: scale(14),
    paddingHorizontal: scale(14),
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: scale(10),
  },
  flash: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  products: {
    paddingVertical: scale(14),
  },
});

const FlashSale = ({ navigation }) => (
  <GradientBlock>
    <View style={styles.header}>
      <View style={styles.flash}>
        <Icon name="zap" size={scale(20)} color={Colors.white} style={styles.icon} />
        <Text weight="medium" font="h2" color="white">Flash Babe</Text>
      </View>
      <TouchableOpacity>
        <Text color="white">View all</Text>
      </TouchableOpacity>
    </View>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.products}
    >
      {getNProducts(8).map((product, index) => (
        <SmallTile
          key={product.id}
          style={StyleSheet.flatten([
            { marginRight: scale(7) },
            index === 0 && { marginLeft: scale(14) },
            index === 7 && { marginRight: scale(14) },
          ])}
          {...product}
          label={`From ${product.price}`}
          onPress={() => navigation.navigate('Category', { title: `From ${product.price}` })}
        />
      ))}
    </ScrollView>
  </GradientBlock>
);

FlashSale.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default FlashSale;
