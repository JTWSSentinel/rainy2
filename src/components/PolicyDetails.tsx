import React from "react";
import { Umbrella, AlertCircle, Calendar, Ticket, ArrowRight, CheckCircle } from "lucide-react";
interface PolicyDetailsProps {
  festivalName: string;
  startDate: Date;
  coverage: number;
  rainThreshold: number;
  ticketPrice: number;
  premium: number;
}
export const PolicyDetails = ({
  festivalName,
  startDate,
  coverage,
  rainThreshold,
  ticketPrice,
  premium
}: PolicyDetailsProps) => {
  const perDayRefund = coverage / 2; // Calculate per-day refund amount
  const daysNeeded = 2; // Number of days needed for maximum refund
  const refundScenarios = [{
    days: 1,
    amount: perDayRefund
  }, {
    days: 2,
    amount: coverage
  }];
  return <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl shadow-purple-100/50 transition-all border border-purple-100/50 hover:shadow-purple-200/50">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Rainy Refund Details
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Review policy details before purchase
          </p>
        </div>
        <Umbrella className="h-8 w-8 text-purple-500" />
      </div>
      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Daily Threshold</div>
            <div className="text-xl font-semibold text-purple-700">
              {rainThreshold}mm
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Met Office measurements
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Per Day Refund</div>
            <div className="text-xl font-semibold text-green-700">
              £{perDayRefund}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              When threshold is exceeded
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6">
          <h4 className="text-sm font-medium text-gray-900 mb-4">
            Potential Refund Scenarios
          </h4>
          <div className="space-y-3">
            {refundScenarios.map((scenario, index) => <div key={index} className="bg-white/80 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">
                    {scenario.days} {scenario.days === 1 ? "day" : "days"} over{" "}
                    {rainThreshold}mm
                  </span>
                  <span className="font-medium text-purple-600">
                    £{scenario.amount}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500" style={{
                width: `${scenario.days / daysNeeded * 100}%`
              }} />
                </div>
              </div>)}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Refund amount increases with each day that exceeds the rainfall
            threshold
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Festival</span>
            <span className="font-medium">{festivalName}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Event Duration</span>
            <span className="font-medium">3 Days</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Start Date</span>
            <span className="font-medium">
              {startDate.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric"
            })}
            </span>
          </div>
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <div className="flex items-center gap-2">
                <Ticket className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600">Ticket Value</span>
              </div>
              <span className="font-medium">£{ticketPrice}</span>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-900">
                How this policy works
              </p>
              <ul className="mt-3 space-y-2 text-sm text-blue-700">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 flex items-center justify-center flex-shrink-0">
                    1.
                  </div>
                  <p>
                    Each festival day is monitored for rainfall from 8:00 until
                    midnight
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 flex items-center justify-center flex-shrink-0">
                    2.
                  </div>
                  <p>
                    If rainfall exceeds {rainThreshold}mm, you receive £
                    {perDayRefund} for that day
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 flex items-center justify-center flex-shrink-0">
                    3.
                  </div>
                  <p>
                    Maximum refund of £{coverage} is paid if {daysNeeded} days
                    exceed the threshold
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t pt-6">
          <div className="flex items-center justify-between mb-6">
            <div className="space-y-1">
              <p className="text-base font-medium text-gray-900">
                Ready to protect your festival ticket?
              </p>
              <p className="text-sm text-gray-600">
                One-time premium payment • No additional fees
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Premium</p>
              <p className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                £{premium}
              </p>
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-100/50 flex items-center justify-center gap-2 group" onClick={() => {
          alert("Purchase flow will be implemented here");
        }}>
            Purchase Policy
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <div className="flex items-center justify-center gap-6 mt-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3 text-purple-500" />
              Met Office data
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3 text-purple-500" />
              Secure payment
            </span>
          </div>
        </div>
      </div>
    </div>;
};
