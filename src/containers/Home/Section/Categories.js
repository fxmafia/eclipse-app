import React from 'react';
import {
  TouchableOpacity, Image, View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { getScreenWidth } from 'utils/size';
import { scale, verticalScale } from 'react-native-size-matters';
import { Text } from 'components';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    paddingVertical: verticalScale(10),
  },
  button: {
    width: getScreenWidth() / 5,
    aspectRatio: 1 / 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: scale(60),
    height: scale(60),
    flex: 1,
  },
});

const Categories = ({ categories, navigation }) => (
  <View style={styles.container}>
    {categories.map((category) => (
      <TouchableOpacity
        key={category.id}
        onPress={() => navigation.navigate('Category', { title: category.name })}
      >
        <View style={styles.button}>
          <Image
            source={category.image}
            resizeMode="contain"
            style={styles.image}
          />
          <Text
            color="gray75"
            numberOfLines={1}
          >
            {category.name}
          </Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default Categories;
