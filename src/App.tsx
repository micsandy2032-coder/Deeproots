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

type ViewType = 'home' | 'documentation-list' | 'documentation-detail' | 'function-list' | 'function-detail';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedDoc, setSelectedDoc] = useState<DocumentationType | null>(null);
  const [selectedFunction, setSelectedFunction] = useState<FunctionType | null>(null);

  const handleSelectDoc = (doc: DocumentationType) => {
    setSelectedDoc(doc);
    setCurrentView('documentation-detail');
    window.scrollTo(0, 0);
  };

  const handleSelectFunction = (func: FunctionType) => {
    setSelectedFunction(func);
    setCurrentView('function-detail');
    window.scrollTo(0, 0);
  };

  const handleBackToDocList = () => {
    setCurrentView('documentation-list');
    setSelectedDoc(null);
    window.scrollTo(0, 0);
  };

  const handleBackToFunctionList = () => {
    setCurrentView('function-list');
    setSelectedFunction(null);
    window.scrollTo(0, 0);
  };

  const handleNavigateToDocumentation = () => {
    setCurrentView('documentation-list');
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

  if (currentView === 'documentation-list') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          onNavigateHome={handleNavigateHome}
          onNavigateToDocumentation={handleNavigateToDocumentation}
          onNavigateToFunctions={handleNavigateToFunctions}
        />
        <DocumentationList documentations={documentationData} onSelectDoc={handleSelectDoc} />
        <Footer />
        <WhatsAppButton />
        <TalkToUsButton />
        <FeedbackButton />
      </div>
    );
  }

  if (currentView === 'documentation-detail' && selectedDoc) {
    return (
      <div className="min-h-screen bg-white">
        <Header
          onNavigateHome={handleNavigateHome}
          onNavigateToDocumentation={handleNavigateToDocumentation}
          onNavigateToFunctions={handleNavigateToFunctions}
        />
        <DocumentationDetail documentation={selectedDoc} onBack={handleBackToDocList} />
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
          onNavigateToDocumentation={handleNavigateToDocumentation}
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
          onNavigateToDocumentation={handleNavigateToDocumentation}
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
        onNavigateToDocumentation={handleNavigateToDocumentation}
        onNavigateToFunctions={handleNavigateToFunctions}
      />
      <Hero onNavigateToDocumentation={handleNavigateToDocumentation} onNavigateToFunctions={handleNavigateToFunctions} />
      <Services onNavigateToDocumentation={handleNavigateToDocumentation} onNavigateToFunctions={handleNavigateToFunctions} />
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
