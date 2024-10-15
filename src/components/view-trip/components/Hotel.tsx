import { HotelOption, TripDataProps } from "@/constants/Interfaces";


const Hotel :  React.FC<TripDataProps>  = ({tripData}) => {
  // const userSelection = tripData.length > 0 ? tripData[0].userSelection : null;
  const hotelOptions = tripData.length > 0 ? tripData[0].tripData.hotelOptions : [];
  
  return (
    // <div className="font-bold text-lg lg:text-xl  mt-3">
    //   {/* <h1>Hotel</h1> */}
    //   <div>
    //   <img
    //     src="/placeholder.jpg"
    //     alt=""
    //     className="lg:w-full lg:h-[340px] object-cover rounded-lg"
    //   />

    //   {userSelection ? (
    //     <div>
    //       <h2>Destination: {userSelection.destination}</h2>
    //       <p>Traveler: {userSelection.traveler}</p>
    //       <p>Budget: {userSelection.budget}</p>
    //       <p>Number of Days: {userSelection.noOfdays}</p>
    //     </div>
    //   ) : (
    //     <p>No trip data available.</p>
    //   )}
    //   </div>

       <div>
       <h2 className="font-bold text-xl mt-3">Hotel Recommmendation</h2>
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-5">
     {hotelOptions.map((hotel: HotelOption, index: number) => (

      
      
          <div key={index} className="hover:scale-105 transition-all">

               <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.hotelName)},${encodeURIComponent(hotel.hotelAddress)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
               >

            {/* <p>Rat  ing: {hotel.rating}</p>
            <p>Address: {hotel.hotelAddress}</p>
            <p>Price: {hotel.price}</p>
            <p>Description: {hotel.description}</p> */}
            <img className="rounded-xl" src="/placeholder.jpg" alt="" />
           <div className="my-1">
            <h2 className="font-medium"> {hotel?.hotelName}</h2>
            <h2 className="text-xs text-gray-500">📍 {hotel?.hotelAddress}</h2>
            <h2 className="text-xs font-medium">💰{hotel?.price}</h2>
            <h2 className="text-xs font-medium">⭐{hotel?.rating}</h2> 
           </div>
            {/* <img src={hotel.hotelImageURL} alt={hotel.hotelName} /> */}



              </a>

          </div>
        ))}

     </div>

     {/* <div>
        <h2>Itinerary</h2>
        {Object.keys(itinerary).map((day: string) => (
          <div key={day}>
            <h3>{day}</h3>
            {itinerary[day].plan.map((plan: ItineraryPlan, index: number) => (
              <div key={index}>
                <h4>{plan.placeName}</h4>
                <p>Best Time to Visit: {plan.bestTimeToVisit}</p>
                <p>Time to Travel: {plan.timeToTravel}</p>
                <p>Ticket Pricing: {plan.ticketPricing}</p>
                <p>Details: {plan.placeDetails}</p>
                <img src={plan.placeImageURL} alt={plan.placeName} />
              </div>
            ))}
          </div>
        ))}
      </div> */}


     

      
    </div>
  );
};

export default Hotel;