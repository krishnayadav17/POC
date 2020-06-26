export interface carouselComponetProps {
    itemsPerScrollInPortrait : number
  }
  
export  interface carouselComponetState {
    position : number
    intervals : number
    itemsPerInterval : number
    bulletss : []
    noOfItems : number
    slides : any
  }

