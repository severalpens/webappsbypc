import { defineFunction, secret } from '@aws-amplify/backend';


export const sayHello = defineFunction({
  // optionally specify a name for the Function (defaults to directory name)
  name: 'say-hello',
  // optionally specify a path to your handler (defaults to "./handler.ts")
  entry: './handler.ts',
  environment: {
    NAME: "World",
    API_ENDPOINT: process.env.API_ENDPOINT || "https://api.example.com",
    API_KEY: secret('MY_API_KEY') // this assumes you created a secret named "MY_API_KEY"
  }
});

