# File Management System

A professional file management system with login authentication, file upload functionality, and dashboard for file tracking and management.

## Features

- **Secure Login**: Authentication system to protect access to files
- **Split Interface Upload Page**: 
  - Notes section for adding comments and information
  - File upload form with comprehensive metadata fields
- **Dashboard**: 
  - File statistics and metrics
  - Comprehensive file listing with the following details:
    - Sr. No
    - File Number
    - Part No (if any)
    - File Subject
    - Date of Creation
    - Closing Date
    - Classification (A/B/B1/C/D)
    - Year of Disposal
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Professional interface with intuitive navigation

## How to Use

1. **Login**: 
   - Open `index.html` in your browser
   - Enter any username and password (demo mode)

2. **Dashboard**: 
   - View file statistics 
   - See all uploaded files in a tabular format
   - Search for specific files using the search box
   - View or delete files using action buttons

3. **Upload Files**:
   - Click on "Upload Files" in the sidebar
   - Add notes in the left panel if needed
   - Upload a file by dragging and dropping or browsing
   - Fill in the required metadata:
     - File Number (required)
     - Part Number (optional)
     - File Subject (required)
     - Date of Creation (required, defaults to current date)
     - Closing Date (optional)
     - Classification (required: A/B/B1/C/D)
     - Year of Disposal (optional)

## Implementation Details

This system uses:
- HTML5 for structure
- CSS3 for styling with responsive design
- JavaScript for dynamic functionality
- LocalStorage for data persistence (in this demo version)

## Future Enhancements

For a production environment, consider:
- Server-side storage using a database
- Secure authentication with proper user management
- Actual file storage on a server or cloud storage
- Advanced search and filtering options
- Role-based access control
- Audit trails and activity logs

## Getting Started

Simply open `index.html` in a web browser to begin using the application.
