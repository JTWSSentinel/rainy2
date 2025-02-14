import React from "react";
import { CloudDrizzle, Calendar } from "lucide-react";
export const RainfallChart = () => {
  const days = [{
    date: "Day 1",
    rainfall: [20, 35, 45, 30]
  }, {
    date: "Day 2",
    rainfall: [15, 25, 20, 10]
  }, {
    date: "Day 3",
    rainfall: [5, 10, 15, 20]
  }];
  return <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg shadow-gray-200/50 hover:shadow-blue-50/50 transition-shadow border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Festival Rainfall Tracking
          </h3>
          <p className="text-sm text-gray-500">
            Daily measurements from 8:00 to midnight
          </p>
        </div>
        <CloudDrizzle className="text-blue-500" />
      </div>
      <div className="space-y-6">
        {days.map((day, dayIndex) => <div key={day.date} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="font-medium text-gray-700">{day.date}</span>
              </div>
              <span className="text-sm text-gray-500">8:00 - 00:00</span>
            </div>
            <div className="flex items-end justify-between h-24 gap-2 relative bg-gray-50 rounded-lg p-4">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-50 to-transparent opacity-50 rounded-lg" />
              {day.rainfall.map((height, index) => <div key={index} className="flex-1 flex flex-col items-center gap-2 relative">
                  <div className="w-full bg-gradient-to-t from-blue-100 to-blue-50 rounded-t hover:from-blue-200 hover:to-blue-100 transition-colors relative group" style={{
              height: `${height}%`
            }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {height / 10}mm
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">
                    {`${(index + 2) * 4}:00`}
                  </span>
                </div>)}
            </div>
          </div>)}
        <div className="flex justify-between text-sm text-gray-500 pt-4 border-t">
          <span className="font-medium text-blue-600">
            Days Over Threshold: 1/2
          </span>
          <span className="font-medium text-yellow-600">
            Current Refund: £100
          </span>
        </div>
      </div>
    </div>;
};
