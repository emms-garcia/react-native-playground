import React from 'react';
import { Image, Linking, Text, View } from 'react-native';

import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

const styles = {
  headerContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  imageStyle: {
    flex: 1,
    height: 300,
    width: null,
  },
  thumbnailContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
};

const AlbumDetail = ({ album }) => {
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            source={{ uri: album.thumbnail_image }}
            style={styles.thumbnailStyle}
          />
        </View>
        <View style={styles.headerContainerStyle}>
          <Text style={styles.headerTextStyle}>{ album.title }</Text>
          <Text>{ album.artist }</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          source={{ uri: album.image }}
          style={styles.imageStyle}
        />
      </CardSection>

      <CardSection>
        <Button
          onPress={() => Linking.openURL(album.url)}
          text={'Buy Now'}
        />
      </CardSection>
    </Card>
  );
};

AlbumDetail.propTypes = {
  album: React.PropTypes.object.isRequired,
};

export default AlbumDetail;
