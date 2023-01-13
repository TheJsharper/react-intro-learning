/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { LoadGapi } from "../services/app.google-auth";

export interface GoogleAuthState {
    isLoggedIn: boolean;
    user?: User | null;
    signIn?: () => void;
    signOut?: () => void;
    auth2: any;
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

    override state: Readonly<GoogleAuthState> = { isLoggedIn: false, user: null, signIn: undefined, signOut: undefined, auth2: undefined };


    override componentDidMount(): void {
        (async () => {

            const auth = await LoadGapi();
            this.setState({ signIn: auth.auth2Instance.signIn, signOut: auth.auth2Instance.signOut, auth2: auth.auth2Instance });


        })();
        console.log("===> DIDMONUT----");
    }
    private IsLoggeInUser() {
        const user: User = {
            email: this.state.auth2.currentUser?.get().getBasicProfile().getEmail(),
            familyName: this.state.auth2.currentUser?.get().getBasicProfile().getFamilyName(),
            givenName: this.state.auth2.currentUser?.get().getBasicProfile().getGivenName(),
            id: this.state.auth2.currentUser?.get().getBasicProfile().getId(),
            imageUrl: this.state.auth2.currentUser?.get().getBasicProfile().getImageUrl(),
            name: this.state.auth2.currentUser?.get().getBasicProfile().getName()


        }
        this.setState({ user, isLoggedIn: true });




    }

    private loggin(): void {
        if (this.state.signIn) {
            this.state.signIn();
            this.IsLoggeInUser();
        }
    }

    private loggout(): void {
        if (this.state.signOut) {
            this.state.signOut();
            this.setState({ user: null, isLoggedIn: false });
        }
    }
    override render(): React.ReactNode {


        if (this.state.isLoggedIn) {
            return (
                <button onClick={() => this.loggout()} className="ui red google button">
                    <i className="google icon" />
                    Sign out
                </button>
            );
        }
        return (
            <button onClick={() => this.loggin()} className="ui red google button">
                <i className="google icon" />
                Sign in with google-account
            </button>
        )
    }
}