import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

import { Container } from '~/components/Container';
import { Role, useAuth } from '~/context/auth_context';
import WithRole from '~/utils/with_role';

export default function Home() {
  const { authState } = useAuth();

  return (
    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <Container>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>{authState?.role}</Text>
          <WithRole role={Role.ADMIN}>
            <Text>Admin</Text>
          </WithRole>
          <WithRole role={Role.USER}>
            <Text>User</Text>
          </WithRole>
        </View>
      </Container>
    </>
  );
}
