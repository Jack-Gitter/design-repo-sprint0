import {Artwork} from './Artwork'
import Player from './Player'

export type InteractableType = 'ConversationArea' | 'ViewingArea' | 'TicTacToeArea' | 'AuctionHouse'; 

// this is the model that gets sent to the frontend
export interface AuctionHouse { //extends Interactable {
		// ... inherited fields
		 auctionFloors: AuctionFloor[] 
}

export interface AuctionFloor {
		 id: number
		 artBeingAuctioned: Artwork
		 timeLeft: number
		 currentBid: {player: Player, bid: number}
		 auctioneer: Player | null
		 occupants: Player[] 
		 bidders: Player[]
}
