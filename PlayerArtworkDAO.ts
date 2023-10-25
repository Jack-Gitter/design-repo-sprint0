import { Artwork } from "./Artwork";
import db from './Firebase'

// uses the db imported from the firebase file in order to do these things
export default interface PlayerArtworkDAOInterface {

		// create
		addArtworkToPlayer(email: string, artwork: Artwork): void;
		addArtworksToPlayer(email: string, artworks: Artwork[]): void;
		
		// read
		getAllArtworksAvailableToBuy(email: string): Artwork[]
		getAllOfPlayersArtwork(email: string): Artwork[]
		getPlayerArtworkById(email: string): Artwork

		// update
		updatePlayerArtworkById(email: string, artworkID: number, artwork: Artwork): void;
		updateAllOfPlayersArtwork(email: string, newArtwork: Artwork[]): void;

		// delete
		removeArtworkFromPlayerById(email: string, artworkID: number): void;
		removeAllPlayersArtwork(email: string): void;

}


/*
		

the email field is required because when a user joins covey.town, their user-id gets changed every time (and usernames are not guarenteed to be unique)
therefore we need to have the user authenticate with the service, so that we know which user's paintings to retrieve (the user needs to authenticate on the frontend)

https://firebase.google.com/docs/auth/web/password-auth#web-modular-api_1

the flow of code should go --> login using firebase api on the frontend, get the authentication object back, send an interactableCommand('userLoggedIn', authObj.email)


database looks like so:

collection: Players {

		document: {
						email: ...
						artwork { ...}
				  }

}

collection: AuctionHouseArtwork {

		document {
						artwork fields...
				 }		

		document {
						artwork fields...
				 }		

		document {
						artwork fields...
				 }		
}

		*/
