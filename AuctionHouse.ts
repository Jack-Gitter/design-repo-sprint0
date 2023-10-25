import AuctionFloor from './AuctionFloor'

 export default interface AuctionHouse {  // extends interctableArea
		 auctionFloors: AuctionFloor[] 
		 //dao: dao
		 //createNewAuctionFloor() // this will be called when the house is created, and when users want to auction something
		 //handleCommand (inherited) 
		 //getType() required for the toModel() method which returns an InteractableType
         //static fromMapObject(mapObject: ITiledMapObject, broadcastEmitter: TownEmitter): AuctionHouseType // for creating a Museum A
 }

 type AuctionHouseType =
 {
    id: string
    occupants: string[]
    type: InteractableType;
	artworks: ArtworksModel
    lastUpdateTime: string
 }
