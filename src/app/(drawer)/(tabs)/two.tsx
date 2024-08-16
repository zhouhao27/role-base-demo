import { Stack } from 'expo-router';
import { useState } from 'react';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  const [selected, setSelected] = useState('');
  const day1 = {
    dateString: '2024-08-15',
    day: 15,
    month: 8,
    timestamp: 1723682429000,
    year: 2024,
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Calendar View' }} />
      <Container>
        {/* <ScreenContent path="app/(drawer)/(tabs)/two.tsx" title="Tab Two" /> */}
        <Calendar
          onDayPress={day => {
            console.log('selected day', day);
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: { selected: true, marked: true, selectedColor: 'green' },
            '2024-05-16': { selected: true, marked: true, selectedColor: 'blue' },
            '2024-05-17': { marked: true },
            '2024-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
            '2024-05-19': { disabled: true, disableTouchEvent: true },
          }}
        />
      </Container>
    </>
  );
}
