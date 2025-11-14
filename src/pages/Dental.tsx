import {
  ArrowLeft,
  Heart,
  Calendar,
  FileCheck,
  Bell,
  Phone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ScheduleDemoModal from "@/components/ScheduleDemoModal";

const Dental = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 rounded-full bg-black text-white text-sm font-semibold hover:scale-105 transition"
            >
              Schedule a demo
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Dental Clinics
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              AI intake that keeps your chairs full
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Book cleanings and treatments 24/7, verify insurance, and send
              reminders that reduce no‑shows—all without front desk bottlenecks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Appointment booking
              </h3>
              <p className="text-gray-600">
                Schedules hygiene, treatments, and emergencies in the right
                slots.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Insurance verification
              </h3>
              <p className="text-gray-600">
                Collects member IDs and verifies eligibility during intake.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Bell className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Reminders & recalls
              </h3>
              <p className="text-gray-600">
                Automated confirmations and recall campaigns reduce no‑shows.
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
                Patient intake and medical questionnaire
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3"></span>{" "}
                Insurance capture and verification prompts
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3"></span>{" "}
                Treatment categorization and chair time matching
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3"></span>{" "}
                SMS/email confirmations, reminders, and recalls
              </li>
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-full bg-black text-white font-semibold hover:scale-105 transition"
              >
                Get a dental demo
              </button>
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
                Reduced no‑shows
              </h3>
              <p className="text-gray-600 text-sm">
                Automated confirmations and recall campaigns keep the schedule
                full.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">
                Faster intake
              </h3>
              <p className="text-gray-600 text-sm">
                Insurance capture during calls speeds up front‑desk workflows.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">
                Better chair utilization
              </h3>
              <p className="text-gray-600 text-sm">
                Assigns the right time blocks based on treatment type.
              </p>
            </div>
          </div>

          {/* Integrations */}
          <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Works with your tools
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Connects to practice management and CRM systems to sync patients
              and appointments.
            </p>
            <ul className="flex flex-wrap gap-3 text-sm text-gray-700">
              <li className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200">
                Dentrix
              </li>
              <li className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200">
                Eaglesoft
              </li>
              <li className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200">
                Open Dental
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
                Do you support insurance verification?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes. We capture and validate insurance details as part of intake
                workflows.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can you triage emergencies?
              </h3>
              <p className="text-gray-600 text-sm">
                We prioritize urgent calls and surface emergency slots when
                available.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Schedule Demo Modal */}
      <ScheduleDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Dental;
