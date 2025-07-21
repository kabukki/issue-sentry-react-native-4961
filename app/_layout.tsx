
import * as Sentry from '@sentry/react-native';
import { Text, View } from 'react-native';

Sentry.init({
    dsn: '...',
    sendDefaultPii: true,
});

export default Sentry.wrap(function RootLayout() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Hello world</Text>
        </View>
    );
});
