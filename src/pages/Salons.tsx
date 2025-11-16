import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Scissors, Bell, Package, Users, Phone } from "lucide-react";

const Salons = () => {
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
              <Scissors className="w-4 h-4 mr-2" />
              Salons & Spas
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              AI booking that reduces no-shows
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Automate intake, deposits, and reminders. Fill calendars with the
              right services and stylists while reducing last-minute
              cancellations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Service matching</h3>
              <p className="text-gray-600">
                Recommends services and pros based on client goals and
                availability.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Package className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Deposits & policies</h3>
              <p className="text-gray-600">
                Collects deposits and shares policies to cut cancellations.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Bell className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Reminders & upsell
              </h3>
              <p className="text-gray-600">
                Sends confirmations, nudges retail add‑ons, and reduces
                no‑shows.
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
                Client intake with service consultation
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3"></span>{" "}
                Deposit collection and policy acknowledgement
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3"></span>{" "}
                Stylist matching and slot selection
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3"></span>{" "}
                SMS/email reminders and follow‑ups
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
                Higher show rates
              </h3>
              <p className="text-gray-600 text-sm">
                Deposits and reminders reduce last‑minute cancellations and
                no‑shows.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">
                Better utilization
              </h3>
              <p className="text-gray-600 text-sm">
                Service matching fills gaps with the right appointment lengths.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">More retail</h3>
              <p className="text-gray-600 text-sm">
                Proactive upsell of add‑ons and retail improves ticket size.
              </p>
            </div>
          </div>

          {/* Integrations */}
          <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Works with your tools
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Connects to booking and CRM systems to sync clients, services, and
              payments.
            </p>
            <ul className="flex flex-wrap gap-3 text-sm text-gray-700">
              <li className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200">
                Fresha
              </li>
              <li className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200">
                Vagaro
              </li>
              <li className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200">
                Acuity
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
                Can you enforce deposits?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes. We collect deposits securely and apply your cancellation
                policies.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Do you support stylist preferences?
              </h3>
              <p className="text-gray-600 text-sm">
                We capture hair history and preferred pros to personalize the
                booking.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Salons;


