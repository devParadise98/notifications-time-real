
export interface IResponse {
  user: User;
  providerId: string | null;
  operationType?: null;
}

export interface User {
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: UserMetadata;
  providerData: UserInfo[];
  refreshToken: string;
  tenantId: string | null;
  delete(): Promise<void>;
  getIdToken(forceRefresh?: boolean): Promise<string>;
  getIdTokenResult(forceRefresh?: boolean): Promise<IdTokenResult>;
  reload(): Promise<void>;
  toJSON(): object;
}

export interface UserMetadata {
  creationTime?: string;
  lastSignInTime?: string;
}

export interface UserInfo {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
}

export interface IdTokenResult {
  authTime: string;
  expirationTime: string;
  issuedAtTime: string;
  signInProvider: string | null;
  signInSecondFactor: string | null;
  token: string;
  claims: null;
}