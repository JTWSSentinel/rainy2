import React from "react";
import { Calendar, MapPin, Umbrella, ChevronRight, Lock, CheckCircle } from "lucide-react";
interface Festival {
  id: string;
  name: string;
  date: string;
  startDate: Date;
  coverage: number;
  ticketPrice: number;
  premium: number;
  imageUrl: string;
}
const festivals: Festival[] = [{
  id: "glastonbury",
  name: "Glastonbury",
  date: "26-30 June 2024",
  startDate: new Date("2024-06-26"),
  coverage: 200,
  ticketPrice: 300,
  premium: 25,
  imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
}, {
  id: "reading",
  name: "Reading Festival",
  date: "23-25 August 2024",
  startDate: new Date("2024-08-23"),
  coverage: 200,
  ticketPrice: 300,
  premium: 22,
  imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
}, {
  id: "isle-of-wight",
  name: "Isle of Wight",
  date: "20-23 June 2024",
  startDate: new Date("2024-06-20"),
  coverage: 200,
  ticketPrice: 300,
  premium: 19,
  imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
}];
interface PolicySelectorProps {
  selectedFestivalId: string;
  onFestivalSelect: (festivalId: string) => void;
}
const isPurchaseAvailable = (startDate: Date): boolean => {
  const today = new Date();
  const purchaseDeadline = new Date(startDate);
  purchaseDeadline.setDate(startDate.getDate() - 21);
  return today <= purchaseDeadline;
};
const getPurchaseDeadline = (startDate: Date): string => {
  const deadline = new Date(startDate);
  deadline.setDate(startDate.getDate() - 21);
  return deadline.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
};
export const PolicySelector = ({
  selectedFestivalId,
  onFestivalSelect
}: PolicySelectorProps) => {
  return <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl shadow-purple-100/50 transition-all border border-purple-100/50 hover:shadow-purple-200/50">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Select Your Rainy Refund
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Purchase your refund policy at least three weeks before the festival
          </p>
        </div>
        <Umbrella className="h-8 w-8 text-purple-500" />
      </div>
      <div className="space-y-4">
        {festivals.map(festival => {
        const isAvailable = isPurchaseAvailable(festival.startDate);
        const deadline = getPurchaseDeadline(festival.startDate);
        return <div key={festival.id} className={`relative overflow-hidden rounded-xl border transition-all duration-300 transform hover:scale-[1.02] ${isAvailable ? "cursor-pointer hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100/50" : "cursor-not-allowed opacity-75"} ${selectedFestivalId === festival.id && isAvailable ? "border-purple-500 shadow-lg shadow-purple-100" : "border-purple-100"}`} onClick={() => isAvailable && onFestivalSelect(festival.id)}>
              <div className="absolute inset-0">
                <img src={festival.imageUrl} alt={festival.name} className="w-full h-full object-cover opacity-20 transition-opacity duration-300 group-hover:opacity-25" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90" />
              </div>
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {festival.name}
                  </h4>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-500">Premium</span>
                    <span className="text-sm font-medium bg-purple-50 text-purple-700 px-3 py-1 rounded-full border border-purple-100">
                      £{festival.premium}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{festival.date}</span>
                  </div>
                  {!isAvailable ? <div className="flex items-center gap-2 text-sm text-red-500 mt-2">
                      <Lock className="h-4 w-4" />
                      <span>Purchase deadline has passed</span>
                    </div> : <div className="flex items-center gap-2 text-sm text-emerald-600 mt-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Available until {deadline}</span>
                    </div>}
                </div>
                <ChevronRight className={`absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 transition-all duration-300 ${selectedFestivalId === festival.id && isAvailable ? "text-purple-500 translate-x-1" : "text-gray-300"}`} />
              </div>
            </div>;
      })}
      </div>
    </div>;
};
