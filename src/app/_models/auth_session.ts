interface RootObject {
  sessionId: string;
  authenticated: boolean;
  user: User;
  locale: string;
  allowedLocales: string[];
  sessionLocation?: any;
}

interface User {
  uuid: string;
  display: string;
  username: string;
  systemId: string;
  userProperties: UserProperties;
  person: Person;
  privileges: any[];
  roles: Role[];
}

interface Role {
  uuid: string;
  name: string;
}

interface Person {
  uuid: string;
}

interface UserProperties {
  loginAttempts: string;
  'emrapi.lastViewedPatientIds': string;
}    