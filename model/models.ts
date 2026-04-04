import localVarRequest from 'request';

export * from './account';
export * from './addGenericSubscriptionRequest';
export * from './blogToSocial200Response';
export * from './blogToSocial429Response';
export * from './blogToSocialCaption';
export * from './blogToSocialInput';
export * from './blogToSocialMedia';
export * from './blogToSocialResponse';
export * from './changeSubscriptionPlanRequest';
export * from './checkoutSubscription200Response';
export * from './checkoutSubscriptionRequest';
export * from './deleteMediaBulkRequest';
export * from './deleteMode';
export * from './deletePostRequest';
export * from './deletePostsBulkRequest';
export * from './deleteReceiptsBulkRequest';
export * from './deleteResult';
export * from './deleteUser400Response';
export * from './deleteUsersBulkRequest';
export * from './deleteWorkspacesBulkRequest';
export * from './getRemoteUploadStatus200Response';
export * from './initiateChunkedUpload201Response';
export * from './initiateChunkedUploadRequest';
export * from './initiateRemoteUpload201Response';
export * from './initiateRemoteUpload201ResponseOneOf';
export * from './initiateRemoteUploadRequest';
export * from './listAccounts200Response';
export * from './listMedia200Response';
export * from './listPosts200Response';
export * from './listReceipts200Response';
export * from './listTags200Response';
export * from './listUsers200Response';
export * from './listWorkspaces200Response';
export * from './media';
export * from './paginationMeta';
export * from './paginationMetaLinks';
export * from './paginationMetaMeta';
export * from './post';
export * from './postContent';
export * from './postInput';
export * from './postStatus';
export * from './postVersion';
export * from './receipt';
export * from './receiptInput';
export * from './receiptUpdateInput';
export * from './removeUserFromWorkspaceRequest';
export * from './schedulePostRequest';
export * from './scheduleResult';
export * from './subscription';
export * from './subscriptionInput';
export * from './subscriptionStatus';
export * from './subscriptionUpdateInput';
export * from './tag';
export * from './tagInput';
export * from './updateMediaRequest';
export * from './uploadChunk201Response';
export * from './user';
export * from './userInput';
export * from './userUpdateInput';
export * from './workspace';
export * from './workspaceInput';
export * from './workspaceUserInput';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Account } from './account';
import { AddGenericSubscriptionRequest } from './addGenericSubscriptionRequest';
import { BlogToSocial200Response } from './blogToSocial200Response';
import { BlogToSocial429Response } from './blogToSocial429Response';
import { BlogToSocialCaption } from './blogToSocialCaption';
import { BlogToSocialInput } from './blogToSocialInput';
import { BlogToSocialMedia } from './blogToSocialMedia';
import { BlogToSocialResponse } from './blogToSocialResponse';
import { ChangeSubscriptionPlanRequest } from './changeSubscriptionPlanRequest';
import { CheckoutSubscription200Response } from './checkoutSubscription200Response';
import { CheckoutSubscriptionRequest } from './checkoutSubscriptionRequest';
import { DeleteMediaBulkRequest } from './deleteMediaBulkRequest';
import { DeleteMode } from './deleteMode';
import { DeletePostRequest } from './deletePostRequest';
import { DeletePostsBulkRequest } from './deletePostsBulkRequest';
import { DeleteReceiptsBulkRequest } from './deleteReceiptsBulkRequest';
import { DeleteResult } from './deleteResult';
import { DeleteUser400Response } from './deleteUser400Response';
import { DeleteUsersBulkRequest } from './deleteUsersBulkRequest';
import { DeleteWorkspacesBulkRequest } from './deleteWorkspacesBulkRequest';
import { GetRemoteUploadStatus200Response } from './getRemoteUploadStatus200Response';
import { InitiateChunkedUpload201Response } from './initiateChunkedUpload201Response';
import { InitiateChunkedUploadRequest } from './initiateChunkedUploadRequest';
import { InitiateRemoteUpload201Response } from './initiateRemoteUpload201Response';
import { InitiateRemoteUpload201ResponseOneOf } from './initiateRemoteUpload201ResponseOneOf';
import { InitiateRemoteUploadRequest } from './initiateRemoteUploadRequest';
import { ListAccounts200Response } from './listAccounts200Response';
import { ListMedia200Response } from './listMedia200Response';
import { ListPosts200Response } from './listPosts200Response';
import { ListReceipts200Response } from './listReceipts200Response';
import { ListTags200Response } from './listTags200Response';
import { ListUsers200Response } from './listUsers200Response';
import { ListWorkspaces200Response } from './listWorkspaces200Response';
import { Media } from './media';
import { PaginationMeta } from './paginationMeta';
import { PaginationMetaLinks } from './paginationMetaLinks';
import { PaginationMetaMeta } from './paginationMetaMeta';
import { Post } from './post';
import { PostContent } from './postContent';
import { PostInput } from './postInput';
import { PostStatus } from './postStatus';
import { PostVersion } from './postVersion';
import { Receipt } from './receipt';
import { ReceiptInput } from './receiptInput';
import { ReceiptUpdateInput } from './receiptUpdateInput';
import { RemoveUserFromWorkspaceRequest } from './removeUserFromWorkspaceRequest';
import { SchedulePostRequest } from './schedulePostRequest';
import { ScheduleResult } from './scheduleResult';
import { Subscription } from './subscription';
import { SubscriptionInput } from './subscriptionInput';
import { SubscriptionStatus } from './subscriptionStatus';
import { SubscriptionUpdateInput } from './subscriptionUpdateInput';
import { Tag } from './tag';
import { TagInput } from './tagInput';
import { UpdateMediaRequest } from './updateMediaRequest';
import { UploadChunk201Response } from './uploadChunk201Response';
import { User } from './user';
import { UserInput } from './userInput';
import { UserUpdateInput } from './userUpdateInput';
import { Workspace } from './workspace';
import { WorkspaceInput } from './workspaceInput';
import { WorkspaceUserInput } from './workspaceUserInput';

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
        "Account.ProviderEnum": Account.ProviderEnum,
        "BlogToSocialInput.PlatformsEnum": BlogToSocialInput.PlatformsEnum,
        "BlogToSocialInput.ToneEnum": BlogToSocialInput.ToneEnum,
        "BlogToSocialInput.ContentLengthEnum": BlogToSocialInput.ContentLengthEnum,
        "BlogToSocialInput.HashtagsEnum": BlogToSocialInput.HashtagsEnum,
        "BlogToSocialInput.CtaEnum": BlogToSocialInput.CtaEnum,
        "ChangeSubscriptionPlanRequest.CycleEnum": ChangeSubscriptionPlanRequest.CycleEnum,
        "CheckoutSubscriptionRequest.CycleEnum": CheckoutSubscriptionRequest.CycleEnum,
        "DeleteMode": DeleteMode,
        "GetRemoteUploadStatus200Response.StatusEnum": GetRemoteUploadStatus200Response.StatusEnum,
        "InitiateRemoteUpload201Response.TypeEnum": InitiateRemoteUpload201Response.TypeEnum,
        "Media.TypeEnum": Media.TypeEnum,
        "PostStatus": PostStatus,
        "SubscriptionStatus": SubscriptionStatus,
        "Workspace.AccessStatusEnum": Workspace.AccessStatusEnum,
        "WorkspaceInput.AccessStatusEnum": WorkspaceInput.AccessStatusEnum,
        "WorkspaceUserInput.RoleEnum": WorkspaceUserInput.RoleEnum,
}

