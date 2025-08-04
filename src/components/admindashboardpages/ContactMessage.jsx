import React, { useEffect, useState } from 'react';
import { Mail, User, Phone, MessageSquare } from 'lucide-react';

const ContactMessage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const res = await fetch(`http://localhost:3000/contacts`);
      if (!res.ok) throw new Error('Failed to fetch messages');
      const data = await res.json();
      setMessages(data.reverse()); // recent first
    } catch (err) {
      console.error('Error fetching contact messages:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">User Contact Messages</h1>

        {loading ? (
          <div className="text-center mt-20 animate-pulse text-xl">Loading messages...</div>
        ) : messages.length === 0 ? (
          <p className="text-center">No messages found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/20 rounded-2xl shadow-md p-6 backdrop-blur-md hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-5 h-5" />
                  <h2 className="font-semibold text-lg">{msg.name}</h2>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <Mail className="w-5 h-5" />
                  <p>{msg.email}</p>
                </div>

                {msg.phone && (
                  <div className="flex items-center gap-2 mb-1">
                    <Phone className="w-5 h-5" />
                    <p>{msg.phone}</p>
                  </div>
                )}

                <div className="flex items-center gap-2 mt-3 mb-1">
                  <MessageSquare className="w-5 h-5" />
                  <p className="text-white font-medium">{msg.subject}</p>
                </div>

                <p className="mt-2 text-sm text-gray-300">{msg.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactMessage;
