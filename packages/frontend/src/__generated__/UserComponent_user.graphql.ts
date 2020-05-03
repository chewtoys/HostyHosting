/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserComponent_user = {
    readonly id: number;
    readonly name: string;
    readonly username: string;
    readonly " $refType": "UserComponent_user";
};
export type UserComponent_user$data = UserComponent_user;
export type UserComponent_user$key = {
    readonly " $data"?: UserComponent_user$data;
    readonly " $fragmentRefs": FragmentRefs<"UserComponent_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserComponent_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "username",
      "storageKey": null
    }
  ],
  "type": "User"
};
(node as any).hash = '0d18978bd5ee9d3582eaf1ba48db2bef';
export default node;
