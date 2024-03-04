import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import config from '@/app/amplifyconfiguration.json';

export const { runWithAmplifyServerContext } = createServerRunner({
  config
});