export * from './aIApi';
import { AIApi } from './aIApi';
export * from './accountGroupsApi';
import { AccountGroupsApi } from './accountGroupsApi';
export * from './accountsApi';
import { AccountsApi } from './accountsApi';
export * from './activityApi';
import { ActivityApi } from './activityApi';
export * from './agentsApi';
import { AgentsApi } from './agentsApi';
export * from './analyticsApi';
import { AnalyticsApi } from './analyticsApi';
export * from './competitorsApi';
import { CompetitorsApi } from './competitorsApi';
export * from './hashtagGroupsApi';
import { HashtagGroupsApi } from './hashtagGroupsApi';
export * from './inboxApi';
import { InboxApi } from './inboxApi';
export * from './mediaApi';
import { MediaApi } from './mediaApi';
export * from './mentionsApi';
import { MentionsApi } from './mentionsApi';
export * from './postingScheduleApi';
import { PostingScheduleApi } from './postingScheduleApi';
export * from './postsApi';
import { PostsApi } from './postsApi';
export * from './receiptsApi';
import { ReceiptsApi } from './receiptsApi';
export * from './subscriptionsApi';
import { SubscriptionsApi } from './subscriptionsApi';
export * from './tagsApi';
import { TagsApi } from './tagsApi';
export * from './templatesApi';
import { TemplatesApi } from './templatesApi';
export * from './usersApi';
import { UsersApi } from './usersApi';
export * from './webhooksApi';
import { WebhooksApi } from './webhooksApi';
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

export const APIS = [AIApi, AccountGroupsApi, AccountsApi, ActivityApi, AgentsApi, AnalyticsApi, CompetitorsApi, HashtagGroupsApi, InboxApi, MediaApi, MentionsApi, PostingScheduleApi, PostsApi, ReceiptsApi, SubscriptionsApi, TagsApi, TemplatesApi, UsersApi, WebhooksApi, WorkspacesApi];
