export * from './aIApi';
import { AIApi } from './aIApi';
export * from './accountsApi';
import { AccountsApi } from './accountsApi';
export * from './analyticsApi';
import { AnalyticsApi } from './analyticsApi';
export * from './mediaApi';
import { MediaApi } from './mediaApi';
export * from './mentionsApi';
import { MentionsApi } from './mentionsApi';
export * from './postsApi';
import { PostsApi } from './postsApi';
export * from './receiptsApi';
import { ReceiptsApi } from './receiptsApi';
export * from './subscriptionsApi';
import { SubscriptionsApi } from './subscriptionsApi';
export * from './tagsApi';
import { TagsApi } from './tagsApi';
export * from './usersApi';
import { UsersApi } from './usersApi';
export * from './workspacesApi';
import { WorkspacesApi } from './workspacesApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AIApi, AccountsApi, AnalyticsApi, MediaApi, MentionsApi, PostsApi, ReceiptsApi, SubscriptionsApi, TagsApi, UsersApi, WorkspacesApi];
