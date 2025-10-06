import { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import ValueProposition from './components/ValueProposition';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import DocumentationList from './components/DocumentationList';
import DocumentationDetail from './components/DocumentationDetail';
import FunctionList from './components/FunctionList';
import FunctionDetail from './components/FunctionDetail';
import WhatsAppButton from './components/WhatsAppButton';
import TalkToUsButton from './components/TalkToUsButton';
import FeedbackButton from './components/FeedbackButton';
import { documentationData } from './data/documentationData';
import { functionsData } from './data/functionsData';
import { DocumentationType } from './types/documentation';
import { FunctionType } from './types/function';

type ViewType = 'home' | 'services-list' | 'services-detail' | 'function-list' | 'function-detail';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedService, setSelectedService] = useState<DocumentationType | null>(null);
  const [selectedFunction, setSelectedFunction] = useState<FunctionType | null>(null);

  const handleSelectService = (service: DocumentationType) => {
    setSelectedService(service);
    setCurrentView('services-detail');
    window.scrollTo(0, 0);
  };

  const handleSelectFunction = (func: FunctionType) => {
    setSelectedFunction(func);
    setCurrentView('function-detail');
    window.scrollTo(0, 0);
  };

  const handleBackToServicesList = () => {
    setCurrentView('services-list');
    setSelectedService(null);
    window.scrollTo(0, 0);
  };

  const handleBackToFunctionList = () => {
    setCurrentView('function-list');
    setSelectedFunction(null);
    window.scrollTo(0, 0);
  };

  const handleNavigateToServices = () => {
    setCurrentView('services-list');
    window.scrollTo(0, 0);
  };

  const handleNavigateToFunctions = () => {
    setCurrentView('function-list');
    window.scrollTo(0, 0);
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  if (currentView === 'services-list') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          onNavigateHome={handleNavigateHome}
          onNavigateToServices={handleNavigateToServices}
          onNavigateToFunctions={handleNavigateToFunctions}
        />
        <DocumentationList documentations={documentationData} onSelectDoc={handleSelectService} />
        <Footer />
        <WhatsAppButton />
        <TalkToUsButton />
        <FeedbackButton />
      </div>
    );
  }

  if (currentView === 'services-detail' && selectedService) {
    return (
      <div className="min-h-screen bg-white">
        <Header
          onNavigateHome={handleNavigateHome}
          onNavigateToServices={handleNavigateToServices}
          onNavigateToFunctions={handleNavigateToFunctions}
        />
        <DocumentationDetail documentation={selectedService} onBack={handleBackToServicesList} />
        <Footer />
        <WhatsAppButton />
        <TalkToUsButton />
        <FeedbackButton />
      </div>
    );
  }

  if (currentView === 'function-list') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          onNavigateHome={handleNavigateHome}
          onNavigateToServices={handleNavigateToServices}
          onNavigateToFunctions={handleNavigateToFunctions}
        />
        <FunctionList functions={functionsData} onSelectFunction={handleSelectFunction} />
        <Footer />
        <WhatsAppButton />
        <TalkToUsButton />
        <FeedbackButton />
      </div>
    );
  }

  if (currentView === 'function-detail' && selectedFunction) {
    return (
      <div className="min-h-screen bg-white">
        <Header
          onNavigateHome={handleNavigateHome}
          onNavigateToServices={handleNavigateToServices}
          onNavigateToFunctions={handleNavigateToFunctions}
        />
        <FunctionDetail functionData={selectedFunction} onBack={handleBackToFunctionList} />
        <Footer />
        <WhatsAppButton />
        <TalkToUsButton />
        <FeedbackButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header
        onNavigateHome={handleNavigateHome}
        onNavigateToServices={handleNavigateToServices}
        onNavigateToFunctions={handleNavigateToFunctions}
      />
      <Hero onNavigateToServices={handleNavigateToServices} onNavigateToFunctions={handleNavigateToFunctions} />
      <Services onNavigateToServices={handleNavigateToServices} onNavigateToFunctions={handleNavigateToFunctions} />
      <ValueProposition />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <TalkToUsButton />
      <FeedbackButton />
    </div>
  );
}

export default App;