let typeMap: {[index: string]: any} = {
    "Account": Account,
    "AddGenericSubscriptionRequest": AddGenericSubscriptionRequest,
    "BlogToSocial200Response": BlogToSocial200Response,
    "BlogToSocial429Response": BlogToSocial429Response,
    "BlogToSocialCaption": BlogToSocialCaption,
    "BlogToSocialInput": BlogToSocialInput,
    "BlogToSocialMedia": BlogToSocialMedia,
    "BlogToSocialResponse": BlogToSocialResponse,
    "ChangeSubscriptionPlanRequest": ChangeSubscriptionPlanRequest,
    "CheckoutSubscription200Response": CheckoutSubscription200Response,
    "CheckoutSubscriptionRequest": CheckoutSubscriptionRequest,
    "DeleteMediaBulkRequest": DeleteMediaBulkRequest,
    "DeletePostRequest": DeletePostRequest,
    "DeletePostsBulkRequest": DeletePostsBulkRequest,
    "DeleteReceiptsBulkRequest": DeleteReceiptsBulkRequest,
    "DeleteResult": DeleteResult,
    "DeleteUser400Response": DeleteUser400Response,
    "DeleteUsersBulkRequest": DeleteUsersBulkRequest,
    "DeleteWorkspacesBulkRequest": DeleteWorkspacesBulkRequest,
    "GetRemoteUploadStatus200Response": GetRemoteUploadStatus200Response,
    "InitiateChunkedUpload201Response": InitiateChunkedUpload201Response,
    "InitiateChunkedUploadRequest": InitiateChunkedUploadRequest,
    "InitiateRemoteUpload201Response": InitiateRemoteUpload201Response,
    "InitiateRemoteUpload201ResponseOneOf": InitiateRemoteUpload201ResponseOneOf,
    "InitiateRemoteUploadRequest": InitiateRemoteUploadRequest,
    "ListAccounts200Response": ListAccounts200Response,
    "ListMedia200Response": ListMedia200Response,
    "ListPosts200Response": ListPosts200Response,
    "ListReceipts200Response": ListReceipts200Response,
    "ListTags200Response": ListTags200Response,
    "ListUsers200Response": ListUsers200Response,
    "ListWorkspaces200Response": ListWorkspaces200Response,
    "Media": Media,
    "PaginationMeta": PaginationMeta,
    "PaginationMetaLinks": PaginationMetaLinks,
    "PaginationMetaMeta": PaginationMetaMeta,
    "Post": Post,
    "PostContent": PostContent,
    "PostInput": PostInput,
    "PostVersion": PostVersion,
    "Receipt": Receipt,
    "ReceiptInput": ReceiptInput,
    "ReceiptUpdateInput": ReceiptUpdateInput,
    "RemoveUserFromWorkspaceRequest": RemoveUserFromWorkspaceRequest,
    "SchedulePostRequest": SchedulePostRequest,
    "ScheduleResult": ScheduleResult,
    "Subscription": Subscription,
    "SubscriptionInput": SubscriptionInput,
    "SubscriptionUpdateInput": SubscriptionUpdateInput,
    "Tag": Tag,
    "TagInput": TagInput,
    "UpdateMediaRequest": UpdateMediaRequest,
    "UploadChunk201Response": UploadChunk201Response,
    "User": User,
    "UserInput": UserInput,
    "UserUpdateInput": UserUpdateInput,
    "Workspace": Workspace,
    "WorkspaceInput": WorkspaceInput,
    "WorkspaceUserInput": WorkspaceUserInput,
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
