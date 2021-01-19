export class Alert {
    id: string;
    type: AlertType;
    message: string;
    autoClose: boolean;
    keepAfterRouteChange: boolean;
    fade: boolean;

    constructor(init?:Partial<Alert>) {
        Object.assign(this, init);
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}

export class PatientObject {
    results: Result[];
  }
  
  export class Result {
    uuid: string;
    display: string;
    identifiers: Identifier[];
    person: Person;
    voided: boolean;
    links: Link[];
    resourceVersion: string;
  }
  
  export class Person {
    uuid: string;
    display: string;
    gender: string;
    age: number;
    birthdate: string;
    birthdateEstimated: boolean;
    dead: boolean;
    deathDate?: any;
    causeOfDeath?: any;
    preferredName: Identifier;
    preferredAddress: Identifier;
    attributes: any[];
    voided: boolean;
    birthtime?: any;
    deathdateEstimated: boolean;
    links: Link[];
    resourceVersion: string;
  }
  
  export class Identifier {
    uuid: string;
    display: string;
    links: Link[];
  }
  
  export class Link {
    rel: string;
    uri: string;
  }