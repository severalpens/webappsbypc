import type { Schema } from "../../data/resource";
import { env } from '$amplify/env/say-hello'; // the import is '$amplify/env/<function-name>'

export const handler: Schema["sayHello"]["functionHandler"] = async (event) => {
      const { name } = event.arguments
  const request = new Request(env.API_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${env.API_KEY}`
    }
  })
  return `Hello, ${env.NAME}!`;
};