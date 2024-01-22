import { User, QueryParams } from "./types";
import { ConfigParams, ExecuteResponse } from "./types";
export declare class ApiClient {
  private payload?;
  private _url?;
  private _collection?;
  private endpoint?;
  private headers?;
  private apiQuery;
  private restClient;
  constructor(
    baseUrl: string | null,
    fetchToken: () => string | null,
    apiKey?: string | null,
    authToken?: string | null
  );
  init(): ApiClient;
  config(params: ConfigParams): this;
  clearQuery(): this;
  url(path: string): ApiClient;
  collection(collection: string): ApiClient;
  query(params: QueryParams): ApiClient;
  eq(field: string, value: string | number): ApiClient;
  neq(field: string, value: string | number): ApiClient;
  gt(field: string, value: string | number): ApiClient;
  gte(field: string, value: string | number): ApiClient;
  lt(field: string, value: string | number): ApiClient;
  lte(field: string, value: string | number): ApiClient;
  in(field: string, value: string | number): ApiClient;
  nin(field: string, value: string | number): ApiClient;
  sort(field: string, direction: "asc" | "desc"): ApiClient;
  search(query: string): this;
  filter(filters: any): this;
  page(page: any): this;
  per(perPage: any): this;
  findOne(id: any): Promise<ExecuteResponse>;
  findMany(searchParams: QueryParams): Promise<ExecuteResponse>;
  create(data: Record<string, any>): Promise<ExecuteResponse>;
  update(data: Record<string, any>): Promise<ExecuteResponse>;
  destroy(id: number): Promise<ExecuteResponse>;
  updatePositions(sorted: Record<string, any>[]): Promise<ExecuteResponse>;
  updateMany(ids: number[], resource: object): Promise<ExecuteResponse>;
  destroyMany(ids: number[]): Promise<ExecuteResponse>;
  publish(ids: number[]): Promise<ExecuteResponse>;
  unpublish(ids: number[]): Promise<ExecuteResponse>;
  like(id: number): Promise<ExecuteResponse>;
  unlike(id: number): Promise<ExecuteResponse>;
  favorite(id: number): Promise<ExecuteResponse>;
  unfavorite(id: number): Promise<ExecuteResponse>;
  follow(id: number): Promise<ExecuteResponse>;
  unfollow(id: number): Promise<ExecuteResponse>;
  addLinks(sourceId: number, targetIds: number[]): Promise<ExecuteResponse>;
  removeLinks(sourceId: number, targetIds: number[]): Promise<ExecuteResponse>;
  addAttachment(
    id: number,
    name: string,
    attachmentId: number
  ): Promise<ExecuteResponse>;
  removeAttachment(id: number, name: string): Promise<ExecuteResponse>;
  addImage(id: number, attachmentId: number): Promise<ExecuteResponse>;
  removeImage(id: number): Promise<ExecuteResponse>;
  fetchMe(): Promise<ExecuteResponse>;
  updateMe(user: User): Promise<ExecuteResponse>;
  login(user: User): Promise<ExecuteResponse>;
  signup(user: User): Promise<ExecuteResponse>;
  sendPin(user: User): Promise<ExecuteResponse>;
  verifyPin(email: string, pin: string): Promise<ExecuteResponse>;
  changePassword(
    currentPassword: string,
    password: string,
    passwordConfirmation: string
  ): Promise<ExecuteResponse>;
  forgotPassword(user: User): Promise<ExecuteResponse>;
  resetPassword(
    email: string,
    password: string,
    passwordConfirmation: string,
    changePasswordToken: string
  ): Promise<ExecuteResponse>;
  sendOneTimePassword(user: User): Promise<ExecuteResponse>;
  verifyOneTimePassword(otp: string): Promise<ExecuteResponse>;
  parseURL(routerParams: any): this;
  get(endpoint: string, params?: string): Promise<ExecuteResponse>;
  post(
    endpoint: string,
    payload?: object,
    headers?: any
  ): Promise<ExecuteResponse>;
  put(
    endpoint: string,
    payload: object,
    headers: any
  ): Promise<ExecuteResponse>;
  delete(endpoint: string): Promise<ExecuteResponse>;
  handleFormatData(): void;
  handleMultipartData(): Promise<void>;
  isJsonObject(value: any): boolean;
}
export declare const createClient: (
  baseUrl: string,
  fetchToken: () => string | null,
  apiKey?: string | null,
  authToken?: string | null
) => ApiClient;
