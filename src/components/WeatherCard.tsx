import React from "react";
import { CloudRain, Wind, Thermometer } from "lucide-react";
export const WeatherCard = () => {
  return <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg shadow-gray-200/50 hover:shadow-blue-50/50 transition-shadow border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Current Weather
        </h3>
        <CloudRain className="text-blue-500" />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Rainfall</span>
          <span className="font-medium bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
            2.5mm
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Threshold</span>
          <span className="font-medium bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded">
            5.0mm
          </span>
        </div>
        <div className="w-full bg-gradient-to-r from-gray-100 to-gray-50 rounded-full h-2">
          <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-500 ease-out" style={{
          width: "50%"
        }} />
        </div>
        <div className="pt-4 border-t grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
            <Wind className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">12 mph</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
            <Thermometer className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">18°C</span>
          </div>
        </div>
      </div>
    </div>;
};
