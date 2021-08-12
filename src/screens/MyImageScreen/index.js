import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GridImageView from 'react-native-grid-image-viewer';
import Stories from '../../components/Stories';
import styles from './styles';

const MyImagecreen = () => {
  // const [search, setSearch] = useState("");

  return (
    <View style={styles.background}>
      <Text style={styles.headline_text}>My Image Collection </Text>
      <Text style={styles.explore_text}>Click on an image to view in full screen mode</Text>
      <View>
          <Stories></Stories>
      </View>
      {/* Basic Usage */}
      
      
      <GridImageView data={
         ['https://file.mk.co.kr/meet/neds/2019/04/image_readtop_2019_214039_15546948663701822.jpg',
          'https://img.newspim.com/news/2020/06/29/2006290908499910.jpg',
          'https://www.marketnews.co.kr/news/photo/202102/60468_88867_4854.jpg',
          'http://file3.instiz.net/data/cached_img/upload/2019/07/31/14/311006a1b78423ecf1fc1e70bfd68530.jpg',
          'https://stylecaster.com/wp-content/uploads/2021/04/Rose-Gone-Music-Video.png',
          'https://image.xportsnews.com/contents/images/upload/article/2021/0701/1625106309568738.jpg',
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5247%2F2021%2F06%2F26%2F0000020961_001_20210626202407381.jpg&type=sc960_832',
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5308%2F2021%2F05%2F07%2F0000070986_003_20210507143404467.jpg&type=sc960_832',
          'https://image.newsis.com/2021/06/26/NISI20210626_0017603938_web.jpg?rnd=20210626205218',
          'https://file.mk.co.kr/meet/neds/2019/04/image_readtop_2019_214039_15546948663701822.jpg',
          'https://img.newspim.com/news/2020/06/29/2006290908499910.jpg',
          'https://www.marketnews.co.kr/news/photo/202102/60468_88867_4854.jpg',
          'http://file3.instiz.net/data/cached_img/upload/2019/07/31/14/311006a1b78423ecf1fc1e70bfd68530.jpg',
          'https://stylecaster.com/wp-content/uploads/2021/04/Rose-Gone-Music-Video.png',
          'https://image.xportsnews.com/contents/images/upload/article/2021/0701/1625106309568738.jpg',
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5247%2F2021%2F06%2F26%2F0000020961_001_20210626202407381.jpg&type=sc960_832',
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5308%2F2021%2F05%2F07%2F0000070986_003_20210507143404467.jpg&type=sc960_832',
          'https://image.newsis.com/2021/06/26/NISI20210626_0017603938_web.jpg?rnd=20210626205218',
          ]}/>
    </View>
  )
}

export default MyImagecreen;
