import React from 'react';
import { View } from 'react-native';

import Header from './divisions/Header';
import Body from './divisions/Body';
import Footer from './divisions/Footer';

const Post = ({ post, wuFrom, currentIndex, focusedIndex }) => (
  <View>
    <Header
      userId={post.user.id} 
      imageUri={post.user.imageUri} 
      name={post.user.name} 
    />
    <Body 
      post={post}
      focusedIndex={focusedIndex}
      currentIndex={currentIndex}
    />
    <Footer
      likesCount={post.likesCount}
      caption={post.caption}
      postedAt={post.postedAt}
    />
  </View>
)

export default Post;
