import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';
import { sayHello } from './functions/say-hello/resource';

defineBackend({
  auth,
  data,
  sayHello
});
