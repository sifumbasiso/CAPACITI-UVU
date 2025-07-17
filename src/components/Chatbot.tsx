import React, { useState, useEffect } from 'react';
import { Send, Bot, User, X, MessageSquare, HelpCircle, Mic, MicOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import 'regenerator-runtime/runtime';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const CAPACITI_INFO = {
  greeting: [
    "Hi! I'm the UVU Capaciti assistant. How can I help you today?",
    "Hello! Welcome to UVU Capaciti. What would you like to know about our programs?",
    "Welcome! I'm here to help you learn more about UVU Capaciti. What can I assist you with?"
  ],
  stipend: {
    amount: "R7,500 per month",
    details: "All candidates receive a monthly stipend of R7,500 during their training period. This stipend helps cover living expenses while you focus on learning.",
    benefits: "Additional benefits include:\n- Internet allowance\n- Learning materials\n- Industry certifications\n- Career development support"
  },
  faqs: [
    {
      question: "How much is the monthly stipend?",
      answer: "Candidates receive a monthly stipend of R7,500 to support their learning journey."
    },
    {
      question: "What are the program requirements?",
      answer: "Basic requirements include strong interest in technology, computer literacy, English proficiency, and dedication to learning."
    },
    {
      question: "How long are the programs?",
      answer: "Program durations vary: Software Development (12 months), Data Analytics (6 months), Digital Marketing (6 months), and Cloud Computing (9 months)."
    },
    {
      question: "Is there job placement assistance?",
      answer: "Yes! We have an 85% employment rate and provide career support, industry connections, and job placement assistance."
    },
    {
      question: "Where are the classes held?",
      answer: "Classes are held in Cape Town, South Africa. We provide a modern learning environment with state-of-the-art facilities."
    }
  ],
  about: {
    general: "UVU Capaciti is a transformative digital skills development program in Africa, focusing on preparing youth for the digital economy through practical, industry-aligned training.",
    mission: "Our mission is to bridge the digital skills gap in Africa and create sustainable employment opportunities in the technology sector.",
    impact: "We've trained over 1000+ students, with an 85% employment rate and partnerships with 50+ industry leaders."
  },
  programs: {
    "software development": {
      name: "Software Development",
      description: "Our 12-month Software Development program teaches you modern web and mobile development.",
      skills: ["JavaScript", "React", "Node.js", "Python", "Database Management"],
      duration: "12 months",
      career: "Become a full-stack developer, frontend specialist, or backend engineer.",
      link: "/programs"
    },
    "data analytics": {
      name: "Data Analytics",
      description: "Master data analysis techniques and tools to drive business decisions.",
      skills: ["SQL", "Python", "Data Visualization", "Statistical Analysis", "Machine Learning"],
      duration: "6 months",
      career: "Work as a data analyst, business intelligence specialist, or data scientist.",
      link: "/programs"
    },
    "digital marketing": {
      name: "Digital Marketing",
      description: "Learn comprehensive digital marketing strategies and campaign management.",
      skills: ["SEO", "Social Media Marketing", "Content Strategy", "Analytics", "PPC"],
      duration: "6 months",
      career: "Become a digital marketing specialist, social media manager, or content strategist.",
      link: "/programs"
    },
    "cloud computing": {
      name: "Cloud Computing",
      description: "Master cloud technologies and infrastructure management.",
      skills: ["AWS", "Azure", "DevOps", "Security", "Infrastructure as Code"],
      duration: "9 months",
      career: "Work as a cloud engineer, DevOps specialist, or cloud architect.",
      link: "/programs"
    }
  },
  application: {
    process: "The application process is simple:\n1. Fill out our online application form\n2. Complete a basic assessment\n3. Attend an interview\n4. Receive your admission decision",
    requirements: "Basic requirements include:\n- Strong interest in technology\n- Basic computer literacy\n- English proficiency\n- Dedication to learning",
    support: "We offer financial aid and flexible payment options for eligible students."
  },
  contact: {
    email: "info@uvucapaciti.com",
    phone: "+27 (0) 21 123 4567",
    location: "Cape Town, South Africa",
    hours: "Monday-Friday: 9:00 AM - 5:00 PM\nSaturday: 9:00 AM - 1:00 PM"
  }
};

const Chatbot = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showFAQs, setShowFAQs] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: CAPACITI_INFO.greeting[Math.floor(Math.random() * CAPACITI_INFO.greeting.length)],
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setInputText(transcript);
    }
  }, [transcript]);

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      setIsListening(false);
    } else {
      SpeechRecognition.startListening({ continuous: true });
      setIsListening(true);
      resetTranscript();
    }
  };

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    // Check if query is irrelevant to UVU Capaciti
    const relevantKeywords = [
      'program', 'course', 'stipend', 'apply', 'application', 'career', 'job',
      'capaciti', 'uvu', 'training', 'learn', 'study', 'cost', 'fee', 'duration',
      'requirement', 'contact', 'location', 'about', 'software', 'data', 'marketing',
      'cloud', 'certificate', 'qualification', 'campus', 'class'
    ];

    const isRelevant = relevantKeywords.some(keyword => lowerQuery.includes(keyword));
    
    if (!isRelevant) {
      return "I apologize, but I can only answer questions related to UVU Capaciti's programs, applications, and services. Please ask me about our courses, application process, stipend, or any other UVU Capaciti-related topics.";
    }

    // Stipend related queries
    if (lowerQuery.includes('stipend') || lowerQuery.includes('salary') || lowerQuery.includes('pay') || lowerQuery.includes('money')) {
      return `${CAPACITI_INFO.stipend.details}\n\n${CAPACITI_INFO.stipend.benefits}`;
    }

    // Greeting patterns
    if (lowerQuery.includes('hi') || lowerQuery.includes('hello') || lowerQuery.includes('hey')) {
      return "Hello! How can I help you learn more about UVU Capaciti?";
    }

    // Program related queries
    if (lowerQuery.includes('program') || lowerQuery.includes('course')) {
      const programMatches = Object.entries(CAPACITI_INFO.programs).find(([key]) => 
        lowerQuery.includes(key)
      );

      if (programMatches) {
        const [_, program] = programMatches;
        return `${program.name}: ${program.description}\n\nDuration: ${program.duration}\nKey Skills: ${program.skills.join(', ')}\nCareer Opportunities: ${program.career}\n\nWould you like to learn more about this program or see our other offerings?`;
      }
      return "We offer several programs including Software Development (12 months), Data Analytics (6 months), Digital Marketing (6 months), and Cloud Computing (9 months). Which program interests you?";
    }

    // Application and requirements
    if (lowerQuery.includes('apply') || lowerQuery.includes('application') || lowerQuery.includes('how to join')) {
      return CAPACITI_INFO.application.process + "\n\n" + CAPACITI_INFO.application.requirements;
    }

    // Cost and financial support
    if (lowerQuery.includes('cost') || lowerQuery.includes('fee') || lowerQuery.includes('price') || lowerQuery.includes('financial')) {
      return CAPACITI_INFO.application.support + "\n\nWould you like to speak with our admissions team about financial options?";
    }

    // Contact information
    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('phone') || lowerQuery.includes('location')) {
      return `You can reach us at:\nEmail: ${CAPACITI_INFO.contact.email}\nPhone: ${CAPACITI_INFO.contact.phone}\nLocation: ${CAPACITI_INFO.contact.location}\n\nOffice Hours:\n${CAPACITI_INFO.contact.hours}`;
    }

    // About UVU Capaciti
    if (lowerQuery.includes('about') || lowerQuery.includes('what is') || lowerQuery.includes('tell me more')) {
      return `${CAPACITI_INFO.about.general}\n\n${CAPACITI_INFO.about.mission}\n\nOur Impact:\n${CAPACITI_INFO.about.impact}`;
    }

    // Career opportunities
    if (lowerQuery.includes('career') || lowerQuery.includes('job') || lowerQuery.includes('employment')) {
      return "Our programs have an 85% employment rate! Each program prepares you for specific career paths. Would you like to learn about career opportunities for a specific program?";
    }

    // Default response
    return "I can help you with information about our programs, application process, career opportunities, and more. What would you like to know?";
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage: Message = {
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    const botResponse: Message = {
      text: generateResponse(inputText),
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputText('');
    resetTranscript();
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col"
          >
            <div className="bg-[#001F3F] text-white p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center gap-2">
                {showFAQs ? (
                  <HelpCircle className="w-6 h-6" />
                ) : (
                  <Bot className="w-6 h-6" />
                )}
                <h3 className="font-semibold">
                  {showFAQs ? 'Frequently Asked Questions' : 'UVU Capaciti Assistant'}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowFAQs(!showFAQs)}
                  className="hover:bg-[#003366] p-1 rounded"
                >
                  {showFAQs ? <Bot className="w-5 h-5" /> : <HelpCircle className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-[#003366] p-1 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {showFAQs ? (
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {CAPACITI_INFO.faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-[#001F3F] mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 ${
                        message.sender === 'user' ? 'flex-row-reverse' : ''
                      }`}
                    >
                      <div className={`rounded-full p-2 ${
                        message.sender === 'user' 
                          ? 'bg-[#FF6B6B]' 
                          : 'bg-[#001F3F]'
                      }`}>
                        {message.sender === 'user' 
                          ? <User className="w-5 h-5 text-white" />
                          : <Bot className="w-5 h-5 text-white" />
                        }
                      </div>
                      <div className={`max-w-[70%] rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-[#FF6B6B] text-white'
                          : 'bg-[#001F3F] text-white'
                      }`}>
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <span className="text-xs opacity-70 mt-1 block">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="p-4 border-t">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#001F3F] focus:border-transparent"
                    />
                    {browserSupportsSpeechRecognition && (
                      <button
                        type="button"
                        onClick={toggleListening}
                        className={`p-2 rounded-lg ${
                          isListening 
                            ? 'bg-red-500 hover:bg-red-600' 
                            : 'bg-[#001F3F] hover:bg-[#003366]'
                        } text-white transition-colors duration-200`}
                      >
                        {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                      </button>
                    )}
                    <button
                      type="submit"
                      className="bg-[#FF6B6B] text-white rounded-lg px-4 py-2 hover:bg-[#FF5252] transition-colors duration-200"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-[#001F3F] text-white p-4 rounded-full shadow-lg hover:bg-[#003366] transition-colors duration-200"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </>
  );
};

export default Chatbot;