'use client';
import config from '@/app/amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';
import { CookieStorage  } from 'aws-amplify/utils';
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';

Amplify.configure(config, {
  ssr: true
});

cognitoUserPoolsTokenProvider.setKeyValueStorage(new CookieStorage());

export default function RootLayoutThatConfiguresAmplifyOnTheClient({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}