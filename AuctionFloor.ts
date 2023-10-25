import {Artwork} from './Artwork'
import Player from './Player'
import PlayerArtworkDAOInterface from './PlayerArtworkDAO' 

// use this in order to give and remove paintings from users after auction
 export default interface AuctionFloor {

		 //dao: dao
		 id: number
		 artBeingAuctioned: Artwork
		 timeLeft: number
		 currentBid: {player: Player, bid: number}
		 auctioneer: Player | null
		 observers: Player[] 
		 bidders: Player[]

		 givePaintingToPlayer(): void;
		 removePaintingFromPlayer(): void;
		 setAuctionTimeLeft(): void;
		 decreaseAuctionTimeLeft(): void;
		 //toModel(): returns an AuctionFloor

 }


 /*
		 
		!!!very important!!!
		
 an auctionFloor is NOT an interactable area. An interactable area in covey town is something with a physical location in 
 the game, and something that a user can actually walk up to and interact with. An auction floor in our sense is going to be a UI
 pop up with information that corresponds to that specific floor. Because of this we do not extend interactableArea

 'joining' an auction floor is no more than displaying a UI that represents the room to the user. They can than do whatever they want with this ui
 if they bid, the bid gets updated, etc. If a bid is placed, the button should cause a socket emmission to the backend. The backend will 
update the corresponding AuctionFloor within the AuctionHouse interactableArea, and then the AuctionHouse model will be sent back to the 
frontend for updating

*/
