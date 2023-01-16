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
            this.setState({ signIn: auth.auth2Instance.signIn, signOut: auth.auth2Instance.signOut, auth2: auth.auth2Instance, isLoggedIn: auth.auth2Instance.isSignedIn.get()}, ()=>{

                if(auth.auth2Instance.isSignedIn.get()){
                    this.storeUserProfile();
                }
            });
            
        })();
    }
    private storeUserProfile() {
        if(this.state.auth2.currentUser && this.state.auth2.currentUser?.get().getBasicProfile()){

            const user: User = {
                email: this.state.auth2.currentUser?.get().getBasicProfile().getEmail(),
                familyName: this.state.auth2.currentUser?.get().getBasicProfile().getFamilyName(),
                givenName: this.state.auth2.currentUser?.get().getBasicProfile().getGivenName(),
                id: this.state.auth2.currentUser?.get().getBasicProfile().getId(),
                imageUrl: this.state.auth2.currentUser?.get().getBasicProfile().getImageUrl(),
                name: this.state.auth2.currentUser?.get().getBasicProfile().getName()
    
    
            }
            this.setState({ user});
        }




    }

    private loggin(): void {
        if (this.state.signIn) {
            this.state.signIn();
            this.setState({isLoggedIn:true});
            this.storeUserProfile();
        }
    }

    private loggout(): void {
        if (this.state.signOut && this.state.isLoggedIn) {
            this.state.signOut();
            this.setState({ user: null, isLoggedIn: false });
        }
    }
    override render(): React.ReactNode {
        console.log("===> Rendering", this.state );

        if (this.state.isLoggedIn) {
            return (
                <div>


                    <div style={{ background: 'none !important' }} className="ui icon button" data-tooltip={`${this.state.user?.familyName} ,    ${this.state.user?.givenName}`} data-position="bottom left" data-inverted="">
                        <img src={this.state.user?.imageUrl} alt="avatar" data-title="Elliot Fu" data-tooltip="Elliot has been a member since July 2012" data-position="top left" data-inverted="" className="ui avatar image" />


                    </div>

                    <button onClick={() => this.loggout()} className="ui red google button">
                        <i className="google icon" />
                        Sign out
                    </button>
                </div>
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