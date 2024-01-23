import React from 'react';
import { View, Image, TouchableHighlight, Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import ImageList from './ImageList.js';

export default function ImageViewerComponent({ props }) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const image = ImageList.GetImage(props.ImageName);
  const modalZoomableImage = [
    { url: '', props: { source: image } }
  ];

  return (
    <>
      <View>
        <Modal visible={modalVisible} transparent={true} animationType="fade" //slide
          onRequestClose={() => { setModalVisible(false); }}>
          <ImageViewer imageUrls={modalZoomableImage} renderIndicator={() => { }} onCancel={() => { setModalVisible(false); }} //onCancel required for enableSwipeDown
            enableSwipeDown={true} />

        </Modal>

        <TouchableHighlight onPress={() => { setModalVisible(true); }}>
          <Image style={props.ImageStyle} source={image} />
        </TouchableHighlight>
      </View>
    </>
  );
}

