'use client';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Bot, User, Send } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [botTyping, setBotTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const fetchBotResponse = async (userMessage) => {
    try {
      const response = await fetch('https://bvoc-chatbot.code4bharat.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data.reply;
    } catch (error) {
      console.error('Error fetching bot response:', error);
      return 'Sorry, I encountered an error while processing your request.';
    }
  };

  const handleSend = async () => {
    if (input.trim() === '') return;
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
    setBotTyping(true);

    setTimeout(async () => {
      const botResponse = await fetchBotResponse(input);
      setMessages((prev) => [...prev, { text: botResponse, sender: 'bot' }]);
      setBotTyping(false);
    }, 1000);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages, botTyping]);

  return (
    <>
      {/* Chat Widget Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100%-2rem)] sm:w-[32rem] md:w-[36rem] lg:w-[40rem] h-[70vh] sm:h-[28rem] rounded-2xl sm:rounded-3xl shadow-xl flex flex-col border border-gray-100 overflow-hidden bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-200 animate-gradient"
          >
            {/* Content container with padding */}
            <div className="flex flex-col h-full">
              {/* Heading */}
              <div className="px-4 sm:px-6 pt-4 sm:pt-8 pb-2 sm:pb-4">
                <div className="flex items-center mb-2 sm:mb-3">
                  <div className="bg-white p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-sm mr-3 sm:mr-4">
                    <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                  </div>
                  <div>
                    <h1 className="text-lg sm:text-xl font-semibold text-gray-800">NexBot Assistant</h1>
                    <p className="text-xs sm:text-sm text-gray-500">Ask me anything about your tasks</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="ml-auto bg-white p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:bg-gray-100 shadow-sm hover:cursor-pointer"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 px-4 sm:px-6 py-2 sm:py-4 overflow-y-auto space-y-3 sm:space-y-4 custom-scrollbar">
                <AnimatePresence initial={false}>
                  {messages.map((msg, index) => {
                    const isUser = msg.sender === 'user';

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className={`flex items-start gap-2 sm:gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        {!isUser && (
                          <div className="flex-shrink-0 mt-1 bg-white p-1.5 sm:p-2 rounded-full shadow-sm">
                            <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                          </div>
                        )}
                        <div
                          className={`px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl max-w-[85%] text-xs sm:text-sm leading-relaxed shadow-sm ${isUser
                              ? 'bg-purple-600 text-white'
                              : 'bg-white text-gray-700'
                            }`}
                        >
                          <ReactMarkdown>{msg.text}</ReactMarkdown>
                        </div>
                        {isUser && (
                          <div className="flex-shrink-0 mt-1 bg-purple-600 p-1.5 sm:p-2 rounded-full shadow-sm">
                            <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {botTyping && (
                  <div className="flex items-start gap-2 sm:gap-3 justify-start">
                    <div className="flex-shrink-0 mt-1 bg-white p-1.5 sm:p-2 rounded-full shadow-sm">
                      <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                    </div>
                    <div className="flex space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl max-w-[85%] text-xs sm:text-sm bg-white text-gray-700 shadow-sm">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-300 rounded-full animate-bounce delay-0"></span>
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-300 rounded-full animate-bounce delay-150"></span>
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-300 rounded-full animate-bounce delay-300"></span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Field */}
              <div className="p-3 sm:p-6 border-t border-gray-100">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white border border-gray-100 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-transparent transition-all duration-200 shadow-sm"
                  />
                  <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white p-2 sm:p-3 rounded-lg sm:rounded-xl transition-colors duration-200 shadow-sm hover:cursor-pointer"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 cursor-pointer">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 border border-gray-100"
          style={{ cursor: 'pointer' }} // Inline style to ensure the cursor pointer is applied
        >
          {isOpen ?
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" /> :
            <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
          }
        </motion.button>
      </div>


      {/* Custom Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(167, 139, 250, 0.8);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background-color: transparent;
          border-radius: 10px;
        }
        .custom-scrollbar {
          scroll-behavior: smooth;
        }
        .delay-0 {
          animation-delay: 0ms;
        }
        .delay-150 {
          animation-delay: 150ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }

        /* Gradient Animation */
        @keyframes gradientBG {
          0% {
            background: linear-gradient(45deg, #d8b4fe, #c4b5fd, #a78bfa);
          }
          50% {
            background: linear-gradient(45deg, #a78bfa, #8b5cf6, #7c3aed);
          }
          100% {
            background: linear-gradient(45deg, #d8b4fe, #c4b5fd, #a78bfa);
          }
        }

        .animate-gradient {
          animation: gradientBG 5s ease infinite;
        }

        /* Additional responsive styles for small screens */
        @media (max-width: 640px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 2px;
          }
        }
      `}</style>
    </>
  );
}