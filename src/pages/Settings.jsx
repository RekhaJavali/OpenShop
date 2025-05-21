import React, { useState } from 'react';

const SettingsComponent = () => {
  const [username, setUsername] = useState('JohnDoe');
  const [language, setLanguage] = useState('en');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleSave = () => {
    const settings = {
      username,
      language,
      isDarkMode,
      notificationsEnabled,
    };
    console.log('Saved Settings:', settings);
    // API call logic goes here
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl space-y-6">
      <h2 className="text-2xl font-semibold">Settings</h2>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Username</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your username"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Language</label>
        <select
          value={language}
          onChange={e => setLanguage(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm">Dark Mode</span>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
            className="sr-only"
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full shadow-inner peer-checked:bg-blue-600 transition-colors duration-300 relative">
            <div
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                isDarkMode ? 'translate-x-full' : ''
              }`}
            ></div>
          </div>
        </label>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm">Enable Notifications</span>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
            className="sr-only"
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full shadow-inner peer-checked:bg-blue-600 transition-colors duration-300 relative">
            <div
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                notificationsEnabled ? 'translate-x-full' : ''
              }`}
            ></div>
          </div>
        </label>
      </div>

      <div>
        <button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsComponent;
