import { PlaceCardItemProps } from "@/constants/Interfaces";


const PlaceCardItem : React.FC<PlaceCardItemProps>= ({plan}) => {
    
    
    return (

        <a 
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(plan.placeName)}`} 
        target="_blank" 
        rel="noopener noreferrer"
     >

        <div className="shadow-md border rounded-xl p-2 mt-3 flex gap-4 hover:scale-95 transition-all hover:shadow-md cursor-pointer">
            <img src="/placeholder.jpg" alt=""
            className=" w-[100px] h-[100px] rounded-xl object-cover" />

            <div>
                <h2 className="font-bold text-lg">{plan.placeName}</h2>
                <p className="text-sm text-gray-500">{plan.placeDetails}</p>
                <h2 className="mt-2">🕙{plan.timeToTravel}</h2>
                
            </div>
        </div>

        </a>
    );
}

export default PlaceCardItem;