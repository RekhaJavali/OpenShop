import React, { useState } from 'react';

const dummyMessages = [
  {
    id: 1,
    sender: 'Support Team',
    subject: 'Your ticket has been received',
    time: '2 hours ago',
    content: 'Thanks for reaching out. We will get back to you shortly.',
    unread: true,
  },
  {
    id: 2,
    sender: 'Admin',
    subject: 'System Maintenance',
    time: '1 day ago',
    content: 'Scheduled maintenance will occur this weekend.',
    unread: false,
  },
  {
    id: 3,
    sender: 'Help Center',
    subject: 'How to update your profile',
    time: '3 days ago',
    content: 'Click on the avatar at top right to access profile settings.',
    unread: false,
  },
];

const MessagesComponent = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* Message List */}
      <div className="col-span-1 bg-white rounded-xl shadow-md overflow-y-auto h-[500px]">
        <h2 className="text-lg font-semibold p-4 border-b">Messages</h2>
        <ul className="divide-y">
          {dummyMessages.map((msg) => (
            <li
              key={msg.id}
              onClick={() => setSelectedMessage(msg)}
              className={`p-4 cursor-pointer hover:bg-gray-50 ${
                msg.unread ? 'bg-blue-50 font-medium' : ''
              }`}
            >
              <p className="text-sm text-gray-600">{msg.sender}</p>
              <p className="text-sm truncate">{msg.subject}</p>
              <span className="text-xs text-gray-400">{msg.time}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Message Detail */}
      <div className="col-span-2 bg-white rounded-xl shadow-md p-6 h-[500px] overflow-y-auto">
        {selectedMessage ? (
          <>
            <h3 className="text-xl font-semibold mb-2">{selectedMessage.subject}</h3>
            <p className="text-sm text-gray-600 mb-1">From: {selectedMessage.sender}</p>
            <p className="text-sm text-gray-400 mb-4">{selectedMessage.time}</p>
            <p className="text-base text-gray-700">{selectedMessage.content}</p>
          </>
        ) : (
          <div className="text-center text-gray-400 mt-20">
            <p>Select a message to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesComponent;
