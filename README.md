# PostBoost TypeScript / Node.js SDK

Official TypeScript/Node.js client for the [PostBoost API](https://postboost.co/docs/api).

## Install

```bash
npm install postboost
```

| | |
|---|---|
| **npm** | [npmjs.com/package/postboost](https://www.npmjs.com/package/postboost) |
| **GitHub** | [postboost-co/postboost-node](https://github.com/postboost-co/postboost-node) |
| **Docs** | [postboost.co/docs/api](https://postboost.co/docs/api) |
| **Version** | v1.0.0 |

## Quick start

```typescript
import { PostsApi, Configuration } from 'postboost';

const api = new PostsApi(new Configuration({ accessToken: process.env.POSTBOOST_API_TOKEN }));

const posts = await api.listPosts('YOUR_WORKSPACE_UUID');
posts.forEach(post => console.log(post.uuid));
```

## License

MIT
