# Digital Mojo LMS - User Walkthrough Guide

This guide provides a step-by-step walkthrough of the Digital Mojo Learning Management System (LMS), covering the user journey from registration to course completion.

## 1. Registration

**Goal:** Create a new user account.

1.  **Navigate to the Registration Page:**
    *   If you are on the Login page, click the "Sign Up" link at the bottom.
    *   Or navigate directly to `/register`.

2.  **Fill out the Registration Form:**
    *   **Full Name:** Enter your full name (e.g., "John Doe").
    *   **Email Address:** Enter your work email (e.g., "john@digitalmojo.com").
    *   **Password:** Create a secure password (minimum 6 characters).
    *   **Department:** Select your department from the dropdown (Sales, Marketing, Engineering, HR).

3.  **Submit:**
    *   Click the **"Sign Up"** button.
    *   Upon successful registration, you will see a success screen ("Account Created!").
    *   Click **"Go to Login"** to proceed.

## 2. Login

**Goal:** Access your account.

1.  **Navigate to the Login Page:**
    *   Go to `/login`.

2.  **Enter Credentials:**
    *   **Email:** Enter the email address you registered with.
    *   **Password:** Enter your password.
    *   *(Optional)* Check "Remember me" to stay logged in.

3.  **Submit:**
    *   Click the arrow button or press Enter.
    *   If successful, you will be redirected to the **Dashboard**.

## 3. Dashboard

**Goal:** Overview of progress and course selection.

*   **Welcome Banner:**
    *   At the top, you will see a personalized welcome message.
    *   **Onboarding Progress:** A circular progress indicator shows your completion status for mandatory training.

*   **Course Sections:**
    *   **Mandatory Onboarding:** Courses required for all new employees.
    *   **Your Learning Path:** Role-specific courses based on your department.

*   **Course Cards:**
    *   Each card displays the course title, description, and progress bar.
    *   **Start/Continue Button:** Click to enter the course. If you have started it before, it will resume from your last accessed module.

*   **Sidebar (Desktop):**
    *   **Need Help?:** Quick access to contact the HR team for support.

## 4. Taking a Course (Course Viewer)

**Goal:** Consume learning content.

1.  **Course Interface:**
    *   **Main Content Area:** Displays the current module's content (usually a video).
    *   **Sidebar:** Lists all modules in the course. Completed modules are marked. You can click any module to jump to it.

2.  **Video Player:**
    *   The video will load automatically (YouTube integration).
    *   Watch the video to learn the material.
    *   *Note:* For video modules without a quiz, the module is marked as "Complete" automatically when the video ends.

3.  **Navigation:**
    *   Use the **"Previous"** and **"Next"** buttons below the content to move between modules.
    *   If you reach the end of the course, you will be prompted to return to the Dashboard.

## 5. Taking a Quiz

**Goal:** Assess knowledge and complete a module.

1.  **Starting a Quiz:**
    *   Some modules have an associated quiz.
    *   When you navigate to such a module, you may see a prompt to start the quiz.

2.  **Quiz Interface:**
    *   **Timer:** A countdown timer is displayed at the top right.
    *   **Progress Bar:** Shows how many questions you have answered.
    *   **Questions:** Multiple-choice questions. Select the best answer for each.

3.  **Submission:**
    *   After answering all questions, click **"Submit Quiz"**.
    *   **Results:** You will immediately see your score and whether you Passed or Failed.
    *   **Passing Score:** Typically 70% or 80%.

4.  **Next Steps:**
    *   **Passed:** The module is marked as complete. Click **"Return to Course"** to move to the next module.
    *   **Failed:** You can click **"Retake Quiz"** to try again.

## 6. User Profile

**Goal:** View detailed statistics.

1.  **Access Profile:**
    *   Click your avatar or name in the top right corner of the header.
    *   Select **"Profile"** (or navigate to `/profile`).

2.  **View Stats:**
    *   See your total learning hours, courses completed, and certificates earned.
    *   Update your profile picture or details if needed.

## 7. Troubleshooting

*   **Video Not Loading?** Ensure you have a stable internet connection as videos are streamed from YouTube.
*   **Progress Not Saving?** Ensure you are connected to the internet. Progress is saved automatically to the cloud.
*   **Database Issues?** If you see "Data Corruption Detected", there is a "Repair Database" button available in the Course Viewer (use with caution).
