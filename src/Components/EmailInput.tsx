import React, { useState } from 'react';

interface EmailInputProps {}

const EmailInput: React.FC<EmailInputProps> = () => {
  const [emails, setEmails] = useState<string[]>([]);
  const [currentEmail, setCurrentEmail] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentEmail(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentEmail.trim() !== '') {
      setEmails([...emails, currentEmail]);
      setCurrentEmail('');
    }
  };

  const handleRemoveEmail = (emailToRemove: string) => {
    const updatedEmails = emails.filter((email) => email !== emailToRemove);
    setEmails(updatedEmails);
  };

  return (
    <div>
      <div>
        {emails.map((email) => (
          <div key={email} className="email-tile">
            {email}
            <span
              className="remove-icon"
              onClick={() => handleRemoveEmail(email)}
            >
              X
            </span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={currentEmail}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter email"
      />
    </div>
  );
};

export default EmailInput;
