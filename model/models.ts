import localVarRequest from 'request';

export * from './aICredits';
export * from './aIUsage';
export * from './aIUsageText';
export * from './account';
export * from './accountAnalytics';
export * from './accountAnalyticsInitialSync';
export * from './accountConnectionHealth';
export * from './accountConnectionHealthReconnectReason';
export * from './accountErrorsInner';
export * from './accountErrorsInnerOneOf';
export * from './accountGroup';
export * from './accountGroupInput';
export * from './accountHealth';
export * from './accountHealthDailyCap';
export * from './accountSchedule';
export * from './addCompetitor202Response';
export * from './addCompetitor409Response';
export * from './addGenericSubscriptionRequest';
export * from './addPostToQueueRequest';
export * from './agentPageMeta';
export * from './agentProposal';
export * from './agentProposalDecision';
export * from './agentRun';
export * from './analyticsPeriod';
export * from './analyticsSummary';
export * from './analyticsSummaryData';
export * from './apiActivity';
export * from './apiActivityOutcome';
export * from './apiKey';
export * from './apiKeyAbility';
export * from './apiKeyInput';
export * from './approveAgentProposal200Response';
export * from './approveAgentProposal409Response';
export * from './approveInboxReplyDraft403Response';
export * from './approvePostRequest';
export * from './bestPostingTimes';
export * from './bestPostingTimesTimesInner';
export * from './blogToSocial200Response';
export * from './blogToSocial429Response';
export * from './blogToSocialCaption';
export * from './blogToSocialInput';
export * from './blogToSocialMedia';
export * from './blogToSocialResponse';
export * from './brandVoice';
export * from './brandVoiceInput';
export * from './brandVoiceMeta';
export * from './cancelSubscription422Response';
export * from './cancelSubscription422ResponseErrors';
export * from './cancelSubscriptionRequest';
export * from './changeSubscriptionPlanRequest';
export * from './channelAccount';
export * from './checkoutSubscription200Response';
export * from './checkoutSubscriptionRequest';
export * from './codedError';
export * from './competitor';
export * from './competitorDetail';
export * from './competitorInput';
export * from './competitorMedia';
export * from './competitorSnapshot';
export * from './completeChunkedUploadRequest';
export * from './connectChannelInput';
export * from './connectLink';
export * from './createAccountGroup201Response';
export * from './createAgent201Response';
export * from './createApiKey201Response';
export * from './createApiKey201ResponseData';
export * from './createConnectLinkRequest';
export * from './createHashtagGroup201Response';
export * from './createInboxReplyDraft201Response';
export * from './createMediaFolderRequest';
export * from './createMention201Response';
export * from './createPost201Response';
export * from './createRecyclingRule201Response';
export * from './createReportExport201Response';
export * from './createResellerClient201Response';
export * from './createRssFeed201Response';
export * from './createTemplate201Response';
export * from './createWebhookSubscription201Response';
export * from './createWebhookSubscription201ResponseData';
export * from './deleteAgent200Response';
export * from './deleteMediaBulkRequest';
export * from './deleteMediaBulkRequestItemsInner';
export * from './deleteMediaFolderRequest';
export * from './deleteMode';
export * from './deletePostRequest';
export * from './deletePostsBulkRequest';
export * from './deleteReceiptsBulkRequest';
export * from './deleteResult';
export * from './deleteUser400Response';
export * from './deleteUsersBulkRequest';
export * from './deleteWorkspacesBulkRequest';
export * from './freeToolBuildUtmUrlRequest';
export * from './freeToolBuildUtmUrlResponse';
export * from './freeToolCalculateAspectRatioRequest';
export * from './freeToolCalculateAspectRatioResponse';
export * from './freeToolCalculateAspectRatioResponseMatchesInner';
export * from './freeToolCalculateAspectRatioResponseRounding';
export * from './freeToolCalculateCropRequest';
export * from './freeToolCalculateCropResponse';
export * from './freeToolCalculateCropResponseCrop';
export * from './freeToolCalculateCropResponseImage';
export * from './freeToolCalculateCropResponseOutput';
export * from './freeToolCalculateEngagementRateRequest';
export * from './freeToolCalculateEngagementRateResponse';
export * from './freeToolCalculateSocialRoiRequest';
export * from './freeToolCalculateSocialRoiRequestCosts';
export * from './freeToolCalculateSocialRoiResponse';
export * from './freeToolCalculateSocialRoiResponseCostBreakdownInner';
export * from './freeToolCalculateXApiCostRequest';
export * from './freeToolCalculateXApiCostResponse';
export * from './freeToolCalculateXApiCostResponseLineItemsInner';
export * from './freeToolCheckLinkPreviewRequest';
export * from './freeToolCheckLinkPreviewResponse';
export * from './freeToolCheckLinkPreviewResponseImage';
export * from './freeToolCheckLinkPreviewResponsePreviewsValue';
export * from './freeToolCheckLinkPreviewResponseRedirectsInner';
export * from './freeToolCheckLinkPreviewResponseTags';
export * from './freeToolCheckPostRequest';
export * from './freeToolCheckPostRequestMedia';
export * from './freeToolCheckPostResponse';
export * from './freeToolCheckPostResponseNetworksInner';
export * from './freeToolCheckPostResponseNetworksInnerErrorsInner';
export * from './freeToolCheckReadabilityRequest';
export * from './freeToolCheckReadabilityResponse';
export * from './freeToolCheckReadabilityResponseLongSentencesInner';
export * from './freeToolCheckYoutubeThumbnailRequest';
export * from './freeToolCheckYoutubeThumbnailResponse';
export * from './freeToolCheckYoutubeThumbnailResponseChecksInner';
export * from './freeToolCleanTextRequest';
export * from './freeToolCleanTextResponse';
export * from './freeToolCleanTextResponseChangesInner';
export * from './freeToolCleanTextResponseFlagsInner';
export * from './freeToolCountCharactersRequest';
export * from './freeToolCountCharactersResponse';
export * from './freeToolCountCharactersResponseNetworksInner';
export * from './freeToolError';
export * from './freeToolFormatInstagramCaptionRequest';
export * from './freeToolFormatInstagramCaptionResponse';
export * from './freeToolFormatLinkedInPostRequest';
export * from './freeToolFormatLinkedInPostResponse';
export * from './freeToolGenerateCaptionRequest';
export * from './freeToolGenerateCaptionResponse';
export * from './freeToolGenerateFancyTextRequest';
export * from './freeToolGenerateFancyTextResponse';
export * from './freeToolGenerateFancyTextResponseStylesInner';
export * from './freeToolGenerateHashtagsRequest';
export * from './freeToolGenerateHashtagsResponse';
export * from './freeToolGenerateHooksRequest';
export * from './freeToolGenerateHooksResponse';
export * from './freeToolGenerateHooksResponseHooksInner';
export * from './freeToolGenerateQrCodeRequest';
export * from './freeToolGenerateQrCodeRequestUtm';
export * from './freeToolGenerateQrCodeResponse';
export * from './freeToolGenerateSocialPostsFromBlogRequest';
export * from './freeToolGenerateSocialPostsFromBlogResponse';
export * from './freeToolGenerateSocialPostsFromBlogResponsePostsInner';
export * from './freeToolGenerateSocialPostsFromBlogResponseSource';
export * from './freeToolGenerateSocialPostsFromBlogResponseWarningsInner';
export * from './freeToolGetBestTimesToPostResponse';
export * from './freeToolGetBestTimesToPostResponseNetworksInner';
export * from './freeToolGetHookTemplatesResponse';
export * from './freeToolGetHookTemplatesResponseHooksInner';
export * from './freeToolGetImageSizesResponse';
export * from './freeToolGetImageSizesResponseSizesInner';
export * from './freeToolGetImageSizesResponseSourcesInner';
export * from './freeToolGetVideoSpecsResponse';
export * from './freeToolGetVideoSpecsResponseSpecsInner';
export * from './freeToolGetVideoSpecsResponseSpecsInnerLimits';
export * from './freeToolList';
export * from './freeToolListItem';
export * from './freeToolPlanContentCalendarRequest';
export * from './freeToolPlanContentCalendarRequestPostsPerWeek';
export * from './freeToolPlanContentCalendarRequestTimes';
export * from './freeToolPlanContentCalendarResponse';
export * from './freeToolPlanContentCalendarResponseSlotsInner';
export * from './freeToolPreviewPostRequest';
export * from './freeToolPreviewPostResponse';
export * from './freeToolPreviewPostResponseNetworksInner';
export * from './freeToolSearchEmojiRequest';
export * from './freeToolSearchEmojiResponse';
export * from './freeToolSearchEmojiResponseResultsInner';
export * from './freeToolSplitThreadRequest';
export * from './freeToolSplitThreadResponse';
export * from './freeToolSplitThreadResponsePostsInner';
export * from './getAccountHealth200Response';
export * from './getBrandVoice200Response';
export * from './getCompetitor200Response';
export * from './getInboxConversation200Response';
export * from './getPostingSchedule200Response';
export * from './getRemoteUploadStatus200Response';
export * from './getReportBranding200Response';
export * from './getRepurposeRun200Response';
export * from './guardrailError';
export * from './hashtagGroup';
export * from './hashtagGroupInput';
export * from './imageAltText200Response';
export * from './imageAltTextInput';
export * from './imageAltTextResponse';
export * from './imageCreditBalance';
export * from './imageEditInput';
export * from './imageGenerate200Response';
export * from './imageGenerate429Response';
export * from './imageGenerateInput';
export * from './imageGenerationResponse';
export * from './imagePrompt200Response';
export * from './imagePrompt429Response';
export * from './imagePromptInput';
export * from './imagePromptResponse';
export * from './imageVariations200Response';
export * from './imageVariationsInput';
export * from './imageVariationsResponse';
export * from './inboxAuthor';
export * from './inboxConversation';
export * from './inboxConversationAccount';
export * from './inboxConversationUpdate';
export * from './inboxMessage';
export * from './inboxMessageAuthor';
export * from './inboxReplyDraft';
export * from './inboxReplyDraftApprove';
export * from './inboxReplyDraftEdit';
export * from './inboxReplyDraftInput';
export * from './initiateChunkedUpload201Response';
export * from './initiateChunkedUploadRequest';
export * from './initiateRemoteUpload201Response';
export * from './initiateRemoteUpload201ResponseOneOf';
export * from './initiateRemoteUploadRequest';
export * from './learnBrandVoiceInput';
export * from './learnBrandVoiceResponse';
export * from './learnBrandVoiceResponseMeta';
export * from './listAccountGroups200Response';
export * from './listAccounts200Response';
export * from './listAgentProposals200Response';
export * from './listAgentRuns200Response';
export * from './listAgents200Response';
export * from './listApiActivity200Response';
export * from './listApiKeys200Response';
export * from './listCompetitors200Response';
export * from './listHashtagGroups200Response';
export * from './listInboxConversations200Response';
export * from './listInboxReplyDrafts200Response';
export * from './listMedia200Response';
export * from './listMediaFolders200Response';
export * from './listMentions200Response';
export * from './listMyWorkspaces200Response';
export * from './listPosts200Response';
export * from './listReceipts200Response';
export * from './listRecyclingRules200Response';
export * from './listRecyclingRuns200Response';
export * from './listReportExports200Response';
export * from './listResellerClients200Response';
export * from './listRssFeeds200Response';
export * from './listTags200Response';
export * from './listTemplates200Response';
export * from './listUsers200Response';
export * from './listWebhookSubscriptions200Response';
export * from './listWorkspaces200Response';
export * from './media';
export * from './mediaBase64Input';
export * from './mediaFolder';
export * from './mediaFolderInput';
export * from './mediaFolderRef';
export * from './mention';
export * from './mentionIdentity';
export * from './mentionIdentityInput';
export * from './mentionInput';
export * from './messageOnly';
export * from './paginationMeta';
export * from './paginationMetaLinks';
export * from './paginationMetaMeta';
export * from './pollRssFeed200Response';
export * from './post';
export * from './postAnalytics';
export * from './postContent';
export * from './postInput';
export * from './postOptionsInstagram';
export * from './postOptionsTikTok';
export * from './postOptionsYoutube';
export * from './postStatus';
export * from './postVersion';
export * from './postVersionOptions';
export * from './postWarning';
export * from './postWarnings';
export * from './postingSchedule';
export * from './postingScheduleDay';
export * from './postingScheduleDayTimesInner';
export * from './postingScheduleInput';
export * from './postingTimeSlot';
export * from './postingTimes';
export * from './postingTimesBestInner';
export * from './postingTimesDayIntervalsInnerInner';
export * from './postingTimesDaysInner';
export * from './preflightResult';
export * from './publicWorkspace';
export * from './publicWorkspacePivot';
export * from './publishProgress';
export * from './queueSlots';
export * from './receipt';
export * from './receiptInput';
export * from './receiptUpdateInput';
export * from './recommendedPostingTimes';
export * from './reconnectLink';
export * from './recyclingRule';
export * from './recyclingRuleInput';
export * from './recyclingRuleSettings';
export * from './recyclingRuleUpdate';
export * from './recyclingRun';
export * from './removeGenericSubscription422Response';
export * from './removeUserFromWorkspaceRequest';
export * from './reportBranding';
export * from './reportBrandingInput';
export * from './reportExport';
export * from './reportExportInput';
export * from './repurposeContent200Response';
export * from './repurposeContent202Response';
export * from './repurposeContent500Response';
export * from './repurposeInput';
export * from './repurposeInputTheme';
export * from './repurposeResult';
export * from './repurposeResultMedia';
export * from './repurposeResultSource';
export * from './repurposeRun';
export * from './repurposeRunAccepted';
export * from './repurposeSlide';
export * from './resellerClient';
export * from './resellerClientInput';
export * from './resellerClientUsage';
export * from './retryPostAccountResult';
export * from './rssFeed';
export * from './rssFeedInput';
export * from './rssFeedUpdate';
export * from './runAgent202Response';
export * from './schedulePostRequest';
export * from './scheduleResult';
export * from './subscription';
export * from './subscriptionInput';
export * from './subscriptionStatus';
export * from './subscriptionUpdateInput';
export * from './tag';
export * from './tagInput';
export * from './template';
export * from './templateContentItem';
export * from './templateInput';
export * from './templateInputContentInner';
export * from './updateMediaRequest';
export * from './updatePost200Response';
export * from './uploadChunk201Response';
export * from './user';
export * from './userInput';
export * from './userUpdateInput';
export * from './webhookEnvelope';
export * from './webhookEventName';
export * from './webhookEventPayload';
export * from './webhookSubscription';
export * from './webhookSubscriptionInput';
export * from './workspace';
export * from './workspaceAgent';
export * from './workspaceAgentInput';
export * from './workspaceAgentSettings';
export * from './workspaceAgentUpdate';
export * from './workspaceInput';
export * from './workspaceUserInput';
export * from './xUsage';
export * from './xUsageCounter';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AICredits } from './aICredits';
import { AIUsage } from './aIUsage';
import { AIUsageText } from './aIUsageText';
import { Account } from './account';
import { AccountAnalytics } from './accountAnalytics';
import { AccountAnalyticsInitialSync } from './accountAnalyticsInitialSync';
import { AccountConnectionHealth } from './accountConnectionHealth';
import { AccountConnectionHealthReconnectReason } from './accountConnectionHealthReconnectReason';
import { AccountErrorsInner } from './accountErrorsInner';
import { AccountErrorsInnerOneOf } from './accountErrorsInnerOneOf';
import { AccountGroup } from './accountGroup';
import { AccountGroupInput } from './accountGroupInput';
import { AccountHealth } from './accountHealth';
import { AccountHealthDailyCap } from './accountHealthDailyCap';
import { AccountSchedule } from './accountSchedule';
import { AddCompetitor202Response } from './addCompetitor202Response';
import { AddCompetitor409Response } from './addCompetitor409Response';
import { AddGenericSubscriptionRequest } from './addGenericSubscriptionRequest';
import { AddPostToQueueRequest } from './addPostToQueueRequest';
import { AgentPageMeta } from './agentPageMeta';
import { AgentProposal } from './agentProposal';
import { AgentProposalDecision } from './agentProposalDecision';
import { AgentRun } from './agentRun';
import { AnalyticsPeriod } from './analyticsPeriod';
import { AnalyticsSummary } from './analyticsSummary';
import { AnalyticsSummaryData } from './analyticsSummaryData';
import { ApiActivity } from './apiActivity';
import { ApiActivityOutcome } from './apiActivityOutcome';
import { ApiKey } from './apiKey';
import { ApiKeyAbility } from './apiKeyAbility';
import { ApiKeyInput } from './apiKeyInput';
import { ApproveAgentProposal200Response } from './approveAgentProposal200Response';
import { ApproveAgentProposal409Response } from './approveAgentProposal409Response';
import { ApproveInboxReplyDraft403Response } from './approveInboxReplyDraft403Response';
import { ApprovePostRequest } from './approvePostRequest';
import { BestPostingTimes } from './bestPostingTimes';
import { BestPostingTimesTimesInner } from './bestPostingTimesTimesInner';
import { BlogToSocial200Response } from './blogToSocial200Response';
import { BlogToSocial429Response } from './blogToSocial429Response';
import { BlogToSocialCaption } from './blogToSocialCaption';
import { BlogToSocialInput } from './blogToSocialInput';
import { BlogToSocialMedia } from './blogToSocialMedia';
import { BlogToSocialResponse } from './blogToSocialResponse';
import { BrandVoice } from './brandVoice';
import { BrandVoiceInput } from './brandVoiceInput';
import { BrandVoiceMeta } from './brandVoiceMeta';
import { CancelSubscription422Response } from './cancelSubscription422Response';
import { CancelSubscription422ResponseErrors } from './cancelSubscription422ResponseErrors';
import { CancelSubscriptionRequest } from './cancelSubscriptionRequest';
import { ChangeSubscriptionPlanRequest } from './changeSubscriptionPlanRequest';
import { ChannelAccount } from './channelAccount';
import { CheckoutSubscription200Response } from './checkoutSubscription200Response';
import { CheckoutSubscriptionRequest } from './checkoutSubscriptionRequest';
import { CodedError } from './codedError';
import { Competitor } from './competitor';
import { CompetitorDetail } from './competitorDetail';
import { CompetitorInput } from './competitorInput';
import { CompetitorMedia } from './competitorMedia';
import { CompetitorSnapshot } from './competitorSnapshot';
import { CompleteChunkedUploadRequest } from './completeChunkedUploadRequest';
import { ConnectChannelInput } from './connectChannelInput';
import { ConnectLink } from './connectLink';
import { CreateAccountGroup201Response } from './createAccountGroup201Response';
import { CreateAgent201Response } from './createAgent201Response';
import { CreateApiKey201Response } from './createApiKey201Response';
import { CreateApiKey201ResponseData } from './createApiKey201ResponseData';
import { CreateConnectLinkRequest } from './createConnectLinkRequest';
import { CreateHashtagGroup201Response } from './createHashtagGroup201Response';
import { CreateInboxReplyDraft201Response } from './createInboxReplyDraft201Response';
import { CreateMediaFolderRequest } from './createMediaFolderRequest';
import { CreateMention201Response } from './createMention201Response';
import { CreatePost201Response } from './createPost201Response';
import { CreateRecyclingRule201Response } from './createRecyclingRule201Response';
import { CreateReportExport201Response } from './createReportExport201Response';
import { CreateResellerClient201Response } from './createResellerClient201Response';
import { CreateRssFeed201Response } from './createRssFeed201Response';
import { CreateTemplate201Response } from './createTemplate201Response';
import { CreateWebhookSubscription201Response } from './createWebhookSubscription201Response';
import { CreateWebhookSubscription201ResponseData } from './createWebhookSubscription201ResponseData';
import { DeleteAgent200Response } from './deleteAgent200Response';
import { DeleteMediaBulkRequest } from './deleteMediaBulkRequest';
import { DeleteMediaBulkRequestItemsInner } from './deleteMediaBulkRequestItemsInner';
import { DeleteMediaFolderRequest } from './deleteMediaFolderRequest';
import { DeleteMode } from './deleteMode';
import { DeletePostRequest } from './deletePostRequest';
import { DeletePostsBulkRequest } from './deletePostsBulkRequest';
import { DeleteReceiptsBulkRequest } from './deleteReceiptsBulkRequest';
import { DeleteResult } from './deleteResult';
import { DeleteUser400Response } from './deleteUser400Response';
import { DeleteUsersBulkRequest } from './deleteUsersBulkRequest';
import { DeleteWorkspacesBulkRequest } from './deleteWorkspacesBulkRequest';
import { FreeToolBuildUtmUrlRequest } from './freeToolBuildUtmUrlRequest';
import { FreeToolBuildUtmUrlResponse } from './freeToolBuildUtmUrlResponse';
import { FreeToolCalculateAspectRatioRequest } from './freeToolCalculateAspectRatioRequest';
import { FreeToolCalculateAspectRatioResponse } from './freeToolCalculateAspectRatioResponse';
import { FreeToolCalculateAspectRatioResponseMatchesInner } from './freeToolCalculateAspectRatioResponseMatchesInner';
import { FreeToolCalculateAspectRatioResponseRounding } from './freeToolCalculateAspectRatioResponseRounding';
import { FreeToolCalculateCropRequest } from './freeToolCalculateCropRequest';
import { FreeToolCalculateCropResponse } from './freeToolCalculateCropResponse';
import { FreeToolCalculateCropResponseCrop } from './freeToolCalculateCropResponseCrop';
import { FreeToolCalculateCropResponseImage } from './freeToolCalculateCropResponseImage';
import { FreeToolCalculateCropResponseOutput } from './freeToolCalculateCropResponseOutput';
import { FreeToolCalculateEngagementRateRequest } from './freeToolCalculateEngagementRateRequest';
import { FreeToolCalculateEngagementRateResponse } from './freeToolCalculateEngagementRateResponse';
import { FreeToolCalculateSocialRoiRequest } from './freeToolCalculateSocialRoiRequest';
import { FreeToolCalculateSocialRoiRequestCosts } from './freeToolCalculateSocialRoiRequestCosts';
import { FreeToolCalculateSocialRoiResponse } from './freeToolCalculateSocialRoiResponse';
import { FreeToolCalculateSocialRoiResponseCostBreakdownInner } from './freeToolCalculateSocialRoiResponseCostBreakdownInner';
import { FreeToolCalculateXApiCostRequest } from './freeToolCalculateXApiCostRequest';
import { FreeToolCalculateXApiCostResponse } from './freeToolCalculateXApiCostResponse';
import { FreeToolCalculateXApiCostResponseLineItemsInner } from './freeToolCalculateXApiCostResponseLineItemsInner';
import { FreeToolCheckLinkPreviewRequest } from './freeToolCheckLinkPreviewRequest';
import { FreeToolCheckLinkPreviewResponse } from './freeToolCheckLinkPreviewResponse';
import { FreeToolCheckLinkPreviewResponseImage } from './freeToolCheckLinkPreviewResponseImage';
import { FreeToolCheckLinkPreviewResponsePreviewsValue } from './freeToolCheckLinkPreviewResponsePreviewsValue';
import { FreeToolCheckLinkPreviewResponseRedirectsInner } from './freeToolCheckLinkPreviewResponseRedirectsInner';
import { FreeToolCheckLinkPreviewResponseTags } from './freeToolCheckLinkPreviewResponseTags';
import { FreeToolCheckPostRequest } from './freeToolCheckPostRequest';
import { FreeToolCheckPostRequestMedia } from './freeToolCheckPostRequestMedia';
import { FreeToolCheckPostResponse } from './freeToolCheckPostResponse';
import { FreeToolCheckPostResponseNetworksInner } from './freeToolCheckPostResponseNetworksInner';
import { FreeToolCheckPostResponseNetworksInnerErrorsInner } from './freeToolCheckPostResponseNetworksInnerErrorsInner';
import { FreeToolCheckReadabilityRequest } from './freeToolCheckReadabilityRequest';
import { FreeToolCheckReadabilityResponse } from './freeToolCheckReadabilityResponse';
import { FreeToolCheckReadabilityResponseLongSentencesInner } from './freeToolCheckReadabilityResponseLongSentencesInner';
import { FreeToolCheckYoutubeThumbnailRequest } from './freeToolCheckYoutubeThumbnailRequest';
import { FreeToolCheckYoutubeThumbnailResponse } from './freeToolCheckYoutubeThumbnailResponse';
import { FreeToolCheckYoutubeThumbnailResponseChecksInner } from './freeToolCheckYoutubeThumbnailResponseChecksInner';
import { FreeToolCleanTextRequest } from './freeToolCleanTextRequest';
import { FreeToolCleanTextResponse } from './freeToolCleanTextResponse';
import { FreeToolCleanTextResponseChangesInner } from './freeToolCleanTextResponseChangesInner';
import { FreeToolCleanTextResponseFlagsInner } from './freeToolCleanTextResponseFlagsInner';
import { FreeToolCountCharactersRequest } from './freeToolCountCharactersRequest';
import { FreeToolCountCharactersResponse } from './freeToolCountCharactersResponse';
import { FreeToolCountCharactersResponseNetworksInner } from './freeToolCountCharactersResponseNetworksInner';
import { FreeToolError } from './freeToolError';
import { FreeToolFormatInstagramCaptionRequest } from './freeToolFormatInstagramCaptionRequest';
import { FreeToolFormatInstagramCaptionResponse } from './freeToolFormatInstagramCaptionResponse';
import { FreeToolFormatLinkedInPostRequest } from './freeToolFormatLinkedInPostRequest';
import { FreeToolFormatLinkedInPostResponse } from './freeToolFormatLinkedInPostResponse';
import { FreeToolGenerateCaptionRequest } from './freeToolGenerateCaptionRequest';
import { FreeToolGenerateCaptionResponse } from './freeToolGenerateCaptionResponse';
import { FreeToolGenerateFancyTextRequest } from './freeToolGenerateFancyTextRequest';
import { FreeToolGenerateFancyTextResponse } from './freeToolGenerateFancyTextResponse';
import { FreeToolGenerateFancyTextResponseStylesInner } from './freeToolGenerateFancyTextResponseStylesInner';
import { FreeToolGenerateHashtagsRequest } from './freeToolGenerateHashtagsRequest';
import { FreeToolGenerateHashtagsResponse } from './freeToolGenerateHashtagsResponse';
import { FreeToolGenerateHooksRequest } from './freeToolGenerateHooksRequest';
import { FreeToolGenerateHooksResponse } from './freeToolGenerateHooksResponse';
import { FreeToolGenerateHooksResponseHooksInner } from './freeToolGenerateHooksResponseHooksInner';
import { FreeToolGenerateQrCodeRequest } from './freeToolGenerateQrCodeRequest';
import { FreeToolGenerateQrCodeRequestUtm } from './freeToolGenerateQrCodeRequestUtm';
import { FreeToolGenerateQrCodeResponse } from './freeToolGenerateQrCodeResponse';
import { FreeToolGenerateSocialPostsFromBlogRequest } from './freeToolGenerateSocialPostsFromBlogRequest';
import { FreeToolGenerateSocialPostsFromBlogResponse } from './freeToolGenerateSocialPostsFromBlogResponse';
import { FreeToolGenerateSocialPostsFromBlogResponsePostsInner } from './freeToolGenerateSocialPostsFromBlogResponsePostsInner';
import { FreeToolGenerateSocialPostsFromBlogResponseSource } from './freeToolGenerateSocialPostsFromBlogResponseSource';
import { FreeToolGenerateSocialPostsFromBlogResponseWarningsInner } from './freeToolGenerateSocialPostsFromBlogResponseWarningsInner';
import { FreeToolGetBestTimesToPostResponse } from './freeToolGetBestTimesToPostResponse';
import { FreeToolGetBestTimesToPostResponseNetworksInner } from './freeToolGetBestTimesToPostResponseNetworksInner';
import { FreeToolGetHookTemplatesResponse } from './freeToolGetHookTemplatesResponse';
import { FreeToolGetHookTemplatesResponseHooksInner } from './freeToolGetHookTemplatesResponseHooksInner';
import { FreeToolGetImageSizesResponse } from './freeToolGetImageSizesResponse';
import { FreeToolGetImageSizesResponseSizesInner } from './freeToolGetImageSizesResponseSizesInner';
import { FreeToolGetImageSizesResponseSourcesInner } from './freeToolGetImageSizesResponseSourcesInner';
import { FreeToolGetVideoSpecsResponse } from './freeToolGetVideoSpecsResponse';
import { FreeToolGetVideoSpecsResponseSpecsInner } from './freeToolGetVideoSpecsResponseSpecsInner';
import { FreeToolGetVideoSpecsResponseSpecsInnerLimits } from './freeToolGetVideoSpecsResponseSpecsInnerLimits';
import { FreeToolList } from './freeToolList';
import { FreeToolListItem } from './freeToolListItem';
import { FreeToolPlanContentCalendarRequest } from './freeToolPlanContentCalendarRequest';
import { FreeToolPlanContentCalendarRequestPostsPerWeek } from './freeToolPlanContentCalendarRequestPostsPerWeek';
import { FreeToolPlanContentCalendarRequestTimes } from './freeToolPlanContentCalendarRequestTimes';
import { FreeToolPlanContentCalendarResponse } from './freeToolPlanContentCalendarResponse';
import { FreeToolPlanContentCalendarResponseSlotsInner } from './freeToolPlanContentCalendarResponseSlotsInner';
import { FreeToolPreviewPostRequest } from './freeToolPreviewPostRequest';
import { FreeToolPreviewPostResponse } from './freeToolPreviewPostResponse';
import { FreeToolPreviewPostResponseNetworksInner } from './freeToolPreviewPostResponseNetworksInner';
import { FreeToolSearchEmojiRequest } from './freeToolSearchEmojiRequest';
import { FreeToolSearchEmojiResponse } from './freeToolSearchEmojiResponse';
import { FreeToolSearchEmojiResponseResultsInner } from './freeToolSearchEmojiResponseResultsInner';
import { FreeToolSplitThreadRequest } from './freeToolSplitThreadRequest';
import { FreeToolSplitThreadResponse } from './freeToolSplitThreadResponse';
import { FreeToolSplitThreadResponsePostsInner } from './freeToolSplitThreadResponsePostsInner';
import { GetAccountHealth200Response } from './getAccountHealth200Response';
import { GetBrandVoice200Response } from './getBrandVoice200Response';
import { GetCompetitor200Response } from './getCompetitor200Response';
import { GetInboxConversation200Response } from './getInboxConversation200Response';
import { GetPostingSchedule200Response } from './getPostingSchedule200Response';
import { GetRemoteUploadStatus200Response } from './getRemoteUploadStatus200Response';
import { GetReportBranding200Response } from './getReportBranding200Response';
import { GetRepurposeRun200Response } from './getRepurposeRun200Response';
import { GuardrailError } from './guardrailError';
import { HashtagGroup } from './hashtagGroup';
import { HashtagGroupInput } from './hashtagGroupInput';
import { ImageAltText200Response } from './imageAltText200Response';
import { ImageAltTextInput } from './imageAltTextInput';
import { ImageAltTextResponse } from './imageAltTextResponse';
import { ImageCreditBalance } from './imageCreditBalance';
import { ImageEditInput } from './imageEditInput';
import { ImageGenerate200Response } from './imageGenerate200Response';
import { ImageGenerate429Response } from './imageGenerate429Response';
import { ImageGenerateInput } from './imageGenerateInput';
import { ImageGenerationResponse } from './imageGenerationResponse';
import { ImagePrompt200Response } from './imagePrompt200Response';
import { ImagePrompt429Response } from './imagePrompt429Response';
import { ImagePromptInput } from './imagePromptInput';
import { ImagePromptResponse } from './imagePromptResponse';
import { ImageVariations200Response } from './imageVariations200Response';
import { ImageVariationsInput } from './imageVariationsInput';
import { ImageVariationsResponse } from './imageVariationsResponse';
import { InboxAuthor } from './inboxAuthor';
import { InboxConversation } from './inboxConversation';
import { InboxConversationAccount } from './inboxConversationAccount';
import { InboxConversationUpdate } from './inboxConversationUpdate';
import { InboxMessage } from './inboxMessage';
import { InboxMessageAuthor } from './inboxMessageAuthor';
import { InboxReplyDraft } from './inboxReplyDraft';
import { InboxReplyDraftApprove } from './inboxReplyDraftApprove';
import { InboxReplyDraftEdit } from './inboxReplyDraftEdit';
import { InboxReplyDraftInput } from './inboxReplyDraftInput';
import { InitiateChunkedUpload201Response } from './initiateChunkedUpload201Response';
import { InitiateChunkedUploadRequest } from './initiateChunkedUploadRequest';
import { InitiateRemoteUpload201Response } from './initiateRemoteUpload201Response';
import { InitiateRemoteUpload201ResponseOneOf } from './initiateRemoteUpload201ResponseOneOf';
import { InitiateRemoteUploadRequest } from './initiateRemoteUploadRequest';
import { LearnBrandVoiceInput } from './learnBrandVoiceInput';
import { LearnBrandVoiceResponse } from './learnBrandVoiceResponse';
import { LearnBrandVoiceResponseMeta } from './learnBrandVoiceResponseMeta';
import { ListAccountGroups200Response } from './listAccountGroups200Response';
import { ListAccounts200Response } from './listAccounts200Response';
import { ListAgentProposals200Response } from './listAgentProposals200Response';
import { ListAgentRuns200Response } from './listAgentRuns200Response';
import { ListAgents200Response } from './listAgents200Response';
import { ListApiActivity200Response } from './listApiActivity200Response';
import { ListApiKeys200Response } from './listApiKeys200Response';
import { ListCompetitors200Response } from './listCompetitors200Response';
import { ListHashtagGroups200Response } from './listHashtagGroups200Response';
import { ListInboxConversations200Response } from './listInboxConversations200Response';
import { ListInboxReplyDrafts200Response } from './listInboxReplyDrafts200Response';
import { ListMedia200Response } from './listMedia200Response';
import { ListMediaFolders200Response } from './listMediaFolders200Response';
import { ListMentions200Response } from './listMentions200Response';
import { ListMyWorkspaces200Response } from './listMyWorkspaces200Response';
import { ListPosts200Response } from './listPosts200Response';
import { ListReceipts200Response } from './listReceipts200Response';
import { ListRecyclingRules200Response } from './listRecyclingRules200Response';
import { ListRecyclingRuns200Response } from './listRecyclingRuns200Response';
import { ListReportExports200Response } from './listReportExports200Response';
import { ListResellerClients200Response } from './listResellerClients200Response';
import { ListRssFeeds200Response } from './listRssFeeds200Response';
import { ListTags200Response } from './listTags200Response';
import { ListTemplates200Response } from './listTemplates200Response';
import { ListUsers200Response } from './listUsers200Response';
import { ListWebhookSubscriptions200Response } from './listWebhookSubscriptions200Response';
import { ListWorkspaces200Response } from './listWorkspaces200Response';
import { Media } from './media';
import { MediaBase64Input } from './mediaBase64Input';
import { MediaFolder } from './mediaFolder';
import { MediaFolderInput } from './mediaFolderInput';
import { MediaFolderRef } from './mediaFolderRef';
import { Mention } from './mention';
import { MentionIdentity } from './mentionIdentity';
import { MentionIdentityInput } from './mentionIdentityInput';
import { MentionInput } from './mentionInput';
import { MessageOnly } from './messageOnly';
import { PaginationMeta } from './paginationMeta';
import { PaginationMetaLinks } from './paginationMetaLinks';
import { PaginationMetaMeta } from './paginationMetaMeta';
import { PollRssFeed200Response } from './pollRssFeed200Response';
import { Post } from './post';
import { PostAnalytics } from './postAnalytics';
import { PostContent } from './postContent';
import { PostInput } from './postInput';
import { PostOptionsInstagram } from './postOptionsInstagram';
import { PostOptionsTikTok } from './postOptionsTikTok';
import { PostOptionsYoutube } from './postOptionsYoutube';
import { PostStatus } from './postStatus';
import { PostVersion } from './postVersion';
import { PostVersionOptions } from './postVersionOptions';
import { PostWarning } from './postWarning';
import { PostWarnings } from './postWarnings';
import { PostingSchedule } from './postingSchedule';
import { PostingScheduleDay } from './postingScheduleDay';
import { PostingScheduleDayTimesInner } from './postingScheduleDayTimesInner';
import { PostingScheduleInput } from './postingScheduleInput';
import { PostingTimeSlot } from './postingTimeSlot';
import { PostingTimes } from './postingTimes';
import { PostingTimesBestInner } from './postingTimesBestInner';
import { PostingTimesDayIntervalsInnerInner } from './postingTimesDayIntervalsInnerInner';
import { PostingTimesDaysInner } from './postingTimesDaysInner';
import { PreflightResult } from './preflightResult';
import { PublicWorkspace } from './publicWorkspace';
import { PublicWorkspacePivot } from './publicWorkspacePivot';
import { PublishProgress } from './publishProgress';
import { QueueSlots } from './queueSlots';
import { Receipt } from './receipt';
import { ReceiptInput } from './receiptInput';
import { ReceiptUpdateInput } from './receiptUpdateInput';
import { RecommendedPostingTimes } from './recommendedPostingTimes';
import { ReconnectLink } from './reconnectLink';
import { RecyclingRule } from './recyclingRule';
import { RecyclingRuleInput } from './recyclingRuleInput';
import { RecyclingRuleSettings } from './recyclingRuleSettings';
import { RecyclingRuleUpdate } from './recyclingRuleUpdate';
import { RecyclingRun } from './recyclingRun';
import { RemoveGenericSubscription422Response } from './removeGenericSubscription422Response';
import { RemoveUserFromWorkspaceRequest } from './removeUserFromWorkspaceRequest';
import { ReportBranding } from './reportBranding';
import { ReportBrandingInput } from './reportBrandingInput';
import { ReportExport } from './reportExport';
import { ReportExportInput } from './reportExportInput';
import { RepurposeContent200Response } from './repurposeContent200Response';
import { RepurposeContent202Response } from './repurposeContent202Response';
import { RepurposeContent500Response } from './repurposeContent500Response';
import { RepurposeInput } from './repurposeInput';
import { RepurposeInputTheme } from './repurposeInputTheme';
import { RepurposeResult } from './repurposeResult';
import { RepurposeResultMedia } from './repurposeResultMedia';
import { RepurposeResultSource } from './repurposeResultSource';
import { RepurposeRun } from './repurposeRun';
import { RepurposeRunAccepted } from './repurposeRunAccepted';
import { RepurposeSlide } from './repurposeSlide';
import { ResellerClient } from './resellerClient';
import { ResellerClientInput } from './resellerClientInput';
import { ResellerClientUsage } from './resellerClientUsage';
import { RetryPostAccountResult } from './retryPostAccountResult';
import { RssFeed } from './rssFeed';
import { RssFeedInput } from './rssFeedInput';
import { RssFeedUpdate } from './rssFeedUpdate';
import { RunAgent202Response } from './runAgent202Response';
import { SchedulePostRequest } from './schedulePostRequest';
import { ScheduleResult } from './scheduleResult';
import { Subscription } from './subscription';
import { SubscriptionInput } from './subscriptionInput';
import { SubscriptionStatus } from './subscriptionStatus';
import { SubscriptionUpdateInput } from './subscriptionUpdateInput';
import { Tag } from './tag';
import { TagInput } from './tagInput';
import { Template } from './template';
import { TemplateContentItem } from './templateContentItem';
import { TemplateInput } from './templateInput';
import { TemplateInputContentInner } from './templateInputContentInner';
import { UpdateMediaRequest } from './updateMediaRequest';
import { UpdatePost200Response } from './updatePost200Response';
import { UploadChunk201Response } from './uploadChunk201Response';
import { User } from './user';
import { UserInput } from './userInput';
import { UserUpdateInput } from './userUpdateInput';
import { WebhookEnvelope } from './webhookEnvelope';
import { WebhookEventName } from './webhookEventName';
import { WebhookEventPayload } from './webhookEventPayload';
import { WebhookSubscription } from './webhookSubscription';
import { WebhookSubscriptionInput } from './webhookSubscriptionInput';
import { Workspace } from './workspace';
import { WorkspaceAgent } from './workspaceAgent';
import { WorkspaceAgentInput } from './workspaceAgentInput';
import { WorkspaceAgentSettings } from './workspaceAgentSettings';
import { WorkspaceAgentUpdate } from './workspaceAgentUpdate';
import { WorkspaceInput } from './workspaceInput';
import { WorkspaceUserInput } from './workspaceUserInput';
import { XUsage } from './xUsage';
import { XUsageCounter } from './xUsageCounter';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "Account.PublishStatusEnum": Account.PublishStatusEnum,
        "AccountConnectionHealth.StatusEnum": AccountConnectionHealth.StatusEnum,
        "AccountConnectionHealth.ExpiryKindEnum": AccountConnectionHealth.ExpiryKindEnum,
        "AddCompetitor202Response.StatusEnum": AddCompetitor202Response.StatusEnum,
        "AgentProposal.KindEnum": AgentProposal.KindEnum,
        "AgentProposal.SeverityEnum": AgentProposal.SeverityEnum,
        "AgentProposal.StatusEnum": AgentProposal.StatusEnum,
        "AgentRun.TriggerEnum": AgentRun.TriggerEnum,
        "AgentRun.StatusEnum": AgentRun.StatusEnum,
        "ApiActivityOutcome": ApiActivityOutcome,
        "ApiKeyAbility": ApiKeyAbility,
        "ApproveInboxReplyDraft403Response.CodeEnum": ApproveInboxReplyDraft403Response.CodeEnum,
        "BlogToSocialInput.PlatformsEnum": BlogToSocialInput.PlatformsEnum,
        "BlogToSocialInput.ToneEnum": BlogToSocialInput.ToneEnum,
        "BlogToSocialInput.ContentLengthEnum": BlogToSocialInput.ContentLengthEnum,
        "BlogToSocialInput.HashtagsEnum": BlogToSocialInput.HashtagsEnum,
        "BlogToSocialInput.CtaEnum": BlogToSocialInput.CtaEnum,
        "BrandVoice.EmojiStyleEnum": BrandVoice.EmojiStyleEnum,
        "BrandVoice.HashtagStrategyEnum": BrandVoice.HashtagStrategyEnum,
        "BrandVoiceInput.EmojiStyleEnum": BrandVoiceInput.EmojiStyleEnum,
        "BrandVoiceInput.HashtagStrategyEnum": BrandVoiceInput.HashtagStrategyEnum,
        "ChangeSubscriptionPlanRequest.CycleEnum": ChangeSubscriptionPlanRequest.CycleEnum,
        "ChannelAccount.ProviderEnum": ChannelAccount.ProviderEnum,
        "CheckoutSubscriptionRequest.CycleEnum": CheckoutSubscriptionRequest.CycleEnum,
        "CreateConnectLinkRequest.ProviderEnum": CreateConnectLinkRequest.ProviderEnum,
        "DeleteMode": DeleteMode,
        "FreeToolCalculateAspectRatioResponse.OrientationEnum": FreeToolCalculateAspectRatioResponse.OrientationEnum,
        "FreeToolCalculateAspectRatioResponseRounding.SideEnum": FreeToolCalculateAspectRatioResponseRounding.SideEnum,
        "FreeToolCalculateCropRequest.FitEnum": FreeToolCalculateCropRequest.FitEnum,
        "FreeToolCalculateEngagementRateRequest.MethodEnum": FreeToolCalculateEngagementRateRequest.MethodEnum,
        "FreeToolCalculateSocialRoiResponseCostBreakdownInner.KeyEnum": FreeToolCalculateSocialRoiResponseCostBreakdownInner.KeyEnum,
        "FreeToolCalculateXApiCostResponseLineItemsInner.KeyEnum": FreeToolCalculateXApiCostResponseLineItemsInner.KeyEnum,
        "FreeToolCheckLinkPreviewResponseImage.SourceEnum": FreeToolCheckLinkPreviewResponseImage.SourceEnum,
        "FreeToolCheckPostRequest.NetworksEnum": FreeToolCheckPostRequest.NetworksEnum,
        "FreeToolCheckPostRequestMedia.TypeEnum": FreeToolCheckPostRequestMedia.TypeEnum,
        "FreeToolCheckYoutubeThumbnailResponseChecksInner.KeyEnum": FreeToolCheckYoutubeThumbnailResponseChecksInner.KeyEnum,
        "FreeToolCheckYoutubeThumbnailResponseChecksInner.StatusEnum": FreeToolCheckYoutubeThumbnailResponseChecksInner.StatusEnum,
        "FreeToolCleanTextRequest.DashesEnum": FreeToolCleanTextRequest.DashesEnum,
        "FreeToolCleanTextResponseChangesInner.TypeEnum": FreeToolCleanTextResponseChangesInner.TypeEnum,
        "FreeToolCountCharactersRequest.NetworkEnum": FreeToolCountCharactersRequest.NetworkEnum,
        "FreeToolFormatInstagramCaptionRequest.SpacerEnum": FreeToolFormatInstagramCaptionRequest.SpacerEnum,
        "FreeToolFormatLinkedInPostRequest.StyleEnum": FreeToolFormatLinkedInPostRequest.StyleEnum,
        "FreeToolFormatLinkedInPostRequest.ListEnum": FreeToolFormatLinkedInPostRequest.ListEnum,
        "FreeToolGenerateCaptionRequest.ToneEnum": FreeToolGenerateCaptionRequest.ToneEnum,
        "FreeToolGenerateCaptionRequest.LengthEnum": FreeToolGenerateCaptionRequest.LengthEnum,
        "FreeToolGenerateCaptionRequest.NetworkEnum": FreeToolGenerateCaptionRequest.NetworkEnum,
        "FreeToolGenerateFancyTextRequest.StyleEnum": FreeToolGenerateFancyTextRequest.StyleEnum,
        "FreeToolGenerateHashtagsRequest.NicheEnum": FreeToolGenerateHashtagsRequest.NicheEnum,
        "FreeToolGenerateHashtagsRequest.NetworkEnum": FreeToolGenerateHashtagsRequest.NetworkEnum,
        "FreeToolGenerateHooksRequest.ToneEnum": FreeToolGenerateHooksRequest.ToneEnum,
        "FreeToolGenerateHooksRequest.NetworkEnum": FreeToolGenerateHooksRequest.NetworkEnum,
        "FreeToolGenerateHooksResponseHooksInner.CategoryEnum": FreeToolGenerateHooksResponseHooksInner.CategoryEnum,
        "FreeToolGenerateQrCodeRequest.ErrorCorrectionEnum": FreeToolGenerateQrCodeRequest.ErrorCorrectionEnum,
        "FreeToolGenerateSocialPostsFromBlogRequest.PlatformsEnum": FreeToolGenerateSocialPostsFromBlogRequest.PlatformsEnum,
        "FreeToolGenerateSocialPostsFromBlogRequest.ToneEnum": FreeToolGenerateSocialPostsFromBlogRequest.ToneEnum,
        "FreeToolGenerateSocialPostsFromBlogRequest.LengthEnum": FreeToolGenerateSocialPostsFromBlogRequest.LengthEnum,
        "FreeToolGenerateSocialPostsFromBlogRequest.HashtagsEnum": FreeToolGenerateSocialPostsFromBlogRequest.HashtagsEnum,
        "FreeToolGenerateSocialPostsFromBlogRequest.CtaEnum": FreeToolGenerateSocialPostsFromBlogRequest.CtaEnum,
        "FreeToolGenerateSocialPostsFromBlogResponsePostsInner.PlatformEnum": FreeToolGenerateSocialPostsFromBlogResponsePostsInner.PlatformEnum,
        "FreeToolGetHookTemplatesResponseHooksInner.CategoryEnum": FreeToolGetHookTemplatesResponseHooksInner.CategoryEnum,
        "FreeToolGetHookTemplatesResponseHooksInner.NetworksEnum": FreeToolGetHookTemplatesResponseHooksInner.NetworksEnum,
        "FreeToolListItem.KindEnum": FreeToolListItem.KindEnum,
        "FreeToolPreviewPostRequest.InstagramRatioEnum": FreeToolPreviewPostRequest.InstagramRatioEnum,
        "FreeToolPreviewPostResponseNetworksInner.KeyEnum": FreeToolPreviewPostResponseNetworksInner.KeyEnum,
        "FreeToolSearchEmojiRequest.CategoryEnum": FreeToolSearchEmojiRequest.CategoryEnum,
        "FreeToolSplitThreadRequest.NetworkEnum": FreeToolSplitThreadRequest.NetworkEnum,
        "GetRemoteUploadStatus200Response.StatusEnum": GetRemoteUploadStatus200Response.StatusEnum,
        "GuardrailError.CodeEnum": GuardrailError.CodeEnum,
        "ImageEditInput.AspectRatioEnum": ImageEditInput.AspectRatioEnum,
        "ImageEditInput.QualityEnum": ImageEditInput.QualityEnum,
        "ImageGenerateInput.TemplateEnum": ImageGenerateInput.TemplateEnum,
        "ImageGenerateInput.AspectRatioEnum": ImageGenerateInput.AspectRatioEnum,
        "ImageGenerateInput.QualityEnum": ImageGenerateInput.QualityEnum,
        "ImagePromptInput.TemplateEnum": ImagePromptInput.TemplateEnum,
        "ImageVariationsInput.AspectRatioEnum": ImageVariationsInput.AspectRatioEnum,
        "ImageVariationsInput.QualityEnum": ImageVariationsInput.QualityEnum,
        "InboxConversation.TypeEnum": InboxConversation.TypeEnum,
        "InboxConversation.StatusEnum": InboxConversation.StatusEnum,
        "InboxConversationUpdate.StatusEnum": InboxConversationUpdate.StatusEnum,
        "InboxMessage.DirectionEnum": InboxMessage.DirectionEnum,
        "InboxMessage.SentimentEnum": InboxMessage.SentimentEnum,
        "InboxMessage.AiLabelEnum": InboxMessage.AiLabelEnum,
        "InboxReplyDraft.StatusEnum": InboxReplyDraft.StatusEnum,
        "InboxReplyDraft.SourceEnum": InboxReplyDraft.SourceEnum,
        "InitiateRemoteUpload201Response.TypeEnum": InitiateRemoteUpload201Response.TypeEnum,
        "Media.TypeEnum": Media.TypeEnum,
        "PostOptionsInstagram.TypeEnum": PostOptionsInstagram.TypeEnum,
        "PostOptionsTikTok.PrivacyLevelEnum": PostOptionsTikTok.PrivacyLevelEnum,
        "PostOptionsYoutube.StatusEnum": PostOptionsYoutube.StatusEnum,
        "PostStatus": PostStatus,
        "PostWarning.CodeEnum": PostWarning.CodeEnum,
        "PostingTimeSlot.ConfidenceEnum": PostingTimeSlot.ConfidenceEnum,
        "PostingTimesDayIntervalsInnerInner.ConfidenceEnum": PostingTimesDayIntervalsInnerInner.ConfidenceEnum,
        "PostingTimesDaysInner.ConfidenceEnum": PostingTimesDaysInner.ConfidenceEnum,
        "PublicWorkspacePivot.RoleEnum": PublicWorkspacePivot.RoleEnum,
        "RecyclingRule.TypeEnum": RecyclingRule.TypeEnum,
        "RecyclingRule.PlacementEnum": RecyclingRule.PlacementEnum,
        "RecyclingRuleInput.PlacementEnum": RecyclingRuleInput.PlacementEnum,
        "RecyclingRuleInput.TypeEnum": RecyclingRuleInput.TypeEnum,
        "RecyclingRuleSettings.PlacementEnum": RecyclingRuleSettings.PlacementEnum,
        "RecyclingRuleUpdate.PlacementEnum": RecyclingRuleUpdate.PlacementEnum,
        "RecyclingRun.StatusEnum": RecyclingRun.StatusEnum,
        "ReportExport.FormatEnum": ReportExport.FormatEnum,
        "ReportExport.DatasetEnum": ReportExport.DatasetEnum,
        "ReportExport.StatusEnum": ReportExport.StatusEnum,
        "ReportExportInput.FormatEnum": ReportExportInput.FormatEnum,
        "ReportExportInput.DatasetEnum": ReportExportInput.DatasetEnum,
        "ReportExportInput.PeriodEnum": ReportExportInput.PeriodEnum,
        "RepurposeInput.SourceTypeEnum": RepurposeInput.SourceTypeEnum,
        "RepurposeInput.ToneEnum": RepurposeInput.ToneEnum,
        "RepurposeInput.ContentLengthEnum": RepurposeInput.ContentLengthEnum,
        "RepurposeInput.HashtagsEnum": RepurposeInput.HashtagsEnum,
        "RepurposeInput.CtaEnum": RepurposeInput.CtaEnum,
        "RepurposeResultSource.TypeEnum": RepurposeResultSource.TypeEnum,
        "RepurposeRun.StatusEnum": RepurposeRun.StatusEnum,
        "RepurposeRunAccepted.StatusEnum": RepurposeRunAccepted.StatusEnum,
        "ResellerClient.StatusEnum": ResellerClient.StatusEnum,
        "RssFeed.ModeEnum": RssFeed.ModeEnum,
        "RssFeedInput.ModeEnum": RssFeedInput.ModeEnum,
        "RssFeedUpdate.ModeEnum": RssFeedUpdate.ModeEnum,
        "SubscriptionStatus": SubscriptionStatus,
        "WebhookEnvelope.EventEnum": WebhookEnvelope.EventEnum,
        "WebhookEventName": WebhookEventName,
        "WebhookSubscriptionInput.SourceEnum": WebhookSubscriptionInput.SourceEnum,
        "Workspace.AccessStatusEnum": Workspace.AccessStatusEnum,
        "WorkspaceAgent.TypeEnum": WorkspaceAgent.TypeEnum,
        "WorkspaceAgent.ScheduleEnum": WorkspaceAgent.ScheduleEnum,
        "WorkspaceAgentInput.TypeEnum": WorkspaceAgentInput.TypeEnum,
        "WorkspaceAgentInput.ScheduleEnum": WorkspaceAgentInput.ScheduleEnum,
        "WorkspaceAgentUpdate.ScheduleEnum": WorkspaceAgentUpdate.ScheduleEnum,
        "WorkspaceInput.AccessStatusEnum": WorkspaceInput.AccessStatusEnum,
        "WorkspaceUserInput.RoleEnum": WorkspaceUserInput.RoleEnum,
}

