import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, UtensilsCrossed, Clock, Users, Phone } from "lucide-react";

const Restaurant = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6">
              <UtensilsCrossed className="w-4 h-4 mr-2" />
              Restaurants
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              AI reception that seats more guests
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Handle calls, reservations, and waitlist automatically. Reduce
              missed calls and fill last-minute openings without adding
              front-of-house headcount.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Reservation triage
              </h3>
              <p className="text-gray-600">
                Waitlist, party size, special requests captured and synced to
                your system.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Live availability
              </h3>
              <p className="text-gray-600">
                Reads real-time tables and offers the best slot to maximize
                covers.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Loyalty & notes
              </h3>
              <p className="text-gray-600">
                Recognizes VIPs, stores notes, and personalizes the experience.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What gets automated
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3"></span>{" "}
                Phone triage for reservations, hours, and directions
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3"></span>{" "}
                Waitlist creation and ETA updates
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3"></span>{" "}
                Policy handling and special requests
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3"></span>{" "}
                Post-call SMS confirmations and reminders
              </li>
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="tel:+12345678900"
                className="inline-flex items-center text-gray-700 hover:text-purple-600 transition"
              >
                <Phone className="w-4 h-4 mr-2" /> Talk to sales
              </a>
            </div>
          </div>

          {/* Outcomes */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">
                Fewer missed calls
              </h3>
              <p className="text-gray-600 text-sm">
                Answer 100% of calls during rush with instant triage and SMS
                follow‑ups.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">
                Higher seat utilization
              </h3>
              <p className="text-gray-600 text-sm">
                Auto‑fill cancellations and balance tables to maximize turns.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">
                Happier guests
              </h3>
              <p className="text-gray-600 text-sm">
                Remember preferences, allergies, and notes for a consistent
                experience.
              </p>
            </div>
          </div>

          {/* Integrations */}
          <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Works with your tools
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Connects to reservation and CRM systems to sync bookings, guests,
              and notes in real‑time.
            </p>
            <ul className="flex flex-wrap gap-3 text-sm text-gray-700">
              <li className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200">
                OpenTable
              </li>
              <li className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200">
                SevenRooms
              </li>
              <li className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200">
                Toast
              </li>
              <li className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200">
                Square
              </li>
              <li className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200">
                HubSpot
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can it handle multi‑location routing?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes. We route by location, hours, and capacity, and log the
                right store on each interaction.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                What if our policies change?
              </h3>
              <p className="text-gray-600 text-sm">
                Update your policies in the dashboard or via an
                integration—Ressy AI adapts instantly.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Restaurant;
