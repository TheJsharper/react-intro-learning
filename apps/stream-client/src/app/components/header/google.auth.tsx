/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { LoadGapi } from "../services/app.google-auth";

export interface GoogleAuthState {
    isLoggedIn: boolean;
    user?: User | null;
}

export interface User {

    email: string;
    familyName: string;
    givenName: string;
    id: string;
    imageUrl: string;
    name: string;

}

export class GoogleAuth extends React.Component<unknown, GoogleAuthState>{

    override state: Readonly<GoogleAuthState> = { isLoggedIn: false, user: null };


    override componentDidMount(): void {
        (async () => {

            const auth = await LoadGapi();

            auth.auth2Instance.isSignedIn.listen(() => this.IsLoggeInUser(auth));


        })();
    }
    private IsLoggeInUser( auth: any) {

        if (auth.auth2Instance.isSignedIn.get()) {
            const user: User = {
                email: auth.auth2Instance.currentUser?.get().getBasicProfile().getEmail(),
                familyName: auth.auth2Instance.currentUser?.get().getBasicProfile().getFamilyName(),
                givenName: auth.auth2Instance.currentUser?.get().getBasicProfile().getGivenName(),
                id: auth.auth2Instance.currentUser?.get().getBasicProfile().getId(),
                imageUrl: auth.auth2Instance.currentUser?.get().getBasicProfile().getImageUrl(),
                name: auth.auth2Instance.currentUser?.get().getBasicProfile().getName()


            }
            this.setState({ user, isLoggedIn: auth.auth2Instance.isSignedIn.get() });
        } else   this.setState({ user: null, isLoggedIn:auth.auth2Instance.isSignedIn.get() });

        


    }


    override render(): React.ReactNode {

        console.log("====>", this.state);

        return (
            <div>
                Status
                {this.state.isLoggedIn ? 'ja' : 'nein'}

                <div>

                </div>
            </div>
        )
    }
}