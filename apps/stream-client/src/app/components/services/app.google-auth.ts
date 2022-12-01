
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/no-explicit-any */


import { getGapi } from "gapi-browser";

export const LoadGapi = async () => {


    const auth = await new Promise<any>((resulve: (value: any) => void, reject: (reasean: any) => void) => {
        getGapi.then((gapi: any) => {

            gapi.load("client:auth2", () => {
                gapi.client.init({
                    clientId: process.env['NX_TRANSLATE_GOOGLEAPIS_AUTH2_CLIENT_KEY'] as string,
                    scope: process.env['NX_TRANSLATE_GOOGLEAPIS_AUTH2_CLIENT_SCOPE'] as string,
                    plugin_name: process.env['NX_TRANSLATE_GOOGLEAPIS_AUTH2_PLUGIN_NAME'] as string,
                }).then(() => {
                    const auth = gapi.auth2.getAuthInstance();
                   // console.log(gapi);
                    resulve({auth2Instance:auth, auth:gapi.auth});
                    return auth;
                })
            });

        })
    });

    return auth;


}