import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import news_data from './news_data.json';
import news_banner from './news_banner_data.json';
import NewsCard from './componets/newscard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 50}}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsVerticalScrollIndicator={false}>
            {news_banner.map(banerNews => (
              <Image
                style={styles.bannerImage}
                source={{uri: banerNews.imageUrl}}
                key={banerNews.id}></Image>
            ))}
          </ScrollView>
        )}
        data={news_data}
        renderItem={({item}) => <NewsCard news={item} />}></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#e2e2e2e2'},
  bannerImage: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 5,
  },
});
export default App;
