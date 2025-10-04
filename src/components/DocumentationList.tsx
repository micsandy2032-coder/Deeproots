import { Search, ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { useState } from 'react';
import { DocumentationType } from '../types/documentation';

interface DocumentationListProps {
  documentations: DocumentationType[];
  onSelectDoc: (doc: DocumentationType) => void;
}

export default function DocumentationList({ documentations, onSelectDoc }: DocumentationListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(documentations.map(doc => doc.category)))];

  const filteredDocs = documentations.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Documentation & Services Guide</h1>
          <p className="text-xl text-emerald-100 max-w-3xl">
            Comprehensive guides for business registration, compliance, and licensing. Everything you need to start and grow your business.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for services, registrations, licenses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredDocs.length}</span> service{filteredDocs.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => {
            const IconComponent = Icons[doc.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

            return (
              <div
                key={doc.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => onSelectDoc(doc)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-emerald-100 p-3 rounded-lg group-hover:bg-emerald-600 transition-colors">
                      {IconComponent && (
                        <IconComponent className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                      )}
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                      {doc.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {doc.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {doc.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-500">
                      {doc.timeline}
                    </div>
                    <div className="flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredDocs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No services found matching your search.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="mt-4 text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              Clear Filters
            </button>
          </div>
        )}

        <div className="mt-16 bg-emerald-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-emerald-100 mb-6">
              Our team of experts is here to help you with any business registration, compliance, or licensing needs. Get in touch with us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                Contact Our Experts
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
