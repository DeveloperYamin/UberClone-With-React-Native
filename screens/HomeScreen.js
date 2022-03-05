import { Image, SafeAreaView, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
     return (
          <SafeAreaView style={tw`bg-white h-full`} >
               <View>
                    <Image
                         style={{ width: 100, height: 100, resizeMode: "contain" }}
                         source={{ uri: 'https://links.papareact.com/gzs' }}
                    />
               </View>
          </SafeAreaView>
     )
};

export default HomeScreen;