let typeMap: {[index: string]: any} = {
    "AICredits": AICredits,
    "AIUsage": AIUsage,
    "AIUsageText": AIUsageText,
    "Account": Account,
    "AccountAnalytics": AccountAnalytics,
    "AccountAnalyticsInitialSync": AccountAnalyticsInitialSync,
    "AccountConnectionHealth": AccountConnectionHealth,
    "AccountConnectionHealthReconnectReason": AccountConnectionHealthReconnectReason,
    "AccountErrorsInner": AccountErrorsInner,
    "AccountErrorsInnerOneOf": AccountErrorsInnerOneOf,
    "AccountGroup": AccountGroup,
    "AccountGroupInput": AccountGroupInput,
    "AccountHealth": AccountHealth,
    "AccountHealthDailyCap": AccountHealthDailyCap,
    "AccountSchedule": AccountSchedule,
    "AddCompetitor202Response": AddCompetitor202Response,
    "AddCompetitor409Response": AddCompetitor409Response,
    "AddGenericSubscriptionRequest": AddGenericSubscriptionRequest,
    "AddPostToQueueRequest": AddPostToQueueRequest,
    "AgentPageMeta": AgentPageMeta,
    "AgentProposal": AgentProposal,
    "AgentProposalDecision": AgentProposalDecision,
    "AgentRun": AgentRun,
    "AnalyticsPeriod": AnalyticsPeriod,
    "AnalyticsSummary": AnalyticsSummary,
    "AnalyticsSummaryData": AnalyticsSummaryData,
    "ApiActivity": ApiActivity,
    "ApiKey": ApiKey,
    "ApiKeyInput": ApiKeyInput,
    "ApproveAgentProposal200Response": ApproveAgentProposal200Response,
    "ApproveAgentProposal409Response": ApproveAgentProposal409Response,
    "ApproveInboxReplyDraft403Response": ApproveInboxReplyDraft403Response,
    "ApprovePostRequest": ApprovePostRequest,
    "BestPostingTimes": BestPostingTimes,
    "BestPostingTimesTimesInner": BestPostingTimesTimesInner,
    "BlogToSocial200Response": BlogToSocial200Response,
    "BlogToSocial429Response": BlogToSocial429Response,
    "BlogToSocialCaption": BlogToSocialCaption,
    "BlogToSocialInput": BlogToSocialInput,
    "BlogToSocialMedia": BlogToSocialMedia,
    "BlogToSocialResponse": BlogToSocialResponse,
    "BrandVoice": BrandVoice,
    "BrandVoiceInput": BrandVoiceInput,
    "BrandVoiceMeta": BrandVoiceMeta,
    "CancelSubscription422Response": CancelSubscription422Response,
    "CancelSubscription422ResponseErrors": CancelSubscription422ResponseErrors,
    "CancelSubscriptionRequest": CancelSubscriptionRequest,
    "ChangeSubscriptionPlanRequest": ChangeSubscriptionPlanRequest,
    "ChannelAccount": ChannelAccount,
    "CheckoutSubscription200Response": CheckoutSubscription200Response,
    "CheckoutSubscriptionRequest": CheckoutSubscriptionRequest,
    "CodedError": CodedError,
    "Competitor": Competitor,
    "CompetitorDetail": CompetitorDetail,
    "CompetitorInput": CompetitorInput,
    "CompetitorMedia": CompetitorMedia,
    "CompetitorSnapshot": CompetitorSnapshot,
    "CompleteChunkedUploadRequest": CompleteChunkedUploadRequest,
    "ConnectChannelInput": ConnectChannelInput,
    "ConnectLink": ConnectLink,
    "CreateAccountGroup201Response": CreateAccountGroup201Response,
    "CreateAgent201Response": CreateAgent201Response,
    "CreateApiKey201Response": CreateApiKey201Response,
    "CreateApiKey201ResponseData": CreateApiKey201ResponseData,
    "CreateConnectLinkRequest": CreateConnectLinkRequest,
    "CreateHashtagGroup201Response": CreateHashtagGroup201Response,
    "CreateInboxReplyDraft201Response": CreateInboxReplyDraft201Response,
    "CreateMediaFolderRequest": CreateMediaFolderRequest,
    "CreateMention201Response": CreateMention201Response,
    "CreatePost201Response": CreatePost201Response,
    "CreateRecyclingRule201Response": CreateRecyclingRule201Response,
    "CreateReportExport201Response": CreateReportExport201Response,
    "CreateResellerClient201Response": CreateResellerClient201Response,
    "CreateRssFeed201Response": CreateRssFeed201Response,
    "CreateTemplate201Response": CreateTemplate201Response,
    "CreateWebhookSubscription201Response": CreateWebhookSubscription201Response,
    "CreateWebhookSubscription201ResponseData": CreateWebhookSubscription201ResponseData,
    "DeleteAgent200Response": DeleteAgent200Response,
    "DeleteMediaBulkRequest": DeleteMediaBulkRequest,
    "DeleteMediaBulkRequestItemsInner": DeleteMediaBulkRequestItemsInner,
    "DeleteMediaFolderRequest": DeleteMediaFolderRequest,
    "DeletePostRequest": DeletePostRequest,
    "DeletePostsBulkRequest": DeletePostsBulkRequest,
    "DeleteReceiptsBulkRequest": DeleteReceiptsBulkRequest,
    "DeleteResult": DeleteResult,
    "DeleteUser400Response": DeleteUser400Response,
    "DeleteUsersBulkRequest": DeleteUsersBulkRequest,
    "DeleteWorkspacesBulkRequest": DeleteWorkspacesBulkRequest,
    "FreeToolBuildUtmUrlRequest": FreeToolBuildUtmUrlRequest,
    "FreeToolBuildUtmUrlResponse": FreeToolBuildUtmUrlResponse,
    "FreeToolCalculateAspectRatioRequest": FreeToolCalculateAspectRatioRequest,
    "FreeToolCalculateAspectRatioResponse": FreeToolCalculateAspectRatioResponse,
    "FreeToolCalculateAspectRatioResponseMatchesInner": FreeToolCalculateAspectRatioResponseMatchesInner,
    "FreeToolCalculateAspectRatioResponseRounding": FreeToolCalculateAspectRatioResponseRounding,
    "FreeToolCalculateCropRequest": FreeToolCalculateCropRequest,
    "FreeToolCalculateCropResponse": FreeToolCalculateCropResponse,
    "FreeToolCalculateCropResponseCrop": FreeToolCalculateCropResponseCrop,
    "FreeToolCalculateCropResponseImage": FreeToolCalculateCropResponseImage,
    "FreeToolCalculateCropResponseOutput": FreeToolCalculateCropResponseOutput,
    "FreeToolCalculateEngagementRateRequest": FreeToolCalculateEngagementRateRequest,
    "FreeToolCalculateEngagementRateResponse": FreeToolCalculateEngagementRateResponse,
    "FreeToolCalculateSocialRoiRequest": FreeToolCalculateSocialRoiRequest,
    "FreeToolCalculateSocialRoiRequestCosts": FreeToolCalculateSocialRoiRequestCosts,
    "FreeToolCalculateSocialRoiResponse": FreeToolCalculateSocialRoiResponse,
    "FreeToolCalculateSocialRoiResponseCostBreakdownInner": FreeToolCalculateSocialRoiResponseCostBreakdownInner,
    "FreeToolCalculateXApiCostRequest": FreeToolCalculateXApiCostRequest,
    "FreeToolCalculateXApiCostResponse": FreeToolCalculateXApiCostResponse,
    "FreeToolCalculateXApiCostResponseLineItemsInner": FreeToolCalculateXApiCostResponseLineItemsInner,
    "FreeToolCheckLinkPreviewRequest": FreeToolCheckLinkPreviewRequest,
    "FreeToolCheckLinkPreviewResponse": FreeToolCheckLinkPreviewResponse,
    "FreeToolCheckLinkPreviewResponseImage": FreeToolCheckLinkPreviewResponseImage,
    "FreeToolCheckLinkPreviewResponsePreviewsValue": FreeToolCheckLinkPreviewResponsePreviewsValue,
    "FreeToolCheckLinkPreviewResponseRedirectsInner": FreeToolCheckLinkPreviewResponseRedirectsInner,
    "FreeToolCheckLinkPreviewResponseTags": FreeToolCheckLinkPreviewResponseTags,
    "FreeToolCheckPostRequest": FreeToolCheckPostRequest,
    "FreeToolCheckPostRequestMedia": FreeToolCheckPostRequestMedia,
    "FreeToolCheckPostResponse": FreeToolCheckPostResponse,
    "FreeToolCheckPostResponseNetworksInner": FreeToolCheckPostResponseNetworksInner,
    "FreeToolCheckPostResponseNetworksInnerErrorsInner": FreeToolCheckPostResponseNetworksInnerErrorsInner,
    "FreeToolCheckReadabilityRequest": FreeToolCheckReadabilityRequest,
    "FreeToolCheckReadabilityResponse": FreeToolCheckReadabilityResponse,
    "FreeToolCheckReadabilityResponseLongSentencesInner": FreeToolCheckReadabilityResponseLongSentencesInner,
    "FreeToolCheckYoutubeThumbnailRequest": FreeToolCheckYoutubeThumbnailRequest,
    "FreeToolCheckYoutubeThumbnailResponse": FreeToolCheckYoutubeThumbnailResponse,
    "FreeToolCheckYoutubeThumbnailResponseChecksInner": FreeToolCheckYoutubeThumbnailResponseChecksInner,
    "FreeToolCleanTextRequest": FreeToolCleanTextRequest,
    "FreeToolCleanTextResponse": FreeToolCleanTextResponse,
    "FreeToolCleanTextResponseChangesInner": FreeToolCleanTextResponseChangesInner,
    "FreeToolCleanTextResponseFlagsInner": FreeToolCleanTextResponseFlagsInner,
    "FreeToolCountCharactersRequest": FreeToolCountCharactersRequest,
    "FreeToolCountCharactersResponse": FreeToolCountCharactersResponse,
    "FreeToolCountCharactersResponseNetworksInner": FreeToolCountCharactersResponseNetworksInner,
    "FreeToolError": FreeToolError,
    "FreeToolFormatInstagramCaptionRequest": FreeToolFormatInstagramCaptionRequest,
    "FreeToolFormatInstagramCaptionResponse": FreeToolFormatInstagramCaptionResponse,
    "FreeToolFormatLinkedInPostRequest": FreeToolFormatLinkedInPostRequest,
    "FreeToolFormatLinkedInPostResponse": FreeToolFormatLinkedInPostResponse,
    "FreeToolGenerateCaptionRequest": FreeToolGenerateCaptionRequest,
    "FreeToolGenerateCaptionResponse": FreeToolGenerateCaptionResponse,
    "FreeToolGenerateFancyTextRequest": FreeToolGenerateFancyTextRequest,
    "FreeToolGenerateFancyTextResponse": FreeToolGenerateFancyTextResponse,
    "FreeToolGenerateFancyTextResponseStylesInner": FreeToolGenerateFancyTextResponseStylesInner,
    "FreeToolGenerateHashtagsRequest": FreeToolGenerateHashtagsRequest,
    "FreeToolGenerateHashtagsResponse": FreeToolGenerateHashtagsResponse,
    "FreeToolGenerateHooksRequest": FreeToolGenerateHooksRequest,
    "FreeToolGenerateHooksResponse": FreeToolGenerateHooksResponse,
    "FreeToolGenerateHooksResponseHooksInner": FreeToolGenerateHooksResponseHooksInner,
    "FreeToolGenerateQrCodeRequest": FreeToolGenerateQrCodeRequest,
    "FreeToolGenerateQrCodeRequestUtm": FreeToolGenerateQrCodeRequestUtm,
    "FreeToolGenerateQrCodeResponse": FreeToolGenerateQrCodeResponse,
    "FreeToolGenerateSocialPostsFromBlogRequest": FreeToolGenerateSocialPostsFromBlogRequest,
    "FreeToolGenerateSocialPostsFromBlogResponse": FreeToolGenerateSocialPostsFromBlogResponse,
    "FreeToolGenerateSocialPostsFromBlogResponsePostsInner": FreeToolGenerateSocialPostsFromBlogResponsePostsInner,
    "FreeToolGenerateSocialPostsFromBlogResponseSource": FreeToolGenerateSocialPostsFromBlogResponseSource,
    "FreeToolGenerateSocialPostsFromBlogResponseWarningsInner": FreeToolGenerateSocialPostsFromBlogResponseWarningsInner,
    "FreeToolGetBestTimesToPostResponse": FreeToolGetBestTimesToPostResponse,
    "FreeToolGetBestTimesToPostResponseNetworksInner": FreeToolGetBestTimesToPostResponseNetworksInner,
    "FreeToolGetHookTemplatesResponse": FreeToolGetHookTemplatesResponse,
    "FreeToolGetHookTemplatesResponseHooksInner": FreeToolGetHookTemplatesResponseHooksInner,
    "FreeToolGetImageSizesResponse": FreeToolGetImageSizesResponse,
    "FreeToolGetImageSizesResponseSizesInner": FreeToolGetImageSizesResponseSizesInner,
    "FreeToolGetImageSizesResponseSourcesInner": FreeToolGetImageSizesResponseSourcesInner,
    "FreeToolGetVideoSpecsResponse": FreeToolGetVideoSpecsResponse,
    "FreeToolGetVideoSpecsResponseSpecsInner": FreeToolGetVideoSpecsResponseSpecsInner,
    "FreeToolGetVideoSpecsResponseSpecsInnerLimits": FreeToolGetVideoSpecsResponseSpecsInnerLimits,
    "FreeToolList": FreeToolList,
    "FreeToolListItem": FreeToolListItem,
    "FreeToolPlanContentCalendarRequest": FreeToolPlanContentCalendarRequest,
    "FreeToolPlanContentCalendarRequestPostsPerWeek": FreeToolPlanContentCalendarRequestPostsPerWeek,
    "FreeToolPlanContentCalendarRequestTimes": FreeToolPlanContentCalendarRequestTimes,
    "FreeToolPlanContentCalendarResponse": FreeToolPlanContentCalendarResponse,
    "FreeToolPlanContentCalendarResponseSlotsInner": FreeToolPlanContentCalendarResponseSlotsInner,
    "FreeToolPreviewPostRequest": FreeToolPreviewPostRequest,
    "FreeToolPreviewPostResponse": FreeToolPreviewPostResponse,
    "FreeToolPreviewPostResponseNetworksInner": FreeToolPreviewPostResponseNetworksInner,
    "FreeToolSearchEmojiRequest": FreeToolSearchEmojiRequest,
    "FreeToolSearchEmojiResponse": FreeToolSearchEmojiResponse,
    "FreeToolSearchEmojiResponseResultsInner": FreeToolSearchEmojiResponseResultsInner,
    "FreeToolSplitThreadRequest": FreeToolSplitThreadRequest,
    "FreeToolSplitThreadResponse": FreeToolSplitThreadResponse,
    "FreeToolSplitThreadResponsePostsInner": FreeToolSplitThreadResponsePostsInner,
    "GetAccountHealth200Response": GetAccountHealth200Response,
    "GetBrandVoice200Response": GetBrandVoice200Response,
    "GetCompetitor200Response": GetCompetitor200Response,
    "GetInboxConversation200Response": GetInboxConversation200Response,
    "GetPostingSchedule200Response": GetPostingSchedule200Response,
    "GetRemoteUploadStatus200Response": GetRemoteUploadStatus200Response,
    "GetReportBranding200Response": GetReportBranding200Response,
    "GetRepurposeRun200Response": GetRepurposeRun200Response,
    "GuardrailError": GuardrailError,
    "HashtagGroup": HashtagGroup,
    "HashtagGroupInput": HashtagGroupInput,
    "ImageAltText200Response": ImageAltText200Response,
    "ImageAltTextInput": ImageAltTextInput,
    "ImageAltTextResponse": ImageAltTextResponse,
    "ImageCreditBalance": ImageCreditBalance,
    "ImageEditInput": ImageEditInput,
    "ImageGenerate200Response": ImageGenerate200Response,
    "ImageGenerate429Response": ImageGenerate429Response,
    "ImageGenerateInput": ImageGenerateInput,
    "ImageGenerationResponse": ImageGenerationResponse,
    "ImagePrompt200Response": ImagePrompt200Response,
    "ImagePrompt429Response": ImagePrompt429Response,
    "ImagePromptInput": ImagePromptInput,
    "ImagePromptResponse": ImagePromptResponse,
    "ImageVariations200Response": ImageVariations200Response,
    "ImageVariationsInput": ImageVariationsInput,
    "ImageVariationsResponse": ImageVariationsResponse,
    "InboxAuthor": InboxAuthor,
    "InboxConversation": InboxConversation,
    "InboxConversationAccount": InboxConversationAccount,
    "InboxConversationUpdate": InboxConversationUpdate,
    "InboxMessage": InboxMessage,
    "InboxMessageAuthor": InboxMessageAuthor,
    "InboxReplyDraft": InboxReplyDraft,
    "InboxReplyDraftApprove": InboxReplyDraftApprove,
    "InboxReplyDraftEdit": InboxReplyDraftEdit,
    "InboxReplyDraftInput": InboxReplyDraftInput,
    "InitiateChunkedUpload201Response": InitiateChunkedUpload201Response,
    "InitiateChunkedUploadRequest": InitiateChunkedUploadRequest,
    "InitiateRemoteUpload201Response": InitiateRemoteUpload201Response,
    "InitiateRemoteUpload201ResponseOneOf": InitiateRemoteUpload201ResponseOneOf,
    "InitiateRemoteUploadRequest": InitiateRemoteUploadRequest,
    "LearnBrandVoiceInput": LearnBrandVoiceInput,
    "LearnBrandVoiceResponse": LearnBrandVoiceResponse,
    "LearnBrandVoiceResponseMeta": LearnBrandVoiceResponseMeta,
    "ListAccountGroups200Response": ListAccountGroups200Response,
    "ListAccounts200Response": ListAccounts200Response,
    "ListAgentProposals200Response": ListAgentProposals200Response,
    "ListAgentRuns200Response": ListAgentRuns200Response,
    "ListAgents200Response": ListAgents200Response,
    "ListApiActivity200Response": ListApiActivity200Response,
    "ListApiKeys200Response": ListApiKeys200Response,
    "ListCompetitors200Response": ListCompetitors200Response,
    "ListHashtagGroups200Response": ListHashtagGroups200Response,
    "ListInboxConversations200Response": ListInboxConversations200Response,
    "ListInboxReplyDrafts200Response": ListInboxReplyDrafts200Response,
    "ListMedia200Response": ListMedia200Response,
    "ListMediaFolders200Response": ListMediaFolders200Response,
    "ListMentions200Response": ListMentions200Response,
    "ListMyWorkspaces200Response": ListMyWorkspaces200Response,
    "ListPosts200Response": ListPosts200Response,
    "ListReceipts200Response": ListReceipts200Response,
    "ListRecyclingRules200Response": ListRecyclingRules200Response,
    "ListRecyclingRuns200Response": ListRecyclingRuns200Response,
    "ListReportExports200Response": ListReportExports200Response,
    "ListResellerClients200Response": ListResellerClients200Response,
    "ListRssFeeds200Response": ListRssFeeds200Response,
    "ListTags200Response": ListTags200Response,
    "ListTemplates200Response": ListTemplates200Response,
    "ListUsers200Response": ListUsers200Response,
    "ListWebhookSubscriptions200Response": ListWebhookSubscriptions200Response,
    "ListWorkspaces200Response": ListWorkspaces200Response,
    "Media": Media,
    "MediaBase64Input": MediaBase64Input,
    "MediaFolder": MediaFolder,
    "MediaFolderInput": MediaFolderInput,
    "MediaFolderRef": MediaFolderRef,
    "Mention": Mention,
    "MentionIdentity": MentionIdentity,
    "MentionIdentityInput": MentionIdentityInput,
    "MentionInput": MentionInput,
    "MessageOnly": MessageOnly,
    "PaginationMeta": PaginationMeta,
    "PaginationMetaLinks": PaginationMetaLinks,
    "PaginationMetaMeta": PaginationMetaMeta,
    "PollRssFeed200Response": PollRssFeed200Response,
    "Post": Post,
    "PostAnalytics": PostAnalytics,
    "PostContent": PostContent,
    "PostInput": PostInput,
    "PostOptionsInstagram": PostOptionsInstagram,
    "PostOptionsTikTok": PostOptionsTikTok,
    "PostOptionsYoutube": PostOptionsYoutube,
    "PostVersion": PostVersion,
    "PostVersionOptions": PostVersionOptions,
    "PostWarning": PostWarning,
    "PostWarnings": PostWarnings,
    "PostingSchedule": PostingSchedule,
    "PostingScheduleDay": PostingScheduleDay,
    "PostingScheduleDayTimesInner": PostingScheduleDayTimesInner,
    "PostingScheduleInput": PostingScheduleInput,
    "PostingTimeSlot": PostingTimeSlot,
    "PostingTimes": PostingTimes,
    "PostingTimesBestInner": PostingTimesBestInner,
    "PostingTimesDayIntervalsInnerInner": PostingTimesDayIntervalsInnerInner,
    "PostingTimesDaysInner": PostingTimesDaysInner,
    "PreflightResult": PreflightResult,
    "PublicWorkspace": PublicWorkspace,
    "PublicWorkspacePivot": PublicWorkspacePivot,
    "PublishProgress": PublishProgress,
    "QueueSlots": QueueSlots,
    "Receipt": Receipt,
    "ReceiptInput": ReceiptInput,
    "ReceiptUpdateInput": ReceiptUpdateInput,
    "RecommendedPostingTimes": RecommendedPostingTimes,
    "ReconnectLink": ReconnectLink,
    "RecyclingRule": RecyclingRule,
    "RecyclingRuleInput": RecyclingRuleInput,
    "RecyclingRuleSettings": RecyclingRuleSettings,
    "RecyclingRuleUpdate": RecyclingRuleUpdate,
    "RecyclingRun": RecyclingRun,
    "RemoveGenericSubscription422Response": RemoveGenericSubscription422Response,
    "RemoveUserFromWorkspaceRequest": RemoveUserFromWorkspaceRequest,
    "ReportBranding": ReportBranding,
    "ReportBrandingInput": ReportBrandingInput,
    "ReportExport": ReportExport,
    "ReportExportInput": ReportExportInput,
    "RepurposeContent200Response": RepurposeContent200Response,
    "RepurposeContent202Response": RepurposeContent202Response,
    "RepurposeContent500Response": RepurposeContent500Response,
    "RepurposeInput": RepurposeInput,
    "RepurposeInputTheme": RepurposeInputTheme,
    "RepurposeResult": RepurposeResult,
    "RepurposeResultMedia": RepurposeResultMedia,
    "RepurposeResultSource": RepurposeResultSource,
    "RepurposeRun": RepurposeRun,
    "RepurposeRunAccepted": RepurposeRunAccepted,
    "RepurposeSlide": RepurposeSlide,
    "ResellerClient": ResellerClient,
    "ResellerClientInput": ResellerClientInput,
    "ResellerClientUsage": ResellerClientUsage,
    "RetryPostAccountResult": RetryPostAccountResult,
    "RssFeed": RssFeed,
    "RssFeedInput": RssFeedInput,
    "RssFeedUpdate": RssFeedUpdate,
    "RunAgent202Response": RunAgent202Response,
    "SchedulePostRequest": SchedulePostRequest,
    "ScheduleResult": ScheduleResult,
    "Subscription": Subscription,
    "SubscriptionInput": SubscriptionInput,
    "SubscriptionUpdateInput": SubscriptionUpdateInput,
    "Tag": Tag,
    "TagInput": TagInput,
    "Template": Template,
    "TemplateContentItem": TemplateContentItem,
    "TemplateInput": TemplateInput,
    "TemplateInputContentInner": TemplateInputContentInner,
    "UpdateMediaRequest": UpdateMediaRequest,
    "UpdatePost200Response": UpdatePost200Response,
    "UploadChunk201Response": UploadChunk201Response,
    "User": User,
    "UserInput": UserInput,
    "UserUpdateInput": UserUpdateInput,
    "WebhookEnvelope": WebhookEnvelope,
    "WebhookEventPayload": WebhookEventPayload,
    "WebhookSubscription": WebhookSubscription,
    "WebhookSubscriptionInput": WebhookSubscriptionInput,
    "Workspace": Workspace,
    "WorkspaceAgent": WorkspaceAgent,
    "WorkspaceAgentInput": WorkspaceAgentInput,
    "WorkspaceAgentSettings": WorkspaceAgentSettings,
    "WorkspaceAgentUpdate": WorkspaceAgentUpdate,
    "WorkspaceInput": WorkspaceInput,
    "WorkspaceUserInput": WorkspaceUserInput,
    "XUsage": XUsage,
    "XUsageCounter": XUsageCounter,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
