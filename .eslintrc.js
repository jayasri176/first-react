module.exports = {
    rules: {
      // Suppress errors for missing 'import React' in files
      "react/react-in-jsx-scope": "off",
      // Allow JSX syntax in JavaScript files (applicable for Next.js projects)
      "react/jsx-filename-extension": "off", // Add ".ts" for TypeScript projects
    }
  };