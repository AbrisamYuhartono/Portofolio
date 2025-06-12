import React, { useState } from 'react';
import { Award, X, Calendar, Building, CheckCircle } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { Certification } from '../types';

const Certifications: React.FC = () => {
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const openModal = (certification: Certification) => {
    setSelectedCertification(certification);
  };

  const closeModal = () => {
    setSelectedCertification(null);
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <>
      <section id="certifications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Professional certifications and continuous learning achievements
            </p>
          </div>

          {/* Certification Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.slice(0, visibleCount).map((certification) => (
              <div
                key={certification.id}
                onClick={() => openModal(certification)}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 shadow-lg 
                           hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 
                           cursor-pointer group border border-gray-100"
              >
                <div className="w-16 h-16 bg-white rounded-lg mb-4 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
                  {/* Issuer Logo or Icon */}
                  {certification.issuer === 'IBM' || certification.issuer === 'Cisco' ? (
                    <img
                      src={
                        certification.issuer === 'IBM'
                          ? 'https://github.com/AbrisamYuhartono/Portofolio/blob/main/Media/IBM.png?raw=true'
                          : 'https://github.com/AbrisamYuhartono/Portofolio/blob/main/Media/Cisco.png?raw=true'
                      }
                      alt={`${certification.issuer} logo`}
                      className="w-12 h-12 rounded-lg object-contain"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  {certification.title}
                </h3>

                {/* Issuer */}
                <p className="text-blue-600 font-semibold mb-3">{certification.issuer}</p>

                {/* Date */}
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {certification.dateIssued}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {certification.skills.slice(0, 2).map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-white text-xs text-gray-700 rounded-full shadow-sm">
                      {skill}
                    </span>
                  ))}
                  {certification.skills.length > 2 && (
                    <span className="px-2 py-1 bg-blue-100 text-xs text-blue-700 rounded-full">
                      +{certification.skills.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {certifications.length > 8 && (
            <div className="mt-8 flex justify-center gap-4">
              {visibleCount < certifications.length && (
                <button
                  onClick={loadMore}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Load More
                </button>
              )}
              {visibleCount > 8 && (
                <button
                  onClick={() => setVisibleCount(8)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Show Less
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedCertification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">Certification Details</h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Image */}
              <div className="w-full h-full rounded-xl overflow-hidden border-2 border-gray-200 shadow-sm">
                {selectedCertification.image ? (
                  <img
                    src={selectedCertification.image}
                    alt={`${selectedCertification.title} Certificate`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center">
                      <Award className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Certificate Image Not Available</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900">{selectedCertification.title}</h4>

                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center">
                    <Building className="h-4 w-4 mr-2" />
                    <span className="font-semibold">{selectedCertification.issuer}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Issued {selectedCertification.dateIssued}</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">{selectedCertification.description}</p>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Skills Covered
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedCertification.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;
