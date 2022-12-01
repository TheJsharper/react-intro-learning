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
            this.setState({ isLoggedIn: auth.auth2Instance.isSignedIn.get() });

            auth.auth2Instance.isSignedIn.listen(() => this.IsLoggeInUser(auth.auth2Instance.isSignedIn.get()));

            auth.auth2Instance.isSignedIn.listen(() => this.setCurrentUser(auth.auth2Instance.currentUser?.get()))
            console.log("Component====>", auth.auth2Instance.isSignedIn.get());


        })();
    }
    private IsLoggeInUser(isLoggedIn: boolean) {


        this.setState({ isLoggedIn })
        

    }
    private setCurrentUser(user: any) {

        if (user) {
            const userRaw: User = {
                email: user.getEmail(),
                familyName: user.getFamilyName(),
                givenName: user.getGivenName(),
                id: user.getId(),
                imageUrl: user.getImageUrl(),
                name: user.getName()


            }
            this.setState({ user:userRaw })
        }

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