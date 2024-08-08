import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { HeaderButton } from '~/components/HeaderButton';
import { Role, useAuth } from '~/context/auth_context';

const DrawerLayout = () => {
  const { authState } = useAuth();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="(tabs)"
          options={{
            headerTitle: 'Home',
            drawerLabel: 'Home',
            drawerIcon: ({ size, color }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
            headerRight: () => (
              <Link href="/modal" asChild>
                <HeaderButton />
              </Link>
            ),
          }}
        />
        <Drawer.Screen
          name="admin"
          redirect={authState?.role !== Role.ADMIN}
          options={{
            headerTitle: 'Admin',
            drawerLabel: 'Admin',
            drawerIcon: ({ size, color }) => (
              <MaterialIcons name="supervised-user-circle" size={size} color={color} />
            ),
            headerRight: () => (
              <Link href="/modal" asChild>
                <HeaderButton />
              </Link>
            ),
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            headerTitle: 'Profile',
            drawerLabel: 'Profile',
            drawerIcon: ({ size, color }) => (
              <MaterialIcons name="verified-user" size={size} color={color} />
            ),
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
};

export default DrawerLayout;
