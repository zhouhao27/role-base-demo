import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { HeaderButton } from '../../components/HeaderButton';

const DrawerLayout = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Drawer>
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerTitle: 'Home',
          drawerLabel: 'Home',
          drawerIcon: ({ size, color }) => <MaterialIcons name="home" size={size} color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
    </Drawer>
  </GestureHandlerRootView>
);

export default DrawerLayout;
