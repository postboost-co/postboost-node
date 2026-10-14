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
| **Version** | v1.17.1 |

## Quick start

```typescript
import { PostsApi, Configuration } from 'postboost';

const api = new PostsApi(new Configuration({ accessToken: process.env.POSTBOOST_API_TOKEN }));

const posts = await api.listPosts('YOUR_WORKSPACE_UUID');
posts.forEach(post => console.log(post.uuid));
```

---

## API Endpoints

All API endpoints are available as methods on the API classes:

| Class | Method | HTTP request |
|-------|--------|-------------|
| `AccountsApi` | `listAccounts` | GET /{workspaceUuid}/accounts |
| `AccountsApi` | `getAccount` | GET /{workspaceUuid}/accounts/{accountUuid} |
| `MediaApi` | `listMedia` | GET /{workspaceUuid}/media |
| `MediaApi` | `uploadMedia` | POST /{workspaceUuid}/media |
| `MediaApi` | `getMedia` | GET /{workspaceUuid}/media/{mediaUuid} |
| `MediaApi` | `updateMedia` | PUT /{workspaceUuid}/media/{mediaUuid} |
| `MediaApi` | `deleteMedia` | DELETE /{workspaceUuid}/media/{mediaUuid} |
| `TagsApi` | `listTags` | GET /{workspaceUuid}/tags |
| `TagsApi` | `createTag` | POST /{workspaceUuid}/tags |
| `TagsApi` | `getTag` | GET /{workspaceUuid}/tags/{tagUuid} |
| `TagsApi` | `updateTag` | PUT /{workspaceUuid}/tags/{tagUuid} |
| `TagsApi` | `deleteTag` | DELETE /{workspaceUuid}/tags/{tagUuid} |
| `PostsApi` | `listPosts` | GET /{workspaceUuid}/posts |
| `PostsApi` | `createPost` | POST /{workspaceUuid}/posts |
| `PostsApi` | `getPost` | GET /{workspaceUuid}/posts/{postUuid} |
| `PostsApi` | `updatePost` | PUT /{workspaceUuid}/posts/{postUuid} |
| `PostsApi` | `deletePost` | DELETE /{workspaceUuid}/posts/{postUuid} |
| `PostsApi` | `schedulePost` | POST /{workspaceUuid}/posts/schedule/{postUuid} |
| `WorkspacesApi` | `listWorkspaces` | GET /panel/workspaces |
| `WorkspacesApi` | `createWorkspace` | POST /panel/workspaces |
| `UsersApi` | `listUsers` | GET /panel/users |
| `UsersApi` | `createUser` | POST /panel/users |

See the [full API reference](https://postboost.co/docs/api) for all endpoints with parameters and response schemas.

---

## Links

- Docs and quick start: https://postboost.co/docs/quickstart
- API reference: https://postboost.co/docs/api
- MCP server for AI agents: https://postboost.co/docs/mcp
- All PostBoost open-source projects: https://github.com/postboost-co
- Awesome PostBoost: https://github.com/postboost-co/awesome-postboost

## Authentication

Create an API token in PostBoost under **Settings → Access Tokens** and pass it as a Bearer token. Never commit tokens; read them from an environment variable such as `POSTBOOST_API_TOKEN`.

## Contributing

This TypeScript/Node.js SDK is generated from the [PostBoost OpenAPI spec](https://postboost.co/docs/api). Bugs and feature requests: open an issue in [postboost-node](https://github.com/postboost-co/postboost-node/issues). Generated code is overwritten on every release, so fixes usually land in the spec or the generator templates; see [CONTRIBUTING.md](CONTRIBUTING.md).

Security issues: see [SECURITY.md](SECURITY.md). Questions: hi@postboost.co.

## License

MIT, see [LICENSE](LICENSE).

---

## Links

- Docs and quick start: https://postboost.co/docs/quickstart
- API reference: https://postboost.co/docs/api
- MCP server for AI agents: https://postboost.co/docs/mcp
- All PostBoost open-source projects: https://github.com/postboost-co
- Awesome PostBoost: https://github.com/postboost-co/awesome-postboost

## Authentication

Create an API token in PostBoost under **Settings → Access Tokens** and pass it as a Bearer token. Never commit tokens; read them from an environment variable such as `POSTBOOST_API_TOKEN`.

## Contributing

This TypeScript/Node.js SDK is generated from the [PostBoost OpenAPI spec](https://postboost.co/docs/api). Bugs and feature requests: open an issue in [postboost-node](https://github.com/postboost-co/postboost-node/issues). Generated code is overwritten on every release, so fixes usually land in the spec or the generator templates; see [CONTRIBUTING.md](CONTRIBUTING.md).

Security issues: see [SECURITY.md](SECURITY.md). Questions: hi@postboost.co.

## License

MIT, see [LICENSE](LICENSE).
