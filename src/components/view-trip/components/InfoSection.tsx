import { Button } from "@/components/ui/button";
import { BsSendFill } from "react-icons/bs";
import { TripDataProps } from "@/constants/Interfaces";
import { GetPlaceDetails } from "@/services/GlobalAPI";
import { useEffect } from "react";
// import { useEffect } from "react";

const InfoSection: React.FC<TripDataProps> = ({ tripData }) => {

    useEffect(() => {
        GetPlacePhoto();
    }
    ,[tripData])

    const GetPlacePhoto =async ()=>{
        try {
            const response = await GetPlaceDetails(tripData[0]?.userSelection.destination);
            console.log(response);
        } catch (error) {
            console.error('Error fetching place details:', error);
            throw error;
        }
    }

  
    return (
        <div>
           <img src="/placeholder.jpg" alt="" className=" lg:w-full lg:h-[340px] object-cover rounded-lg " />

         <div className="flex justify-between items-center gap-4 bg-red-300  ">
                <div className="my-5 flex flex-col gap-3">
                   <h2 className="font-bold text-xl md:text-3xl">{tripData[0]?.userSelection.destination} ghfghfgh</h2>

                    <div className="flex gap-2 ">
                        <h2 className="p-1 px-3 bg-gray-300 rounded-full text-gray-700">📅 {tripData[0]?.userSelection.noOfdays} Days</h2>
                        <h2 className="p-1 px-3 bg-gray-300 rounded-full text-gray-700">💲{tripData[0]?.userSelection.budget} Rs</h2>
                        <h2 className="p-1 px-3 bg-gray-300 rounded-full text-gray-700">👫{tripData[0]?.userSelection.traveler} traveler</h2>
                    </div>
                </div>
          <Button className="h-7"><BsSendFill /></Button>
         </div>
        </div>
    );
}

export default InfoSection;