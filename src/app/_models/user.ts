// /*export class User {
//     id: string;
//     username: string;
//     password: string;
//     firstName: string;
//     lastName: string;
//     token: string;
// }*/


//  export class User {
//   uuid: string;
//   display: string;
//   username: string;
//   systemId: string;
//   userProperties: UserProperties;
//   person: Person;
//   privileges: any[];
//   roles: Role[];
// }

// export class Role {
//   uuid: string;
//   name: string;
// }
// export class Person {
//   uuid: string;
// }
// export class UserProperties {
//   loginAttempts: string;
//   'emrapi.lastViewedPatientIds': string;
// }

// export class Alert {
//   id: string;
//   type: AlertType;
//   message: string;
//   autoClose: boolean;
//   keepAfterRouteChange: boolean;
//   fade: boolean;

//   constructor(init?:Partial<Alert>) {
//       Object.assign(this, init);
//   }
// }

// export enum AlertType {
//   Success,
//   Error,
//   Info,
//   Warning
// }

// export class PatientObject {
//   results: Result[];
// }

// export class PatientSearch{
//   constructor(
//     public q:string,
//     public v:'default',
//     public limit:number,
//   ){}
// }

// export class Result {
//   uuid: string;
//   display: string;
//   identifiers: Identifier[];
//   person: Person;
//   voided: boolean;
//   links: Link[];
//   resourceVersion: string;
// }



// export class Identifier {
//   uuid: string;
//   display: string;
//   links: Link[];
// }

// export class Link {
//   rel: string;
//   uri: string;
// }

// export class RootObject {
//   sessionId: string;
//   authenticated: boolean;
//   user: User;
//   locale: string;
//   allowedLocales: string[];
//   sessionLocation?: any;
// }