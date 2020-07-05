export interface CarouselComponetProps {
    itemsPerScrollInPortrait : number
  }
  
export  interface CarouselComponetState {
    position : number
    intervals : number
    itemsPerInterval : number
    bullets : []
    noOfItems : number
    slides : any
  }

export interface AppComponentState {
  isLoading : boolean
  dataSource : any
}

export interface AppComponentProps {
  
}

