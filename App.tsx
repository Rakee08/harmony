import {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import {RootNavigator} from './src/navigation/RootNavigator';

function App() {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);

  return <RootNavigator />;
}


export default App;