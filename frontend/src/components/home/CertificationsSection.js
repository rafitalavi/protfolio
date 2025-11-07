import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import SectionContainer from "../common/SectionContainer";

const CertificationsSection = ({ certifications }) => {
  if (!certifications || certifications.length === 0) return null;

  // Sort by most recent first
  const sortedCerts = [...certifications].sort((a, b) => 
    new Date(b.issue_date) - new Date(a.issue_date)
  );

  const formatDate = (dateString) => {
    if (!dateString) return 'Not specified';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return 'Invalid date';
    }
  };

  return (
    <SectionContainer
      title="Certifications"
      subtitle="Verified credentials demonstrating my expertise and commitment"
      icon={FaCertificate}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCerts.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            whileHover={{ y: -6 }}
          >
            {/* Header */}
            <div className="flex-1">
              <h3 className="font-semibold text-xl text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-3">
                <span className="font-medium">{cert.issuer}</span>
              </p>
              
              {/* <p className="text-gray-500 text-xs mb-4">
                Issued: {formatDate(cert.issue_date)}
              </p> */}

              {/* Description */}
              {cert.description && (
                <div className="mb-4">
                  <div
                    className="text-gray-700 text-sm leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: cert.description }}
                  />
                </div>
              )}
            </div>

            {/* Footer with link */}
            {cert.credential_url && (
              <div className="pt-4 border-t border-gray-200 mt-auto">
                <a
                  href={cert.credential_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold flex items-center gap-2 group/link"
                >
                  <FaExternalLinkAlt className="text-xs group-hover/link:translate-x-1 transition-transform" />
                  Verify Credential
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default CertificationsSection;