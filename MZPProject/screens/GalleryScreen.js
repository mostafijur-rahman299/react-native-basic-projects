import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';

import styles from '../components/ImageList/styles';
import Images from '../components/ImageList/images';
import ImageItem from '../components/ImageItem/index'


function GalleryScreen(props) {
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={Images}
                renderItem={({item}) => <ImageItem car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
}

export default GalleryScreen;