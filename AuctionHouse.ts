import AuctionFloor from './AuctionFloor'

 export default interface AuctionHouse {  // extends interctableArea
		 auctionFloors: AuctionFloor[] 
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
