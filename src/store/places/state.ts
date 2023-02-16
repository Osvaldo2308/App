export interface PlacesState  {
    isLoading: boolean,
    userLocation?: [number, number] //Lon Lat
}

function state(): PlacesState {
    return {
        isLoading:true,
        userLocation: undefined
    }
}

export default state;