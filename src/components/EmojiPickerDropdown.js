// EmojiPickerDropdown.js
import React from 'react';
import { Picker } from 'emoji-mart'; // Use emoji-mart for emoji picker

const EmojiPickerDropdown = ({ onSelect }) => {
  return (
    <div className="emoji-picker-dropdown">
      <Picker onSelect={onSelect} />
    </div>
  );
};

export default EmojiPickerDropdown;