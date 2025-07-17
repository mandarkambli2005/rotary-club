import React from "react";
import { ExternalLink, Users } from "lucide-react";

const RegisterForm = () => {
  // Replace these with your actual Google Form link and QR code
  const googleFormLink = "https://forms.gle/sEq3LSHNBinbixRQ8";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform transition-all duration-300 hover:scale-105">
          {/* Header */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Registration
            </h1>
            <p className="text-gray-600">
              Join us by completing the registration form
            </p>
          </div>

          {/* QR Code Section */}
          <div className="mb-8">
            <div className="bg-gray-50 rounded-xl p-6 mb-4">
              <div className="w-48 h-48 bg-white rounded-lg mx-auto flex items-center justify-center border-2 border-dashed border-gray-300">
                {/* <div className="text-center"> */}
                {/*   <QrCode className="w-16 h-16 text-gray-400 mx-auto mb-2" /> */}
                {/*   <p className="text-sm text-gray-500">QR Code</p> */}
                {/*   <p className="text-xs text-gray-400">Scan to register</p> */}
                {/* </div> */}
                <img
                  src="/images/qrcode.jpeg"
                  alt="qrcode"
                  className="w-full h-full"
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              <span className="font-semibold">Quick Registration:</span> Scan
              the QR code with your phone camera
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center mb-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="px-4 text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Link Button */}
          <button
            onClick={() => window.open(googleFormLink, "_blank")}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
          >
            <ExternalLink className="w-5 h-5" />
            Open Registration Form
          </button>

          {/* Features */}
        </div>

        {/* Additional Info */}
      </div>
    </div>
  );
};

export default RegisterForm;
