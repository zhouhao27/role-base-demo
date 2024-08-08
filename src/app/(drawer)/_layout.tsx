import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { DrawerItem } from '@react-navigation/drawer';
import { Link, useRouter } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { HeaderButton } from '~/components/HeaderButton';
import { Role, useAuth } from '~/context/auth_context';

const DrawerLayout = () => {
  const { authState, onLogout } = useAuth();
  const router = useRouter();

  const logout = async () => {
    onLogout!();
    router.push('/');
  };

  const CustomDrawerComponent = () => {
    return (
      <View style={{ flex: 1, paddingTop: 50 }}>
        <View style={{ backgroundColor: '#ceceff', height: 120 }} />
        <DrawerItem
          label="Home"
          icon={({ size, color }) => <Ionicons name="home" size={size} color={color} />}
          onPress={() => router.push('/(drawer)/(tabs)')}
        />
        <DrawerItem
          label="Profile"
          icon={({ size, color }) => <Ionicons name="person" size={size} color={color} />}
          onPress={() => router.push('/(drawer)/profile')}
        />
        {authState?.role === Role.ADMIN && (
          <DrawerItem
            label="Admin"
            icon={({ size, color }) => <Ionicons name="lock-open" size={size} color={color} />}
            onPress={() => router.push('/(drawer)/admin')}
          />
        )}
        <DrawerItem
          label="Logout"
          onPress={logout}
          icon={({ size, color }) => <Ionicons name="log-out" size={size} color={color} />}
        />
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={() => <CustomDrawerComponent />} />
    </GestureHandlerRootView>
  );

  /*
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
*/
};

export default DrawerLayout;
