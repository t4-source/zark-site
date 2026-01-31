'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const CustomChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm here to help you with information about K RAGHAV & ASSOCIATES' services. How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Auto-popup disabled by request

  const quickReplies = useMemo(() => [
    "What are your practice areas?",
    "Tell me about banking & financial work",
    "Tell me about cybersecurity services",
    "How can I contact you?",
  ], []);

  const [suggestions, setSuggestions] = useState<string[]>(quickReplies);

  const getNextSuggestions = useCallback((userMessage: string): string[] => {
    const msg = userMessage.toLowerCase();

    if (msg.includes('practice') || msg.includes('area')) {
      return [
        "Tell me about banking & financial work",
        "Tell me about cybersecurity services",
        "How can I contact you?",
      ];
    }

    if (msg.includes('cybersecurity') || msg.includes('cyber')) {
      return [
        "What are your practice areas?",
        "Tell me about banking & financial work",
        "How can I contact you?",
      ];
    }

    if (msg.includes('contact') || msg.includes('phone') || msg.includes('email')) {
      return [
        "What are your practice areas?",
        "Tell me about cybersecurity services",
        "Tell me about banking & financial work",
      ];
    }

    if (msg.includes('career') || msg.includes('job') || msg.includes('employment') || msg.includes('hiring') || msg.includes('work')) {
      return [
        "What are your practice areas?",
        "Tell me about cybersecurity services",
        "How can I contact you?",
      ];
    }

    if (msg.includes('banking') || msg.includes('financial')) {
      return [
        "What are your practice areas?",
        "Tell me about cybersecurity services",
        "How can I contact you?",
      ];
    }

    return quickReplies;
  }, [quickReplies]);

  const handleQuickReply = (reply: string) => {
    setInputText(reply);
    handleSendMessage(reply);
  };

  const getBotResponse = useCallback((userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if ((message.includes('service') || message.includes('offer')) && !message.includes('financial')) {
      return "We offer comprehensive chartered accountancy practice areas including audit & assurance, taxation, risk advisory, and business consulting. We also provide cybersecurity services. You can explore our practice areas and cybersecurity services on our website.";
    }

    if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
      return "You can reach us at:\n📧 Email: raghav@kraca.in\n📞 Phone: +91-9936104447\n📍 Address: 105, Chintels House, 16 Station Road, Lucknow - 226001, UP, India";
    }

    if (message.includes('cybersecurity') || message.includes('cyber')) {
      return "Our cybersecurity services include VAPT (Vulnerability Assessment & Penetration Testing), Security Audit & Compliance, Managed SOC, Cloud Security, and Cybersecurity Training. We help protect your digital assets and ensure compliance with security standards.";
    }

    if (message.includes('practice') || message.includes('area')) {
      return "Our practice areas include Public Sector Audits, Private Sector Audits, Banking & Financial Institutions, Stock Verification, Risk Advisory, and Project Financing. We serve clients across various industries with specialized expertise.";
    }

    if (message.includes('audit') || message.includes('assurance')) {
      return "We provide comprehensive audit and assurance services for both public and private sector organizations. Our team ensures compliance with regulatory requirements and helps improve your financial processes.";
    }

    if (message.includes('tax') || message.includes('taxation')) {
      return "Our taxation services include GST compliance, income tax planning, corporate tax advisory, and tax return filing. We help businesses optimize their tax strategies while ensuring full compliance.";
    }

    if (message.includes('cost') || message.includes('price') || message.includes('fee')) {
      return "Our fees are competitive and depend on the scope of services required. For a detailed quote, please contact us directly at raghav@kraca.in or call +91-9936104447. We'd be happy to discuss your specific requirements.";
    }

    if (message.includes('experience') || message.includes('year') || message.includes('established')) {
      return "K RAGHAV & ASSOCIATES was established on April 4, 1997, giving us over 25 years of experience in chartered accountancy. We are members of CII and Young Indians, demonstrating our commitment to professional excellence.";
    }

    if (message.includes('location') || message.includes('office') || message.includes('address')) {
      return "Our head office is located at 105, Chintels House, 16 Station Road, Lucknow - 226001, UP, India. We serve clients across India and internationally.";
    }

    if (message.includes('appointment') || message.includes('meeting') || message.includes('consultation')) {
      return "To schedule a consultation or appointment, please contact us at raghav@kraca.in or call +91-9936104447. We'll be happy to arrange a meeting to discuss your requirements.";
    }

    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon') || message.includes('good evening')) {
      return "Hello! Welcome to K RAGHAV & ASSOCIATES. I'm Vitta, your AI assistant. How can I help you today?";
    }

    // Banking and Financial
    if (message.includes('banking') || message.includes('financial') || message.includes('stock') || message.includes('verification')) {
      return "Our banking and financial practice areas include stock verification, financial analysis, banking audits, and financial consulting. We work with banks, financial institutions, and corporate clients.";
    }

    // Risk Advisory
    if (message.includes('risk') || message.includes('advisory') || message.includes('consulting')) {
      return "Our risk advisory services help businesses identify, assess, and manage various risks. We provide strategic consulting, risk assessment, and advisory services to improve your business operations.";
    }

    // Project Financing
    if (message.includes('project') || message.includes('financing') || message.includes('funding')) {
      return "Our project financing services include financial planning, project evaluation, funding assistance, and financial structuring. We help businesses secure funding for their projects and growth initiatives.";
    }

    // Careers
    if (message.includes('career') || message.includes('job') || message.includes('employment') || message.includes('hiring') || message.includes('work')) {
      return "We offer career opportunities in audit, consulting, cybersecurity, and more. Visit our careers page or contact us at raghav@kraca.in to learn about current openings and opportunities.";
    }

    // Team and Staff
    if (message.includes('team') || message.includes('staff') || message.includes('people') || message.includes('employees')) {
      return "Our team consists of qualified chartered accountants, cybersecurity experts, and business consultants. We have over 87+ team members across 4 office locations, bringing diverse expertise to serve our clients.";
    }

    // Clients and Industries
    if (message.includes('client') || message.includes('industry') || message.includes('sector') || message.includes('who do you serve')) {
      return "We serve clients across various industries including banking, manufacturing, IT, healthcare, and government sectors. Our clients range from startups to large corporations and public sector organizations.";
    }

    // Certifications and Memberships
    if (message.includes('certification') || message.includes('membership') || message.includes('cii') || message.includes('young indians')) {
      return "We are members of the Confederation of Indian Industry (CII) and Young Indians. These memberships demonstrate our commitment to professional excellence and industry best practices.";
    }

    // Help and Support
    if (message.includes('help') || message.includes('support') || message.includes('assistance')) {
      return "I'm here to help! I can provide information about our practice areas, cybersecurity services, contact details, and more. What specific information do you need?";
    }

    // Thank you responses
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! Is there anything else I can help you with?";
    }

    // Default response
    return "Thank you for your message! For detailed information about our practice areas and cybersecurity services, please visit our website or contact us directly at raghav@kraca.in or +91-9936104447. Our team will be happy to assist you with your specific requirements.";
  }, []);

  const handleSendMessage = useCallback((text?: string) => {
    const messageText = text || inputText.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
      };
      const nextSuggestions = getNextSuggestions(messageText);
      setMessages(prev => [...prev, botMessage]);
      setSuggestions(nextSuggestions);
      setIsTyping(false);
    }, 1000);
  }, [inputText, getBotResponse, getNextSuggestions]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group focus:outline-none"
          aria-label="Open chat"
        >
          <div className="relative inline-flex items-center">
            {/* Bubble */}
            <div className="flex items-center gap-3 bg-white text-slate-900 px-4 py-3 rounded-2xl shadow-xl border border-slate-200 max-w-xs sm:max-w-sm">
              <div className="w-9 h-9 rounded-full overflow-hidden shadow-sm flex-shrink-0">
                <Image 
                  src="/bot.gif" 
                  alt="Chat assistant" 
                  width={36} 
                  height={36} 
                  className="w-full h-full object-cover"
                  unoptimized
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  Need help?
                  <span className="flex gap-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  </span>
                </span>
                <span className="text-sm font-semibold text-slate-900 leading-tight">
                  Chat with me
                </span>
              </div>
            </div>
            {/* Tail */}
            <div className="absolute -bottom-1 right-6 w-3 h-3 bg-white border-r border-b border-slate-200 rotate-45" />
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100%-2rem)] max-w-md h-[65vh] sm:h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                <Image 
                  src="/bot.gif" 
                  alt="Vitta" 
                  width={32} 
                  height={32} 
                  className="w-full h-full object-cover"
                  unoptimized
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-semibold">Vitta</h3>
                <p className="text-xs text-blue-100">AI Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-blue-100 hover:text-white transition-colors"
                title={isMinimized ? "Expand chat" : "Minimize chat"}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMinimized ? "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" : "M20 12H4"} />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-blue-100 hover:text-white transition-colors"
                title="Close chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          {!isMinimized && (
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap font-medium">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            </div>
          )}

          {/* Quick Replies */}
          {!isMinimized && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-600 mb-2 font-medium">You can also ask:</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full transition-colors font-medium"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          {!isMinimized && (
            <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900 placeholder-gray-500 bg-white"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg transition-colors text-sm"
              >
                Send
              </button>
            </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CustomChatbot;
