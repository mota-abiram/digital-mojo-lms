import { Course, Quiz, User, Announcement } from './types';

export const MOCK_USER: User = {
  id: 'u1',
  name: 'John Doe',
  email: 'john.doe@digitalmojo.com',
  avatar: 'https://picsum.photos/seed/user1/200/200',
  role: 'Account Manager',
  department: 'Sales',
  joinDate: 'Oct 2023'
};



export const MOCK_COURSES: Course[] = [
  // Mandated / Onboarding
  {
    id: 'c_orient',
    title: 'Welcome to Digital Mojo',
    description: 'Essential company history, culture, values, and handbook review for all new joiners.',
    progress: 0,
    image: 'https://picsum.photos/seed/office/600/400',
    category: 'mandated',
    sections: [
      {
        id: 's1',
        title: 'Introduction',
        modules: [
          { id: 'm1', title: 'CEO Welcome Message', description: 'A personal welcome from our leadership team.', duration: '10 min', isCompleted: true, type: 'video', videoUrl: 'https://www.youtube.com/embed/sL6z4-Rak2g' },
          { id: 'm2', title: 'Our Core Values', description: 'Understanding the pillars of our company culture.', duration: '15 min', isCompleted: true, type: 'reading' },
        ]
      },

    ],
  },

  // Role Specific
  {
    id: 'c1',
    title: 'Account Manager',
    description: 'Comprehensive training on client retention, growth strategies, and effective communication for Digital Mojo Account Managers.',
    progress: 0,
    image: 'https://picsum.photos/seed/accountmgmt/600/400',
    category: 'role-specific',
    sections: [
      {
        id: 's1',
        title: 'Process | Client Communication & Relationship Management',
        modules: [
          {
            id: 'm1',
            title: 'Message Response',
            description: `📌 Daily Message Response Guide
            
💬 Platforms to monitor:
- 📱 WhatsApp (quick updates, follow-ups, reminders)
- ✉ Email (formal communication, documents, revisions)
- 📌 Basecamp (approvals, task comments, feedback)

⏱ Response Rule: Reply within 30 minutes
(Even if the full answer will take longer, acknowledge immediately.)

🧠 When replying:
- Be clear and confirm understanding  
- Share ETA when action is needed  
- Assign internal tasks immediately in Basecamp/Harmony  
- Close the loop once completed  

🎯 Tone Guidelines:
- Professional  
- Helpful  
- Calm  
- Ownership-driven  

---

🔥 Good reply example:
“Noted — assigning this to the design team. You will receive an update by 4 PM today.”

⚠️ Poor reply example:
“Ok.”

➡️ Remember: every reply is a signal of your reliability.`,
            duration: '14 min',
            isCompleted: true,
            type: 'video',
            videoUrl: 'https://youtu.be/xaXyHtwvQSU?si=f72qUkRWCLp26I9r',
          },
          {
            id: 'm2',
            title: 'Proactive Update',
            description: `📌 Daily Proactive Update Structure

💬 **Send updates in the client group once per day**, ideally before 5 PM.

---

🧩 **Update can include:**
- ✅ Completed tasks  
- 🚧 Tasks in progress  
- 🕒 Pending tasks with ETA  
- 📍 Clarifications or next decisions needed  

---

📣 **After every client call, send an immediate message:**

**Format:**  
🗒️ _“As discussed:  
– Point 1  
– Point 2  
– Point 3  
Next update by <time>.”_

---

🏆 **Celebrate wins:**
- 📈 Reel hit 50K views  
- 🎯 CPL dropped from ₹250 → ₹170  
- 🚀 GMB ranking moved from position 12 → 5  
- 💡 New idea approved and scheduled  

Sharing progress builds confidence.

---

🎤 **Tone Guidelines**
- Confident  
- Specific  
- Solution-oriented  
- Respectful  

---

🔥 **Good Example:**  
“Daily update:  
– 3 reels approved and scheduled  
– CPL improved from ₹212 → ₹178  
– Awaiting feedback on carousel edits (ETA: 11 AM tomorrow)  
As discussed on call — next focus: landing page improvements.”

⚠️ **Poor Example:**  
“Work going on.”`,
            duration: '12 min',
            isCompleted: true,
            type: 'video',
            videoUrl: 'https://youtu.be/F0OQmm5JeIc?si=HC3FtqqFCMuXRh_o',
          },
          {
            id: 'm3',
            title: 'Follow-Ups',
            description: `📌 FOLLOW-UP EXECUTION GUIDE

⏱ Frequency: Every **3 hours**
Use working hours only unless agreed otherwise.

🧾 Send reminders using this format:
1️⃣ Gentle Reminder 1:  
“Gentle reminder 1: Requesting approval/feedback on [asset name] so we can proceed with next steps.”

2️⃣ Gentle Reminder 2:  
“Gentle reminder 2: Following up on [asset name]. Once approved, we will proceed as planned.”

3️⃣ Gentle Reminder 3:  
“Gentle reminder 3: Still pending at your end. To stay on schedule, we need your feedback by <time>.”

🟡 Auto-Approval Clause (only when applicable):  
“If there is no response by tomorrow, we will consider this auto-approved and proceed as discussed.”

🎯 Tone Checklist:
✔ Clear  
✔ Respectful  
✔ Calm  
✔ Timeline-focused  

💡 Remember: Clients appreciate structure — not silence.`,
            duration: '13 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/doKlyc928zg?si=Z9tRNhPr6pC4QhmF',
          },
          {
            id: 'm4',
            title: 'Client Calls',
            description: `📌 CLIENT CALL EXECUTION CHECKLIST

🖥️ BEFORE CALL:
- Review pending approvals  
- Check calendar status  
- Review performance metrics  
- List open questions  

🎥 DURING CALL:
- Keep camera ON  
- Listen actively  
- Take bullet-point notes  
- Confirm decisions verbally  

📝 AFTER CALL (Immediately):
Send message in format:

🗒️ **As Discussed:**

**Client Action Items:**  
- <Task> → ETA: <Date + Time>  
- <Task> → ETA: <Date + Time>

**DM Action Items:**  
- <Task> → ETA: <Date + Time>  
- <Task> → ETA: <Date + Time>

✔ Tone: clear, confident, structured, solution-driven.

💡 RULE: If it is not documented and timestamped — it does not exist.`,
            duration: '11 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/Sas6QVccYpM?si=83KwRb77PLr7fYYt',
          },
          {
            id: 'm5',
            title: 'Sentiment Check',
            description: `📌 SENTIMENT CHECK EXECUTION GUIDE

🧠 What to observe:
- Tone of messages  
- Speed of replies  
- Level of enthusiasm  
- Frustration signals  
- Reduced communication  

🎭 Soft signals:
- Short replies (“ok”, “fine”, “noted”)  
- Delayed approvals  
- Lack of engagement on calls  
- Repeated concerns  

💬 Maintain relationship:
- Ask: “Hope everything is good at your end?” when unusual silence appears  
- Share positives and wins consistently  
- Keep communication warm but professional  

📝 Documentation Format:
Sentiment Log Entry Example:  
📍 Client: <Name>  
📅 Week: <Date>  
🟡 Status: Yellow  
🗒 Notes: “Client responses slower this week. Mentioned they are traveling. Will monitor tone change next week.”  

🚨 Escalation Rule:
If sentiment moves toward **red** or repeated dissatisfaction — notify management immediately.

💡 Core reminder: Relationship is built… not assumed.`,
            duration: '10 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/WjO578do_nI?si=K3lR673PCmaRE99B',
          },
          {
            id: 'm6',
            title: 'Escalation Handling',
            description: `📌 ESCALATION HANDLING GUIDE

🧠 PRINCIPLE:
Respond with calm ownership — not blame or excuses.

👇 STEP-BY-STEP:

1️⃣ Acknowledge:  
- “Thank you for pointing this out — let’s resolve it.”

2️⃣ Clarify without blame:  
- Use: “Looks like there was a miscommunication.”  
- Avoid: “Not our job / Not included / We didn’t know.”

3️⃣ Propose solutions:  
- Option A (If fixable internally): “We can resolve this by <ETA>.”  
- Option B (If out of scope): “We can support this as an additional deliverable — here’s what it will take.”

4️⃣ Confirm next step:  
- “To confirm, we will proceed with ___ and update by ___.”

5️⃣ Document outcome:  
- Add to tracker: Cause → Action → Owner → ETA → Final status.

🎯 TONE:
- Calm  
- Respectful  
- Confident  
- Solution-driven  
- Zero blame

💡 RULE:
Never leave an escalation without clarity, ownership, and a next step.`,
            duration: '12 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/sGXI6HdGcxo?si=rlprbouVov4FUUg4',
          },
          {
            id: 'm7',
            title: 'Communication Summary',
            description: `📌 COMMUNICATION SUMMARY GUIDELINES

🕒 WHEN:
- Immediately after every call (no delay).

🧾 FORMAT:
“As discussed:”  
– Decision made  
– Pending clarification  
– Next steps  
– ETA with date + time  

📍COMMUNICATION CHANNEL RULES:
- Email → For major approvals, strategy shifts, high-impact tasks  
- WhatsApp/Basecamp → For short tasks, confirmations, and routine follow-up  
- Always in the group → never 1:1 unless personal sensitive context

💡 WHY THIS MATTERS:
- Reduces confusion  
- Helps internal team align  
- Creates written proof  
- Prevents revision loops  
- Shows leadership and structure`,
            duration: '9 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/_ohcwqpNIBA?si=T8I_fD-R5KuJNdyk',
          },
        ]
      },
      {
        id: 's2',
        title: 'Process | Planning, Strategy & Monthly Calendars',
        modules: [
          {
            id: 'm8',
            title: 'Scope Mapping',
            description: `📌 SCOPE MAPPING EXECUTION GUIDE

🧭 WHEN TO CHECK:
- Monthly → Strategic alignment  
- Weekly → Internal delivery review  

📜 WHAT TO REVIEW:
- Number of deliverables committed  
- Platforms and formats  
- Reels, posts, ads, blogs, SEO tasks  
- Shoot requirements  
- Out-of-scope requests

⛔ CLIENT DEPENDENCY RULE:
- 3 reminders → over 3 days  
- If still pending → escalate internally

🔄 WHEN BLOCKED:
If client delays shoot or content:
➡ Offer alternatives:
- Stock footage  
- AI-generated assets  
- Repurposing older content  
- Calendar adjustment with reason

🎯 GOAL:
Deliver consistently within scope — without over-servicing or waiting indefinitely.`,
            duration: '12 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/TE30C1u28kE',
          },
          {
            id: 'm9',
            title: 'Trend Research',
            description: `📌 TREND RESEARCH EXECUTION GUIDE

🕒 Frequency: Daily (5–10 mins)

🔍 WHAT TO TRACK:
- Trending reel formats  
- Hooks and storytelling  
- Ads and messaging patterns  
- Visual layouts  
- Meme patterns and audio trends  

📚 WHERE TO RESEARCH:
- Instagram explore  
- Meta Ads Library  
- Competitor pages  
- Industry creators  
- Meme/reel inspiration accounts  

📥 SAVE & ORGANIZE:
➡ Add to reference sheet with:
- Link or screenshot  
- Brand/client relevance  
- Category (reel, ad, copy, meme)  
- Short reason (e.g., “Strong hook,” “High engagement,” “Format match”)  

🎯 RULE:
Don’t save everything — save only what is useable.`,
            duration: '8 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/-3rZqInu7eM?si=I37NwGfwwPHlLLJS',
          },
          {
            id: 'm10',
            title: 'Strategy Session',
            description: `📌 STRATEGY SESSION EXECUTION GUIDE

🗓 FREQUENCY: Monthly

🧠 WHY IT MATTERS:
- Creates direction for content  
- Improves creativity through collaboration  
- Builds consistency across brand messaging  
- Avoids random or repetitive posting  

📍 PREP BEFORE SESSION:
- Review last month performance  
- Bring trend samples  
- Bring 3–5 campaign ideas  
- Identify seasonal opportunities  

🤝 DURING SESSION:
- Present ideas clearly  
- Share inspiration with reasoning  
- Note feedback and refinements  

📄 OUTPUT:
- 📌 1 theme direction  
- 🎥 reel ideas  
- 🗣 scripts & hooks  
- 🖼 visual direction  
- 🎯 CTA alignment  

✨ RULE:
Help others → others help you. Everyone gets better.`,
            duration: '14 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/YzuMgU7W5xI?si=Qlq_djVu5xjaVuBj',
          },
          {
            id: 'm11',
            title: 'Calendar Creation',
            description: `📌 CONTENT CALENDAR EXECUTION GUIDE

🗓 FREQUENCY: Monthly

📍 INPUT BEFORE STARTING:
- Previous month performance  
- Strategy session notes  
- Trends + hashtags + hooks  
- Client roadmap (events, offers, launches)

🧱 WHAT MUST BE INCLUDED:
- 📌 Post format (reel, static, carousel, story)  
- 🗣 Hook + caption + CTA  
- 🎥 Script for reels  
- 🏷 Hashtags + SEO keywords  
- 🎯 Posting logic (why this content, why this day)

🎨 STRUCTURE RULE:
➡ Balance content types:
- Value  
- Trust  
- Social proof  
- Engagement  
- Sale / CTA  

📝 APPROVAL RULE:
- Review internally → send to client → get approval → lock version

📍 FINAL OUTPUT:
A clear, structured calendar that the team can execute without clarification.`,
            duration: '16 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/RkD51StxXTQ?si=OGUbb2rTmbtcQQs9',
          },
          {
            id: 'm12',
            title: 'Persona & Brand Understanding',
            description: `📌 PERSONA & POSITIONING EXECUTION GUIDE

🧠 PURPOSE:
To clearly define who we are talking to — not guessing, not assuming.

📍 WHAT TO RESEARCH:
- Age, gender, city, income  
- Interests, habits, lifestyle  
- Pain points & frustrations  
- Buying motivation  
- Triggers & objections  
- Platforms they consume content on  

🔎 WHERE TO FIND DATA:
- Client discussion  
- Customer reviews  
- Competitor audience study  
- Ads Library & comments  
- Google & social media insights  

🎭 FINAL OUTPUT MUST INCLUDE:
- Persona identity (Name, profile, lifestyle)  
- Tone of voice guide  
- Content direction (what they respond to)  
- Psychological motivators (why they buy)  

✨ RULE:
This is not documentation — it is brand alignment. If the persona changes, the content must change.`,
            duration: '15 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/E5g9e-5M0CI?si=2ox1j_7kd4C-FN5u',
          },

        ]
      },
      {
        id: 's3',
        title: 'Process | Creative, Content & Copy Production',
        modules: [
          {
            id: 'm16',
            title: 'Script Writing',
            description: `📌 SCRIPT WRITING EXECUTION GUIDE

✍ FREQUENCY: Daily

📍 SCRIPT STRUCTURE (MANDATORY):
1️⃣ **Hook** — Grab attention in 1–3 seconds  
2️⃣ **Problem** — State what the audience silently feels  
3️⃣ **Agitate** — Make the pain real and undeniable  
4️⃣ **Solution** — Introduce the offer clearly  
5️⃣ **Proof** — Testimonials, results, demo, credibility  
6️⃣ **CTA** — Tell the audience exactly what to do next  

🎯 WRITE FOR:
- **Clarity over creativity**  
- **Emotion over information**  
- **Audience needs over brand ego**

📎 BEFORE WRITING:
- Review persona  
- Review competition  
- Review past winning scripts  
- Know objective (Reach / Leads / Trust / Retargeting)

🔥 RULES FOR EFFECTIVE SCRIPTS:
- Keep sentences short  
- Avoid jargon  
- Use conversational tone  
- One message per script  

✨ TIP:
If you can say it simpler, say it simpler.`,
            duration: '18 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/6_ODQfsV_X8?si=fpFC15sQ0GWW2ywR',
          },
          {
            id: 'm17',
            title: 'Caption Writing',
            description: `📌 CAPTION WRITING EXECUTION GUIDE

✍ FREQUENCY: Daily

📍 STRUCTURE TO FOLLOW:
1️⃣ **Hook:** 1–2 lines that grab attention  
2️⃣ **Body:** Short, value-focused and relatable  
3️⃣ **CTA:** Tell the audience exactly what to do  
4️⃣ **Hashtags:** 10–20 relevant tags based on niche

🎯 TONE GUIDELINES:
- Conversational  
- Clear, not poetic  
- Brand-aligned voice  
- Short sentences and line breaks  

📌 CHECK BEFORE FINALIZING:
✔ Does the hook stop scrolling?  
✔ Is the message aligned with persona and brand tone?  
✔ Is there a CTA?  
✔ Are hashtags relevant—not random?

✨ TIP:
If the message works without the caption, it’s design-driven.
If the caption makes the post meaningful, it’s content-driven.
Know the difference and balance both.`,
            duration: '14 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/8fUQYn1CPQ8?si=hf2lzX2jpOAmpVoA',
          },
          {
            id: 'm18',
            title: 'Copy Approval',
            description: `📌 COPY APPROVAL EXECUTION GUIDE

🗓 FREQUENCY: Daily

📍 BEFORE SENDING TO CLIENT:
✔ Check tone alignment  
✔ Check grammar & clarity  
✔ Ensure message matches brief  
✔ Confirm offer accuracy (pricing, dates, claims)  
✔ Ensure CTA is clear  
✔ Verify caption-hashtag alignment  

📎 APPROVAL TIMELINE:
- 🧾 Ideal: **7 days before publishing**  
- ⏳ Minimum: **3 days before publishing**

🧠 INTERNAL RULES:
- Do not forward without review  
- Keep approvals in **group chat or email** (not personal chats)  
- Track approvals in Basecamp or tracker  

✨ GOAL:
Approval should feel organized—not rushed or reactive.`,
            duration: '13 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/dmEZk9XtSLg?si=PUx2TEDNp2C141Gw',
          },
          {
            id: 'm19',
            title: 'Reference Collection',
            description: `📌 REFERENCE COLLECTION EXECUTION GUIDE

📅 FREQUENCY: Daily (5–10 min)

📍 SOURCES:
- Instagram explore  
- Meta Ads Library  
- Pinterest  
- Competitor campaigns  
- Trending audio + reels  
- Industry leaders  

🎯 WHAT TO SAVE:
- Hooks & opening lines  
- Layouts & formats  
- Reel transitions  
- Meme formats  
- Ad messaging styles  
- Visual identity ideas  
- CTA placement and tone  

📥 HOW TO ORGANIZE:
➡ Add each reference to the sheet with:
- Link or screenshot  
- Category (Ad / Reel / Static / Carousel / Meme)  
- Why it’s relevant  
- Which client(s) it may fit  

✨ RULE:
Don’t save everything — save what is **usable**, not just viral.`,
            duration: '10 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/y6qzcL3yTp8?si=jI8mZeDoFeaxvwIB',
          },
          {
            id: 'm20',
            title: 'Canva Support',
            description: `📌 CANVA SUPPORT EXECUTION GUIDE

📍 FREQUENCY: Conditional

🧾 WHEN TO USE CANVA:
- Quick mockups for client approval  
- Minor text edits  
- Size/crop adjustments  
- Urgent story or reel cover  
- Placeholder designs during strategy  

🎨 WHAT A CANVA MOCKUP SHOULD COMMUNICATE:
✔ Layout direction  
✔ Font style & tone  
✔ Message clarity  
✔ Color and visual intent  

⚠ DESIGN RULE:
You are NOT designing final assets — you are creating:
➡ Drafts  
➡ Rough layouts  
➡ Approvals  
➡ Visual communication  

💡 SKILL GROWTH:
Spend time learning Canva features so execution becomes smoother and faster.`,
            duration: '11 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/mEvt0QpO9PQ?si=a71IiKbgbWbEmbl8',
          },
          {
            id: 'm21',
            title: 'Blog & Quora Support',
            description: `📌 BLOG & QUORA EXECUTION GUIDE

📅 FREQUENCY: Monthly

📍 BEFORE WRITING:
✔ Review keyword sheet  
✔ Review persona and tone  
✔ Check competitor content  
✔ Confirm topic relevance and search intent  

🛠 HOW TO WRITE:
- Use approved prompts in ChatGPT/Claude  
- Rewrite in human tone  
- Add examples, storytelling, or brand POV  
- Finish with CTA or next step  

🧪 QUALITY CHECK:
- AI detectability < 20% (ZeroGPT or equivalent)  
- Spell-check and grammar  
- Keyword placement natural, not forced  
- Internal links (for blogs)  
- Clear formatting with headers and spacing  

📎 AFTER COMPLETION:
- Share for approval  
- Submit to SEO team for formatting and publishing  
- Track performance monthly  

✨ RULE:
Never publish raw AI output—always refine.`,
            duration: '15 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/vB1sOWPPJfU?si=gTDTenqxdj4EMpjm',
          },
          {
            id: 'm22',
            title: 'Landing Page Content',
            description: `📌 LANDING PAGE CONTENT EXECUTION GUIDE

📍 FREQUENCY: One-time per client (updates as needed)

📌 REQUIRED SECTIONS (MANDATORY):
- Headline (clear and benefit-driven)  
- Sub-headline  
- Key benefits (bullet points)  
- Features / service explanation  
- Social proof (testimonials, awards, reviews)  
- CTA buttons (multiple placements)  
- Form labels (Name/Phone/Email/City/etc.)  
- FAQs (Answer objections before they are asked)  
- Privacy Policy  
- Terms (if applicable)  

🧪 QUALITY CHECK BEFORE SENDING:
✔ Grammar & clarity  
✔ Brand tone consistency  
✔ No jargon or long paragraphs  
✔ CTA visible and repeated  
✔ One main message — avoid confusion  

🗂 PROCESS BEFORE HANDING TO DEV TEAM:
1️⃣ Complete template  
2️⃣ Add reference links/screenshots if helpful  
3️⃣ Ensure all assets (text, images, CTA, forms) are included  
4️⃣ Share as one final document — not scattered files  

✨ RULE:
A developer should never guess. Give everything upfront.`,
            duration: '18 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/gWkSeWFi6Nw?si=5h6KOnEHCJ68ejy5',
          },
        ]
      },
      {
        id: 's4',
        title: 'Process | Performance Monitoring & Lead Management',
        modules: [
          {
            id: 'm23',
            title: 'CPL Check',
            description: `📌 CPL CHECK EXECUTION GUIDE

📅 FREQUENCY: Daily

📍 WHAT TO CHECK:
✔ Daily spend vs expected spend  
✔ CPL vs agreed benchmark  
✔ Number of leads vs pacing target  
✔ Any sudden increase or drop  

🧮 MENTAL MATH CHECK:
- Monthly budget / 30 = ideal daily spend  
Example: ₹8,00,000 budget → ~₹26,000/day

🚨 IF SOMETHING LOOKS OFF:
1️⃣ Inform performance team immediately  
2️⃣ Share screenshot + variance reason (if known)  
3️⃣ Track fix until resolved  
4️⃣ Update client only once accurate information is available

📎 WHERE TO TRACK:
- Lead sheet  
- Ads manager dashboard  
- Daily tracker  

✨ RULE:
Spot early → Fix early → Avoid escalation.`,
            duration: '12 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/0jDYZ6z9wyM?si=9Leuo0LmDOeCh22v',
          },
          {
            id: 'm24',
            title: 'Lead Sheet Check',
            description: `📌 LEAD SHEET CHECK EXECUTION GUIDE

📅 FREQUENCY: Daily

📍 WHAT TO VERIFY:
✔ Leads are flowing consistently  
✔ No missing entries  
✔ No duplicates  
✔ Correct campaign source and tags  
✔ Timestamp accuracy  
✔ Correct formatting (phone, email)

📎 IF SOMETHING IS WRONG:
1️⃣ Take screenshot  
2️⃣ Inform automation or performance team  
3️⃣ Track until fixed  
4️⃣ Document correction in tracker  

🧠 REMEMBER:
Leads ≠ numbers.  
They are potential revenue.

✨ RULE:
If the sheet doesn’t match the ad dashboard → something is broken.`,
            duration: '10 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/A0Vi9yNpius?si=2uPPRnJE5dmjd20o',
          },
          {
            id: 'm25',
            title: 'Campaign Review',
            description: `📌 CAMPAIGN REVIEW EXECUTION GUIDE

📅 FREQUENCY: Daily

📍 KEY METRICS TO CHECK:
✔ CPM → Attention  
✔ CTR → Relevance  
✔ CPL → Cost efficiency  
✔ Lead quality → Real-world result  
✔ Spend pacing → Budget alignment  

🛠 ACTIONS BASED ON SIGNALS:
⚠ High CPM → Change hook, opening frame, or angle  
⚠ Low CTR → Improve copy, relevance, or creative appeal  
⚠ High CPL → Coordinate optimization with performance team  
⚠ Good performance → Scale winning creatives and audiences  

🤝 WORKFLOW:
1️⃣ Review dashboards  
2️⃣ Identify weak and winning segments  
3️⃣ Share insights with performance team  
4️⃣ Request new creatives if needed  
5️⃣ Track impact after the change  

✨ RULE:
Numbers don’t lie — but they only help if you act.`,
            duration: '14 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/VtEofgg9VlM?si=svH9ESGHH0sFczOm',
          },
          {
            id: 'm26',
            title: 'Funds Check',
            description: `📌 DAILY FUNDS CHECK EXECUTION  
Frequency: **Daily**

✔️ WHERE TO CHECK  
- 📊 Meta Business Manager  
- 📈 Google Ads Billing Section  
- 🧾 CRM + Performance Tracker  

✔️ TRIGGERS & ACTIONS  
⚠️ Balance ≥ 7 Days → No action, just monitor  
⚠️ Balance 4–6 Days → Send gentle reminder  
⚠️ Balance < 3 Days → Priority follow-up + escalate internally  
⚠️ Balance exhausted → Escalate immediately + document  

✔️ COMMUNICATION FORMAT  
1️⃣ Gentle Reminder 1:  
“Hi, funds are running low. Requesting top-up to ensure campaigns continue smoothly.”  

2️⃣ Gentle Reminder 2 (next day):  
“Following up — balance now supports only limited days of ads.”  

3️⃣ Final Reminder + Note:  
“If not topped up today, ads may pause. Requesting urgent action.”  

✔️ BEST PRACTICE  
🔥 Plan **bi-monthly funding cycles** for all clients.  
🔥 NEVER wait until ads pause.  

💡 RULE:  
If you see it early — you solve it early.`,
            duration: '12 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/6H0vdfNRgxE?si=GXoCYgxnJKVq_UyQ',
          },
          {
            id: 'm27',
            title: 'Lead Quality Analysis',
            description: `📌 WEEKLY LEAD QUALITY ANALYSIS  
Frequency: **Weekly**

✔️ WHAT TO REVIEW  
- 📍 Lead sheet entries  
- ☎️ Response rate (Calls answered vs unanswered)  
- 🎯 Qualification % (Right audience vs mismatch)  
- 💰 CPL vs ideal benchmark  
- 🧩 Conversion intent (Walk-ins, demo requests, site visits)  

✔️ DURING WEEKLY CLIENT CALL  
Ask:  
- “How many people actually answered the calls?”  
- “How many asked for more details?”  
- “Did anyone visit, enquire further, or close?”  

✔️ DOCUMENT INSIGHTS  
- 👍 Positive %  
- ⚠️ Issues & patterns  
- 💡 Improvements suggested  
- 🛠 Action points for DM + Client  

✔️ FOLLOW-UP ACTIONS  
- Share insights with performance & creative team  
- Request new hooks / audiences / landing changes  
- Track improvement next week  

💡 RULE:  
Lead quality improvement is a continuous loop — not a one-time event.`,
            duration: '11 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/T2LvlezMOto?si=2usicaYv3qyvfBDA',
          },
        ]
      },
      {
        id: 's5',
        title: 'Process | Deliverable & Project Coordination',
        modules: [
          {
            id: 'm28',
            title: 'Task Assignment',
            description: `📌 DAILY TASK ASSIGNMENT GUIDE  
Frequency: **Daily**

✔️ WHERE TO ASSIGN  
- 🧭 Platform: **Basecamp ONLY**  
(No WhatsApp tasks. No verbal instructions.)

✔️ WHAT TO INCLUDE IN EACH TASK  
- 📌 Task title  
- 📝 Description (context + expectations)  
- 📎 Reference links / assets  
- 👤 Owner  
- 🕒 Deadline (date + time)  
- ⏳ Priority: High / Medium / Low  

✔️ WORKFLOW  
1️⃣ Create task in Basecamp  
2️⃣ Tag/assign the correct owner  
3️⃣ Share reference + examples if available  
4️⃣ Confirm acknowledgment from team  
5️⃣ Track progress → NOT follow-up personally  

✔️ WHEN TO FOLLOW UP  
- ⏰ If no acknowledgment in 2 hours  
- ⛔ If task is overdue  
- 🔁 If revisions are needed  

💡 RULE:  
“If it's not in Basecamp, it’s not official.”`,
            duration: '10 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/04rpD26B-ro?si=CQhAOqhTaJ9Gpvky',
          },
          {
            id: 'm29',
            title: 'Deadline Tracking',
            description: `📌 DAILY DEADLINE TRACKING WORKFLOW  
Frequency: **Daily**

✔️ WHERE TO TRACK  
- 🧭 Basecamp (Task status + comments)  
- 📊 Harmony (Progress and timelines)

✔️ WHAT TO CHECK DAILY  
- 🚨 Overdue tasks  
- ⏳ Due today  
- 📍 Due this week  
- ❓ Blocked tasks  

✔️ FOLLOW-UP FRAMEWORK  
1️⃣ If overdue → Follow up immediately in Basecamp  
2️⃣ If due today → Confirm expected completion time  
3️⃣ If blocked → Identify issue + solve or escalate  
4️⃣ If recurring delays → Notify Account Lead

✔️ COMMUNICATION FORMAT  
- Clear  
- Respectful  
- Direct  
- With timestamps  

💡 RULE:  
“Track early → Prevent late.”`,
            duration: '9 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/YHq6Kj6S_7U?si=mPgLHvBsMIss-YOD',
          },
          {
            id: 'm30',
            title: 'Revision Handling',
            description: `📌 REVISION HANDLING PROCESS  
Frequency: **Conditional**

✔️ WHEN A REVISION COMES IN  
1️⃣ Break feedback into bullet points  
2️⃣ Create revision task in Basecamp  
3️⃣ Assign responsible owner + deadline  
4️⃣ Attach reference/example if available  

✔️ COMMUNICATION RULE  
- Never forward raw messages  
- Convert feedback → actionable checklist  

✔️ REVISION LIMIT POLICY  
- 🟢 Revision 1 → Normal  
- 🟡 Revision 2 → Alignment call  
- 🔴 Revision 3 → Management escalation  

✔️ CLOSURE  
- Share updated version with client  
- Confirm approval (“Approved ✔️”)  
- Update tracker and archive final file  

💡 RULE:  
Revisions should move forward — not repeat the same mistake.`,
            duration: '11 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/53G7b1Qu4tw?si=4RkN_clsDo7dxj0F',
          },
          {
            id: 'm31',
            title: 'Approval Management',
            description: `📌 APPROVAL MANAGEMENT CHECKLIST  
Frequency: **Daily**

✔️ WHERE APPROVALS SHOULD COME FROM  
- 🟢 Whatsapp/Basecamp → For daily creative approvals  
- 🟡 Email → For major strategic approvals  

✔️ TYPES OF APPROVALS  
- 📱 Daily posts (Captions, creatives, hooks, reels) → WhatsApp/Basecamp acceptable  
- 🌐 Websites, landing pages, budgets, ad strategy → Email required  

✔️ ACTION STEPS  
1️⃣ Share item needing approval  
2️⃣ Confirm acknowledgment  
3️⃣ Log approval in the tracker  
4️⃣ Update project status  
5️⃣ Move task to “Approved / Ready to Execute”  

✔️ WHAT NOT TO DO  
🚫 Never assume approval  
🚫 Never go live without confirmation  
🚫 Never rely on verbal approvals  

💡 RULE:  
Documentation protects execution.`,
            duration: '9 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/_qUvSdJu3Es?si=69D3sih6RSIsho7V',
          },
          {
            id: 'm32',
            title: 'Quality Review',
            description: `📌 QUALITY REVIEW CHECKLIST (Daily)

✔ Content Accuracy
- Caption tone aligned
- Grammar and spelling correct
- Clear hook and CTA included
- Hashtags formatted properly

✔ Design & Branding
- Brand fonts and colors correct
- Logo placement consistent
- Alignment clean and professional
- No visual clutter

✔ Video (If Applicable)
- Smooth transitions
- Accurate subtitles and pacing
- Music synced and not overpowering
- Duration fits platform format

✔ Approval & Documentation
- Matches final approved version
- Update tracker once reviewed
- Archive updated asset

🔥 Rule: Never forward unchecked or raw creative. You are the filter before the client.`,
            duration: '9 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/3G8z2QBo6u8?si=LdSipoTil9Ik3pgY',
          },
        ]
      },
      {
        id: 's6',
        title: 'Process | Posting & Publishing',
        modules: [
          {
            id: 'm33',
            title: 'Social Media Scheduling',
            description: `📌 SOCIAL MEDIA SCHEDULING CHECKLIST (Daily)

✔ PLAN AHEAD
- Schedule posts 7 days in advance (minimum standard)
- In worst-case scenarios: schedule at least 3 days before publishing
- Never wait until the day of posting

✔ PRE-SCHEDULING
- Confirm the final creative is approved
- Copy caption exactly as approved (no last-minute edits)
- Confirm hashtags, tone, and CTA are aligned
- Verify platform format (aspect ratio, duration, size)

✔ PLATFORM EXECUTION
- Instagram: reel cover, caption, tagging, location (if needed)
- Facebook: formatting + preview check
- YouTube: title, description, tags, thumbnail
- LinkedIn (if applicable): adjust tone for professionalism

✔ POST-SCHEDULING CONFIRMATION
- Check preview formatting
- Confirm scheduled time matches calendar
- Mark the task as “Scheduled” in tracker/Basecamp

🔥 RULE: Scheduling = preparedness. If it isn’t scheduled in advance, it isn’t managed properly.`,
            duration: '8 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/lsXv9j6ZVWY?si=-Xsxlg8RJMyGoPUF',
          },
          {
            id: 'm34',
            title: 'YouTube Posting',
            description: `📌 YOUTUBE POSTING CHECKLIST (Weekly)

✔ BEFORE UPLOADING
- Confirm approval
- Ensure final export is platform-optimized (resolution + ratio)
- Prepare SEO title based on search intent

✔ DURING UPLOAD
- Add SEO title containing searchable keywords
- Write a keyword-rich description (context + CTA)
- Add relevant tags based on topic and industry
- Choose or upload a strong thumbnail
- Select correct visibility setting (Public / Scheduled)

✔ POST-UPLOAD
- Verify video formatting and playback quality
- Confirm it appears in YouTube Studio list
- Add video to playlist if applicable
- Update tracker as 'Posted'

🔥 RULE: Instagram captions entertain — YouTube titles and descriptions must be searchable.`,
            duration: '7 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/DV1JgMykl2c?si=nwlbP6zzRfkNzNwU',
          },
          {
            id: 'm35',
            title: 'Post Verification',
            description: `📌 POST VERIFICATION CHECKLIST (Daily)

✔ AFTER POSTS GO LIVE
- Confirm post is visible publicly
- Verify correct client account (no cross-posting errors)
- Check caption formatting (line breaks, emojis, spacing)
- Confirm hashtags are visible and functional
- Check tagging worked (people, brand, location)

✔ PLATFORM CHECKS
- Instagram: check reel cover, caption breaks, audio sync
- Facebook: check link previews and CTA formatting
- YouTube: title, description, visibility, thumbnail
- LinkedIn (if applicable): formatting + tone

✔ FINAL ACTIONS
- Fix issues immediately if spotted
- If platform error persists, re-upload correctly
- Update tracker status to “Live & Verified”

🔥 RULE: Posting is not complete until it has been checked live.`,
            duration: '7 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/odHVAwBnUBo?si=IqKcBWqcHxaosEZq',
          },
        ]
      },
      {
        id: 's7',
        title: 'Process | Shoot Planning & Execution',
        modules: [
          {
            id: 'm36',
            title: 'Shoot Concepting',
            description: `📸 SHOOT CONCEPTING CHECKLIST (Monthly)

✔ BEFORE THE SHOOT  
- Identify purpose (Campaign, evergreen, branding, testimonial)
- Create script with hooks + CTA  
- Decide tone: educational / emotional / entertaining / sales  
- Create visual references using Pinterest, IG, TikTok, YouTube Shorts  
- Align format: reel, carousel, ad video, static post

✔ SHOTLIST ELEMENTS  
- 🎬 Shot sequence (Opening → Main → CTA)  
- 🎤 Dialogue or VO script  
- 🎭 Expressions / Emotion cues  
- 🎥 Angles (wide / mid / close-up / POV)  
- 🧩 Assets checklist (logo, text overlays, props)

✔ EXECUTION READY  
- Confirm availability of location, model, products  
- Share shoot deck with photographer + internal team  
- Send final plan to client for approval  

🔥 RULE: GOOD SHOOTS ARE PLANNED — NOT IMPROVISED.`,
            duration: '10 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/VgrTpCDfe38?si=BpB0wUuBK9ESaGEE',
          },
          {
            id: 'm37',
            title: 'Shoot Attendance',
            description: `🎥 SHOOT ATTENDANCE CHECKLIST (Conditional)

✔ BEFORE SHOOT
- Print/Share script + shot list
- Confirm location, time, talent, and wardrobe
- Share expectations with photographer/editor

✔ DURING SHOOT
- Match footage to script + mood board
- Ensure correct angles, pacing, expressions, CTA
- Capture backup takes & variations
- Keep client comfortable and guided

✔ AFTER SHOOT
- Confirm all required assets are captured
- Check audio clearly recorded
- Share “Shoot Completion Update” in WhatsApp group
- Upload raw files link to project folder

🔥 RULE:
Never leave a shoot assuming “It will be fixed in editing.”`,
            duration: '8 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/WGtdaWK1xjI?si=rnvitW9ycjkFSwLU',
          },
          {
            id: 'm38',
            title: 'Edit Notes',
            description: `🎬 EDIT NOTES CHECKLIST (Conditional)

✔ WATCH RAW FOOTAGE FULLY  
- Identify best takes  
- Note mistakes  
- Check clarity, pacing, tone  

✔ GIVE ACTIONABLE FEEDBACK  
- Timestamp-based comments  
- Clear change instructions  
- Visual direction (fonts, effects, music style)  

✔ STRUCTURE FEEDBACK  
1) Keep  
2) Fix  
3) Remove  

✔ FINALIZE  
- Share edits in Basecamp or sheet  
- Avoid multiple revision rounds  
- Confirm editor acknowledgment  

🔥 RULE:  
If feedback is not specific, the final output will never match expectations.`,
            duration: '7 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/9o2jOEW-hf4?si=ccguAWelwiiBFxL1',
          },
        ]
      },
      {
        id: 's8',
        title: 'Process | Reporting & Review',
        modules: [
          {
            id: 'm39',
            title: 'Weekly Updates',
            description: `📌 WEEKLY WHATSAPP UPDATE FORMAT (Weekly)

✔ CHANNEL
- Send in the official client WhatsApp group
- Tag the client (e.g., @Name) so they see it
- Keep it structured and easy to skim

✔ BASIC TEMPLATE
“Hi @Name,  
Here’s this week’s update:

1) PERFORMANCE  
- Leads: XX (vs last week XX)  
- CPL: ₹XX (Target: ₹XX)  
- Key highlight: ______

2) ORGANIC / SOCIAL  
- Posts/Reels live: X  
- Best-performing post: ______ (why it worked)

3) ACTIONS TAKEN  
- We did: ______, ______, ______  

4) NEXT WEEK PLAN  
- We will focus on: ______  

If you’d like, we can review this on a quick call.”

✔ PRINCIPLES
- Honest (no hiding issues)  
- Focused (no extra drama)  
- Outcome-oriented (what we did + what’s next)

🔥 RULE:
Never let a week pass without a tagged update in the client group.`,
            duration: '9 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/qlx8sA4oS_I?si=cEyS4aOZ7YA5msYn',
          },
          {
            id: 'm40',
            title: 'Monthly Reporting',
            description: `📊 MONTHLY REPORT WORKFLOW (Monthly)

✔ WHERE TO SHARE  
- 🟢 Basecamp  
- 🟡 Email (PDF + Summary message)  
- 🔵 WhatsApp (simple summary + PDF attachment)  

✔ REPORT STRUCTURE  
1) 📈 Organic Summary  
2) 💰 Ads & Campaign Performance  
3) 👥 Lead Quality & Insights  
4) 🧠 Learnings  
5) 🗓️ Next Month Strategy / Plan  

✔ EXECUTION STEPS  
1️⃣ Generate updated dashboards  
2️⃣ Verify all numbers are correct  
3️⃣ Highlight wins and challenges  
4️⃣ Create action strategy for next month  
5️⃣ Present report confidently in live call  

🔥 RULE:  
If you don’t understand the report, the client won’t either.`,
            duration: '11 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/Ozoa0iq4k84?si=sQPqG1NFX6i8Onb_',
          },
          {
            id: 'm41',
            title: 'Review Meeting',
            description: `📅 MONTHLY REVIEW CALL FRAMEWORK (Monthly)

✔ BEFORE THE CALL  
- Review the final monthly report  
- Prepare talking points and insights  
- Ensure all data is accurate  

✔ DURING THE CALL  
1) Wins & Highlights  
2) Challenges & Learnings  
3) Performance Insights (Organic + Paid)  
4) Strategy for Next Month  
5) Dependencies (Client + Team)  

✔ AFTER THE CALL  
- Share summary with action points + deadlines  
- Update tracker with decisions  
- Confirm next review date  

🔥 RULE:  
A review call should leave ZERO assumptions — only clarity, alignment, and next steps.`,
            duration: '10 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/ZtWAczQ902E?si=YL-88vgd1C2eY-vm',
          },
        ]
      },
      {
        id: 's9',
        title: 'Process | Onboarding & Setup',
        modules: [
          {
            id: 'm42',
            title: 'Onboarding Kickoff',
            description: `🚀 ONBOARDING KICKOFF CHECKLIST (One-time per Client)

✔ BEFORE CALL  
- Review scope document  
- Keep onboarding template ready  
- Confirm agenda and participants  

✔ DURING CALL  
- Establish communication rules  
- Collect brand preferences  
- Confirm deliverable timelines  
- Capture reference expectations  
- Assign responsibilities  

✔ AFTER CALL  
- Share “As discussed…” summary  
- Update onboarding tracker  
- Start executable tasks  

🔥 RULE:  
Clarity created at the beginning eliminates friction later.`,
            duration: '10 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/EzVvQSfNHYA?si=jYK4SuQsxClWE9p3',
          },
          {
            id: 'm43',
            title: 'Competitive Audit',
            description: `🕵️ COMPETITIVE AUDIT CHECKLIST (One-time per client)

✔ STEP 1 — IDENTIFY COMPETITORS  
- Ask client: “Who do you see as direct competition?”  
- Validate list with search + category trends  

✔ STEP 2 — AUDIT SOURCES  
- Meta Ads Library (Paid ads)  
- Google Ads Transparency Center  
- Instagram & YouTube (organic content)  
- Website and landing pages  

✔ STEP 3 — ANALYZE  
- Positioning  
- Content tone  
- Offers & CTAs  
- Visual style  
- Engagement  
- Ad hooks & formats  

✔ STEP 4 — DOCUMENT  
- SWOT + Insights  
- Opportunity angles  
- Differentiation ideas  

🔥 RULE:  
Don’t imitate the competitor — outperform them with insight-based clarity.`,
            duration: '12 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/uDqN3QLhWhc?si=yXejjZMImhRCQnd-',
          },
          {
            id: 'm44',
            title: 'Sample Creative Alignment',
            description: `🎨 SAMPLE CREATIVE ALIGNMENT FRAMEWORK (One-time per Client)

✔ STEP 1 — PREPARE  
- Collect references  
- Build 2–3 visual direction concepts  
- Include fonts, colors, layout ideas  

✔ STEP 2 — PRESENT  
- Share sample designs  
- Explain thinking behind each direction  
- Ask preference-based questions  

✔ STEP 3 — REFINE  
- Apply feedback  
- Fix: layout / colors / spacing / tone  
- Send 1 refined version  

✔ STEP 4 — FINALIZE  
- Lock visual system  
- Upload final style guidelines  

🔥 RULE:  
Alignment now saves hundreds of correction hours later.`,
            duration: '11 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/E5ErwQKZf-o?si=rUU87ZNjNSk1fDB2',
          },
          {
            id: 'm45',
            title: 'Landing Page Setup',
            description: `🧩 LANDING PAGE SETUP CHECKLIST (One-time per Client)

✔ BEFORE DEVELOPMENT  
- Share brand files (logo, colors, fonts)  
- Provide landing page content (headline → CTA → FAQs → Privacy Policy)  
- Share 2–3 style references  
- Confirm tone: premium / friendly / urgent / simple  

✔ DURING DEVELOPMENT  
- Review layout  
- Check messaging clarity  
- Confirm CTA behavior  
- Verify mobile responsiveness  

✔ AFTER DEVELOPMENT  
- Send for client approval via email  
- Log approval in tracker  
- Share final version with performance team  

🔥 RULE:  
No ads should run until the landing page is approved and fully functional.`,
            duration: '10 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/tSUn61MCcZw?si=902oqai3aVRFsq4n',
          },
        ]
      },
      {
        id: 's10',
        title: 'Process | AI & Automation Integration',
        modules: [
          {
            id: 'm46',
            title: 'AI Content Support',
            description: `🤖 AI CONTENT SUPPORT CHECKLIST (Daily)

✔ TOOLS  
- ChatGPT  
- Claude  
- ZeroGPT for AI percentage check  

✔ EXECUTION FLOW  
1️⃣ Write structured prompt  
2️⃣ Generate multiple variations  
3️⃣ Refine tone to match brand voice  
4️⃣ Verify accuracy and relevance  
5️⃣ Run ZeroGPT check (aim < 20%)  
6️⃣ Final proofread before use  

✔ GUIDELINES  
- Never copy-paste AI output raw  
- Use AI to explore ideas, not replace thinking  
- Always customize based on strategy  

🔥 RULE:  
AI generates drafts — you create meaning.`,
            duration: '8 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/cFFtkEXD0As?si=BFlZTTeqUS0_nHFb',
          },
          {
            id: 'm47',
            title: 'AI Research',
            description: `🔍 AI RESEARCH CHECKLIST (Weekly)

✔ TOOLS  
- ChatGPT  
- Claude  
- Google Trends  
- Meta Ads Library (manual validation)  

✔ WHAT TO USE AI FOR  
- Competitor analysis summaries  
- Trend breakdowns  
- Audience psychology insights  
- Content pattern identification  
- Script / hook ideation  

✔ EXECUTION FLOW  
1️⃣ Ask structured research prompt  
2️⃣ Review the output  
3️⃣ Validate key points manually (never trust blindly)  
4️⃣ Convert insights into action (scripts, calendar themes, ad ideas)  
5️⃣ Document findings in reference folder  

🔥 RULE:  
AI provides direction — you provide judgment.`,
            duration: '9 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/tRTquj3f7Bk?si=8m1yxsXP1q1yonnb',
          },
          {
            id: 'm48',
            title: 'AI Reporting',
            description: `📊 AI REPORTING CHECKLIST (Monthly)

✔ DATA SOURCES  
- Meta Ads Manager  
- Google Ads  
- GA4  
- CRM/Lead Sheet  

✔ EXECUTION FLOW  
1️⃣ Collect data from all platforms  
2️⃣ Input into AI with a structured summary prompt  
3️⃣ Review and refine output  
4️⃣ Add insight + reason + next step  
5️⃣ Use as part of the monthly report  

✔ OUTPUT SHOULD INCLUDE  
- Wins  
- Challenges  
- Insights  
- Suggested actions  

🔥 RULE:  
AI summarizes — you make the meaning and direction clear.`,
            duration: '8 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/EoqulLySYGA?si=40F6JzNX4V-GDrXp',
          },
        ]
      },
      {
        id: 's11',
        title: 'Process | SOP, Quality & Internal Operations',
        modules: [
          {
            id: 'm49',
            title: 'SOP Compliance',
            description: `📁 SOP COMPLIANCE CHECKLIST (Daily)

✔ FILE NAMING  
- Format: ClientName_Platform_Date_Version  
- Avoid random names like “final-final-V3-last.psd”

✔ FOLDER ORGANIZATION  
- Month → Platform → Approved / Working / Rejected  
- Upload final approved files only in “Final”

✔ APPROVAL STORAGE  
- Daily approvals → WhatsApp/Basecamp  
- Major approvals → Email required

✔ EXECUTION RULES  
- No posting without documented approval  
- Update trackers once approval is logged  

🔥 RULE:  
If it isn’t stored correctly — it doesn’t exist.`,
            duration: '7 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/qvWcHy9hr80?si=8N2BpMAZMlM-uuyV',
          },
          {
            id: 'm50',
            title: 'Tracker Hygiene',
            description: `📊 TRACKER HYGIENE CHECKLIST (Daily)

✔ STATUS UPDATES  
- DONE → Mark completed  
- PENDING → Add reason + new ETA  
- IN PROGRESS → Add latest update notes  

✔ ATTACH PROOF  
- Optimization screenshots  
- Budget pacing notes  
- Search term screenshots  
- Creative approval links  
- Issue logs  

✔ CLEAN FORMATTING  
- No blank rows  
- No random comments  
- No outdated entries  
- No half-filled tasks  

✔ END-OF-DAY SELF-CHECK  
“Can someone understand everything without asking me?”

🔥 RULE:  
If the tracker isn’t updated, the work is not considered done.`,
            duration: '9 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/PInX4ieiZnA?si=ulGIVM9BpAtJRnA2',
          },
          {
            id: 'm51',
            title: 'Folder Management',
            description: `🗂️ FOLDER MANAGEMENT CHECKLIST (Weekly)

✔ STRUCTURE  
- Month → Platform → Final / Working  
- Creative, report, and script categories correctly placed  

✔ FILE CLEANUP  
- Remove duplicates  
- Delete incorrectly placed files  
- Archive outdated items  

✔ NAMING SOP  
ClientName_Platform_Date_Version  
No names like “final2”, “last-last”, “newnew”  

✔ COMPLETENESS  
- Latest reports added  
- Final creatives uploaded  
- Search term reports present  
- Optimization logs updated  

🔥 RULE:  
A clean folder = a clean execution system.`,
            duration: '7 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/m9OEc_inKs0?si=EiQaD551hMj-8cRC',
          },
        ]
      },
      {
        id: 's12',
        title: 'Process | Knowledge Transfer',
        modules: [
          {
            id: 'm52',
            title: 'KT Preparation',
            description: `📝 KT PREPARATION CHECKLIST (Before Leave)

✔ ACTIVE TASKS  
- All campaigns listed  
- Status + next steps  
- Issues + required actions  

✔ LINKS & PROOF  
- Campaign links  
- UTM links  
- Sheet & tracker links  
- Screenshot proof  

✔ PRIORITIES  
- Urgent tasks highlighted  
- Deadlines clearly mentioned  
- Dependencies noted  

✔ HANDOVER  
- Share with Lead + Account Manager  
- Confirm acknowledgment  

🔥 RULE:  
A proper KT ensures continuity without chaos.`,
            duration: '8 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/nZe96gshGIE?si=bLM7TZ1cv41yI_97',
          },
          {
            id: 'm53',
            title: 'KT Handover',
            description: `📝 KT HANDOVER CHECKLIST (Final Step)

✔ SHARE  
- Send KT file to Lead + Account Manager  
- Include links, proofs, deadlines  

✔ WALKTHROUGH  
- Explain priorities  
- Explain dependencies  
- Clarify urgent tasks  

✔ CONFIRMATION  
- Get acknowledgment from Lead  
- Ensure backup person understands tasks  

🔥 RULE:  
Handover is complete ONLY when the team is fully clear — not when you simply share the file.`,
            duration: '7 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/nZe96gshGIE?si=bLM7TZ1cv41yI_97',
          },
        ]
      },

    ],
  },
  {
    id: 'c_perf_spec',
    title: 'Performance Marketing Specialist',
    description: 'Complete certification for Performance Specialists covering Campaign Setup, Ad Launch, Optimization, Budgeting, and Reporting across Google and Meta.',
    progress: 0,
    image: 'https://picsum.photos/seed/ppc/600/400',
    category: 'role-specific',
    sections: [
      {
        id: 's1',
        title: 'Campaign Setup & Planning',
        modules: [
          {
            id: 'pm_m1',
            title: 'Create campaign plans based on approved strategy from Performance Lead.',
            description: `🧩 CAMPAIGN PLANNING CHECKLIST (Before Launch)

✔ REVIEW STRATEGY  
- Objective  
- Budget  
- Target audience  
- Timelines  
- Creative direction  

✔ MAP CAMPAIGN STRUCTURE  
- Platforms (Meta, Google, LinkedIn)  
- Number of campaigns  
- Ad sets / ad groups  
- Audience layers  
- Placements  
- Bidding strategy  

✔ DEFINE SUCCESS METRICS  
- CPL  
- CTR  
- CPA  
- Lead volume  

✔ DOCUMENT PLAN  
- Share with Performance Lead for confirmation  
- Save in project folder  

🔥 RULE:  
If the plan is unclear, the performance will be unclear.`,
            duration: '9 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/pZ-zrEyBBsk'
          },
          {
            id: 'pm_m1b',
            title: 'Define campaign objectives, ad sets, budgets, and target audiences.',
            description: `📌 CAMPAIGN SETUP BLUEPRINT

✔ OBJECTIVE  
- Lead Gen  
- Conversions  
- Traffic  
- Awareness  
Choose based on KPI, not guesswork.

✔ AD SET STRUCTURE  
- One testing logic per ad set  
- Separate cold, warm, retargeting  
- Maintain naming conventions  

✔ BUDGET  
- Allocate based on funnel  
- Avoid spreading budget too thin  
- Monitor pacing availability  

✔ TARGET AUDIENCE  
- Interests  
- Lookalikes  
- Custom audiences  
- Exclusions  
- Geographic filters  

🔥 RULE:  
Wrong objective or wrong audience = wrong results.`,
            duration: '8 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/ZcviHVxGKdI'
          },
          {
            id: 'pm_m1c',
            title: 'Coordinate with Creative and Copy teams for final ad assets.',
            description: `🎨 CREATIVE & COPY COORDINATION CHECKLIST

✔ BEFORE BRIEF  
- Review campaign objective  
- Identify key message or hook  
- Study competing ads  

✔ SHARE A CLEAR BRIEF  
- Objective  
- Audience  
- Hook direction  
- Format: 1:1, 9:16, carousel, video  
- References and benchmarks  
- Mandatory text  

✔ DURING CREATION  
- Review early drafts  
- Check alignment with funnel goals  
- Suggest improvements (hook, CTA, clarity)  

✔ BEFORE FINAL APPROVAL  
- Check compliance & platform rules  
- Verify naming conventions  
- Upload to tracker  

🔥 RULE:  
Strong ads come from strong briefs, not guesswork.`,
            duration: '10 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/r3x_z_GN9xo'
          },
          {
            id: 'pm_m1d',
            title: 'Implement naming conventions and tracking codes per SOP.',
            description: `🧩 NAMING & TRACKING CHECKLIST (Every Setup)

✔ NAMING CONVENTIONS  
- ClientName_Objective_AudienceType_Platform_Version  
- Example: Client_LeadGen_Cold_LLA1_V1  
- No random names like “test1,” “sample,” “tryagain”  

✔ TRACKING CODES  
- Add UTMs to all landing page URLs  
- Ensure parameters reflect: Source, Medium, Campaign, Content  
- Example: ?utm_source=meta&utm_medium=leadgen&utm_campaign=cold_v1  

✔ BEFORE LAUNCH  
- Recheck campaign, ad set, ad names  
- Verify all links have UTMs  
- Update naming & tracking log in tracker  

🔥 RULE:  
Bad naming = bad data.  
Bad data = bad decisions.`,
            duration: '9 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/_iLquUii47M'
          }
        ]
      },
      {
        id: 's2',
        title: 'Ad Launch & Quality Check',
        modules: [
          {
            id: 'pm_m2',
            title: 'Set up campaigns on Google, Meta, and LinkedIn Ads Manager.',
            description: `🚀 CAMPAIGN SETUP CHECKLIST (Google, Meta, LinkedIn)

✔ OBJECTIVE  
- Lead Gen / Conversions / Traffic  
- Must match campaign plan  

✔ AUDIENCE  
- Cold interests  
- Lookalikes  
- Retargeting pools  
- LinkedIn job/industry filters  

✔ STRUCTURE  
- One testing logic per ad set  
- Clean naming conventions  
- Accurate budget distribution  

✔ ASSETS  
- Upload correct creative formats  
- Add captions, headlines, CTAs  
- Check instant form or landing URL  

✔ TRACKING  
- Meta Pixel  
- Google Tag & Conversions  
- LinkedIn Insight Tag  
- UTMs on all links  

✔ FINAL PRE-LAUNCH CHECK  
- Preview ads  
- Validate placements  
- Ensure budget pacing is correct  

🔥 RULE:  
A clean setup prevents messy performance.`,
            duration: '10 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/2PL75A3hD_c'
          },
          {
            id: 'pm_m2b',
            title: 'Verify pixels, tracking events, and UTM parameters before going live.',
            description: `📍 TRACKING VERIFICATION CHECKLIST (Before Launch)

✔ PIXEL & TAG CHECK  
- Meta Pixel installed and firing  
- Google Tag + Conversion events verified  
- LinkedIn Insight Tag active  
- Use Pixel Helper / Tag Assistant  

✔ EVENT VALIDATION  
- PageView  
- Lead / Submit  
- Button click  
- Thank-you page events  
- Instant Form mapping check  

✔ UTM PARAMETERS  
- utm_source  
- utm_medium  
- utm_campaign  
- utm_content  
- Test all URLs in preview mode  

✔ FINAL TEST  
- Click ad preview  
- Submit test lead  
- Check if it reflects in sheet + CRM  

🔥 RULE:  
If tracking is wrong, performance data is a lie.`,
            duration: '10 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/8mICy74c9gc'
          },
          {
            id: 'pm_m2c',
            title: 'Run a test preview of each ad to check copy, design, and call-to-action accuracy.',
            description: `🔍 AD PREVIEW CHECKLIST (Before Launch)

✔ COPY CHECK  
- No spelling or grammar errors  
- Hook visible in first line  
- Headline clear and relevant  
- CTA text aligned to objective  

✔ CREATIVE CHECK  
- No cropping issues  
- High-resolution creative  
- Text readable on mobile  
- Layout aligned with brand  

✔ CTA & LINK CHECK  
- CTA button matches campaign goal  
- Link opens correct landing page  
- UTMs visible and working  
- Form loads and submits

✔ DEVICE & PLACEMENT CHECK  
- Preview on mobile + desktop  
- Check feed, stories, reels, in-stream where applicable  

🔥 RULE: If you haven’t previewed it, you haven’t launched it.`,
            duration: '8 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/Sa-nKaNIHlc'
          },
          {
            id: 'pm_m2d',
            title: 'Document campaign setup details in central tracker.',
            description: `📘 CAMPAIGN SETUP DOCUMENTATION CHECKLIST  
Frequency: Daily (post-launch)

✔ WHAT TO DOCUMENT  
- Platform (Meta / Google / LinkedIn)  
- Objective  
- Campaign Name (as per naming SOP)  
- Ad Set / Ad Group details  
- Budgets & bids  
- Audience breakdown  
- Placements  
- Creatives & copy links  
- Tracking (UTM / pixel events)  
- Start date  

✔ HOW TO DOCUMENT  
1️⃣ Open central tracker  
2️⃣ Fill all fields immediately after launch  
3️⃣ Attach screenshots for clarity  
4️⃣ Update again if any edits are made  

✔ WHY IT MATTERS  
- Enables proper optimization  
- Ensures transparency  
- Helps others pick up the work anytime  

🔥 RULE:  
If the campaign is live, the tracker must be live too.`,
            duration: '8 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/N6liu9kbXe4'
          }
        ]
      },
      {
        id: 's3',
        title: 'Campaign Optimization',
        modules: [
          {
            id: 'pm_m3',
            title: 'Monitor live campaigns daily for performance metrics (CTR, CPC, CPL, ROAS).',
            description: `📌 DAILY CAMPAIGN MONITORING CHECKLIST (Daily)

✔ QUICK DASHBOARD SCAN
- Check CTR, CPC, CPL, ROAS at account & campaign level
- Identify campaigns with large deviations vs. 7-day average

✔ DRILL DOWN
- Open ad-level view for low CTR or high CPC campaigns
- Check audience overlap, frequency, and creative fatigue
- Review landing page load and conversion events if CPL spikes

✔ IMMEDIATE ACTIONS
- Pause non-performing ads or audiences (if bleeding budget)
- Reallocate budget to winners or experiments
- Request new creative/tests for low CTR ad sets

✔ COMMUNICATION & DOCUMENTATION
- Log issues + actions in tracker (screenshot + note)
- Flag red-alert accounts to Performance Lead
- Add follow-up actions for account manager if client dependency exists

🔥 RULE: Daily monitoring is not just checking numbers — it's spotting signals and taking one immediate action.`,
            duration: '10 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/TG7NUD0V5AY'
          },
          {
            id: 'pm_m3b',
            title: 'Identify high and low-performing segments and make adjustments.',
            description: `📌 SEGMENT PERFORMANCE OPTIMIZATION CHECKLIST (Daily/Weekly)

✔ IDENTIFY HIGH-PERFORMING SEGMENTS  
- Strong CTR (above benchmark)  
- Low/steady CPC  
- Stable CPL within target  
- High engagement or conversion rate  
- Expand: increase budget, create new variations  

✔ IDENTIFY LOW-PERFORMING SEGMENTS  
- CTR dropping  
- CPC unusually high  
- CPL exceeding target  
- Weak conversion signals  
- Action: pause, shrink, or refresh creatives  

✔ WHAT TO ANALYZE  
- Audience groups  
- Age brackets  
- Gender  
- Placements  
- Locations  
- Devices  
- Ad types (Reels, Display, Search, Demand Gen)  

✔ IMMEDIATE ACTIONS  
- Scale winners  
- Fix or pause losers  
- Request new creatives for segments showing fatigue  

✔ DOCUMENTATION  
- Update tracker with:  
  • Segment name  
  • Issue spotted  
  • Action taken  
  • Next review date  

🔥 RULE: Optimize segments, not whole campaigns — precision beats random changes.`,
            duration: '10 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/iaMLibYYSss'
          },
          {
            id: 'pm_m3c',
            title: 'Perform A/B testing for creative and audience variations.',
            description: `📌 SEGMENT PERFORMANCE OPTIMIZATION CHECKLIST (Daily/Weekly)

✔ IDENTIFY HIGH-PERFORMING SEGMENTS  
- Strong CTR (above benchmark)  
- Low/steady CPC  
- Stable CPL within target  
- High engagement or conversion rate  
- Expand: increase budget, create new variations  

✔ IDENTIFY LOW-PERFORMING SEGMENTS  
- CTR dropping  
- CPC unusually high  
- CPL exceeding target  
- Weak conversion signals  
- Action: pause, shrink, or refresh creatives  

✔ WHAT TO ANALYZE  
- Audience groups  
- Age brackets  
- Gender  
- Placements  
- Locations  
- Devices  
- Ad types (Reels, Display, Search, Demand Gen)  

✔ IMMEDIATE ACTIONS  
- Scale winners  
- Fix or pause losers  
- Request new creatives for segments showing fatigue  

✔ DOCUMENTATION  
- Update tracker with:  
  • Segment name  
  • Issue spotted  
  • Action taken  
  • Next review date  

🔥 RULE: Optimize segments, not whole campaigns — precision beats random changes.`,
            duration: '10 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/sL6z4-Rak2g'
          },
          {
            id: 'pm_m3d',
            title: 'Update optimization actions and insights in campaign log.',
            description: `📌 OPTIMIZATION LOGGING CHECKLIST (Daily)

✔ WHAT TO LOG  
- Budget changes  
- Audience shifts  
- Creative replacements  
- Placement adjustments  
- Negative keyword updates  
- Bid strategy changes  
- Paused segments  
- New tests initiated  

✔ HOW TO WRITE A GOOD LOG ENTRY  
- 📅 Date  
- 🎯 Issue found  
- 🔧 Action taken  
- 💡 Why you took it (hypothesis)  
- ⏳ When to review  
- 📊 Expected outcome  

✔ EXAMPLE ENTRY  
**Date:** 26 Nov  
**Issue:** CPL increased from ₹120 to ₹220 on Lookalike 2%  
**Action:** Paused LAL 2% and shifted ₹2,000 to Retargeting  
**Reason:** Drop in CTR and spike in CPC indicated audience fatigue  
**Review:** After 24 hours  

✔ RULES  
- If you optimized but didn’t log — it didn’t happen  
- Logs help diagnose performance dips  
- Logs help explain decisions during client or internal reviews  

🔥 Treat logs as “black box recordings” of the campaign.`,
            duration: '9 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/0Ii_nUuv2B4'
          }
        ]
      },
      {
        id: 's4',
        title: 'Budget Monitoring',
        modules: [
          {
            id: 'pm_m4',
            title: 'Track daily and weekly spend against allocated budget.',
            description: `📌 SPEND TRACKING CHECKLIST (Daily / Weekly)

✔ DAILY CHECK  
- Check account-level spend vs. daily run-rate (Monthly Budget ÷ Working Days)  
- Verify key campaigns are within daily budget limits  
- Confirm no campaign is pacing to exhaust funds prematurely  
- Note any unusual spikes or unexpected spend  

✔ WEEKLY CHECK  
- Review cumulative weekly spend vs. planned week allocation  
- Identify under-spend opportunities and scale winners if CPA/CPL are healthy  
- Flag over-spending campaigns and apply caps / reduce bids / pause experiments  

✔ ACTIONS FOR COMMON SCENARIOS  
- Overspend without performance uplift → cap or pause, notify AM + Lead  
- Underspend with good performance → reallocate to top performers or run tests  
- Imminent fund exhaustion (≤48 hours) → escalate to Account Manager and Ops immediately  
- Sudden spend spike → check for duplicated campaigns, bid changes, or platform anomalies  

✔ RECORDING & COMMUNICATION  
- Update budget pacing sheet every morning (screenshot proof)  
- Note changes in campaign log with reason and timestamp  
- Inform AM if client top-up / fund scheduling is required  

🔥 RULE:  
If budget pacing is off, act first and notify second — immediate action avoids downtime.`,
            duration: '8 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/kiBuehw5FGM'
          },
          {
            id: 'pm_m4b',
            title: 'Adjust pacing to prevent over- or under-spending.',
            description: `📌 PACING ADJUSTMENT CHECKLIST (Daily)

✔ MONITOR  
- Compare actual vs. ideal spend  
- Identify over-spending campaigns  
- Identify under-spending campaigns  
- Check performance metrics before adjusting  

✔ ACTIONS FOR OVER-SPENDING  
- Reduce daily budgets  
- Pause low-performing ad sets  
- Tighten targeting  
- Shift budgets to better-performing segments  

✔ ACTIONS FOR UNDER-SPENDING  
- Increase daily budgets on top performers  
- Expand audience size  
- Activate dormant or test campaigns  
- Improve creative variety to increase traffic  

✔ DOCUMENT  
- Log pacing changes in the campaign tracker  
- Screenshot unusual spikes  
- Notify AM if pacing issues impact lead flow  

🔥 RULE:  
Pacing is never about random budget changes — every adjustment must be strategic.`,
            duration: '8 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/TVAZxlLG8hk'
          },
          {
            id: 'pm_m4c',
            title: 'Reallocate budget dynamically to maximize performance.',
            description: `📌 BUDGET REALLOCATION CHECKLIST (Daily / Weekly)

✔ IDENTIFY WINNERS  
- Low CPL  
- High CTR  
- Stable or improving CPC  
- Strong conversion rate  
- Positive ROAS  

✔ IDENTIFY LOSERS  
- High CPL  
- Weak CTR  
- Rising CPC  
- Low or unstable conversions  
- Poor lead quality  

✔ ACTIONS  
- Increase budget on winners  
- Reduce/stop budget on low performers  
- Redistribute spend from cold to warm audiences  
- Scale conversion campaigns when enough data is available  

✔ DOCUMENT  
- Record change in optimization log  
- Add “reason for shift”  
- Set review date (24 or 48 hours)  

✔ COMMUNICATE  
- Inform Account Manager of any major shifts  
- Flag if budget reallocation affects monthly pacing  

🔥 RULE:  
Performance decides budget — not the calendar, not assumptions.`,
            duration: '8 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/r6ppjTfwxJM'
          },
          {
            id: 'pm_m4d',
            title: 'Report any deviation immediately to Performance Lead.',
            description: `🚨 DEVIATION REPORTING CHECKLIST (Immediate action)

✔ TRIGGER CONDITIONS (Report if any)
- CPL swings > ±20% vs target
- Daily spend pacing off by >15%
- Conversion events stop firing or tracking failure
- Account at risk of fund exhaustion within 48 hours
- Sudden big drop in CTR or huge CPC spike
- Ad disapprovals affecting major campaigns

✔ REPORT CONTENT (Must include)
1) Headline: Short issue summary (1 line)  
2) Evidence: Screenshot(s) + timestamp  
3) Metrics: Current vs baseline (CPL/CPC/CTR/spend)  
4) Actions taken: What you already did (paused, shifted budget, notified AM)  
5) Recommendation: Suggested next step (pause, scale, deep-dive, client fund top-up)  
6) Impact: Estimated lead / revenue risk if not resolved

✔ ESCALATION CHANNEL
- Primary: Performance Slack channel + tag Lead  
- Secondary (urgent): Basecamp task + Email to Lead & AM  
- Emergency (downtime/fund risk <48 hrs): WhatsApp tag + call

✔ POST-ESCALATION
- Log incident in campaign log with details and timeline  
- Follow up with outcome and close the loop  

🔥 RULE: Report early with facts — don’t wait to confirm a theory.`,
            duration: '6 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/J4qAa3r6Uo4'
          }
        ]
      },
      {
        id: 's5',
        title: 'Reporting & Analysis',
        modules: [
          {
            id: 'pm_m5',
            title: 'Prepare weekly reports showing campaign performance and key insights.',
            description: `📌 WEEKLY REPORTING CHECKLIST

✔ DATA COLLECTION  
- Meta Ads Manager  
- Google Ads  
- YouTube Studio (if applicable)  
- Landing page analytics (GA4, Clarity)

✔ KPIs TO INCLUDE  
- Spend  
- Leads generated  
- CPL  
- CTR  
- CPC  
- Conversion Rate  
- Best performing audiences  
- Best and worst creatives  

✔ INSIGHTS (Explain the WHY)  
- Why CPL increased or dropped  
- Why certain audiences worked  
- What creative fatigue looks like  
- Why traffic quality changed  
- What was fixed this week  

✔ ACTIONS / NEXT STEPS  
- Replace fatigued creatives  
- Test new audiences  
- Scale winners  
- Optimize landing page sections  
- Implement tracking fixes  

✔ DELIVERY  
- Upload report to Basecamp  
- Share summary on WhatsApp tagging client  
- Present it briefly on weekly calls  

🔥 RULE:  
Numbers are useless without insights — always explain the “why.”`,
            duration: '7 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/UxXLNU0_xPM'
          },
          {
            id: 'pm_m5b',
            title: 'Highlight learning points, creative winners, and improvement areas.',
            description: `📌 LEARNING INSIGHTS CHECKLIST (Weekly)

✔ IDENTIFY WINNERS  
- Creatives with best CTR  
- Audiences with lowest CPL  
- Formats generating longest retention  
- High-quality traffic sources  
- Strong conversion-rate segments  
→ WHY they worked: hook strength, relevance, newness, seasonal benefit  

✔ IDENTIFY LOSERS  
- Creatives with fatigue (CTR drop + CPC rise)  
- Audiences crossing CPL threshold  
- Poor landing page behavior (bounce/scroll issues)  
- Weak placements  
→ WHY they dropped: creative saturation, poor match, platform shift, narrow targeting  

✔ LEARNING POINTS  
- What repeated pattern did you notice?  
- What insight will shape next week’s strategy?  
- Which risk surfaced early?  
- Which opportunity emerged?  

✔ NEXT STEPS  
- Replace weak creatives  
- Scale winning segments  
- Test new angles or hooks  
- Adjust targeting based on audience learning  
- Improve landing page based on user behavior  

🔥 RULE:  
Insights must be useful, short, pattern-based, and action-driven.`,
            duration: '7 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/xCMNcwPcLtA'
          },
          {
            id: 'pm_m5c',
            title: 'Generate visual dashboards using Google Data Studio or Looker.',
            description: `📌 DASHBOARD CREATION CHECKLIST

✔ CONNECT DATA SOURCES  
- Google Ads  
- Meta Ads  
- GA4  
- YouTube Analytics  
- Lead Sheet (Google Sheets)  

✔ INCLUDE CORE KPIs  
- Spend  
- Leads  
- CPL  
- CTR  
- CPC  
- Conversions  
- Landing page performance (if applicable)  

✔ VISUAL ELEMENTS  
- Line graphs → trends  
- Bar charts → comparisons  
- Pie charts → segmentation  
- Tables → granular details  
- Filters → date, campaign, audience  

✔ QUALITY CHECK  
- Match numbers with platform  
- Check currency / date formats  
- Test filter behavior  
- Ensure dashboard updates automatically  

✔ DELIVERY  
- Share dashboard link with AM + Lead  
- Add to Basecamp for the client  
- Present major insights during weekly/monthly calls  

🔥 RULE:  
Dashboards must be simple, accurate, and insight-rich — not cluttered.`,
            duration: '9 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/xtQUNA3qSFc'
          },
          {
            id: 'pm_m5d',
            title: 'Submit reports to Performance Lead and Account Managers.',
            description: `📤 REPORT SUBMISSION CHECKLIST

✔ FORMAT & CHANNELS  
- Weekly: Basecamp + WhatsApp summary (tag client if needed)  
- Monthly: Basecamp + Email (attach PDF) + Dashboard link  
- Urgent incidents: Slack + Email + Basecamp task  

✔ CONTENT TO INCLUDE  
- Short executive summary (1–3 lines)  
- Key KPIs (Spend, Leads, CPL, CTR, ROAS)  
- Top 3 insights and actions taken  
- Recommended next steps with owner and ETA  
- Dashboard link and attached PDF/screenshots  

✔ DELIVERY STEPS  
1) Upload report to Basecamp and attach PDF  
2) Send email with summary + link; CC Performance Lead + AMs  
3) Post short message in Performance Slack tagging Lead + AMs  
4) Log submission and confirmation in tracker (timestamp + acknowledgement)  

✔ FOLLOW-UP  
- If action required: ask for confirmation within 24 hours  
- If no acknowledgment in 24 hours: re-send and escalate to Lead  

🔥 RULE:  
A report isn’t delivered until the Lead and AM acknowledge it.`,
            duration: '6 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/Ie4r3ZJWZSw'
          }
        ]
      },
      {
        id: 's6',
        title: 'Cross-Team Coordination',
        modules: [
          {
            id: 'pm_m6',
            title: 'Collaborate with Account team for new client goals or target updates.',
            description: `🤝 ACCOUNT TEAM COLLABORATION CHECKLIST

✔ RECEIVE UPDATES  
- New monthly targets  
- Revised CPL expectations  
- Updated audience priorities  
- Offer changes  
- Upcoming campaigns or events  
- Paused or discontinued services  
- Client escalations or concerns  

✔ ACTION ON UPDATES  
- Re-run targeting logic  
- Adjust budgets across campaigns  
- Create or update ad copies  
- Revise audience segments  
- Prepare new experiment roadmap  
- Document changes in tracker  

✔ COMMUNICATION  
- Confirm understanding of every update  
- Clarify doubts immediately  
- Share the estimated time of execution  
- Send back a summary of changes implemented  

✔ COORDINATION HABITS  
- Sync at least once a week  
- Join monthly planning meetings  
- Tag AM in Basecamp for relevant tasks  
- Share mini performance highlights they can forward to the client  

🔥 RULE:  
No update is minor — treat every input from Account Team as a performance directive.`,
            duration: '7 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/djoK6u4uwzU'
          },
          {
            id: 'pm_m6b',
            title: 'Share ad performance data with Creative team for content refinement.',
            description: `🎨 PERFORMANCE → CREATIVE SYNC CHECKLIST (Weekly)

✔ WHAT TO SHARE  
- Top 3 winning creatives (with metrics)  
- Bottom 3 poor performers (with reasons)  
- CTR, CPC, Thumb-Stop Rate, Retention stats  
- Hook performance comparison  
- Creative fatigue signals (CTR drop + CPC rise)  
- Audience behavior insights (age, gender, interests)  

✔ HOW TO PRESENT  
- Simple table or bullets  
- Include screenshots with highlights  
- Add 1-line insight per creative (Why it worked / Why it failed)  
- Recommend next creative themes or hooks  

✔ ACTIONS FOR CREATIVE TEAM  
- Refine hooks based on top performers  
- Replace fatigued creatives  
- Experiment with new angles, formats, or colors  
- Create versions of winning patterns (A/B variants)  

✔ COMMUNICATION  
- Share update on Basecamp + tag designers & copywriters  
- Send quick WhatsApp summary for urgent items  
- Record insights in performance tracker  

🔥 RULE:  
Don’t just send data — send direction.`,
            duration: '7 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/5itq2jStUx0'
          },
          {
            id: 'pm_m6c',
            title: 'Work with SEO and Automation teams to align performance funnels.',
            description: `🔗 PERFORMANCE → SEO → AUTOMATION ALIGNMENT CHECKLIST

✔ ALIGN WITH SEO  
- Share top-performing keywords and audiences  
- Get SEO’s ranking priorities  
- Align ad copy with SEO tone and keyword buckets  
- Sync on landing page improvements (speed, content, CTAs)  
- Use SEO insights for long-term funnel stability  

✔ ALIGN WITH AUTOMATION  
- Confirm all forms mapped to CRM correctly  
- Check WhatsApp auto-replies and nurturing flows  
- Ensure Pabbly automations run without errors  
- Validate lead tagging + source accuracy  
- Fix broken flows immediately  

✔ FUNNEL OPTIMIZATION  
- Align ad hooks with SEO content themes  
- Pass lead-quality feedback to SEO for ranking strategy  
- Coordinate with Automation for instant lead engagement  
- Share timeline signals (peak enquiry hours, high-intent audiences)  

✔ COMMUNICATION  
- Update SEO + Automation teams in Basecamp  
- Share weekly funnel insights summary  
- Document all changes in performance tracker  

🔥 RULE:  
A funnel wins only when ads, SEO, and automation speak the same language.`,
            duration: '8 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/Uf0PrY9keWw'
          },
          {
            id: 'pm_m6d',
            title: 'Document inter-department updates for review meetings.',
            description: `📄 INTER-DEPARTMENT UPDATE CHECKLIST (Weekly)

✔ WHAT TO DOCUMENT  
- Creative delays or required assets  
- New ad copy or scripts needed  
- SEO changes affecting landing page or traffic quality  
- Automation issues (Pabbly, WhatsApp, CRM mapping)  
- Client updates received from Account Managers  
- Performance trends that need cross-team attention  

✔ FORMAT  
- Use bullet points  
- Group updates by department  
- Add dates + context  
- Note impact + required action  

✔ EXAMPLES  
- Creative: “Need 3 new hooks for LAL audiences due to creative fatigue.”  
- SEO: “High bounce rate on LP—needs content fix on section 2.”  
- Automation: “WhatsApp autoresponder not firing—leads delayed by 20 mins.”  

✔ DELIVERY  
- Upload in Basecamp under ‘Review Meeting Notes’  
- Share summary with AM + Lead  
- Present during weekly/monthly review meetings  

🔥 RULE:  
If an update impacts results, it must be documented before the review.`,
            duration: '6 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/TY-j65M54O4'
          }
        ]
      },
      {
        id: 's7',
        title: 'AI & Automation Integration',
        modules: [
          {
            id: 'pm_m7',
            title: 'Use AI tools (ChatGPT, AdCreative.ai, Bard) for ad copy and creative suggestions.',
            description: `🤖 AI USAGE CHECKLIST (Daily)

✔ PREP INPUTS  
- Gather top-performing creatives  
- Identify poor performers  
- Extract audience insights (age, gender, interests)  
- Note campaign goals (CPL, leads, conversions)  

✔ GENERATE WITH AI  
- Hooks  
- Headlines  
- CTAs  
- Ad copy variations  
- Creative concepts  
- Carousel frames  
- Script outlines for UGC-style ads  
- Localization (Telugu/Hindi/English)  

✔ USE THE RIGHT TOOLS  
- ChatGPT → Concepts, hooks, angles, scripts  
- Bard → Data-backed suggestions, keyword-focused ideas  
- AdCreative.ai → Visual mockups and quick creative layouts  

✔ REVIEW BEFORE SHARING  
- Remove clichés  
- Ensure accuracy  
- Match brand tone  
- Avoid over-promising  
- Ensure compliance with platform policies  

✔ DELIVERY  
- Share final shortlisted options with Creative team  
- Add AI outputs to Creative Brief  
- Add winning AI ideas to internal library  

🔥 RULE:  
AI expands creativity — YOU provide direction.`,
            duration: '7 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/xM-36G8hy8w'
          },
          {
            id: 'pm_m7b',
            title: 'Leverage Meta Advantage+ and Google AI tools for campaign scaling.',
            description: `⚙️ PLATFORM AI CHECKLIST (Daily/Weekly)

✔ WHEN TO USE AI  
- High data volume  
- Stable conversion tracking  
- Clean funnel  
- Strong past performance  

✔ META ADVANTAGE+  
- Broad audience expansion  
- Creative diversification  
- Automated placements  
- Budget optimization  
- Testing multiple hooks quickly  

✔ GOOGLE AI (PMax + Smart Bidding)  
- High-intent capture  
- Automated keyword expansion  
- Conversion probability bidding  
- Cross-channel optimization  

✔ HOW TO UTILIZE  
1️⃣ Give clear conversion goals (Leads / Sales)  
2️⃣ Feed top 5–7 winning creatives  
3️⃣ Set minimum ROAS or max CPA targets  
4️⃣ Monitor early signals for 48–72 hours  
5️⃣ Let the algorithm stabilize before major edits  

✔ WHAT NOT TO DO  
🚫 Don’t switch off AI campaigns too soon  
🚫 Don’t change budgets drastically  
🚫 Don’t starve campaigns with insufficient creatives  
🚫 Don’t rely blindly — always monitor  

🔥 RULE:  
AI scales what YOU set up correctly.`,
            duration: '8 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/t2dTYYYR3Gs'
          },
          {
            id: 'pm_m7c',
            title: 'Automate reporting dashboards and daily performance summaries.',
            description: `🔁 AUTOMATION IMPLEMENTATION CHECKLIST (Daily / Weekly)

✔ DATA SOURCES & CONNECTIONS  
- Connect Meta Ads, Google Ads, GA4, YouTube, CRM/Lead Sheet  
- Ensure connectors use service accounts or API keys (no manual uploads)  

✔ DASHBOARD DESIGN  
- Core KPIs: Spend, Leads, CPL, CTR, Top-performing creative/audience, Red-alert flag  
- Weekly and monthly trend widgets + realtime snapshots  
- Filters: Client, Campaign, Date range, Platform  

✔ DATA VALIDATION & SANITY CHECKS  
- Cross-verify totals with platform exports (daily)  
- Row-level checks: UTMs, conversion timestamps, duplicate leads  
- Alerts for mismatches >5% between dashboard and platform  

✔ SUMMARY TEMPLATE (Daily automated email/slack)  
- Subject: Daily Snapshot — Client — DD MMM  
- 1-line headline (Status: Green/Amber/Red)  
- Key metrics: Spend | Leads | CPL | Top Winner | Action (1-line)  
- Attach dashboard link + 1 screenshot  

✔ SCHEDULE & DELIVERY  
- Auto-refresh dashboards pre-9:30 AM (local time)  
- Auto-send summary to AM + Performance Lead via Email + Slack + Basecamp  
- Include link to the dashboard and key screenshots  

✔ MAINTENANCE & OWNERSHIP  
- Weekly QA: check connectors, GA4 event mapping, UTM integrity  
- Document automation flows & update when pixel/UTM/SOP change  
- Backup export to Google Drive daily for audit  

🔥 RULES  
- If dashboard totals deviate >5% vs platform, pause automated send and investigate.  
- Critical alerts (tracking failure, fund risk, CPL > 20% above target) must trigger immediate Slack + email + tag Lead.`,
            duration: '10 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/9m5k3EJ7SDI'
          },
          {
            id: 'pm_m7d',
            title: 'Maintain AI insights log for internal learning.',
            description: `🧠 AI INSIGHTS LOG — WEEKLY WORKFLOW

✔ WHAT TO DOCUMENT  
- Winning hooks generated by AI  
- Audience ideas (interest clusters, lookalike prompts)  
- Creative suggestions from AdCreative.ai  
- Competitor insights (positioning, ad formats)  
- Landing page improvement suggestions  
- Search term expansion or negatives from AI analysis  
- Screenshot + link of prompt used  

✔ HOW TO ORGANIZE  
- Category tabs: Copy | Creative | Audience | Keywords | Bidding | LP Suggestions | Competitor Insights  
- Add columns: Prompt Used | Insight | Status (Tested/Not Tested) | Impact | Owner  

✔ WHEN TO UPDATE  
- End of every week (Friday EOD)  
- Before weekly sync meeting  

✔ ACTION STEPS  
1️⃣ Log all AI-generated ideas worth testing  
2️⃣ Mark insights as “Tested” once implemented  
3️⃣ Record performance impact  
4️⃣ Present top 3 insights in weekly sync  
5️⃣ Archive non-useful insights for learning  

🔥 RULES  
- No AI idea is valid until tested  
- Every tested idea must be logged with impact  
- Insights must be accessible to the whole team  

💡 AIM: Create a growing internal intelligence system.`,
            duration: '8 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/tLroiIg_Q18'
          }
        ]
      },
      {
        id: 's8',
        title: 'Client Updates & Escalations',
        modules: [
          {
            id: 'pm_m8',
            title: 'Share ad highlights and reports with Account team weekly.',
            description: `📤 WEEKLY AD HIGHLIGHTS & REPORT SHARING CHECKLIST

✔ TIMING  
- Send weekly summary before the weekly review meeting (preferably 24 hours prior)

✔ CONTENT (Short & Actionable)  
- 1-line headline (Status: Green/Amber/Red)  
- Top 3 winners (creative / audience / placement) with one metric each (CTR, CPL, ROAS)  
- Top 2 risks or red alerts (tracking, pacing, creative fatigue)  
- Top 3 actions taken this week  
- Top 3 recommended next steps (owner + ETA)  
- Link to dashboard and attached 1-slide snapshot or key screenshots

✔ DELIVERY CHANNELS  
- Basecamp: Upload full report + attach snapshot  
- Email: Short executive summary + dashboard link (CC Performance Lead + AM)  
- Slack/WhatsApp: 1-line headline + link (tag AM for visibility)

✔ FORMAT TIPS  
- Use bullets — keep it skimmable  
- Include screenshots for winners and red alerts  
- Mention impact on KPIs (e.g., “CPL down 18% week-on-week”)  
- Provide exact owners + ETAs for recommended actions

✔ CONFIRMATION & FOLLOW-UP  
- Request acknowledgment from AM within 24 hours  
- If no acknowledgment, follow up and escalate to Lead  
- Log the share in the weekly communication tracker

🔥 RULE:  
If the Account team can’t forward your update to the client as-is, simplify it until they can.`,
            duration: '7 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/Q2Sgcovt28M'
          },
          {
            id: 'pm_m8b',
            title: 'Prepare short summaries of wins and upcoming experiments for clients.',
            description: `📈 WEEKLY WINS & UPCOMING EXPERIMENT SUMMARY CHECKLIST  

✔ STRUCTURE  
1) **Top Wins (with numbers)**  
   - CTR up 22%  
   - CPL down from ₹450 to ₹380  
   - Lead quality improved (12% more calls connected)

2) **Why These Wins Happened**  
   - New hook performed well  
   - Better audience match  
   - Optimized landing page section  
   - Improved creative format

3) **Upcoming Experiments (Next 7–14 Days)**  
   - New audience test  
   - New creative angles  
   - Different bidding strategy  
   - Retargeting adjustments  
   - Landing page tweaks

✔ DELIVERY  
- WhatsApp: Short, skimmable message  
- Basecamp: Insert in weekly update thread  
- Email: Formal summary (if major update)

✔ TONE  
- Confident  
- Strategic  
- Transparent  
- No technical jargon unless needed

🔥 RULE:  
If the client can’t understand the update in 60 seconds, rewrite it to make it simpler.`,
            duration: '6 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/kkiyUKE5Q3k'
          },
          {
            id: 'pm_m8c',
            title: 'Flag any campaign issues or platform challenges proactively.',
            description: `🚨 PROACTIVE ISSUE FLAGGING CHECKLIST  

✔ WHAT TO FLAG  
- Sudden CPL spikes (20–30% increase in a day)  
- Drop in CTR, impressions, or conversions  
- Disapproved ads or restricted assets  
- Conversion tracking issues  
- Budget not spending  
- Landing page loading issues  
- Audience fatigue or creative burnout  
- Platform bugs (events missing, delayed reporting)

✔ HOW TO FLAG  
Use this 4-part alert message:  
1) **Issue:** What happened  
2) **Impact:** Why it matters  
3) **Action Taken:** What you already did  
4) **Next Step Needed:** From AM/Lead/Client if required  

✔ WHERE TO FLAG  
- WhatsApp group (urgent issues)  
- Basecamp (formal documentation)  
- Slack (internal alignment)  
- Campaign log (for audit)

✔ BEST PRACTICES  
- Flag within 15 minutes of identifying the issue  
- Always include screenshots  
- Always suggest a solution  
- Never wait for the client to find the issue  

🔥 RULE:  
Early flagging prevents late panic.`,
            duration: '7 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/6fFwCStbP78'
          },
          {
            id: 'pm_m8d',
            title: 'Ensure transparent communication on performance expectations.',
            description: `📣 TRANSPARENT PERFORMANCE COMMUNICATION CHECKLIST  

✔ WHAT TO COMMUNICATE  
- Expected CPL range  
- Learning phase period (7–14 days)  
- Testing plan (audience, creatives, placements)  
- Key dependencies (LP speed, client’s sales follow-up, budgets)  
- Expected timeline for stability (3–4 weeks)  

✔ WHEN TO COMMUNICATE  
- At onboarding  
- In weekly meetings  
- Whenever performance drops  
- Before launching experiments  
- When budgets or conditions change  

✔ HOW TO COMMUNICATE  
- Keep language simple and non-technical  
- Share real numbers, not vague statements  
- Show comparison charts (week-on-week/month-on-month)  
- Use phrases like:  
  “Here’s what we’re testing now…”  
  “This is the expected CPL range…”  
  “Here’s what may affect numbers this week…”  

✔ TONE  
- Honest  
- Calm  
- Confidence-building  
- Solution-focused  

🔥 RULE:  
Promise clarity, not miracles. Under-explain nothing. Over-explain nothing.`,
            duration: '6 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/NOdTYXa4PKE'
          }
        ]
      },
      {
        id: 's9',
        title: 'Process & SOP Adherence',
        modules: [
          {
            id: 'pm_m9',
            title: 'Follow performance SOP for campaign setup, optimization, and reporting.',
            description: `🧩 PERFORMANCE SOP COMPLIANCE CHECKLIST  

✔ CAMPAIGN SETUP SOP  
- Follow naming conventions: Campaign → Ad Set → Ad  
- Add UTMs and verify tracking  
- Ensure pixel events are firing  
- Double-check audience size and bidding strategy  
- Run pre-launch quality check (copy, CTA, creative, preview)

✔ OPTIMIZATION SOP  
- Daily CPL + spend check  
- Daily placement / creative performance check  
- Weekly search term + negative keyword update  
- Weekly audience refresh or testing  
- Landing page check once a week  
- Pause underperformers based on SOP thresholds  
- Document all optimization actions in log

✔ REPORTING SOP  
- Follow template for weekly/monthly reports  
- Add insights, not just data  
- Highlight wins, risks, and next actions  
- Attach screenshots of important metrics  
- Share via Basecamp + Email  
- Log report submission

✔ BEST PRACTICES  
- Never rely on memory; rely on the SOP  
- If a step is unclear, clarify — never assume  
- If the SOP improves, update version number  
- Keep the SOP open during audits and setup

🔥 RULE:  
SOPs are not optional — they are the standard for performance excellence.`,
            duration: '7 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/fQes1Ec_3mo'
          },
          {
            id: 'pm_m9b',
            title: 'Update all campaign changes, ad IDs, and notes in the tracker daily.',
            description: `📋 TRACKER UPDATE CHECKLIST (Daily)

✔ WHEN TO UPDATE
- Immediately after any campaign change (budget, audience, creative, bid, pause/enable)
- End-of-day: consolidate minor edits into the daily log

✔ WHAT TO RECORD
- Campaign name & ad set/ad group name
- Ad ID(s) affected (exact ID values)
- Field changed (budget, audience, creative, bid, status)
- Previous value → New value
- Short reason / hypothesis (1–2 lines)
- Expected outcome and review time (e.g., review after 24 hrs)
- Screenshot or link to ad preview / platform note
- Timestamp and your initials

✔ HOW TO FORMAT (example)
- Date | Campaign | Ad Set | Ad ID | Field | Old → New | Reason | Review Date | Proof Link
- Keep entries concise and structured — one action per row

✔ BEST PRACTICES
- Use copy-paste templates to avoid inconsistent entries
- If you perform multiple related changes, use a single grouped entry with bullet points
- Tag AM/Lead in the tracker if decision affects pacing or client targets
- Never leave ad IDs or actions undocumented — assume someone else will need this context

🔥 RULE:
If it’s not in the tracker — it didn’t officially happen. Update first, explain second.`,
            duration: '8 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/2FdSt7Axogo'
          },
          {
            id: 'pm_m9c',
            title: 'Submit campaign audit form after every major optimization cycle.',
            description: `📋 CAMPAIGN AUDIT FORM CHECKLIST (When to submit & what to include)

✔ WHEN TO SUBMIT  
- After major budget reallocations (≥20% change)  
- After structural changes (new campaign architecture / audience layers)  
- After creative or landing page overhaul  
- After implementing automation/AI-driven scaling that changes spend patterns  
- After resolving major tracking or delivery issues

✔ WHAT TO CAPTURE IN THE FORM  
- Campaign name(s) & ad IDs affected  
- Date & time of optimization cycle  
- Baseline KPIs (pre-change): Spend | CPL | CTR | CPC | Conversions  
- Actions taken (detailed bullets)  
- Hypothesis for each action (1 line)  
- Expected outcome & KPI target (with timeframe)  
- Proof attachments: screenshots, tracker links, dashboard snapshot  
- Follow-up review date and owner (when to check impact)  
- Final status (Post-review: improved / unchanged / worsened) — to be filled after review

✔ SUBMISSION & STORAGE  
- Share to Performance Lead + Account Manager via Basecamp + Email  
- Upload attachments to campaign folder (Month → Campaign → Audits)  
- Add a line in the campaign log linking to the audit form

✔ BEST PRACTICES  
- Keep entries factual and concise (no opinions without data)  
- Use timestamps and exact ad IDs for traceability  
- Always include a review date (24–72 hrs depending on spend)  
- If results differ from expected, add a short learning note post-review

🔥 RULE:  
No major optimization is complete until the audit form is submitted and a review date is logged.`,
            duration: '8 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/ftvUKfrdnr0'
          }
        ]
      },
      {
        id: 's10',
        title: 'Knowledge Transfer & Handover',
        modules: [
          {
            id: 'pm_m10',
            title: 'Follow KT template.',
            description: `📘 KT (Knowledge Transfer) CHECKLIST  

✔ WHEN TO PREPARE KT  
- Planned leave (prepare 24–48 hrs in advance)  
- Unplanned leave (as soon as possible)  
- Account handover  
- Internal role change  
- During onboarding of backup specialist  

✔ WHAT TO INCLUDE (Follow the Template Exactly)  
1) **Account Summary** — goals, KPIs, budget pacing  
2) **Current Campaign Status** — active campaigns + ad IDs  
3) **Live Optimizations** — what was changed recently + next review date  
4) **Performance Risks** — CPL trends, tracking issues, LP concerns  
5) **Pending Tasks** — with owners + due dates  
6) **Upcoming Experiments** — what’s planned + hypothesis  
7) **Creative Requirements** — pending assets or approvals  
8) **Tracking Health** — GA4, pixel, conversion events  
9) **Links Folder** — dashboards, trackers, Basecamp, campaign sheets  
10) **Access Notes** — anything needed for login or approvals  

✔ DELIVERY  
- Share via Basecamp + Email  
- Tag Performance Lead + Account Manager  
- Handhold backup specialist for 10–15 minutes  
- Get acknowledgment

✔ COMMON MISTAKES TO AVOID  
- Missing ad IDs  
- Vague next steps  
- No review dates  
- No context on current risks  
- Missing links  

🔥 RULE:  
If someone cannot run the account smoothly tomorrow using your KT — it is incomplete.`,
            duration: '7 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/D4JXPJ4uXsg'
          }
        ]
      },
      {
        id: 's11',
        title: 'Conversion Tracking & Landing Page Management',
        modules: [
          {
            id: 'pm_m11',
            title: 'Conversion Tracking & LP Mgmt',
            description: 'Verify pixels, tracking events, and UTM parameters. Run test leads and monitor landing page speed and UX.',
            duration: '25 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/_ohcwqpNIBA'
          }
        ]
      },
      {
        id: 's12',
        title: 'Audience, Keyword & Creative Strategy Development',
        modules: [
          {
            id: 'pm_m12',
            title: 'Audience, Keyword & Creative Strategy',
            description: 'Develop keyword and audience clusters. Monitor fatigue, test creatives, and study competitors. Build ongoing strategy.',
            duration: '25 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/I9q6WdqKeYA'
          }
        ]
      },
      {
        id: 's13',
        title: 'Onboarding & New Client Setup',
        modules: [
          {
            id: 'pm_m13',
            title: 'Onboarding & New Client Setup',
            description: 'Collect and verify all accesses. Create folder structures, audit previous performance, and prepare first-month blueprints.',
            duration: '25 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/-3rZqInu7eM'
          }
        ]
      },
      {
        id: 's14',
        title: 'Tools, Diagnostics & Troubleshooting',
        modules: [
          {
            id: 'pm_m14',
            title: 'Tools, Diagnostics & Troubleshooting',
            description: 'Use platform diagnostics and debug tools (GTM, GA4, Pixel Helper) to identify root causes of performance issues.',
            duration: '24 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/YzuMgU7W5xI'
          }
        ]
      },
      {
        id: 's15',
        title: 'Red Alert Detection & Recovery Strategy',
        modules: [
          {
            id: 'pm_m15',
            title: 'Red Alert Detection & Recovery',
            description: 'Identify major drops fast. Systematic diagnosis of delivery, creative, budget, and tracking. Create and execute recovery plans.',
            duration: '25 min',
            isCompleted: false,
            type: 'video',
            videoUrl: 'https://youtu.be/sL6z4-Rak2g'
          }
        ]
      }
    ],
  },
  {
    id: 'c3',
    title: 'Web Developer',
    description: 'Full-stack fundamentals covering Wordpress, PHP, MySQL, and modern backend integration.',
    progress: 0,
    image: 'https://picsum.photos/seed/webdev/600/400',
    category: 'role-specific',
    sections: [
      {
        id: 's1',
        title: 'Frontend Basics',
        modules: [
          { id: 'm1', title: 'Semantic HTML & CSS Grid', description: 'Building accessible and responsive layouts.', duration: '35 min', isCompleted: false, type: 'video' },
          { id: 'm2', title: 'JavaScript ES6+', description: 'Mastering modern JavaScript features.', duration: '40 min', isCompleted: false, type: 'video' },
        ]
      },
      {
        id: 's2',
        title: 'React Fundamentals',
        modules: [
          { id: 'm3', title: 'React Hooks Intro', description: 'Understanding state and side effects in React.', duration: '25 min', isCompleted: false, type: 'reading' },
        ]
      }
    ],
  },
  {
    id: 'c4',
    title: 'Advanced SEO Mastery',
    description: 'Learn technical SEO, on-page optimization, and backlink strategies to rank #1.',
    progress: 0,
    image: 'https://picsum.photos/seed/seocourse/600/400',
    category: 'role-specific',
    sections: [
      {
        id: 's1',
        title: 'SEO Basics',
        modules: [
          { id: 'm1', title: 'Search Engine Algorithms', description: 'How Google ranks content in 2024.', duration: '15 min', isCompleted: false, type: 'video' },
        ]
      },
      {
        id: 's2',
        title: 'Keyword Strategy',
        modules: [
          { id: 'm2', title: 'Keyword Research Tools', description: 'Finding high-opportunity keywords.', duration: '30 min', isCompleted: false, type: 'video' },
        ]
      },
      {
        id: 's3',
        title: 'Technical SEO',
        modules: [
          { id: 'm3', title: 'Technical SEO Audits', description: 'Identifying and fixing crawl errors.', duration: '25 min', isCompleted: false, type: 'quiz' },
        ]
      }
    ],
  },
];

// Updated Quizzes
export const MOCK_QUIZZES: Record<string, Quiz> = {
  'q_m1': {
    id: 'q_m1',
    title: 'Message Response Assessment',
    moduleId: 'm1',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the maximum acceptable time to respond to a client message?', options: ['2 hours', '30 minutes', 'End of day', 'Only during working hours'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Which platform is primarily used for formal communication?', options: ['WhatsApp', 'Email', 'Instagram', 'Canva'], correctOptionIndex: 1 },
      { id: 'q3', text: 'If the response requires action from another team member, what should happen next?', options: ['Wait for the client to ask again', 'Ignore the message until the work is done', 'Assign the task immediately and confirm timelines', 'Respond with emojis'], correctOptionIndex: 2 },
      { id: 'q4', text: 'Which of the following best represents a correct response style?', options: ['“Working on it.”', '“Noted.”', '“Noted — assigning to design. Will update by EOD.”', 'No reply until the task is done'], correctOptionIndex: 2 },
      { id: 'q5', text: 'Why is fast acknowledgment important?', options: ['To appear busy', 'To keep communication clear, build trust, and avoid delays', 'To send more messages', 'Because it is optional'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Scenario: The client sends a long instruction voice note while you’re in another call. Which action is correct?', options: ['Listen later and reply at end of day', 'Reply immediately: “Received — will review and update shortly.”', 'Forward to team without message', 'Ignore'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Scenario: A client asks for an update and the work is pending with the designer. What should you do?', options: ['Tell the client to wait', 'Reply after the designer sends it', 'Acknowledge, share ETA, and follow up internally', 'Say “checking” and disappear'], correctOptionIndex: 2 },
      { id: 'q8', text: 'What tone should your responses reflect?', options: ['Casual and emotional', 'Robotic and blunt', 'Confident, clear, and respectful', 'Humorous and informal'], correctOptionIndex: 2 },
      { id: 'q9', text: 'Which statement represents closing the loop?', options: ['“We are working on it.”', '“Done — creative uploaded and shared for your review.”', '“Okay.”', 'No response needed once delivered'], correctOptionIndex: 1 },
      { id: 'q10', text: 'When should you check client messages?', options: ['Only in the morning', 'Only if someone reminds you', 'Start of day, mid-day, and before signing off', 'Never'], correctOptionIndex: 2 },
    ],
  },
  'q_m2': {
    id: 'q_m2',
    title: 'Proactive Update Assessment',
    moduleId: 'm2',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the purpose of sending a proactive daily update?', options: ['To remind clients you\'re busy', 'To keep communication clear and build trust', 'To increase message count', 'Optional formality'], correctOptionIndex: 1 },
      { id: 'q2', text: 'When should the ‘As discussed’ message be sent after a client call?', options: ['End of the day', 'When tasks are completed', 'Immediately after hanging up', 'Next day'], correctOptionIndex: 2 },
      { id: 'q3', text: 'Which of the following counts as a “win” worth sharing?', options: ['Team arguments', 'CPL improvement or reel performance', 'Client delays', 'Internal issues'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Which tone best suits proactive updates?', options: ['Casual and emotional', 'Vague and rushed', 'Clear, structured, and confident', 'Humorous'], correctOptionIndex: 2 },
      { id: 'q5', text: 'Which of the following is a correct proactive update format?', options: ['“Work happening.”', '“As discussed — tasks in progress.”', '“Update: Done, pending, ETA — plus any wins.”', 'No update if nothing major happened'], correctOptionIndex: 2 },
      { id: 'q6', text: 'Scenario: Nothing significant happened today — what do you do?', options: ['Don’t send an update', 'Send: “No major updates — here’s what\'s ongoing and next ETA.”', 'Wait until client asks', 'Send a random emoji'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Scenario: Client gives instructions on a call. What is the next step?', options: ['Trust your memory', 'Send an “As discussed” summary immediately', 'Assign tasks later', 'Wait for client to repeat'], correctOptionIndex: 1 },
      { id: 'q8', text: 'What should a proactive update include?', options: ['Completed work, in-progress work, pending tasks with ETA, wins', 'Only completed tasks', 'Only wins', 'Only complaints'], correctOptionIndex: 0 },
      { id: 'q9', text: 'Why are proactive updates important even when results are still building?', options: ['They keep the relationship engaged and confident', 'They fill emptiness', 'They look impressive', 'Not required'], correctOptionIndex: 0 },
      { id: 'q10', text: 'Scenario: You forgot to send an update yesterday. What is the best correction?', options: ['Ignore it', 'Apologize briefly and continue consistency moving forward', 'Blame another team member', 'Pretend nothing happened'], correctOptionIndex: 1 },
    ],
  },
  'q_m3': {
    id: 'q_m3',
    title: 'Follow-Ups Assessment',
    moduleId: 'm3',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'How often should follow-ups be sent on pending approvals?', options: ['Once per day', 'Every 3 hours', 'Only when asked', 'Every weekend'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Why should reminders be labeled as Gentle Reminder 1, 2, and 3?', options: ['To track sequence clearly and keep communication polite', 'To sound formal', 'To pressure the client', 'No reason'], correctOptionIndex: 0 },
      { id: 'q3', text: 'When is it acceptable to mention auto-approval?', options: ['After Gentle Reminder 3 when timelines are agreed or at risk', 'In the first message', 'Never', 'Randomly'], correctOptionIndex: 0 },
      { id: 'q4', text: 'Which message best represents a proper Gentle Reminder 1?', options: ['“Approve fast.”', '“Ping.”', '“Gentle reminder 1: Requesting approval on [asset] so we can move forward.”', '“Still waiting.”'], correctOptionIndex: 2 },
      { id: 'q5', text: 'What is the purpose of structured follow-ups?', options: ['To annoy clients', 'To ensure decisions happen on time and protect timelines', 'To increase message count', 'To avoid tasks'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Scenario: The client hasn’t reviewed a creative for 24 hours, and you’ve already sent Gentle Reminder 3. What should you do?', options: ['Wait silently', 'Send auto-approval clause message', 'Escalate to CEO immediately', 'Delete the creative'], correctOptionIndex: 1 },
      { id: 'q7', text: 'What tone should follow-ups always maintain?', options: ['Aggressive', 'Sarcastic', 'Calm, respectful, and clear', 'Casual'], correctOptionIndex: 2 },
      { id: 'q8', text: 'Scenario: The client replies “Working on it — will confirm today.” What should you do?', options: ['Stop following up forever', 'Still send reminders', 'Note the new ETA and follow up if missed', 'Panic'], correctOptionIndex: 2 },
      { id: 'q9', text: 'What happens if follow-ups are not done?', options: ['Nothing changes', 'Work stalls and timelines break', 'Client remembers automatically', 'It improves speed'], correctOptionIndex: 1 },
      { id: 'q10', text: 'Why is documenting follow-ups important?', options: ['To prove the communication trail and avoid confusion', 'For no reason', 'To make trackers longer', 'To send more messages'], correctOptionIndex: 0 },
    ],
  },
  'q_m4': {
    id: 'q_m4',
    title: 'Client Calls Assessment',
    moduleId: 'm4',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why is the camera required to be on during client calls?', options: ['For formality', 'It builds presence, trust, and professionalism', 'It doesn\'t matter', 'Only required for video-based clients'], correctOptionIndex: 1 },
      { id: 'q2', text: 'When should the meeting summary be sent?', options: ['End of the day', 'Whenever you remember', 'Immediately after the call', 'Next week'], correctOptionIndex: 2 },
      { id: 'q3', text: 'Which ETA format is acceptable?', options: ['“Soon”', '“Tomorrow”', '“By Friday 4:00 PM”', '“Later”'], correctOptionIndex: 2 },
      { id: 'q4', text: 'Which structure must the summary follow?', options: ['Long paragraphs', 'Action items for client + action items for DM with ETA', 'Only emojis', 'Only pending items'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What must be reviewed BEFORE the call?', options: ['Nothing', 'Pending approvals, performance, deliverables', 'Only client messages', 'Only new tasks'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Scenario: The client assigns a new task verbally. What is the next step?', options: ['Wait for email', 'Do nothing until reminded', 'Document in the summary with ETA', 'Ignore until later'], correctOptionIndex: 2 },
      { id: 'q7', text: 'Why should notes be taken during the call?', options: ['To prevent assumptions, memory errors, and confusion', 'For decoration', 'Optional practice', 'Because calls are boring'], correctOptionIndex: 0 },
      { id: 'q8', text: 'Scenario: A client says: “Send it ASAP.” What is the correct next step?', options: ['Reply “Okay”', 'Ask: “To confirm, can we lock ETA as <date + time>?”', 'Ignore ambiguity', 'Decide yourself'], correctOptionIndex: 1 },
      { id: 'q9', text: 'What tone should call summaries have?', options: ['Uncertain and casual', 'Clear, confident, structured', 'Short and vague', 'Humorous'], correctOptionIndex: 1 },
      { id: 'q10', text: 'When is a client call considered fully completed?', options: ['When the call ends', 'When tasks are done', 'When documented, acknowledged, and ETAs assigned', 'When someone reminds you'], correctOptionIndex: 2 },
    ],
  },
  'q_m5': {
    id: 'q_m5',
    title: 'Sentiment Check Assessment',
    moduleId: 'm5',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the purpose of a weekly sentiment check?', options: ['To judge the client personally', 'To understand mood, satisfaction, and early signs of risk', 'To send more messages', 'To fill a document only'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Which of the following may indicate dissatisfaction?', options: ['Quick replies with detailed feedback', 'Delayed responses and short messages', 'Client sending emojis', 'Client sharing appreciation'], correctOptionIndex: 1 },
      { id: 'q3', text: 'If the client becomes slow in responses but is traveling, what should you do?', options: ['Assume they are unhappy', 'Escalate immediately', 'Note context and monitor respectfully', 'Stop communication completely'], correctOptionIndex: 2 },
      { id: 'q4', text: 'When should sentiment concerns be escalated internally?', options: ['If dissatisfaction repeats or reaches red status', 'Only at contract end', 'Only if client cancels', 'Never'], correctOptionIndex: 0 },
      { id: 'q5', text: 'Which documentation format is recommended?', options: ['Long paragraphs', 'No record needed', 'Short structured log with traffic light status', 'Voice notes'], correctOptionIndex: 2 },
      { id: 'q6', text: 'Scenario: Client who was always enthusiastic suddenly becomes formal and quiet. What is the correct response?', options: ['Ignore it', 'Note the change and increase awareness on communication', 'Call and demand explanation', 'Stop working'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Why is early detection important?', options: ['To prevent escalations or client exit', 'To gossip', 'For entertainment', 'No benefit'], correctOptionIndex: 0 },
      { id: 'q8', text: 'What tone should be used when checking sentiment?', options: ['Intrusive and direct', 'Warm, respectful, observant', 'Blunt and short', 'Nervous'], correctOptionIndex: 1 },
      { id: 'q9', text: 'What is one major mistake account managers make?', options: ['Communicating too much', 'Assuming everything is fine until the client reveals otherwise', 'Documenting sentiment', 'Escalating early'], correctOptionIndex: 1 },
      { id: 'q10', text: 'Scenario: Client replies after 2 days: “Sorry, was in a family emergency.” How should you respond?', options: ['Ignore and continue', 'Reply politely, acknowledge, and resume normal workflow', 'Ask personal details', 'Escalate'], correctOptionIndex: 1 },
    ],
  },
  'q_m6': {
    id: 'q_m6',
    title: 'Escalation Handling Assessment',
    moduleId: 'm6',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the first step when handling an escalation?', options: ['Defend yourself', 'Acknowledge and listen', 'Ignore it', 'Ask for blame'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Which phrase should be avoided?', options: ['“Let’s resolve this.”', '“There seems to have been a miscommunication.”', '“That’s not our job.”', '“We can suggest solutions.”'], correctOptionIndex: 2 },
      { id: 'q3', text: 'What is the correct response when the error is on the client’s side?', options: ['Point out their fault strongly', 'Ignore it', 'Subtly clarify and guide toward a solution', 'Stop responding'], correctOptionIndex: 2 },
      { id: 'q4', text: 'Why is documentation important after an escalation?', options: ['For reference, clarity, and preventing repeated confusion', 'To store complaints', 'Because it looks professional', 'Optional practice'], correctOptionIndex: 0 },
      { id: 'q5', text: 'Scenario: A client says, “Why wasn’t this posted yesterday?” What is the best reply?', options: ['“Because you didn’t approve it.”', '“We don’t do that.”', '“Thank you for highlighting — looks like there was miscommunication. Here’s how we’ll fix it …”', '“Ask the designer.”'], correctOptionIndex: 2 },
      { id: 'q6', text: 'What tone should be used during escalations?', options: ['Aggressive', 'Defensive', 'Calm, solution-oriented, respectful', 'Sarcastic'], correctOptionIndex: 2 },
      { id: 'q7', text: 'Scenario: The escalation is valid and your team made a mistake. What should you do?', options: ['Deny it', 'Blame someone', 'Accept responsibility, apologize professionally, and share the fix with ETA', 'Silence'], correctOptionIndex: 2 },
      { id: 'q8', text: 'What must every escalation message include?', options: ['Confusion', 'Emotion', 'Solution and ETA', 'Excuses'], correctOptionIndex: 2 },
      { id: 'q9', text: 'When proposing additional paid work, what’s the right tone?', options: ['Defensive', 'Helpful and aligned with the client’s goal', 'Pushy', 'Dismissive'], correctOptionIndex: 1 },
      { id: 'q10', text: 'When is an escalation considered closed?', options: ['When emotions calm', 'When the call ends', 'When documented and the agreed solution is executed', 'When ignored'], correctOptionIndex: 2 },
    ],
  },
  'q_m7': {
    id: 'q_m7',
    title: 'Communication Summary Assessment',
    moduleId: 'm7',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'When should the communication summary be sent after a call?', options: ['End of the day', 'In a few hours', 'Immediately after the call', 'Next week'], correctOptionIndex: 2 },
      { id: 'q2', text: 'Where should summaries be posted?', options: ['Private chat', 'Client group', 'Only internal team', 'Nowhere'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Which format is correct for capturing decisions?', options: ['Paragraphs', '“As discussed:” with bullets', 'Voice notes only', 'No structure needed'], correctOptionIndex: 1 },
      { id: 'q4', text: 'When should email be used instead of WhatsApp?', options: ['For major decisions or long formal communication', 'Never', 'Only after mistakes', 'When client demands'], correctOptionIndex: 0 },
      { id: 'q5', text: 'Scenario: Internal team needs clarity, but nothing is documented. What happened?', options: ['The call was short', 'Documentation was skipped', 'Client will remember', 'It doesn’t matter'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Why must communication remain in the group and not personal chat?', options: ['To maintain transparency and avoid dependency', 'To avoid WhatsApp use', 'For aesthetic reasons', 'It doesn’t matter'], correctOptionIndex: 0 },
      { id: 'q7', text: 'Which message represents a proper summary?', options: ['“Okay.”', '“As discussed — Reels approved. Ad copies pending. Landing page update ETA Friday 4 PM.”', '“Done.”', '“Please check.”'], correctOptionIndex: 1 },
      { id: 'q8', text: 'When documenting tasks, what must be included?', options: ['Vague timelines', 'ETA with date and time', 'Only task names', 'Nothing'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Scenario: Client verbally approves a design. What should you do?', options: ['Trust memory', 'Wait for them to write it', 'Document approval in summary', 'Do nothing'], correctOptionIndex: 2 },
      { id: 'q10', text: 'What does consistent communication documentation create?', options: ['Misunderstanding', 'Timeline clarity and accountability', 'More confusion', 'Work delays'], correctOptionIndex: 1 },
    ],
  },
  'q_m8': {
    id: 'q_m8',
    title: 'Scope Mapping Assessment',
    moduleId: 'm8',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the main purpose of scope mapping?', options: ['To deliver random work', 'To ensure deliverables match agreed scope', 'To increase workload', 'To guess what client wants'], correctOptionIndex: 1 },
      { id: 'q2', text: 'How often should internal scope checks occur?', options: ['Once a year', 'Weekly', 'Only when there is a problem', 'Never'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What should you do if the client delays required inputs for more than 3 days?', options: ['Stop delivery permanently', 'Ignore it', 'Escalate internally after reminders', 'Wait silently'], correctOptionIndex: 2 },
      { id: 'q4', text: 'Scenario: A reel is pending because the client cannot attend a shoot. What is the correct approach?', options: ['Skip delivery', 'Blame client', 'Offer solutions like stock footage or repurposed content', 'Remove deliverable'], correctOptionIndex: 2 },
      { id: 'q5', text: 'Why must scopes be reviewed monthly?', options: ['To adjust planning and ensure delivery alignment', 'For fun', 'Only if client asks', 'To reduce work'], correctOptionIndex: 0 },
      { id: 'q6', text: 'When communicating client dependencies, what must be included?', options: ['Vague reminders', 'ETA and consequences', 'Emojis only', 'Silence'], correctOptionIndex: 1 },
      { id: 'q7', text: 'What is a sign of scope drift?', options: ['Deliverables match agreed plan', 'You are delivering more than contract without alignment', 'Everything is documented', 'Client is aligned'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Why is offering alternatives important when blocked?', options: ['To panic', 'To maintain delivery consistency and reliability', 'To avoid responsibility', 'To delay'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Scenario: Client approves fewer deliverables than planned but still expects full output. What should you do?', options: ['Ignore it', 'Proceed silently', 'Share scope reference and align expectations professionally', 'Do whatever feels right'], correctOptionIndex: 2 },
      { id: 'q10', text: 'What protects both the agency and client during delivery?', options: ['Assumptions', 'Scope clarity + documentation + consistent alignment', 'Verbal agreements', 'Informal arrangements'], correctOptionIndex: 1 },
    ],
  },
  'q_m9': {
    id: 'q_m9',
    title: 'Trend Research Assessment',
    moduleId: 'm9',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the primary purpose of trend research?', options: ['Entertainment', 'To generate fresh and relevant content ideas based on current platform behavior', 'To scroll without intention', 'To increase screen time'], correctOptionIndex: 1 },
      { id: 'q2', text: 'How often should trend research be done?', options: ['Once a month', 'Only when client asks', 'Daily for a short duration', 'Never'], correctOptionIndex: 2 },
      { id: 'q3', text: 'Where should useful trends be stored?', options: ['Personal WhatsApp', 'Random gallery folder', 'Reference sheet', 'Nowhere'], correctOptionIndex: 2 },
      { id: 'q4', text: 'Scenario: You find a reel trend that went viral, but it doesn\'t suit a client\'s brand tone. What should you do?', options: ['Force it', 'Ignore all trends', 'Adapt intelligently if aligned — otherwise skip', 'Forward directly without context'], correctOptionIndex: 2 },
      { id: 'q5', text: 'Why should notes be added when saving references?', options: ['To justify scrolling', 'To remember why the trend is relevant and how it can be used', 'For decoration', 'Optional and unnecessary'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Which platforms are useful for trend tracking?', options: ['Only email', 'Instagram, Ads Library, competitor pages, meme accounts', 'Maps app', 'Calendar'], correctOptionIndex: 1 },
      { id: 'q7', text: 'What type of content counts as a trend?', options: ['Anything with low engagement', 'Content formats, hooks, audio, memes currently getting high visibility', 'Old posts', 'Archived content'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Scenario: You see trending audio across multiple niche pages. What does this indicate?', options: ['Ignore it', 'It may become a relevant opportunity worth testing', 'It’s spam', 'Only big brands use it'], correctOptionIndex: 1 },
      { id: 'q9', text: 'What is the biggest mistake in trend research?', options: ['Tracking too many platforms', 'Saving without organizing or context', 'Structuring references', 'Reviewing daily'], correctOptionIndex: 1 },
      { id: 'q10', text: 'How should trends be used?', options: ['Copy blindly', 'Adapt smartly to the brand', 'Avoid forever', 'Use without review'], correctOptionIndex: 1 },
    ],
  },
  'q_m10': {
    id: 'q_m10',
    title: 'Strategy Session Assessment',
    moduleId: 'm10',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the primary purpose of the content calendar?', options: ['To post randomly', 'To create a structured plan aligned with strategy and business priorities', 'To decorate sheets', 'To avoid communication'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What should be reviewed before creating the calendar?', options: ['Only trends', 'Previous month performance + strategy notes + client business updates', 'Only client instructions', 'Nothing'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Which of the following must be included in the calendar?', options: ['Only visuals', 'Format, hook, caption, CTA, hashtags, scripts', 'Only scripts', 'Only posting dates'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Scenario: The client has an upcoming sale mid-month. What should happen?', options: ['Ignore it', 'Calendar should include build-up content + launch + reminders', 'Only one post', 'Last-minute planning'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Why should content formats be balanced?', options: ['To avoid boring repetition and keep audience engaged', 'Optional', 'Only reels matter', 'Instagram requires it'], correctOptionIndex: 0 },
      { id: 'q6', text: 'What happens if the calendar is unclear?', options: ['Designers and team members execute smoothly', 'Execution becomes confusing and delayed', 'Clients get happier automatically', 'It doesn’t matter'], correctOptionIndex: 1 },
      { id: 'q7', text: 'When should the calendar be sent to the client?', options: ['Immediately after writing', 'After internal review and refinement', 'Never', 'After posting content'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Scenario: A trend emerges mid-month. What should you do?', options: ['Ignore it', 'Adapt and update the calendar if relevant', 'Wait 3 months', 'Replace everything'], correctOptionIndex: 1 },
      { id: 'q9', text: 'What determines posting logic?', options: ['Random dates', 'Audience behavior, objectives, and content sequencing', 'Only designer availability', 'Luck'], correctOptionIndex: 1 },
      { id: 'q10', text: 'What should be the goal of calendar creation?', options: ['Clarity and ease of execution', 'Making a complex document', 'Copying other brands', 'Personal preferences'], correctOptionIndex: 0 },
    ],
  },

  'q_m12': {
    id: 'q_m12',
    title: 'Persona & Brand Understanding Assessment',
    moduleId: 'm12',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the main purpose of building a customer persona?', options: ['To fill a template', 'To deeply understand who the brand is speaking to', 'To impress the client', 'To guess audience behavior'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Which information is important when building a persona?', options: ['Age, lifestyle, motivations, fears, and buying triggers', 'Only age and gender', 'Only client preferences', 'Random assumptions'], correctOptionIndex: 0 },
      { id: 'q3', text: 'Where can meaningful persona insights come from?', options: ['Competitor study, reviews, client conversations', 'Personal opinion', 'Viral memes', 'Horoscope apps'], correctOptionIndex: 0 },
      { id: 'q4', text: 'Scenario: The brand sells premium real estate to business owners. Which tone fits best?', options: ['Funny casual slang', 'High trust, clarity, and confidence-driven communication', 'Confusing storytelling', 'Random trends'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Why is persona creation important before writing scripts or captions?', options: ['To ensure the message resonates with the right audience', 'Only because it\'s a formality', 'Because the client asked', 'Optional activity'], correctOptionIndex: 0 },
      { id: 'q6', text: 'What should happen if new insights show the audience has changed?', options: ['Keep old messaging', 'Update persona and adjust communication', 'Ignore it', 'Delete everything'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Which mindset is correct while doing persona work?', options: ['Do it fast and move on', 'Understand deeply — because everything depends on it', 'Avoid details', 'Copy competitors blindly'], correctOptionIndex: 1 },
      { id: 'q8', text: 'What should a final persona document include?', options: ['Tone guide and content direction', 'Only emojis', 'Random screenshots', 'Nothing formal'], correctOptionIndex: 0 },
      { id: 'q9', text: 'What is the wrong approach while building persona?', options: ['Observing patterns and gathering real data', 'Assuming based on personal preference', 'Reviewing client audience behavior', 'Studying reviews'], correctOptionIndex: 1 },
      { id: 'q10', text: 'Who should primarily use the persona?', options: ['Only designers', 'Everyone working on the brand — especially the account manager', 'Only the client', 'No one'], correctOptionIndex: 1 },
    ],
  },
  'q_m16': {
    id: 'q_m16',
    title: 'Script Writing Assessment',
    moduleId: 'm16',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the purpose of writing scripts?', options: ['To impress with big words', 'To create clear, high-converting messaging that drives action', 'To fill calendar space', 'To copy competitors'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What formula should every script follow?', options: ['Random storytelling', 'High-Converting Video Ad Formula', 'Movie script format', 'No structure needed'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What is the first step in the script formula?', options: ['CTA', 'Hook', 'Proof', 'Problem'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Why is agitation important in a script?', options: ['To waste time', 'To make the pain feel relevant and urgent', 'Optional', 'Only used in long videos'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Scenario: The client wants leads but the script ends without a CTA. Is the script complete?', options: ['Yes', 'No — CTA is mandatory', 'Depends on mood', 'Only reels need CTA'], correctOptionIndex: 1 },
      { id: 'q6', text: 'What should tone of the script be?', options: ['Conversational and audience-focused', 'Confusing', 'Robotic', 'Irrelevant'], correctOptionIndex: 0 },
      { id: 'q7', text: 'When writing scripts, what should you review first?', options: ['Persona and previous winners', 'Random posts', 'Designer preferences', 'Nothing'], correctOptionIndex: 0 },
      { id: 'q8', text: 'Scenario: A script sounds clever but is confusing. What should you do?', options: ['Keep it', 'Rewrite it to be simpler and direct', 'Add more lines', 'Ignore objective'], correctOptionIndex: 1 },
      { id: 'q9', text: 'What defines a high-converting script?', options: ['Length', 'Audience clarity + emotional impact + CTA', 'Fancy vocabulary', 'Buzzwords'], correctOptionIndex: 1 },
      { id: 'q10', text: 'Why is consistency important?', options: ['To refine direction and improve conversions over time', 'Optional', 'Only matters for big brands', 'Irrelevant'], correctOptionIndex: 0 },
    ],
  },
  'q_m17': {
    id: 'q_m17',
    title: 'Caption Writing Assessment',
    moduleId: 'm17',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the purpose of a caption?', options: ['To fill space', 'To support the post and guide the audience toward action', 'To copy other brands', 'To write random thoughts'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What should the first part of the caption be?', options: ['Hashtags', 'Hook', 'CTA', 'Body'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Which element is mandatory in every caption?', options: ['A CTA that tells the audience what to do', 'Song lyrics', 'Brand slogan', 'Emojis only'], correctOptionIndex: 0 },
      { id: 'q4', text: 'Scenario: The caption has great information but no call-to-action. Is it complete?', options: ['Yes', 'No'], correctOptionIndex: 1 },
      { id: 'q5', text: 'How many hashtags should typically be used?', options: ['1–3', '10–20 focused on brand niche', '30+ random tags', 'None'], correctOptionIndex: 1 },
      { id: 'q6', text: 'What tone works best for captions?', options: ['Complicated and dramatic', 'Clear, conversational, and relatable', 'Robotic', 'Textbook formal'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Why should captions match persona insights?', options: ['To connect with the real audience the brand speaks to', 'Optional step', 'Only for ads', 'Just for reporting'], correctOptionIndex: 0 },
      { id: 'q8', text: 'Scenario: A client’s brand tone is premium and serious. Which caption style fits?', options: ['Jokes and slang', 'Clear, confident, trust-based messaging', 'Memes only', 'Random tone'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Why are hashtags important?', options: ['To improve visibility and reach', 'Only aesthetic', 'To make captions longer', 'Not required'], correctOptionIndex: 0 },
      { id: 'q10', text: 'The biggest mistake when writing captions is:', options: ['Forgetting CTA or unclear messaging', 'Keeping it simple', 'Adding line breaks', 'Using relevant hashtags'], correctOptionIndex: 0 },
    ],
  },
  'q_m21': {
    id: 'q_m21',
    title: 'Blog & Quora Support Assessment',
    moduleId: 'm21',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the purpose of writing blogs and Quora content?', options: ['To randomly fill space', 'To build SEO visibility, authority, and organic trust', 'Only to impress designers', 'To experiment'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What should be reviewed before creating content?', options: ['Keyword strategy and persona', 'Only hashtags', 'Nothing', 'Designer folder'], correctOptionIndex: 0 },
      { id: 'q3', text: 'What is the acceptable AI detection threshold?', options: ['0–5%', 'Ideally under 20%', '50%', 'Doesn’t matter'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Scenario: AI generates a long blog, but tone feels robotic. What\'s the correct action?', options: ['Publish as-is', 'Rewrite for human tone and relevance', 'Delete the content', 'Send without checking'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Who should receive the content after approval?', options: ['Performance team', 'SEO team for posting and optimization', 'Client’s personal chat', 'Designer'], correctOptionIndex: 1 },
      { id: 'q6', text: 'What must every blog include?', options: ['Clear formatting, structure, CTA, and relevance', 'Only hashtags', 'Personal opinions', 'Random jokes'], correctOptionIndex: 0 },
      { id: 'q7', text: 'Why is topic relevance important?', options: ['To match real search intent and bring organic traffic', 'Optional', 'Because everyone writes blogs', 'Only for fun'], correctOptionIndex: 0 },
      { id: 'q8', text: 'Scenario: SEO insights show a blog is ranking poorly. What should you do?', options: ['Ignore it', 'Review and optimize with updated keywords and structure', 'Delete immediately', 'Move it to Quora'], correctOptionIndex: 1 },
      { id: 'q9', text: 'What is the biggest mistake in this task?', options: ['Publishing raw AI content without refinement', 'Reviewing tone', 'Adding value', 'Adding CTA'], correctOptionIndex: 0 },
      { id: 'q10', text: 'Why is Quora useful?', options: ['It builds authority and captures search intent conversations', 'Only for memes', 'Not relevant for marketing', 'Just optional'], correctOptionIndex: 0 },
    ],
  },
  'q_m22': {
    id: 'q_m22',
    title: 'Landing Page Content Assessment',
    moduleId: 'm22',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the purpose of landing page content?', options: ['To entertain', 'To drive conversions through clear messaging and persuasive structure', 'To replace social media', 'To fill space'], correctOptionIndex: 1 },
      { id: 'q2', text: 'When should landing page content be completed?', options: ['While the developer is already building', 'Before development begins using a structured template', 'After launch', 'Anytime'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Which components are mandatory?', options: ['Only headline and form', 'Headline, benefits, CTA, FAQs, privacy policy, proof, and full structure', 'Only images', 'Only text'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Scenario: A landing page has no social proof. What should you do?', options: ['Skip it', 'Add testimonials, awards, or credibility signals', 'Replace with emojis', 'Ignore'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Why must a privacy policy be included?', options: ['Ads require it + builds trust', 'Optional style element', 'Only for blogs', 'Never required'], correctOptionIndex: 0 },
      { id: 'q6', text: 'How should the tone of landing page content be?', options: ['Simple, benefit-driven, and clear', 'Complicated and poetic', 'Robotic', 'Trend-based only'], correctOptionIndex: 0 },
      { id: 'q7', text: 'What is the goal of FAQs?', options: ['Fill space', 'Answer objections before the user has to ask', 'Add long paragraphs', 'Replace form fields'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Scenario: Landing page content is scattered across chats and Google Docs. What is the correct approach?', options: ['Leave as is', 'Consolidate into one complete structured document before sharing with developers', 'Send multiple links', 'Let developer pick pieces'], correctOptionIndex: 1 },
      { id: 'q9', text: 'How many CTA placements should a landing page have?', options: ['One only', 'Multiple — top, mid, and bottom', 'None', 'Optional'], correctOptionIndex: 1 },
      { id: 'q10', text: 'What mindset should you carry while writing landing page content?', options: ['You are building a conversion machine, not casual content', 'Any tone works', 'No structure needed', 'Guess the audience'], correctOptionIndex: 0 },
    ],
  },
  'q_m23': {
    id: 'q_m23',
    title: 'CPL Check Assessment',
    moduleId: 'm23',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the purpose of daily CPL checks?', options: ['To randomly review dashboards', 'To ensure leads and spending stay aligned with client targets', 'To check occasionally', 'Only for reporting'], correctOptionIndex: 1 },
      { id: 'q2', text: 'When should CPL be monitored?', options: ['Weekly', 'Only if client asks', 'Daily', 'End of month'], correctOptionIndex: 2 },
      { id: 'q3', text: 'What is the ideal daily spend if monthly budget is ₹8,00,000?', options: ['₹5,000', '₹26,000 (approx.)', '₹1,00,000', 'No need to calculate'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Scenario: CPL has risen significantly compared to benchmark. What should you do?', options: ['Ignore and hope it corrects', 'Inform performance team immediately with a screenshot', 'Tell client to wait', 'Do nothing'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Why is mental math important in this task?', options: ['To sound intelligent', 'To quickly identify pacing issues without waiting for detailed reports', 'Optional', 'Only for presentations'], correctOptionIndex: 1 },
      { id: 'q6', text: 'What should you avoid doing when numbers are unclear?', options: ['Updating client with incomplete assumptions', 'Cross-checking', 'Asking performance team', 'Reviewing dashboard'], correctOptionIndex: 0 },
      { id: 'q7', text: 'Where should CPL tracking be recorded?', options: ['Memory only', 'Lead sheet and daily performance tracker', 'Random notes', 'Verbal reporting only'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Scenario: Spend is on track but lead volume is low. What does this mean?', options: ['Nothing', 'It may signal landing page or conversion issue and requires escalation', 'Ignore until end of month', 'Stop campaign'], correctOptionIndex: 1 },
      { id: 'q9', text: 'What is the biggest risk of not checking CPL daily?', options: ['Client becomes happier', 'Issues go unnoticed until too late, leading to missed targets', 'Nothing changes', 'You save time'], correctOptionIndex: 1 },
      { id: 'q10', text: 'What mindset should you adopt for this task?', options: ['Proactive and accountable — not reactive', 'Relaxed and casual', 'Only do it when convenient', 'Avoid responsibility'], correctOptionIndex: 0 },
    ],
  },
  'q_m24': {
    id: 'q_m24',
    title: 'Lead Sheet Check Assessment',
    moduleId: 'm24',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why is lead sheet checking important?', options: ['To decorate sheets', 'To ensure every lead is captured and trackable', 'Optional task', 'Only for monthly reports'], correctOptionIndex: 1 },
      { id: 'q2', text: 'How often should the lead sheet be checked?', options: ['Once a month', 'Daily', 'Only when client complains', 'Never'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What should you do if leads are missing?', options: ['Ignore', 'Take a screenshot and escalate immediately', 'Wait until the end of month', 'Ask client only'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Which of these must be verified?', options: ['Name, number, timestamp, source, campaign tag', 'Only name', 'Only timestamp', 'Only platform'], correctOptionIndex: 0 },
      { id: 'q5', text: 'Scenario: Leads are flowing but campaign name is incorrect. What should you do?', options: ['Leave it', 'Report the mapping issue and fix tracking', 'Delete sheet', 'Tell client to handle'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Why is duplicate checking important?', options: ['To avoid inflated numbers and misleading performance insights', 'Optional', 'Only needed for big clients', 'To make sheets pretty'], correctOptionIndex: 0 },
      { id: 'q7', text: 'When should automation team be contacted?', options: ['When mapping or CRM sync is broken', 'Only for new clients', 'Only if designers approve', 'Never'], correctOptionIndex: 0 },
      { id: 'q8', text: 'What is the worst outcome of ignoring this task?', options: ['Extra free time', 'Data mismatch and client losing confidence in reporting', 'Faster reporting', 'Cleaner spreadsheets'], correctOptionIndex: 1 },
      { id: 'q9', text: 'What mindset should you apply during this task?', options: ['Leads are numbers', 'Leads are real potential customers → accuracy matters', 'Data does not matter', 'It’s optional'], correctOptionIndex: 1 },
      { id: 'q10', text: 'Which sign indicates something is broken?', options: ['Sheet matches dashboard', 'Leads missing or delayed', 'Everything consistent', 'Correct mapping'], correctOptionIndex: 1 },
    ],
  },
  'q_m25': {
    id: 'q_m25',
    title: 'Campaign Review Assessment',
    moduleId: 'm25',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the purpose of campaign review?', options: ['To passively observe metrics', 'To proactively understand performance and trigger improvements', 'To wait for client complaints', 'To look at dashboards without action'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What does a high CPM usually indicate?', options: ['The hook or opening isn\'t capturing attention', 'Excellent performance', 'Nothing important', 'Only posting time issue'], correctOptionIndex: 0 },
      { id: 'q3', text: 'Scenario: CTR is low but CPL is decent. What does this suggest?', options: ['Something is broken', 'The creative isn\'t interesting enough — messaging needs improvement', 'Everything is fine', 'Report immediately without checking'], correctOptionIndex: 1 },
      { id: 'q4', text: 'What should you do after identifying an underperforming creative?', options: ['Wait for client reaction', 'Coordinate with the performance team and replace or improve the creative', 'Ignore it', 'Delete the campaign'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Which metric reflects audience relevance?', options: ['CTR', 'Weather', 'File size', 'Username format'], correctOptionIndex: 0 },
      { id: 'q6', text: 'When should campaign review actions be taken?', options: ['Weekly', 'Only when CPL is high', 'Daily — so trends are caught early', 'End of the month'], correctOptionIndex: 2 },
      { id: 'q7', text: 'What mindset should guide this task?', options: ['“Observe and wait.”', '“Review, understand, act.”', '“Only record numbers.”', '“Numbers don’t matter.”'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Where should campaign review outcomes be tracked?', options: ['Memory', 'Performance tracker or Basecamp task updates', 'Personal notebook only', 'WhatsApp emoji'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Scenario: A creative is performing well. What is the correct action?', options: ['Replace it', 'Scale and replicate winning patterns', 'Ignore the result', 'Pause it'], correctOptionIndex: 1 },
      { id: 'q10', text: 'Why is this task important?', options: ['It ensures campaigns evolve rather than stagnate, improving outcomes over time', 'Optional', 'Only performance team responsibility', 'Only needed for new clients'], correctOptionIndex: 0 },
    ],
  },
  'q_m26': {
    id: 'q_m26',
    title: 'Funds Check Assessment',
    moduleId: 'm26',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why is daily fund checking important?', options: ['To look busy', 'To prevent campaign downtime and client panic', 'For record-keeping only', 'Only to notify the performance team'], correctOptionIndex: 1 },
      { id: 'q2', text: 'When should the first reminder be sent?', options: ['After funds run out', 'When there are 4–6 days of funds left', 'Only if client asks', 'Never'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What is the ideal client funding rhythm?', options: ['Daily', 'Weekly', 'Twice a month', 'Once a year'], correctOptionIndex: 2 },
      { id: 'q4', text: 'If a client ignores reminders, what should you do?', options: ['Wait silently', 'Escalate to management professionally', 'Stop checking', 'Argue with the client'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What metric helps determine urgency?', options: ['Spend rate vs remaining balance days', 'Logo color', 'Campaign name', 'Report format'], correctOptionIndex: 0 },
      { id: 'q6', text: 'Scenario: Client has 2 days of funds left and hasn’t responded. Correct next step?', options: ['Ignore', 'Continue waiting', 'Send final urgent reminder + escalate internally', 'Pause campaigns yourself'], correctOptionIndex: 2 },
      { id: 'q7', text: 'Which platform is checked for billing status?', options: ['Canva', 'Basecamp', 'Meta Business Manager or Google Ads', 'Instagram Reels'], correctOptionIndex: 2 },
      { id: 'q8', text: 'What tone should be used in reminders?', options: ['Pushy', 'Professional and proactive', 'Casual emojis only', 'Sarcastic'], correctOptionIndex: 1 },
      { id: 'q9', text: 'What happens if funds run out?', options: ['Nothing', 'Ads pause and leads stop', 'Client becomes happier', 'Spend continues magically'], correctOptionIndex: 1 },
      { id: 'q10', text: 'Which mindset fits this task?', options: ['Reactive', 'Ownership and foresight', 'Passive', '“Not my job”'], correctOptionIndex: 1 },
    ],
  },
  'q_m27': {
    id: 'q_m27',
    title: 'Lead Quality Analysis Assessment',
    moduleId: 'm27',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why is lead quality more important than just lead count?', options: ['Because fewer leads are easier to track', 'Because only relevant leads can convert into revenue', 'Because clients prefer fewer leads', 'Because reporting looks better'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What should be reviewed every week?', options: ['Website design', 'Number of office visitors', 'Lead sheet, CPL, and response quality', 'Instagram followers'], correctOptionIndex: 2 },
      { id: 'q3', text: 'What is a key metric to check during lead reviews?', options: ['WhatsApp emoji usage', 'Response rate and qualification %', 'Number of Canva files', 'Favourite client color'], correctOptionIndex: 1 },
      { id: 'q4', text: 'When should insights be shared?', options: ['Only at month end', 'After the weekly call', 'Once a year', 'Only if client requests'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What mindset should an account manager have?', options: ['“Client will update if needed.”', '“Data + Discussion = Clarity.”', '“Not my problem.”', '“Only performance team decides.”'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Scenario: CPL is good but client says leads aren’t answering calls. What should you do?', options: ['Ignore', 'Ask deeper questions, document quality feedback, align with performance team', 'Tell client it’s their issue', 'Slow down reporting'], correctOptionIndex: 1 },
      { id: 'q7', text: 'What should happen after the client call?', options: ['Nothing', 'Assign action points to internal teams with deadlines', 'Delete the sheet', 'Wait for next week'], correctOptionIndex: 1 },
      { id: 'q8', text: 'What should be included in weekly insights?', options: ['New Instagram trends', 'Positive trends, CPL, walk-ins, closures', 'Team selfies', 'Music playlist'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Who is responsible for initiating lead quality conversations?', options: ['Client', 'Account Manager', 'Performance team only', 'Designer'], correctOptionIndex: 1 },
      { id: 'q10', text: 'What is the ultimate purpose of lead analysis?', options: ['To impress the client with spreadsheets', 'To improve targeting, messaging, and conversions', 'To delay meetings', 'To increase paperwork'], correctOptionIndex: 1 },
    ],
  },
  'q_m28': {
    id: 'q_m28',
    title: 'Task Assignment Assessment',
    moduleId: 'm28',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Where should all tasks be assigned?', options: ['WhatsApp', 'Basecamp', 'Verbal reminders', 'Email only'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What must every task include?', options: ['Only the title', 'Title, owner, deadline, context, references', 'Only deadline', 'Voice note'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What happens if a task isn’t documented?', options: ['It still counts', 'It is considered non-existent', 'The designer should remember', 'Account manager can blame the team'], correctOptionIndex: 1 },
      { id: 'q4', text: 'What is the correct follow-up channel?', options: ['Personal WhatsApp', 'Basecamp comments', 'Instagram DMs', 'Verbal nudges'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Why is task assignment important?', options: ['To keep people busy', 'To ensure clarity, accountability, and timely execution', 'To fill Basecamp', 'To avoid speaking to the team'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Scenario: A designer says they saw the task on WhatsApp but not Basecamp. What should you do?', options: ['Let it continue on WhatsApp', 'Tell them to start only after it’s assigned properly on Basecamp', 'Accept it this time', 'Delete the task'], correctOptionIndex: 1 },
      { id: 'q7', text: 'When should you follow up on a task?', options: ['Immediately after assigning', 'If it\'s overdue or unacknowledged', 'Only after client complains', 'Never'], correctOptionIndex: 1 },
      { id: 'q8', text: 'What mindset should you hold?', options: ['“People remember tasks.”', '“Systems ensure execution.”', '“Everything must be done manually.”', '“Following up is optional.”'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Who owns the task once assigned?', options: ['The person responsible in Basecamp', 'The account manager', 'The client', 'Nobody'], correctOptionIndex: 0 },
      { id: 'q10', text: 'What improves execution speed?', options: ['Panic and last-minute calls', 'Clear tasks with references and deadlines', 'Guesswork', 'Silence'], correctOptionIndex: 1 },
    ],
  },
  'q_m29': {
    id: 'q_m29',
    title: 'Deadline Tracking Assessment',
    moduleId: 'm29',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why is tracking deadlines important?', options: ['To create stress', 'To ensure tasks are completed on time and prevent delays', 'Only for reporting', 'Because Basecamp looks empty otherwise'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Where should deadline tracking happen?', options: ['WhatsApp', 'Basecamp and Harmony', 'Verbal check-ins', 'Random reminders'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What should you check daily?', options: ['Office snacks', 'Overdue, due today, upcoming tasks, blockers', 'Team wardrobe', 'Song playlist'], correctOptionIndex: 1 },
      { id: 'q4', text: 'What is the first step when a task is overdue?', options: ['Ignore', 'Follow up directly in Basecamp', 'Ask client', 'Delete task'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is the correct mindset?', options: ['“Deadlines don’t matter.”', '“Nothing is urgent last minute if tracked early.”', '“People remember tasks.”', '“Tracking is optional.”'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Scenario: A task is overdue and no update has been given. What should you do?', options: ['Wait', 'Follow up in Basecamp and request ETA', 'Send emoji', 'Forget it'], correctOptionIndex: 1 },
      { id: 'q7', text: 'When should escalation happen?', options: ['Immediately for every task', 'Only after repeated delays or blockers', 'Only if client complains', 'Never'], correctOptionIndex: 1 },
      { id: 'q8', text: 'What tone should follow-ups have?', options: ['Aggressive', 'Sarcastic', 'Clear and respectful', 'Casual and vague'], correctOptionIndex: 2 },
      { id: 'q9', text: 'What prevents last-minute panic?', options: ['Guesswork', 'Early tracking and structured follow-ups', 'Doing everything alone', 'Ignoring deadlines'], correctOptionIndex: 1 },
      { id: 'q10', text: 'Which platform confirms real accountability?', options: ['Verbal discussions', 'Basecamp task status', 'WhatsApp emojis', 'Personal reminders'], correctOptionIndex: 1 },
    ],
  },
  'q_m30': {
    id: 'q_m30',
    title: 'Revision Handling Assessment',
    moduleId: 'm30',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why must revisions be structured?', options: ['To avoid confusion and repeated errors', 'To make Basecamp look full', 'To delay work', 'So nobody knows what to do'], correctOptionIndex: 0 },
      { id: 'q2', text: 'How should client feedback be shared with the team?', options: ['Copy-paste raw messages', 'Convert into clear, bullet-point tasks', 'Forward emojis', 'Send verbally'], correctOptionIndex: 1 },
      { id: 'q3', text: 'When should escalation happen?', options: ['After 3 or more revision cycles', 'After first message', 'When you\'re tired', 'Never'], correctOptionIndex: 0 },
      { id: 'q4', text: 'What might repeated revisions indicate?', options: ['Client loves chaos', 'Lack of clarity from client or misunderstanding of brief', 'Designer is lazy', 'No issue'], correctOptionIndex: 1 },
      { id: 'q5', text: 'How is a revision task tracked?', options: ['Through memory', 'Basecamp until client approval', 'On WhatsApp', 'No tracking needed'], correctOptionIndex: 1 },
      { id: 'q6', text: 'What is required before a revision is considered complete?', options: ['Verbal approval', 'Silence from client', 'Confirmed written “Approved” message', 'Internal assumption'], correctOptionIndex: 2 },
      { id: 'q7', text: 'Scenario: Client sends feedback: “Make it cleaner.” What should you do?', options: ['Forward directly', 'Ask clarifying questions + convert into exact points', 'Guess', 'Ignore'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Who assigns revision tasks?', options: ['Designer', 'Client', 'Account Manager', 'Anyone online'], correctOptionIndex: 2 },
      { id: 'q9', text: 'What mindset applies to revision?', options: ['Endless loops are normal', 'Revisions refine output, not restart work', 'Client decides everything', 'Skip revision if busy'], correctOptionIndex: 1 },
      { id: 'q10', text: 'How should deadlines be handled?', options: ['Set clear completion timeline in Basecamp', 'Tell the team verbally', 'Leave open-ended', 'Wait for pressure'], correctOptionIndex: 0 },
    ],
  },
  'q_m31': {
    id: 'q_m31',
    title: 'Approval Management Assessment',
    moduleId: 'm31',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Which approvals must be received via email?', options: ['Daily reels', 'Landing pages, websites, budgets, major strategy', 'Captions', 'Meme references'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Where can daily post approvals be taken?', options: ['Basecamp or WhatsApp', 'Verbal call', 'Personal notebook', 'Nowhere'], correctOptionIndex: 0 },
      { id: 'q3', text: 'What must happen after approval is received?', options: ['Celebrate', 'Update tracker and mark task as approved', 'Ignore', 'Delete message'], correctOptionIndex: 1 },
      { id: 'q4', text: 'What is the core rule of approval handling?', options: ['If it feels approved, it is', 'If it is written and logged, it is approved', 'Client doesn\'t need to approve', 'Approvals are optional'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Scenario: Client says “Looks fine” but doesn’t say “Approved.” What should you do?', options: ['Assume approval', 'Ask: “Can I mark this as approved?”', 'Ignore', 'Go live immediately'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Why is logging approvals important?', options: ['For memory', 'To avoid confusion, escalation, or disputes', 'To make the sheet look full', 'For fun'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Who is responsible for maintaining approval records?', options: ['Designer', 'Client', 'Account Manager', 'Performance Team'], correctOptionIndex: 2 },
      { id: 'q8', text: 'When should the tracker be updated?', options: ['Only at month end', 'Immediately after approval', 'Only if time allows', 'Never'], correctOptionIndex: 1 },
      { id: 'q9', text: 'What happens if work goes live without approval?', options: ['Nothing', 'Client may escalate, leading to mistrust', 'Client will be impressed', 'It counts as proactive work'], correctOptionIndex: 1 },
      { id: 'q10', text: 'What\'s the mindset required for approval management?', options: ['“Later is fine.”', '“If it\'s not written and tracked, it doesn\'t exist.”', '“Client should chase us.”', '“Approvals slow us down.”'], correctOptionIndex: 1 },
    ],
  },
  'q_m32': {
    id: 'q_m32',
    title: 'Quality Review Assessment',
    moduleId: 'm32',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why is quality review important?', options: ['To delay sending work', 'Because every creative reflects the agency\'s credibility', 'Because designers request it', 'So the sheet looks full'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What should be checked before sharing a creative?', options: ['Only the image', 'Caption, tone, branding, CTA, format, and spelling', 'Only hashtags', 'Only client mood'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What should you do if you find a mistake?', options: ['Send it anyway', 'Fix internally before sharing with the client', 'Ignore and hope client won’t notice', 'Delay until deadline'], correctOptionIndex: 1 },
      { id: 'q4', text: 'When is a creative ready to send?', options: ['When it is approved and passes the checklist', 'When the designer says so', 'When there is no time left', 'Immediately after export'], correctOptionIndex: 0 },
      { id: 'q5', text: 'Which mindset applies?', options: ['Speed over quality', 'Quality review protects the relationship', 'Clients can fix errors later', 'Reviews are optional'], correctOptionIndex: 1 },
    ],
  },
  'q_m33': {
    id: 'q_m33',
    title: 'Social Media Scheduling Assessment',
    moduleId: 'm33',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why should posts be scheduled 7 days in advance?', options: ['To avoid last-minute scrambling and missed deadlines', 'To follow a trend', 'Because platforms require it', 'Only for large clients'], correctOptionIndex: 0 },
      { id: 'q2', text: 'What is the worst acceptable scheduling buffer?', options: ['Same day', '1 day before posting', '3 days before posting', 'No rule applies'], correctOptionIndex: 2 },
      { id: 'q3', text: 'What must be checked before scheduling?', options: ['Only the creative', 'Approval, caption accuracy, hashtags, formatting, platform requirements', 'Only the platform size', 'Only the caption length'], correctOptionIndex: 1 },
      { id: 'q4', text: 'What happens after scheduling?', options: ['Nothing', 'Verify preview formatting and log it in the tracker', 'Delete the post', 'Ask the client again'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What mindset applies?', options: ['“I’ll remember it later.”', '“Scheduling in advance prevents mistakes.”', '“Posting manually every day is fine.”', '“Deadlines don’t matter.”'], correctOptionIndex: 1 },
    ],
  },
  'q_m34': {
    id: 'q_m34',
    title: 'YouTube Posting Assessment',
    moduleId: 'm34',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why does YouTube require SEO for reels?', options: ['Because YouTube content can rank and build long-term visibility', 'Because Instagram requires it', 'For decoration', 'To fill the description box'], correctOptionIndex: 0 },
      { id: 'q2', text: 'What should a YouTube title include?', options: ['Only emojis', 'Searchable keywords related to the topic', 'Random creative captions', 'Nothing — title doesn\'t matter'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Which element improves discoverability?', options: ['Hashtags alone', 'SEO title + description + tags', 'Thumbnail only', 'Ignoring search intent'], correctOptionIndex: 1 },
      { id: 'q4', text: 'What must be done after uploading?', options: ['Close YouTube', 'Verify formatting and update tracker', 'Delete drafts', 'Wait for client feedback'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is the correct mindset?', options: ['“Upload fast and forget it.”', '“Upload for discoverability and long-term reach.”', '“Only Instagram matters.”', '“YouTube is optional.”'], correctOptionIndex: 1 },
    ],
  },
  'q_m35': {
    id: 'q_m35',
    title: 'Post Verification Assessment',
    moduleId: 'm35',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why is post verification necessary?', options: ['To avoid embarrassing posting errors and ensure accuracy', 'To waste time', 'Because platforms ask for it', 'Only for large brands'], correctOptionIndex: 0 },
      { id: 'q2', text: 'What is a critical verification step?', options: ['Confirm the content is posted on the correct client account', 'Assume it\'s fine if scheduled', 'Ignore after posting', 'Wait for the client to notice'], correctOptionIndex: 0 },
      { id: 'q3', text: 'What should you check after posting?', options: ['Caption, formatting, hashtags, tagging, account accuracy', 'Only image quality', 'Only audio', 'Only the cover photo'], correctOptionIndex: 0 },
      { id: 'q4', text: 'What should happen if you spot an issue?', options: ['Leave it — client may not notice', 'Fix or re-upload immediately', 'Wait for the next day', 'Delete and ignore'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is the correct mindset?', options: ['“Posting is done once verified live.”', '“Once it’s scheduled, it’s finished.”', '“Clients correct mistakes.”', '“Verification is optional.”'], correctOptionIndex: 0 },
    ],
  },
  'q_m36': {
    id: 'q_m36',
    title: 'Shoot Concepting Assessment',
    moduleId: 'm36',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the first step in shoot concepting?', options: ['Booking the camera', 'Understanding the goal and brief', 'Buying props', 'Calling the model'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What must a concept note include?', options: ['Only the idea', 'Hook, visual description, audio reference, and CTA', 'Only the script', 'Only the location'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Why are references important?', options: ['To copy exactly', 'To give the videographer clear visual direction', 'To fill the document', 'To waste time'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Scenario: Client wants a viral reel but has no budget for props/models. What do you do?', options: ['Cancel the shoot', 'Plan a concept that relies on strong hooks and editing rather than production value', 'Complain to the client', 'Ignore the request'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Who approves the concept before the shoot?', options: ['Videographer', 'Client', 'Account Manager', 'Nobody'], correctOptionIndex: 1 },
      { id: 'q6', text: 'What is the ideal length for a reel script?', options: ['2 minutes', 'Under 60 seconds (ideally 15-30s for retention)', '5 minutes', '10 seconds'], correctOptionIndex: 1 },
      { id: 'q7', text: 'What makes a concept "shoot-ready"?', options: ['A vague idea', 'A detailed shot list and script approved by the client', 'A WhatsApp message', 'A phone call'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Why should you plan for extra shots?', options: ['To waste memory card space', 'To have B-roll for future use', 'To annoy the editor', 'To delay the shoot'], correctOptionIndex: 1 },
      { id: 'q9', text: 'What is the role of the hook?', options: ['To end the video', 'To grab attention in the first 3 seconds', 'To explain the pricing', 'To show the logo'], correctOptionIndex: 1 },
      { id: 'q10', text: 'What mindset applies to concepting?', options: ['“We’ll figure it out on set.”', '“Preparation determines execution quality.”', '“Just shoot anything.”', '“Concepts are optional.”'], correctOptionIndex: 1 },
    ],
  },
  'q_m37': {
    id: 'q_m37',
    title: 'Shoot Attendance Assessment',
    moduleId: 'm37',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why should an AM or creative lead attend the shoot?', options: ['To eat snacks', 'To ensure the vision is executed correctly and manage the client', 'To take selfies', 'To hold the light'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What should you carry to the shoot?', options: ['Only your phone', 'Printed shot list, scripts, and references', 'Nothing', 'Lunch only'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Scenario: The client wants to change the script on set. What do you do?', options: ['Argue with them', 'Assess feasibility, adjust if possible without compromising quality, or politely explain constraints', 'Ignore them', 'Cancel the shoot'], correctOptionIndex: 1 },
      { id: 'q4', text: 'What is the "safety shot" rule?', options: ['Take only one take', 'Always get one extra "safe" take for every key shot', 'Don\'t record audio', 'Shoot without looking'], correctOptionIndex: 1 },
      { id: 'q5', text: 'How do you manage time on set?', options: ['Let the videographer take as long as they want', 'Follow the schedule and keep the team moving', 'Start late', 'End early'], correctOptionIndex: 1 },
      { id: 'q6', text: 'What should be checked after every key shot?', options: ['Nothing', 'Playback to ensure lighting, audio, and focus are correct', 'Instagram', 'The time'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Who directs the talent/client?', options: ['The intern', 'The director/AM/creative lead', 'The camera', 'Nobody'], correctOptionIndex: 1 },
      { id: 'q8', text: 'What happens if audio is bad?', options: ['Fix it in post (risky)', 'Re-record immediately', 'Ignore it', 'Use subtitles only'], correctOptionIndex: 1 },
      { id: 'q9', text: 'What is the post-shoot protocol?', options: ['Go home', 'Ensure data transfer and backup immediately', 'Leave cards at the venue', 'Delete files'], correctOptionIndex: 1 },
      { id: 'q10', text: 'What mindset applies to shoot attendance?', options: ['“I’m just watching.”', '“I am the guardian of the output.”', '“It’s a holiday.”', '“The videographer knows everything.”'], correctOptionIndex: 1 },
    ],
  },
  'q_m38': {
    id: 'q_m38',
    title: 'Edit Notes Assessment',
    moduleId: 'm38',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What makes good edit notes?', options: ['Vague comments like "make it pop"', 'Specific, timestamped instructions with clear action items', 'Emojis only', 'Voice notes'], correctOptionIndex: 1 },
      { id: 'q2', text: 'When should edit notes be given?', options: ['After the video is posted', 'During the draft review phase', 'Never', 'Before the shoot'], correctOptionIndex: 1 },
      { id: 'q3', text: 'How do you refer to a specific part of the video?', options: ['"That part"', 'Timecode (e.g., 0:12)', 'Screenshot', 'Description'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Scenario: The music doesn\'t match the vibe. What do you say?', options: ['"Change music"', '"Change to [specific track/genre] to match the energetic tone"', '"It\'s bad"', '"I hate it"'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Why is checking captions important?', options: ['Spelling errors ruin credibility', 'It\'s not important', 'People don\'t read', 'Auto-captions are always right'], correctOptionIndex: 0 },
      { id: 'q6', text: 'What should be checked in the final export?', options: ['Only the beginning', 'The whole video for glitches, audio sync, and color', 'The thumbnail', 'The file name'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Who is responsible for the final quality check?', options: ['Editor', 'Account Manager', 'Client', 'Viewer'], correctOptionIndex: 1 },
      { id: 'q8', text: 'What is the "safe zone" for text?', options: ['Edges of the screen', 'Center area where UI elements won\'t cover it', 'Bottom right', 'Top left'], correctOptionIndex: 1 },
      { id: 'q9', text: 'How do you handle client feedback on edits?', options: ['Forward raw messages', 'Consolidate into clear instructions for the editor', 'Ignore it', 'Argue'], correctOptionIndex: 1 },
      { id: 'q10', text: 'What mindset applies to edit notes?', options: ['“The editor should know.”', '“Clear input = clear output.”', '“I’m too busy.”', '“It’s good enough.”'], correctOptionIndex: 1 },
    ],
  },
  'q_m39': {
    id: 'q_m39',
    title: 'Weekly Updates Assessment',
    moduleId: 'm39',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the purpose of a weekly update?', options: ['To say hi', 'To summarize progress, highlight wins, and flag upcoming tasks', 'To ask for leave', 'To send memes'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What key metrics should be included?', options: ['Follower count only', 'Reach, engagement, leads, and spend (if applicable)', 'Likes only', 'Number of posts'], correctOptionIndex: 1 },
      { id: 'q3', text: 'When should the weekly update be sent?', options: ['Monday morning or Friday evening (as per protocol)', 'Wednesday night', 'Sunday', 'Whenever you remember'], correctOptionIndex: 0 },
      { id: 'q4', text: 'Scenario: Performance was low this week. What do you report?', options: ['Nothing', 'The numbers + reasons + action plan for next week', 'Fake numbers', 'Blame the algorithm'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What format should the update be in?', options: ['Voice note', 'Structured text/email/PDF as per client preference', 'Call only', 'Video message'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Why include "Next Week\'s Plan"?', options: ['To fill space', 'To set expectations and show proactiveness', 'To confuse the client', 'It\'s not needed'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Who should review the update before sending?', options: ['Nobody', 'Team Lead/Senior AM', 'The client', 'The intern'], correctOptionIndex: 1 },
      { id: 'q8', text: 'What happens if you miss a weekly update?', options: ['Nothing', 'Client trust erodes', 'Client is happy', 'You get a bonus'], correctOptionIndex: 1 },
      { id: 'q9', text: 'How do you handle pending client approvals in the update?', options: ['Ignore them', 'List them clearly as "Pending from Client"', 'Approve them yourself', 'Delete them'], correctOptionIndex: 1 },
      { id: 'q10', text: 'What mindset applies to weekly updates?', options: ['“It’s a chore.”', '“It’s a trust-building tool.”', '“Copy-paste is fine.”', '“Nobody reads it.”'], correctOptionIndex: 1 },
    ],
  },
  'q_m40': {
    id: 'q_m40',
    title: 'Monthly Reporting Assessment',
    moduleId: 'm40',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the goal of a monthly report?', options: ['To show data', 'To tell a story of growth, ROI, and strategy', 'To send an invoice', 'To close the group'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What are the core sections of a report?', options: ['Cover page only', 'Executive summary, KPI deep dive, creative analysis, next steps', 'Photos only', 'Links only'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Why is "Creative Analysis" important?', options: ['To show pretty pictures', 'To understand what content worked and why', 'To fill slides', 'To credit the designer'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Scenario: Targets were missed. How do you present this?', options: ['Hide the slide', 'Be transparent, explain root cause, and present a recovery plan', 'Blame the client', 'Fake the data'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is "MoM" comparison?', options: ['Month over Month growth/decline', 'Meeting on Monday', 'Manager of Month', 'Marketing of Media'], correctOptionIndex: 0 },
      { id: 'q6', text: 'When should the report be sent?', options: ['End of the month', 'First week of the new month (e.g., by 5th)', 'Mid-month', 'Never'], correctOptionIndex: 1 },
      { id: 'q7', text: 'What tools are used for reporting?', options: ['Paint', 'Looker Studio, PowerPoint/Slides, Native Analytics', 'Notepad', 'Calculator'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Why include a "Learnings" section?', options: ['To look smart', 'To show that we are optimizing based on data', 'To complain', 'To list mistakes'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Who presents the report?', options: ['Email only', 'Account Manager (on a call/meeting)', 'Designer', 'Developer'], correctOptionIndex: 1 },
      { id: 'q10', text: 'What mindset applies to monthly reporting?', options: ['“Data entry.”', '“Strategic consulting.”', '“Just send it.”', '“Boring.”'], correctOptionIndex: 1 },
    ],
  },
  'q_m41': {
    id: 'q_m41',
    title: 'Review Meeting Assessment',
    moduleId: 'm41',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the purpose of a review meeting?', options: ['To chat', 'To discuss performance, align on strategy, and build relationship', 'To eat lunch', 'To sign contracts'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What should you prepare beforehand?', options: ['Nothing', 'Agenda, report/deck, pending approvals list', 'Jokes', 'Coffee'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Who leads the meeting?', options: ['Client', 'Account Manager', 'Intern', 'Nobody'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Scenario: Client is unhappy with results. How do you handle the meeting?', options: ['Cancel it', 'Listen, acknowledge, present data/solutions, and remain calm', 'Argue', 'Cry'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What are "Minutes of Meeting" (MoM)?', options: ['Time spent', 'Written summary of discussion and action points', 'Recording', 'Attendance'], correctOptionIndex: 1 },
      { id: 'q6', text: 'When should MoM be sent?', options: ['Next month', 'Within 24 hours of the meeting', 'Never', 'Before the meeting'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Why are action items important?', options: ['To assign blame', 'To ensure accountability and progress', 'To fill the email', 'To look busy'], correctOptionIndex: 1 },
      { id: 'q8', text: 'How do you handle out-of-scope requests?', options: ['Say yes to everything', 'Politely flag it as out of scope and discuss feasibility/billing', 'Ignore it', 'Do it for free'], correctOptionIndex: 1 },
      { id: 'q9', text: 'What is the ideal meeting duration?', options: ['4 hours', '30-60 minutes (focused)', '5 minutes', 'All day'], correctOptionIndex: 1 },
      { id: 'q10', text: 'What mindset applies to review meetings?', options: ['“I hope it ends soon.”', '“I am leading the partnership.”', '“The client is boss.”', '“Let’s wing it.”'], correctOptionIndex: 1 },
    ],
  },
  'q_m42': {
    id: 'q_m42',
    title: 'Onboarding Kickoff Assessment',
    moduleId: 'm42',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the goal of the kickoff call?', options: ['To say hello', 'To align on goals, scope, timelines, and access', 'To send the invoice', 'To start posting'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What document is essential for kickoff?', options: ['Leave policy', 'Onboarding Questionnaire / Deck', 'Menu', 'Resume'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What access do you need to request?', options: ['Netflix', 'Social accounts, Ad Manager, Website, GMB, etc.', 'Bank account', 'Personal email'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Why establish communication protocols?', options: ['To restrict the client', 'To set boundaries and expectations (e.g., response time, channels)', 'To be rude', 'To avoid talking'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is a "Brand Bible"?', options: ['Religious text', 'Brand guidelines (logo, fonts, colors, tone)', 'A book', 'A website'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Scenario: Client has no brand guidelines. What do you do?', options: ['Panic', 'Propose creating a basic moodboard/style guide for approval', 'Guess', 'Use default fonts'], correctOptionIndex: 1 },
      { id: 'q7', text: 'When does the "work" officially start?', options: ['After the contract is signed and kickoff is done', 'Before payment', 'Next year', 'Immediately'], correctOptionIndex: 0 },
      { id: 'q8', text: 'Who attends the kickoff?', options: ['Everyone', 'Key stakeholders from client and agency side', 'Only the designer', 'Only the sales team'], correctOptionIndex: 1 },
      { id: 'q9', text: 'What is the output of a kickoff?', options: ['Confusion', 'Clear roadmap and next steps', 'A party', 'Nothing'], correctOptionIndex: 1 },
      { id: 'q10', text: 'What mindset applies to onboarding?', options: ['“Slow start.”', '“First impression is everything.”', '“Let’s see what happens.”', '“Paperwork is boring.”'], correctOptionIndex: 1 },
    ],
  },
  'q_m43': {
    id: 'q_m43',
    title: 'Competitive Audit Assessment',
    moduleId: 'm43',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why conduct a competitive audit?', options: ['To copy them', 'To understand the landscape, gaps, and opportunities', 'To discourage the client', 'To waste time'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What should you analyze?', options: ['Follower count only', 'Content pillars, engagement, visuals, offers, and ads', 'Profile picture', 'Bio only'], correctOptionIndex: 1 },
      { id: 'q3', text: 'How many competitors should you check?', options: ['1', '3-5 key competitors', '100', '0'], correctOptionIndex: 1 },
      { id: 'q4', text: 'What is a "Gap Analysis"?', options: ['Checking teeth', 'Identifying what competitors are missing that we can do', 'Measuring distance', 'Nothing'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Tools for ad espionage?', options: ['Facebook Ad Library', 'Instagram Explore', 'Google Search', 'All of the above'], correctOptionIndex: 3 },
      { id: 'q6', text: 'Scenario: Competitor has better visuals. What do you propose?', options: ['Give up', 'Elevate our visual identity or focus on better storytelling', 'Ignore it', 'Block them'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Does follower count equal success?', options: ['Yes', 'No, engagement and conversion matter more', 'Maybe', 'Always'], correctOptionIndex: 1 },
      { id: 'q8', text: 'How often should you check competitors?', options: ['Once', 'Quarterly or Monthly', 'Daily', 'Never'], correctOptionIndex: 1 },
      { id: 'q9', text: 'What is the output of an audit?', options: ['A feeling', 'A report with insights and strategy recommendations', 'A screenshot', 'A link'], correctOptionIndex: 1 },
      { id: 'q10', text: 'What mindset applies to audits?', options: ['“They are better.”', '“We can beat them.”', '“Copy-paste.”', '“Ignore the market.”'], correctOptionIndex: 1 },
    ],
  },
  'q_m44': {
    id: 'q_m44',
    title: 'Sample Creative Alignment Assessment',
    moduleId: 'm44',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why create sample creatives?', options: ['To practice', 'To align on visual style before full production', 'To waste designer time', 'To post immediately'], correctOptionIndex: 1 },
      { id: 'q2', text: 'How many options should you provide?', options: ['1', '2-3 distinct directions', '10', '0'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What feedback do you look for?', options: ['"Nice"', 'Specifics on font, color, vibe, and layout', 'Emoji', 'Silence'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Scenario: Client rejects all samples. What do you do?', options: ['Quit', 'Ask for specific references of what they like and iterate', 'Argue', 'Send the same ones again'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Should samples use real content?', options: ['No, use Lorem Ipsum', 'Yes, ideally real or realistic dummy content', 'Doesn\'t matter', 'No text'], correctOptionIndex: 1 },
      { id: 'q6', text: 'What is a "Moodboard"?', options: ['A sad board', 'A collection of images/fonts defining the aesthetic', 'A drawing', 'A list'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Who creates the samples?', options: ['Account Manager', 'Graphic Designer', 'Client', 'AI only'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Why is alignment important early on?', options: ['To save time on revisions later', 'It\'s not', 'To delay launch', 'To look professional'], correctOptionIndex: 0 },
      { id: 'q9', text: 'Can you use templates?', options: ['Never', 'Yes, if customized and high quality', 'Only templates', 'No'], correctOptionIndex: 1 },
      { id: 'q10', text: 'What mindset applies here?', options: ['“Guesswork.”', '“Visual calibration.”', '“Art is subjective.”', '“Client has bad taste.”'], correctOptionIndex: 1 },
    ],
  },
  'q_m45': {
    id: 'q_m45',
    title: 'Landing Page Setup Assessment',
    moduleId: 'm45',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the primary goal of a landing page?', options: ['To look pretty', 'To convert visitors (leads/sales)', 'To show company history', 'To have a website'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What is "Above the Fold"?', options: ['Paper folding', 'The part of the page visible without scrolling', 'The footer', 'The menu'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Key elements of a high-converting LP?', options: ['Headline, subheadline, CTA, social proof, benefits', 'Lots of text', 'Just a form', 'Video only'], correctOptionIndex: 0 },
      { id: 'q4', text: 'Why is mobile responsiveness critical?', options: ['It\'s not', 'Most traffic comes from mobile', 'Desktops are obsolete', 'Google says so'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is a "Thank You Page"?', options: ['A polite page', 'Page shown after conversion (tracking fires here)', 'Home page', 'About us'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Scenario: High traffic, low conversion. What to check?', options: ['The weather', 'Load speed, offer clarity, form length, trust signals', 'The logo', 'The domain'], correctOptionIndex: 1 },
      { id: 'q7', text: 'What is A/B testing?', options: ['Testing blood type', 'Comparing two versions to see which performs better', 'Testing alphabet', 'Nothing'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Who writes the copy?', options: ['Designer', 'Copywriter/AM', 'Developer', 'Client'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Why install a Pixel?', options: ['To track user activity and conversions', 'To slow down the site', 'To show ads', 'To hack'], correctOptionIndex: 0 },
      { id: 'q10', text: 'What mindset applies to LP setup?', options: ['“Design first.”', '“Conversion first.”', '“Code first.”', '“Content last.”'], correctOptionIndex: 1 },
    ],
  },
  'q_m46': {
    id: 'q_m46',
    title: 'AI Content Support Assessment',
    moduleId: 'm46',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'How should AI be used in content creation?', options: ['To replace writers', 'As a tool for brainstorming, outlining, and drafting', 'To copy-paste', 'To avoid work'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What is the risk of unedited AI content?', options: ['It\'s perfect', 'Generic, robotic, factual errors, plagiarism', 'It\'s too creative', 'None'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Best prompt structure?', options: ['"Write a blog"', 'Role + Context + Task + Constraints + Format', 'Keywords only', 'Question only'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Scenario: AI gives generic output. What do you do?', options: ['Use it', 'Refine the prompt with specific details/examples', 'Give up', 'Write manually'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Can AI help with SEO?', options: ['No', 'Yes, for keyword ideas, meta tags, and structure', 'Maybe', 'Only images'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Tools for AI writing?', options: ['ChatGPT, Claude, Jasper, Copy.ai', 'Excel', 'Photoshop', 'Canva'], correctOptionIndex: 0 },
      { id: 'q7', text: 'Why fact-check AI?', options: ['It hallucinates (makes things up)', 'It\'s always right', 'It\'s fun', 'To waste time'], correctOptionIndex: 0 },
      { id: 'q8', text: 'How to humanize AI text?', options: ['Add personal anecdotes, idioms, varied sentence structure', 'Leave as is', 'Add emojis', 'Make it longer'], correctOptionIndex: 0 },
      { id: 'q9', text: 'Ethical consideration?', options: ['None', 'Transparency and avoiding copyright infringement', 'Hide it', 'Claim as own'], correctOptionIndex: 1 },
      { id: 'q10', text: 'What mindset applies to AI support?', options: ['“AI is the creator.”', '“I am the pilot, AI is the engine.”', '“Lazy mode.”', '“AI is useless.”'], correctOptionIndex: 1 },
    ],
  },
  'q_m47': {
    id: 'q_m47',
    title: 'AI Research Assessment',
    moduleId: 'm47',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'How can AI help in research?', options: ['Summarizing long docs, finding trends, analyzing data', 'It can\'t', 'Making coffee', 'Driving'], correctOptionIndex: 0 },
      { id: 'q2', text: 'Scenario: You need to understand a new industry quickly. What do you do?', options: ['Read a book', 'Ask AI for an industry overview, key pain points, and jargon', 'Guess', 'Ask client'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Can AI analyze competitor reviews?', options: ['Yes, paste reviews and ask for sentiment analysis', 'No', 'Maybe', 'Only 1 review'], correctOptionIndex: 0 },
      { id: 'q4', text: 'What is "Perplexity AI" good for?', options: ['Coding', 'Real-time search and cited research', 'Image gen', 'Music'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Limitation of ChatGPT (free version)?', options: ['None', 'Knowledge cutoff (may not have latest news)', 'Too fast', 'Too smart'], correctOptionIndex: 1 },
      { id: 'q6', text: 'How to use AI for audience personas?', options: ['Ask it to create profiles based on demographics/psychographics', 'Don\'t', 'Use random data', 'Ask a friend'], correctOptionIndex: 0 },
      { id: 'q7', text: 'Can AI summarize YouTube videos?', options: ['Yes, with plugins/transcripts', 'No', 'Only TikTok', 'Only movies'], correctOptionIndex: 0 },
      { id: 'q8', text: 'Why cross-reference AI research?', options: ['To verify accuracy', 'To double work', 'To confuse', 'It\'s not needed'], correctOptionIndex: 0 },
      { id: 'q9', text: 'Tool for analyzing large PDFs?', options: ['ChatPDF / Claude', 'Paint', 'Calculator', 'Instagram'], correctOptionIndex: 0 },
      { id: 'q10', text: 'What mindset applies to AI research?', options: ['“Trust blindly.”', '“Trust but verify.”', '“Ignore AI.”', '“AI knows all.”'], correctOptionIndex: 1 },
    ],
  },
  'q_m48': {
    id: 'q_m48',
    title: 'AI Reporting Assessment',
    moduleId: 'm48',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'How can AI assist in reporting?', options: ['Generating insights from raw data', 'Printing', 'Sending emails', 'Taking photos'], correctOptionIndex: 0 },
      { id: 'q2', text: 'Scenario: You have a CSV of ad performance. How to analyze?', options: ['Stare at it', 'Upload to Code Interpreter/Data Analyst and ask for trends', 'Delete it', 'Count manually'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Can AI write the "Executive Summary"?', options: ['Yes, based on the data provided', 'No', 'Only poems', 'Only title'], correctOptionIndex: 0 },
      { id: 'q4', text: 'What to watch out for in AI reporting?', options: ['Hallucinated numbers', 'Perfect accuracy', 'Too much detail', 'Nothing'], correctOptionIndex: 0 },
      { id: 'q5', text: 'Can AI visualize data?', options: ['Yes, some tools create charts', 'No', 'Only text', 'Only audio'], correctOptionIndex: 0 },
      { id: 'q6', text: 'How to use AI for sentiment analysis?', options: ['Analyze comments/feedback', 'Analyze numbers', 'Analyze colors', 'Analyze time'], correctOptionIndex: 0 },
      { id: 'q7', text: 'Does AI replace the analyst?', options: ['Yes', 'No, it augments the analyst', 'Maybe', 'Completely'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Best format to feed data to AI?', options: ['Structured (CSV, JSON, clean text)', 'Messy notes', 'Images', 'Voice'], correctOptionIndex: 0 },
      { id: 'q9', text: 'Can AI predict future performance?', options: ['Forecasting (with limitations)', 'Yes perfectly', 'No', 'Only past'], correctOptionIndex: 0 },
      { id: 'q10', text: 'What mindset applies to AI reporting?', options: ['“Data to insights instantly.”', '“Magic button.”', '“Fake it.”', '“Manual is better.”'], correctOptionIndex: 0 },
    ],
  },
  'q_m49': {
    id: 'q_m49',
    title: 'SOP Compliance Assessment',
    moduleId: 'm49',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is an SOP?', options: ['Standard Operating Procedure', 'Suggestion of Process', 'Some Other Plan', 'Standard Option Protocol'], correctOptionIndex: 0 },
      { id: 'q2', text: 'Why follow SOPs?', options: ['To be boring', 'Consistency, quality control, and efficiency', 'To slow down', 'To annoy boss'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Scenario: You find a better way to do a task. What do you do?', options: ['Ignore SOP', 'Propose an update to the SOP', 'Do it secretly', 'Quit'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Where are SOPs usually stored?', options: ['Notion/Drive/Basecamp', 'WhatsApp', 'Sticky notes', 'Mind'], correctOptionIndex: 0 },
      { id: 'q5', text: 'Consequence of ignoring SOPs?', options: ['Errors, missed steps, chaos', 'Innovation', 'Speed', 'Fun'], correctOptionIndex: 0 },
      { id: 'q6', text: 'Who is responsible for compliance?', options: ['Everyone', 'Only manager', 'Only intern', 'Client'], correctOptionIndex: 0 },
      { id: 'q7', text: 'How often should SOPs be reviewed?', options: ['Never', 'Periodically (e.g., quarterly)', 'Daily', 'Once'], correctOptionIndex: 1 },
      { id: 'q8', text: 'What is a checklist?', options: ['A tool to ensure no steps are missed', 'A suggestion', 'A drawing', 'Trash'], correctOptionIndex: 0 },
      { id: 'q9', text: 'Does SOP kill creativity?', options: ['Yes', 'No, it handles the routine so you can be creative', 'Maybe', 'Always'], correctOptionIndex: 1 },
      { id: 'q10', text: 'What mindset applies to SOPs?', options: ['“Rules are for fools.”', '“Discipline equals freedom.”', '“Optional.”', '“Bureaucracy.”'], correctOptionIndex: 1 },
    ],
  },
  'q_m50': {
    id: 'q_m50',
    title: 'Tracker Hygiene Assessment',
    moduleId: 'm50',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why update trackers?', options: ['To look busy', 'Real-time visibility and data integrity', 'To waste time', 'To color cells'], correctOptionIndex: 1 },
      { id: 'q2', text: 'When should you update the tracker?', options: ['End of month', 'As the task happens (real-time/daily)', 'Never', 'Weekly'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What happens if trackers are outdated?', options: ['Nothing', 'Decisions are made on wrong data', 'Client is happy', 'You save time'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Common tracker elements?', options: ['Status, Owner, Date, Link, Remarks', 'Emojis', 'Jokes', 'Food menu'], correctOptionIndex: 0 },
      { id: 'q5', text: 'Scenario: You are too busy to update. What do you do?', options: ['Skip it', 'Make time, it\'s part of the work', 'Lie', 'Ask client'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Who checks the tracker?', options: ['Team, Manager, Client', 'Nobody', 'Mom', 'Google'], correctOptionIndex: 0 },
      { id: 'q7', text: 'What is "Version Control"?', options: ['Tracking changes/history', 'Mind control', 'Game version', 'Nothing'], correctOptionIndex: 0 },
      { id: 'q8', text: 'Color coding helps with?', options: ['Decoration', 'Quick visual status (Red/Amber/Green)', 'Confusion', 'Printing'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Broken formula in sheet?', options: ['Leave it', 'Fix it or ask for help', 'Delete row', 'Hide it'], correctOptionIndex: 1 },
      { id: 'q10', text: 'What mindset applies to hygiene?', options: ['“Messy is creative.”', '“Clean data = Clear mind.”', '“Later.”', '“Not my job.”'], correctOptionIndex: 1 },
    ],
  },
  'q_m51': {
    id: 'q_m51',
    title: 'Folder Management Assessment',
    moduleId: 'm51',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why is folder structure important?', options: ['To hide files', 'To find assets quickly and collaborate efficiently', 'To look organized', 'To use storage'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Standard naming convention?', options: ['final_final_v2.jpg', 'Client_Project_Asset_Date_Version', 'image1.jpg', 'test.psd'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Where should source files be?', options: ['Desktop', 'Shared Drive in "Source" folder', 'Downloads', 'Trash'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Scenario: Someone can\'t find a file. Why?', options: ['Magic', 'Poor folder management/naming', 'Deleted', 'Stolen'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is "Archive"?', options: ['Old projects/files not in active use', 'Trash', 'Important', 'New'], correctOptionIndex: 0 },
      { id: 'q6', text: 'How deep should folders go?', options: ['100 levels', 'Logical hierarchy (Client > Project > Type)', '1 level', 'No folders'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Sharing permissions?', options: ['Open to world', 'Restricted to relevant team members', 'Private only', 'No access'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Backup frequency?', options: ['Never', 'Automated/Regular', 'Yearly', 'Once'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Local vs Cloud?', options: ['Local is safer', 'Cloud allows collaboration and backup', 'Paper is best', 'CDs'], correctOptionIndex: 1 },
      { id: 'q10', text: 'What mindset applies to folders?', options: ['“My desktop is chaos.”', '“A place for everything.”', '“Search will find it.”', '“Whatever.”'], correctOptionIndex: 1 },
    ],
  },
  'q_m52': {
    id: 'q_m52',
    title: 'KT Preparation Assessment',
    moduleId: 'm52',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is KT?', options: ['Knowledge Transfer', 'Keep Talking', 'Key Time', 'Kitchen Table'], correctOptionIndex: 0 },
      { id: 'q2', text: 'When is KT needed?', options: ['Leaving company, changing projects, or going on long leave', 'Daily', 'Never', 'Lunch'], correctOptionIndex: 0 },
      { id: 'q3', text: 'What goes into a KT doc?', options: ['Passwords, Status, Contacts, Processes, Pending Tasks', 'Jokes', 'Photos', 'Nothing'], correctOptionIndex: 0 },
      { id: 'q4', text: 'Why prepare in advance?', options: ['To rush later', 'To ensure smooth transition and nothing is missed', 'To hide things', 'To work more'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Who is the audience for KT?', options: ['The person taking over', 'The client', 'The CEO', 'Yourself'], correctOptionIndex: 0 },
      { id: 'q6', text: 'Should you do a walkthrough?', options: ['No, email is enough', 'Yes, meeting to explain and answer questions', 'Maybe', 'Text only'], correctOptionIndex: 1 },
      { id: 'q7', text: 'What about access credentials?', options: ['Keep them', 'Share securely (LastPass etc.)', 'Write on sticky note', 'Forget them'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Scenario: You leave without KT. Consequence?', options: ['Chaos, project stalls, reputation damage', 'Nothing', 'Promotion', 'Happiness'], correctOptionIndex: 0 },
      { id: 'q9', text: 'Updating status of tasks?', options: ['Crucial', 'Optional', 'Don\'t do it', 'Lie'], correctOptionIndex: 0 },
      { id: 'q10', text: 'What mindset applies to KT prep?', options: ['“Not my problem anymore.”', '“Leave the campsite cleaner than you found it.”', '“Run away.”', '“Hide the mess.”'], correctOptionIndex: 1 },
    ],
  },
  'q_m53': {
    id: 'q_m53',
    title: 'KT Handover Assessment',
    moduleId: 'm53',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the handover meeting?', options: ['A party', 'Formal transfer of responsibility', 'A debate', 'A lecture'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What should be confirmed?', options: ['Access, understanding, and ownership', 'Lunch menu', 'Salary', 'Weather'], correctOptionIndex: 0 },
      { id: 'q3', text: 'Recording the session?', options: ['Good idea for reference', 'Illegal', 'Bad', 'Useless'], correctOptionIndex: 0 },
      { id: 'q4', text: 'Introducing the new POC to client?', options: ['Don\'t', 'Essential step for continuity', 'Let them guess', 'Email only'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Support period?', options: ['None', 'Available for questions for X days', 'Forever', 'Never'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Sign-off?', options: ['Verbal', 'Written confirmation that handover is complete', 'None', 'High five'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Handling sensitive info?', options: ['Post it', 'Secure transfer', 'Shout it', 'Ignore'], correctOptionIndex: 1 },
      { id: 'q8', text: 'What if the new person doesn\'t understand?', options: ['Not your problem', 'Clarify, re-explain, provide resources', 'Laugh', 'Leave'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Documentation check?', options: ['Ensure links work and files are accessible', 'Skip', 'Assume', 'Delete'], correctOptionIndex: 0 },
      { id: 'q10', text: 'What mindset applies to handover?', options: ['“Passing the torch.”', '“Dumping the load.”', '“Escape.”', '“Whatever.”'], correctOptionIndex: 0 },
    ],
  },
  'q_pm_m1': {
    id: 'q_pm_m1',
    title: 'Campaign Planning Assessment',
    moduleId: 'pm_m1',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the purpose of a campaign plan?', options: ['To guess and try random tactics', 'To translate strategy into an executable structure', 'To repeat last month’s setup', 'To experiment without direction'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What should you review before planning a campaign?', options: ['Only creatives', 'The approved strategy (objective, audience, budget, timeline)', 'Just the audience', 'Nothing'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What should be included in the campaign structure?', options: ['Only budgets', 'Platforms, ad sets, audiences, placements, bidding', 'Designer bios', 'Random settings'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Why document the plan before launch?', options: ['To reduce confusion and provide alignment', 'To make folders heavier', 'To avoid sharing', 'It’s optional'], correctOptionIndex: 0 },
      { id: 'q5', text: 'What is the right mindset?', options: ['“Campaign planning is button clicking.”', '“Campaign planning designs the path to predictable results.”', '“Strategy doesn’t matter.”', '“Setup can be done without thinking.”'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m1b': {
    id: 'q_pm_m1b',
    title: 'Objectives & Targeting Assessment',
    moduleId: 'pm_m1b',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why is choosing the right campaign objective important?', options: ['It controls how the algorithm spends the money', 'It doesn’t matter', 'Only creatives matter', 'Objectives are optional'], correctOptionIndex: 0 },
      { id: 'q2', text: 'What should each ad set ideally contain?', options: ['Multiple mixed strategies', 'One single testing logic', 'Random audiences', 'No structure'], correctOptionIndex: 1 },
      { id: 'q3', text: 'How should budgets be allocated?', options: ['Randomly', 'Based on funnel strategy and audience size', 'Equally everywhere', 'Only to retargeting'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Which of these is part of target audience definition?', options: ['File names', 'Lookalikes, interests, custom audiences', 'Fonts and colors', 'Useless demographics'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What mindset should you apply?', options: ['“Anything works.”', '“Precision in objective, audience, and budget drives results.”', '“Platform will fix mistakes.”', '“Testing is not needed.”'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m1c': {
    id: 'q_pm_m1c',
    title: 'Creative Coordination Assessment',
    moduleId: 'pm_m1c',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the main purpose of coordinating with creative and copy teams?', options: ['To get random designs', 'To ensure ads align with campaign goals and audience', 'To fill folders', 'To avoid responsibility'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What should a brief include?', options: ['Just a reference', 'Objective, audience, format, hook direction, references', 'Only the caption', 'Designer’s favorite colors'], correctOptionIndex: 1 },
      { id: 'q3', text: 'When should you review drafts?', options: ['At the last minute', 'Early during the creative process', 'Only after launch', 'Never'], correctOptionIndex: 1 },
      { id: 'q4', text: 'What should you check before finalizing creatives?', options: ['Platform compliance and naming conventions', 'How colorful it is', 'Designer mood', 'Random preferences'], correctOptionIndex: 0 },
      { id: 'q5', text: 'What is the correct mindset?', options: ['“Creatives don’t affect performance.”', '“Great performance requires strong creative direction.”', '“Performance team shouldn’t review creatives.”', '“Copies are optional.”'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m1d': {
    id: 'q_pm_m1d',
    title: 'Naming & Tracking Assessment',
    moduleId: 'pm_m1d',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why are naming conventions important?', options: ['To decorate the account', 'To ensure clarity, scalability, and easy optimization', 'Because platforms demand it', 'For fun'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What should a naming format include?', options: ['Random words', 'Client name, objective, audience type, platform, version', 'Emojis', 'Designer name'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Why are UTMs necessary?', options: ['They help track exactly which ad generated a lead', 'They make URLs look long', 'They reduce performance', 'They are optional'], correctOptionIndex: 0 },
      { id: 'q4', text: 'When should naming and tracking be checked?', options: ['After the campaign is finished', 'Before the campaign launch', 'During unrelated tasks', 'Never'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is the correct mindset?', options: ['“Naming doesn’t matter.”', '“If tracking is wrong, data becomes useless.”', '“UTMs are optional.”', '“Clean structure slows us down.”'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m2': {
    id: 'q_pm_m2',
    title: 'Campaign Setup Assessment',
    moduleId: 'pm_m2',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What determines most of the campaign’s success?', options: ['The setup quality', 'Luck', 'Random targeting', 'Designer preference'], correctOptionIndex: 0 },
      { id: 'q2', text: 'What should each ad set contain?', options: ['Multiple mixed strategies', 'One clear testing logic', 'Random interests', 'Unrelated audiences'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What must be verified before launching a campaign?', options: ['Snack breaks', 'Creatives, URLs, pixel/tracking', 'Designer portfolio', 'Browser theme'], correctOptionIndex: 1 },
      { id: 'q4', text: 'What platforms require tracking tags/pixels?', options: ['Only Meta', 'Google, Meta, LinkedIn', 'None', 'Only LinkedIn'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is the correct mindset?', options: ['“Platforms will fix my mistakes.”', '“Precise setup avoids wasted budget.”', '“Setup is optional.”', '“Testing happens later.”'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m2b': {
    id: 'q_pm_m2b',
    title: 'Pixel & Tracking Verification Assessment',
    moduleId: 'pm_m2b',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why must tracking be verified before launch?', options: ['To decorate links', 'Because wrong tracking makes data unreliable', 'For fun', 'To delay campaigns'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Which tool helps check Meta Pixel firing?', options: ['Spotify', 'Pixel Helper', 'Canva', 'Excel'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What is the purpose of UTMs?', options: ['To track where the lead actually came from', 'To make URLs longer', 'To confuse clients', 'To replace landing pages'], correctOptionIndex: 0 },
      { id: 'q4', text: 'What should you do before going live?', options: ['Guess tracking', 'Test events and submit a test lead', 'Ignore tracking', 'Launch immediately'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is the correct mindset?', options: ['“Tracking doesn’t matter.”', '“Tracking is the truth — without it everything else collapses.”', '“Platforms will auto-fix UTMs.”', '“Testing is optional.”'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m2c': {
    id: 'q_pm_m2c',
    title: 'Ad Preview Assessment',
    moduleId: 'pm_m2c',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the purpose of a test preview?', options: ['To waste time', 'To catch errors before budget starts spending', 'To decorate the account', 'To check designer mood'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What should you check first in the preview?', options: ['Colors', 'Copy clarity, spelling, and hook', 'Followers', 'Music'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What must be verified in the CTA?', options: ['Font size', 'That it opens the correct landing page with working UTMs', 'Whether the button looks aesthetic', 'Whether it matches brand color'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Why preview ads on multiple placements?', options: ['Just curiosity', 'To detect cropping issues and text cut-offs', 'For fun', 'It’s optional'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is the right mindset?', options: ['“Preview is optional.”', '“A quick preview prevents expensive mistakes.”', '“Setup is enough.”', '“Clients won’t notice.”'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m2d': {
    id: 'q_pm_m2d',
    title: 'Campaign Documentation Assessment',
    moduleId: 'pm_m2d',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why must campaign setup be documented?', options: ['To make the sheet look full', 'To ensure transparency and enable future optimization', 'To add extra workload', 'Because clients demand it'], correctOptionIndex: 1 },
      { id: 'q2', text: 'When should the campaign tracker be updated?', options: ['Only at month-end', 'Immediately after campaign goes live', 'Only if someone asks', 'Never'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What must be included in campaign documentation?', options: ['Only the campaign name', 'Full details: objective, audience, budget, placements, creatives', 'Only screenshots', 'Only ad copies'], correctOptionIndex: 1 },
      { id: 'q4', text: 'What is the mindset rule for documentation?', options: ['If it’s in memory, it’s enough', 'Documentation is optional', 'If it isn’t documented, it doesn’t exist', 'Documentation slows us'], correctOptionIndex: 2 },
      { id: 'q5', text: 'Who relies on the documented campaign details?', options: ['Only you', 'Account Managers, Leads, Analysts, Seniors', 'Clients only', 'No one'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m3': {
    id: 'q_pm_m3',
    title: 'Daily Monitoring Assessment',
    moduleId: 'pm_m3',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the first thing you do during daily monitoring?', options: ['Run a full weekly audit', 'Quick dashboard scan for CTR, CPC, CPL, ROAS anomalies', 'Create new campaigns', 'Ignore the dashboard'], correctOptionIndex: 1 },
      { id: 'q2', text: 'If CTR is low, what should you check first?', options: ['Budget only', 'Creative hooks and ad relevance', 'Folder structure', 'File names'], correctOptionIndex: 1 },
      { id: 'q3', text: 'If CPL increases suddenly, immediate action should be:', options: ['Increase budget', 'Pause low-quality audiences and check landing page/conversion events', 'Wait a month', 'Change campaign name'], correctOptionIndex: 1 },
      { id: 'q4', text: 'What does a falling ROAS indicate?', options: ['Strong profitability', 'Possible funnel or attribution issues; investigate offer, landing, and audience performance', 'That CTR is high', 'That you should delete the account'], correctOptionIndex: 1 },
      { id: 'q5', text: 'When should you escalate to Performance Lead?', options: ['Only at month end', 'When an account shows sustained negative deviation or red-alert status', 'Never', 'For minor daily fluctuations'], correctOptionIndex: 1 },
      { id: 'q6', text: 'What should you document after taking action?', options: ['Only the campaign name', 'Screenshot + note with reason and next check time', 'Nothing', 'Only verbal update'], correctOptionIndex: 1 },
      { id: 'q7', text: 'How often should you check ad-level metrics for flagged campaigns?', options: ['Weekly', 'Daily or more frequently until stabilized', 'Yearly', 'Never'], correctOptionIndex: 1 },
      { id: 'q8', text: 'If frequency is very high and CTR drops, the likely step is:', options: ['Increase bids', 'Refresh creatives or expand audience', 'Rename the campaign', 'Reduce tracking'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Which metric best signals creative fatigue?', options: ['ROAS only', 'CTR decline with rising CPC and steady impressions', 'File naming errors', 'Folder disorganization'], correctOptionIndex: 1 },
      { id: 'q10', text: 'What is the correct mindset for daily monitoring?', options: ['Check numbers and ignore patterns', 'Spot signals early, act fast, and document everything', 'Only monitor when client complains', 'Leave monitoring to chance'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m3b': {
    id: 'q_pm_m3b',
    title: 'Segment Optimization Assessment',
    moduleId: 'pm_m3b',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What defines a high-performing segment?', options: ['Low CTR and high CPL', 'High CTR, stable CPC, and CPL within target', 'Only high impressions', 'Only high budget'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What should you do with a low-performing segment?', options: ['Increase budget', 'Ignore it', 'Pause, reduce budget, or refresh creatives', 'Rename the campaign'], correctOptionIndex: 2 },
      { id: 'q3', text: 'Why test one lever at a time?', options: ['To keep reports short', 'To know which change impacted performance', 'To confuse the client', 'To save time'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Which of the following is a common segmentation category?', options: ['File size', 'Gender, age, placement, device', 'Folder naming', 'Creative export format'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What should be documented after adjustments?', options: ['Only impressions', 'Segment name, issue, action taken', 'Just CTR', 'Nothing'], correctOptionIndex: 1 },
      { id: 'q6', text: 'What is a red flag for a segment?', options: ['Low CPC and low CPL', 'Rising CPC and dropping CTR', 'Consistent conversions', 'Stable ROAS'], correctOptionIndex: 1 },
      { id: 'q7', text: 'What should you do with a winning segment?', options: ['Reduce budget', 'Turn it off', 'Scale budget or build variations', 'Remove tracking'], correctOptionIndex: 2 },
      { id: 'q8', text: 'When should segment performance be checked?', options: ['Once a year', 'Daily or weekly depending on campaign spend', 'Only when client asks', 'Never'], correctOptionIndex: 1 },
      { id: 'q9', text: 'What indicates creative fatigue in a specific segment?', options: ['CTR drops, CPC rises, impressions stable', 'High conversion rate', 'Strong ROAS', 'Low budget'], correctOptionIndex: 0 },
      { id: 'q10', text: 'What is the mindset for segment optimization?', options: ['Change everything randomly', 'Precision adjustments with clear reasoning', 'Avoid making decisions', 'Guess and hope for the best'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m3c': {
    id: 'q_pm_m3c',
    title: 'A/B Testing Assessment',
    moduleId: 'pm_m3c',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What defines a high-performing segment?', options: ['Low CTR and high CPL', 'High CTR, stable CPC, and CPL within target', 'Only high impressions', 'Only high budget'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What should you do with a low-performing segment?', options: ['Increase budget', 'Ignore it', 'Pause, reduce budget, or refresh creatives', 'Rename the campaign'], correctOptionIndex: 2 },
      { id: 'q3', text: 'Why test one lever at a time?', options: ['To keep reports short', 'To know which change impacted performance', 'To confuse the client', 'To save time'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Which of the following is a common segmentation category?', options: ['File size', 'Gender, age, placement, device', 'Folder naming', 'Creative export format'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What should be documented after adjustments?', options: ['Only impressions', 'Segment name, issue, action taken', 'Just CTR', 'Nothing'], correctOptionIndex: 1 },
      { id: 'q6', text: 'What is a red flag for a segment?', options: ['Low CPC and low CPL', 'Rising CPC and dropping CTR', 'Consistent conversions', 'Stable ROAS'], correctOptionIndex: 1 },
      { id: 'q7', text: 'What should you do with a winning segment?', options: ['Reduce budget', 'Turn it off', 'Scale budget or build variations', 'Remove tracking'], correctOptionIndex: 2 },
      { id: 'q8', text: 'When should segment performance be checked?', options: ['Once a year', 'Daily or weekly depending on campaign spend', 'Only when client asks', 'Never'], correctOptionIndex: 1 },
      { id: 'q9', text: 'What indicates creative fatigue in a specific segment?', options: ['CTR drops, CPC rises, impressions stable', 'High conversion rate', 'Strong ROAS', 'Low budget'], correctOptionIndex: 0 },
      { id: 'q10', text: 'What is the mindset for segment optimization?', options: ['Change everything randomly', 'Precision adjustments with clear reasoning', 'Avoid making decisions', 'Guess and hope for the best'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m3d': {
    id: 'q_pm_m3d',
    title: 'Optimization Logging Assessment',
    moduleId: 'pm_m3d',
    totalQuestions: 10,
    timeLimit: '15:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why is logging optimization actions important?', options: ['To fill the sheet', 'To create a traceable history of all decisions', 'To make campaigns look busy', 'It\'s optional'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What should each log entry include?', options: ['Only impressions', 'Issue, action, reason, expected result', 'Budget only', 'Screenshots'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What happens if optimization is done but not logged?', options: ['Nothing', 'It’s considered incomplete', 'It doubles the performance', 'It disappears from the platform'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Which of the following is a valid reason to optimize?', options: ['CPL rising', 'Client asked about a different topic', 'Festive season', 'Designer on leave'], correctOptionIndex: 0 },
      { id: 'q5', text: 'What is the benefit of logging hypotheses?', options: ['Makes the sheet long', 'Helps understand why a change was made and improves future decisions', 'Confuses the team', 'Not useful'], correctOptionIndex: 1 },
      { id: 'q6', text: 'What should you do after logging an optimization?', options: ['Forget it', 'Set a follow-up review time', 'Close the log', 'Delete previous entries'], correctOptionIndex: 1 },
      { id: 'q7', text: 'When should logs be updated?', options: ['At the end of the month', 'Immediately after optimization', 'Only when the lead asks', 'Never'], correctOptionIndex: 1 },
      { id: 'q8', text: 'What does poor CTR + high CPC indicate?', options: ['Strong audience', 'Creative fatigue or weak audience', 'Low spend', 'Healthy performance'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Who benefits from clear optimization logs?', options: ['Only the client', 'Entire marketing and performance team', 'Only the designer', 'Nobody'], correctOptionIndex: 1 },
      { id: 'q10', text: 'What mindset is needed for logging?', options: ['Randomness', 'Avoid documentation', 'Precision + discipline', 'Hide actions'], correctOptionIndex: 2 },
    ],
  },
  'q_pm_m4': {
    id: 'q_pm_m4',
    title: 'Spend Tracking Assessment',
    moduleId: 'pm_m4',
    totalQuestions: 7,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why is daily spend tracking important?', options: ['To count impressions', 'To prevent budget exhaustion, underspend, and pacing issues', 'To make the sheet busy', 'To please platforms'], correctOptionIndex: 1 },
      { id: 'q2', text: 'How do you calculate the ideal daily run-rate?', options: ['Monthly Budget × Random number', 'Monthly Budget ÷ Working Days', 'Monthly Budget + Weekend spend', 'Guesswork'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What should you do if a campaign is overspending with no performance uplift?', options: ['Increase budget more', 'Cap or pause campaign and notify AM + Lead', 'Ignore it', 'Rename the campaign'], correctOptionIndex: 1 },
      { id: 'q4', text: 'If the account is underspending but performance is strong, you should:', options: ['Do nothing', 'Reallocate budget to winners or run experiments', 'Stop all campaigns', 'Ask client for less budget'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is an immediate escalation trigger?', options: ['Minor daily fluctuation', 'Imminent fund exhaustion within 48 hours', 'A small change in CPL', 'A new creative upload'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Where should spend updates be recorded?', options: ['Personal notes', 'Budget pacing sheet with screenshot proof', 'Only in the ad platform', 'Not recorded'], correctOptionIndex: 1 },
      { id: 'q7', text: 'What mindset should guide spend tracking?', options: ['“Let the platform spend it.”', '“Protect the client budget proactively.”', '“Overspend is fine if leads come.”', '“Budgets are not my responsibility.”'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m4b': {
    id: 'q_pm_m4b',
    title: 'Pacing Adjustment Assessment',
    moduleId: 'pm_m4b',
    totalQuestions: 7,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why is pacing adjustment necessary?', options: ['To make reports look better', 'To prevent over- or under-spending and protect performance', 'To confuse the client', 'To change budgets randomly'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What is the first step before adjusting pacing?', options: ['Guessing the reason', 'Checking performance metrics', 'Increasing all budgets', 'Pausing the entire campaign'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What should you do when a campaign is overspending?', options: ['Increase budgets', 'Reduce budgets or tighten targeting', 'Ignore it', 'Add more creatives'], correctOptionIndex: 1 },
      { id: 'q4', text: 'How can underspending be corrected?', options: ['Decrease budgets', 'Expand audiences or increase budgets on winners', 'Pause all campaigns', 'Stop spending for the week'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What must be done after pacing adjustments?', options: ['Nothing', 'Log changes in the tracker', 'Delete the campaign', 'Message all team members'], correctOptionIndex: 1 },
      { id: 'q6', text: 'What mindset should guide pacing decisions?', options: ['Let it spend freely', 'Protect performance and budget', 'Spend everything ASAP', 'Keep budgets static'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Which campaigns should get budget increases when underspending?', options: ['Low performers', 'High-performing winners', 'Any random campaign', 'Untested segments'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m4c': {
    id: 'q_pm_m4c',
    title: 'Budget Reallocation Assessment',
    moduleId: 'pm_m4c',
    totalQuestions: 7,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the purpose of dynamic budget reallocation?', options: ['To keep all campaigns equal', 'To shift budget to top-performing segments', 'To pause all campaigns', 'To reset the account'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Which campaigns should receive more budget?', options: ['High-performing ones', 'Low-performing ones', 'All campaigns', 'New clients only'], correctOptionIndex: 0 },
      { id: 'q3', text: 'Which metric signals a campaign is underperforming?', options: ['High CPL', 'Low CPL', 'Stable CTR', 'High conversions'], correctOptionIndex: 0 },
      { id: 'q4', text: 'What should you do after reallocating budget?', options: ['Forget about it', 'Log the change with reason', 'Delete old campaigns', 'Skip reporting'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What mindset should guide budget reallocation?', options: ['Keep budgets fixed', 'Move budget to where results are best', 'Spend randomly', 'Increase budgets everywhere'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Who should be informed of major reallocations?', options: ['Designer', 'Account Manager', 'Client directly', 'SEO team'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Why scale gradually instead of increasing budget drastically?', options: ['Prevents sudden performance drops', 'Makes account look neat', 'Fun experiment', 'Not necessary'], correctOptionIndex: 0 },
    ],
  },
  'q_pm_m4d': {
    id: 'q_pm_m4d',
    title: 'Deviation Reporting Assessment',
    moduleId: 'pm_m4d',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'When must you report a deviation immediately?', options: ['Only at month end', 'When CPL deviates >20% or spend pacing >15% or fund risk <48 hrs', 'Only if the client notices', 'Never'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What must you attach to the report?', options: ['Opinions only', 'Screenshots, metric comparison, and timestamps', 'Designer drafts', 'Nothing'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Which channel is primary for reporting performance deviations?', options: ['Personal DM only', 'Performance Slack channel + tag Lead', 'Random social media', 'No channel'], correctOptionIndex: 1 },
      { id: 'q4', text: 'What should your report recommend?', options: ['Nothing — just raise the alarm', 'A clear next step (pause, reallocate, investigate, request funds)', 'Blame another team', 'Wait and watch'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is the correct mindset when escalating?', options: ['Hide issues to avoid questions', 'Be fast, factual, and solution-focused', 'Report only after full investigation', 'Only inform after client complains'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m5': {
    id: 'q_pm_m5',
    title: 'Weekly Reporting Assessment',
    moduleId: 'pm_m5',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the purpose of a weekly performance report?', options: ['To dump data', 'To explain what happened, why it happened, and what’s next', 'To share random screenshots', 'To impress with long documents'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What must be included along with KPIs?', options: ['Memes', 'Insights explaining the numbers', 'Only screenshots', 'Designer notes'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Which are examples of weekly insights?', options: ['Why CPL changed', 'Why audience performed well or poorly', 'Why creatives fatigued', 'All of the above'], correctOptionIndex: 3 },
      { id: 'q4', text: 'How should the weekly report be delivered?', options: ['Only email', 'Basecamp + WhatsApp summary', 'Verbal updates only', 'No need to send'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What mindset should guide weekly reporting?', options: ['Just export data', 'Provide clarity and direction', 'Avoid explanations', 'Confuse the client'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m5b': {
    id: 'q_pm_m5b',
    title: 'Insights & Learnings Assessment',
    moduleId: 'pm_m5b',
    totalQuestions: 7,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the purpose of highlighting learning points?', options: ['To fill space in the report', 'To extract insights that improve future decisions', 'To repeat numbers again', 'To confuse the client'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Which of the following is considered a creative winner?', options: ['High CTR + Low CPL', 'High CPC + Weak CTR', 'Low engagement', 'Zero conversions'], correctOptionIndex: 0 },
      { id: 'q3', text: 'What should follow each insight?', options: ['A joke', 'An actionable next step', 'Nothing', 'A random screenshot'], correctOptionIndex: 1 },
      { id: 'q4', text: 'What indicates creative fatigue?', options: ['CTR drop + CPC rise', 'CTR stable', 'CPL improving', 'New leads flowing'], correctOptionIndex: 0 },
      { id: 'q5', text: 'Why is identifying losers important?', options: ['To complain', 'To stop wasting budget', 'To make the report longer', 'To hide performance issues'], correctOptionIndex: 1 },
      { id: 'q6', text: 'What mindset should guide insights?', options: ['Guesswork', 'Blame-shifting', 'Pattern-based and action-driven', 'Avoiding detail'], correctOptionIndex: 2 },
      { id: 'q7', text: 'What should learning points help with?', options: ['Unrelated tasks', 'Next week’s strategy', 'Only reporting', 'Nothing'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m5c': {
    id: 'q_pm_m5c',
    title: 'Dashboard Creation Assessment',
    moduleId: 'pm_m5c',
    totalQuestions: 7,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the primary purpose of dashboards?', options: ['Decoration', 'To help teams make fast, clear decisions', 'Adding colors to reports', 'To replace all campaigns'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What must be validated after connecting data sources?', options: ['Colors used', 'Whether dashboard values match platform values', 'Font style', 'Logo placement'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Which KPIs must be included in the dashboard?', options: ['Only impressions', 'Spend, Leads, CPL, CTR, CPC, Conversions', 'Only likes', 'Only views'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Dashboards should be:', options: ['Cluttered', 'Auto-updating', 'Screenshot-based', 'Text-only'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What visual elements help identify trends?', options: ['Line graphs', 'Handwritten notes', 'Emojis', 'Random text'], correctOptionIndex: 0 },
      { id: 'q6', text: 'What mindset should guide dashboard creation?', options: ['Make it flashy', 'Make it useful and insight-rich', 'Add as many pages as possible', 'Keep it secret'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Who should receive the dashboard link?', options: ['Only the designer', 'Account Manager + Performance Lead + Client', 'No one', 'Friends and family'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m5d': {
    id: 'q_pm_m5d',
    title: 'Report Submission Assessment',
    moduleId: 'pm_m5d',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What must you include in every report submission?', options: ['Only screenshots', 'Executive summary, KPIs, insights, recommended actions, and dashboard link', 'Random files', 'Designer notes'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Which channel is appropriate for monthly report delivery?', options: ['WhatsApp only', 'Basecamp + Email + Dashboard link', 'Personal chat only', 'No channel'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What should you do after sending the report?', options: ['Assume it’s received', 'Record acknowledgment in tracker and follow up if none within 24 hours', 'Wait a week to check', 'Ignore responses'], correctOptionIndex: 1 },
      { id: 'q4', text: 'When must urgent incident reports be sent?', options: ['Weekly', 'Immediately via Slack + Email + Basecamp task', 'Monthly', 'Never'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is the purpose of including recommended next steps?', options: ['To fill space', 'To provide direction and speed up decision-making', 'To confuse the Lead', 'To delay action'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m6': {
    id: 'q_pm_m6',
    title: 'Account Team Collaboration Assessment',
    moduleId: 'pm_m6',
    totalQuestions: 7,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why is coordination with the Account Manager (AM) critical?', options: ['To get free lunch', 'To align client expectations with campaign reality', 'To avoid work', 'To complain about designers'], correctOptionIndex: 1 },
      { id: 'q2', text: 'When should you update the AM?', options: ['Only when they ask', 'Proactively on performance changes, wins, and risks', 'Never', 'Once a year'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What information does the AM need from you?', options: ['Gossip', 'Clear data, insights, and next steps', 'Random numbers', 'Nothing'], correctOptionIndex: 1 },
      { id: 'q4', text: 'If a client is unhappy, what should you do?', options: ['Hide', 'Equip the AM with data and a recovery plan', 'Blame the AM', 'Delete the campaign'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is the purpose of the weekly internal sync?', options: ['To waste time', 'To review account health and strategy before client calls', 'To play games', 'To sleep'], correctOptionIndex: 1 },
      { id: 'q6', text: 'How does AM feedback help you?', options: ['It doesn’t', 'It provides business context you might miss', 'It slows you down', 'It confuses you'], correctOptionIndex: 1 },
      { id: 'q7', text: 'What mindset is required for AM collaboration?', options: ['“Us vs Them”', '“We are one team solving the client’s problem.”', '“AMs are annoying.”', '“I work alone.”'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m6b': {
    id: 'q_pm_m6b',
    title: 'Creative Team Collaboration Assessment',
    moduleId: 'pm_m6b',
    totalQuestions: 7,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the Performance Specialist’s role in the creative process?', options: ['To design the ads', 'To provide data-backed direction and insights', 'To critique colors only', 'To ignore creatives'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What makes a good creative brief?', options: ['“Make it pop”', 'Clear objective, audience, format, hook, and reference', '“Do whatever you want”', 'No brief'], correctOptionIndex: 1 },
      { id: 'q3', text: 'How do you help designers improve?', options: ['Say “it’s bad”', 'Share performance data (CTR, CPL) and examples of winners', 'Don’t talk to them', 'Reject everything'], correctOptionIndex: 1 },
      { id: 'q4', text: 'When should you request new creatives?', options: ['When fatigue sets in (CTR drops)', 'Every day', 'Never', 'When you are bored'], correctOptionIndex: 0 },
      { id: 'q5', text: 'What is a “creative feedback loop”?', options: ['A meeting that never ends', 'Continuous sharing of data to refine future designs', 'Complaining loop', 'Email chain'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Why is respect important?', options: ['It isn’t', 'Design is hard; collaboration yields better results than commanding', 'Designers are sensitive', 'No reason'], correctOptionIndex: 1 },
      { id: 'q7', text: 'What mindset helps creative collaboration?', options: ['“I know best.”', '“Data + Design = Performance.”', '“Design doesn’t matter.”', '“I’ll do it myself.”'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m6c': {
    id: 'q_pm_m6c',
    title: 'SEO & Automation Collaboration Assessment',
    moduleId: 'pm_m6c',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'How does SEO help performance marketing?', options: ['It doesn’t', 'Improves landing page quality and organic visibility', 'Competes with it', 'Slows it down'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Why coordinate with the Automation team?', options: ['To fix printer issues', 'To ensure lead flow (CRM, email, SMS) works perfectly', 'To build robots', 'To write code'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What happens if lead automation breaks?', options: ['Nothing', 'Leads are lost, and money is wasted', 'Performance improves', 'Client is happy'], correctOptionIndex: 1 },
      { id: 'q4', text: 'When should you check landing page speed?', options: ['Never', 'Regularly, as it affects conversion rates', 'Only if it crashes', 'Once a year'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is the goal of cross-department alignment?', options: ['More meetings', 'A seamless customer journey from ad to sale', 'Confusion', 'Separate goals'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m6d': {
    id: 'q_pm_m6d',
    title: 'Inter-Department Updates Assessment',
    moduleId: 'pm_m6d',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why share updates with other departments?', options: ['To brag', 'To ensure everyone is aware of campaign impact', 'To fill email inboxes', 'To waste time'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What should be shared?', options: ['Lunch plans', 'Major wins, learnings, and upcoming changes', 'Personal problems', 'Nothing'], correctOptionIndex: 1 },
      { id: 'q3', text: 'How does this help the agency?', options: ['It doesn’t', 'It builds a culture of transparency and shared success', 'It causes fights', 'It reduces work'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Who is responsible for communication?', options: ['Someone else', 'You are responsible for your campaign’s communication', 'The CEO', 'The client'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is the correct mindset?', options: ['“Silos are good.”', '“Communication prevents chaos.”', '“Keep secrets.”', '“Don’t bother others.”'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m7': {
    id: 'q_pm_m7',
    title: 'AI Tools Usage Assessment',
    moduleId: 'pm_m7',
    totalQuestions: 7,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is the primary role of AI in performance marketing?', options: ['To replace you', 'To augment efficiency and analysis', 'To write bad copy', 'To make coffee'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Which task is best suited for AI?', options: ['Strategic thinking', 'Data analysis and pattern recognition', 'Client relationship', 'Empathy'], correctOptionIndex: 1 },
      { id: 'q3', text: 'How can ChatGPT/Claude help?', options: ['Write final copy', 'Brainstorm hooks, angles, and summarize data', 'Make decisions', 'Run ads'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Should you copy-paste AI output directly?', options: ['Yes, always', 'No, review and refine for brand voice', 'Maybe', 'If you are lazy'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is a risk of over-relying on AI?', options: ['None', 'Loss of critical thinking and generic output', 'Too much speed', 'Better results'], correctOptionIndex: 1 },
      { id: 'q6', text: 'What mindset should you have towards AI?', options: ['Fear', 'Curiosity and leverage', 'Ignorance', 'Hostility'], correctOptionIndex: 1 },
      { id: 'q7', text: 'AI is a:', options: ['Master', 'Tool', 'Enemy', 'Magic wand'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m7b': {
    id: 'q_pm_m7b',
    title: 'Platform AI & Scaling Assessment',
    moduleId: 'pm_m7b',
    totalQuestions: 7,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is Meta’s Advantage+?', options: ['A discount', 'AI-driven automation for targeting and creative', 'A manual tool', 'A new social network'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What is Google’s Performance Max?', options: ['A drink', 'Goal-based campaign type accessing all Google inventory', 'A search engine', 'A video tool'], correctOptionIndex: 1 },
      { id: 'q3', text: 'When should you use these automated campaigns?', options: ['Always', 'When you have sufficient data and clear goals', 'Never', 'Randomly'], correctOptionIndex: 1 },
      { id: 'q4', text: 'What is the downside of full automation?', options: ['Less control and transparency', 'Too much control', 'Lower cost', 'More work'], correctOptionIndex: 0 },
      { id: 'q5', text: 'How do you scale with AI?', options: ['Let it run wild', 'Feed it high-quality data and creatives', 'Stop monitoring', 'Decrease budget'], correctOptionIndex: 1 },
      { id: 'q6', text: 'What is the "learning phase"?', options: ['School', 'Period where the algorithm explores best delivery', 'Downtime', 'Error'], correctOptionIndex: 1 },
      { id: 'q7', text: 'What mindset is needed for platform AI?', options: ['“Trust but verify.”', '“Set and forget.”', '“Don’t trust it.”', '“Manual is always better.”'], correctOptionIndex: 0 },
    ],
  },
  'q_pm_m7c': {
    id: 'q_pm_m7c',
    title: 'Automated Reporting Assessment',
    moduleId: 'pm_m7c',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why automate reporting?', options: ['To be lazy', 'To save time and reduce manual error', 'To hide data', 'To confuse clients'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What tools can automate reporting?', options: ['Looker Studio, Supermetrics', 'Notepad', 'Paint', 'Calculator'], correctOptionIndex: 0 },
      { id: 'q3', text: 'What should you do with automated reports?', options: ['Send without looking', 'Review for accuracy and add insights', 'Delete them', 'Print them'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Does automation replace the analyst?', options: ['Yes', 'No, interpretation is still human', 'Maybe', 'Hopefully'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is the benefit of real-time dashboards?', options: ['Stress', 'Immediate visibility into performance', 'Nothing', 'More colors'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m7d': {
    id: 'q_pm_m7d',
    title: 'AI Insights Log Assessment',
    moduleId: 'pm_m7d',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why log AI-generated insights?', options: ['To remember what worked and what didn’t', 'To waste storage', 'To copy-paste later', 'No reason'], correctOptionIndex: 0 },
      { id: 'q2', text: 'What counts as an AI insight?', options: ['“Ad is good”', '“AI identified audience overlap in X segment”', '“I like this”', 'Random text'], correctOptionIndex: 1 },
      { id: 'q3', text: 'How does logging help the team?', options: ['It doesn’t', 'It shares knowledge and prevents repeated tests', 'It bores them', 'It creates work'], correctOptionIndex: 1 },
      { id: 'q4', text: 'When should you log?', options: ['Never', 'When a significant learning occurs', 'Every minute', 'Once a year'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is the correct mindset?', options: ['“Keep learnings to myself.”', '“Shared knowledge scales success.”', '“AI is magic.”', '“Documentation is useless.”'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m8': {
    id: 'q_pm_m8',
    title: 'Ad Highlights Sharing Assessment',
    moduleId: 'pm_m8',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why share ad highlights?', options: ['To show off', 'To keep the team morale high and informed', 'To fill time', 'To spam'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What constitutes a highlight?', options: ['Any ad', 'Top performers, innovative tests, or big wins', 'Failed ads', 'Stock images'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Who should see these highlights?', options: ['No one', 'The entire team (Creative, AM, Strategy)', 'Only you', 'The internet'], correctOptionIndex: 1 },
      { id: 'q4', text: 'How often should you share?', options: ['Weekly', 'Never', 'Daily', 'Yearly'], correctOptionIndex: 0 },
      { id: 'q5', text: 'What is the benefit?', options: ['None', 'Inspires better work and alignment', 'Jealousy', 'Confusion'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m8b': {
    id: 'q_pm_m8b',
    title: 'Client Summaries Assessment',
    moduleId: 'pm_m8b',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is a client summary?', options: ['A novel', 'A concise update on performance and actions', 'A complaint', 'A receipt'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Who writes the technical part of the summary?', options: ['The client', 'The Performance Specialist', 'The designer', 'The intern'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What tone should be used?', options: ['Casual', 'Professional, clear, and confident', 'Angry', 'Sad'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Why is clarity important?', options: ['It isn’t', 'Clients need to understand ROI quickly', 'It takes time', 'It’s boring'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What mindset is key?', options: ['“Confuse them.”', '“Make them the hero.”', '“Hide the truth.”', '“Don’t care.”'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m8c': {
    id: 'q_pm_m8c',
    title: 'Proactive Flagging Assessment',
    moduleId: 'pm_m8c',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What does proactive flagging mean?', options: ['Waiting for the fire', 'Alerting the team before the fire spreads', 'Ignoring the fire', 'Starting a fire'], correctOptionIndex: 1 },
      { id: 'q2', text: 'What should be flagged?', options: ['Everything', 'Risks (budget, performance drop, tracking issues)', 'Nothing', 'Good news only'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Who do you flag to?', options: ['No one', 'Account Manager and Lead', 'The client directly (without AM knowledge)', 'Social media'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Why is speed important?', options: ['It isn’t', 'Early detection saves budget and trust', 'It causes panic', 'It’s fun'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What mindset is required?', options: ['“Not my problem.”', '“I own the outcome.”', '“Wait and see.”', '“Hide it.”'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m8d': {
    id: 'q_pm_m8d',
    title: 'Transparent Communication Assessment',
    moduleId: 'pm_m8d',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is transparent communication?', options: ['Telling everything', 'Honesty about performance, good or bad', 'Lying', 'Silence'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Why is it hard?', options: ['It isn’t', 'It requires admitting mistakes or bad news', 'It’s easy', 'It’s fun'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What builds trust?', options: ['Excuses', 'Ownership and solutions', 'Blame', 'Hiding'], correctOptionIndex: 1 },
      { id: 'q4', text: 'If you made a mistake, what do you do?', options: ['Hide it', 'Admit it, fix it, and prevent it from happening again', 'Blame the platform', 'Quit'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is the long-term benefit?', options: ['None', 'Stronger client relationships and career growth', 'Firing', 'More work'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m9': {
    id: 'q_pm_m9',
    title: 'SOP Compliance Assessment',
    moduleId: 'pm_m9',
    totalQuestions: 7,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is an SOP?', options: ['Suggestion', 'Standard Operating Procedure', 'Something Optional', 'Super Old Paper'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Why do we have SOPs?', options: ['To annoy you', 'To ensure consistency, quality, and scalability', 'To waste paper', 'To slow you down'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What happens if you ignore SOPs?', options: ['Innovation', 'Errors, chaos, and wasted budget', 'Promotion', 'Nothing'], correctOptionIndex: 1 },
      { id: 'q4', text: 'When should you follow SOPs?', options: ['When watched', 'Always', 'Never', 'Sometimes'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Can SOPs be improved?', options: ['No', 'Yes, feedback is welcome', 'Only by the CEO', 'Never change them'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Who is responsible for compliance?', options: ['The police', 'You are', 'Your mom', 'The client'], correctOptionIndex: 1 },
      { id: 'q7', text: 'What mindset is needed?', options: ['“Rules are for sheep.”', '“Discipline creates freedom.”', '“I know better.”', '“Whatever.”'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m9b': {
    id: 'q_pm_m9b',
    title: 'Tracker Updates Assessment',
    moduleId: 'pm_m9b',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'Why update trackers?', options: ['To look busy', 'To maintain a single source of truth', 'To color cells', 'To practice typing'], correctOptionIndex: 1 },
      { id: 'q2', text: 'When should you update?', options: ['End of month', 'Real-time or daily', 'Never', 'When yelled at'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What happens if trackers are outdated?', options: ['Nothing', 'Decisions are made on wrong data', 'Magic', 'Success'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Who uses the trackers?', options: ['No one', 'The whole team', 'Aliens', 'Only you'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is the correct mindset?', options: ['“I’ll do it later.”', '“Data integrity is my responsibility.”', '“It’s boring.”', '“Not my job.”'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m9c': {
    id: 'q_pm_m9c',
    title: 'Campaign Audit Assessment',
    moduleId: 'pm_m9c',
    totalQuestions: 5,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is a campaign audit?', options: ['A tax check', 'A systematic review of setup and performance', 'A punishment', 'A game'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Why audit your own work?', options: ['To feel bad', 'To catch errors before anyone else does', 'To waste time', 'To sleep'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What should you check?', options: ['Everything (Settings, Creative, Tracking, Budget)', 'Only spend', 'Only images', 'Nothing'], correctOptionIndex: 0 },
      { id: 'q4', text: 'How often should you audit?', options: ['Never', 'Regularly (Weekly/Monthly)', 'Once a decade', 'When fired'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What is the goal?', options: ['Perfection', 'Continuous improvement', 'Failure', 'Stagnation'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m10': {
    id: 'q_pm_m10',
    title: 'Knowledge Transfer & Handover Assessment',
    moduleId: 'pm_m10',
    totalQuestions: 7,
    timeLimit: '10:00',
    passingScore: 80,
    questions: [
      { id: 'q1', text: 'What is Knowledge Transfer (KT)?', options: ['Brain surgery', 'Passing information and responsibility to another', 'Deleting files', 'Hiding data'], correctOptionIndex: 1 },
      { id: 'q2', text: 'When is KT needed?', options: ['When leaving, going on leave, or shifting accounts', 'Never', 'Every day', 'Randomly'], correctOptionIndex: 0 },
      { id: 'q3', text: 'What must be included in KT?', options: ['Passwords only', 'Context, status, credentials, and next steps', 'Jokes', 'Empty folders'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Why is it important?', options: ['It isn’t', 'To ensure business continuity and client satisfaction', 'To be annoying', 'To slow things down'], correctOptionIndex: 1 },
      { id: 'q5', text: 'How should you deliver KT?', options: ['Verbal only', 'Documented and walked through', 'Sticky note', 'Telepathy'], correctOptionIndex: 1 },
      { id: 'q6', text: 'What happens if KT is poor?', options: ['Success', 'Balls drop, performance suffers, clients leave', 'Promotion', 'Happiness'], correctOptionIndex: 1 },
      { id: 'q7', text: 'What mindset is needed?', options: ['“Not my problem anymore.”', '“Leave it better than I found it.”', '“Good luck.”', '“Run away.”'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m11': {
    id: 'q_pm_m11',
    title: 'Conversion Tracking & LP Mgmt Assessment',
    moduleId: 'pm_m11',
    totalQuestions: 10,
    timeLimit: '18:00',
    questions: [
      { id: 'q1', text: 'Tracking must be verified:', options: ['After launch', 'Before launch', 'Only monthly', 'Only if CPL is high'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Test leads must reflect in:', options: ['CRM + lead sheet', 'WhatsApp', 'Canva', 'Only GA4'], correctOptionIndex: 0 },
      { id: 'q3', text: 'UTMs track:', options: ['Design quality', 'Source/medium/campaign', 'Form colour', 'Website fonts'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Landing page must be checked for:', options: ['Speed & CTA clarity', 'Only background colour', 'Hosting name', 'Comments'], correctOptionIndex: 0 },
      { id: 'q5', text: 'Rage clicks indicate:', options: ['Happy users', 'UX frustration', 'Fast loading', 'Good CRO'], correctOptionIndex: 1 },
      { id: 'q6', text: 'If LP form is not working:', options: ['Ignore it', 'Fix it immediately', 'Run ads anyway', 'Reduce budget'], correctOptionIndex: 1 },
      { id: 'q7', text: 'CRO improvements include:', options: ['Social proof', 'Sticky CTAs', 'Simpler forms', 'All of the above'], correctOptionIndex: 3 },
      { id: 'q8', text: 'Event mismatch causes:', options: ['Perfect data', 'Wrong tracking', 'High ROAS', 'Better CTR'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Weekly LP sanity is needed because:', options: ['Code or plugin changes may break tracking', 'It’s optional', 'Designers like it', 'Hosting requires it'], correctOptionIndex: 0 },
      { id: 'q10', text: 'Bad landing pages lead to:', options: ['Lower CPL', 'Higher CPL and low conversions', 'Faster optimization', 'Better quality leads'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m12': {
    id: 'q_pm_m12',
    title: 'Audience, Keyword & Creative Strategy Assessment',
    moduleId: 'pm_m12',
    totalQuestions: 10,
    timeLimit: '18:00',
    questions: [
      { id: 'q1', text: 'Keyword research protects:', options: ['LP design', 'Budget from junk searches', 'Creative size', 'Fonts'], correctOptionIndex: 1 },
      { id: 'q2', text: 'High-intent keywords usually:', options: ['Convert better', 'Waste money', 'Have no clicks', 'Have no meaning'], correctOptionIndex: 0 },
      { id: 'q3', text: 'Audience clusters include:', options: ['Broad', 'Interests', 'Lookalikes', 'All of the above'], correctOptionIndex: 3 },
      { id: 'q4', text: 'Creative fatigue shows when:', options: ['CTR drops', 'CPL rises', 'Frequency increases', 'All of the above'], correctOptionIndex: 3 },
      { id: 'q5', text: 'Competitor creative research helps you:', options: ['Copy them', 'Understand angles that work', 'Delete ads', 'Pause campaigns'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Creative ideas include:', options: ['UGC, testimonials, problem-solution', 'Only static images', 'Only text ads', 'Only carousels'], correctOptionIndex: 0 },
      { id: 'q7', text: 'Audience testing must be:', options: ['One time', 'Continuous', 'Rare', 'Avoided'], correctOptionIndex: 1 },
      { id: 'q8', text: 'AI helps generate:', options: ['CTA designs', 'Copy variations & hooks', 'Ad approvals', 'Form code'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Frequency rising means:', options: ['Delivering new audience', 'Creative fatigue', 'New trends', 'LP is broken'], correctOptionIndex: 1 },
      { id: 'q10', text: 'Matching intent improves:', options: ['Fonts', 'CPL and lead quality', 'Colour palette', 'Video length'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m13': {
    id: 'q_pm_m13',
    title: 'Onboarding & New Client Setup Assessment',
    moduleId: 'pm_m13',
    totalQuestions: 10,
    timeLimit: '18:00',
    questions: [
      { id: 'q1', text: 'Onboarding prevents:', options: ['Future issues', 'Higher CPL', 'Fast fatigue', 'Client delays'], correctOptionIndex: 0 },
      { id: 'q2', text: 'Access must be:', options: ['Checked immediately', 'Ignored', 'Left for later', 'Sent to designer'], correctOptionIndex: 0 },
      { id: 'q3', text: 'Tracking setup includes:', options: ['GA4', 'GTM', 'Clarity', 'All'], correctOptionIndex: 3 },
      { id: 'q4', text: 'Test lead must reflect in:', options: ['CRM + lead sheet', 'WhatsApp only', 'Canva', 'Email only'], correctOptionIndex: 0 },
      { id: 'q5', text: 'CRO audit includes:', options: ['Speed', 'CTA clarity', 'Mobile check', 'All'], correctOptionIndex: 3 },
      { id: 'q6', text: 'First-month plan includes:', options: ['Audiences', 'Keywords', 'Budgets', 'All'], correctOptionIndex: 3 },
      { id: 'q7', text: 'Naming conventions must be:', options: ['Optional', 'Clean and SOP compliant', 'Random', 'Hidden'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Kickoff ensures:', options: ['Miscommunication', 'Alignment', 'Delay', 'Confusion'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Creative requirements must be shared:', options: ['After launch', 'Before campaign setup', 'Only when asked', 'Monthly'], correctOptionIndex: 1 },
      { id: 'q10', text: 'Missing tracking leads to:', options: ['Wrong data', 'Perfect reports', 'Creative wins', 'Strong CTR'], correctOptionIndex: 0 },
    ],
  },
  'q_pm_m14': {
    id: 'q_pm_m14',
    title: 'Tools, Diagnostics & Troubleshooting Assessment',
    moduleId: 'pm_m14',
    totalQuestions: 10,
    timeLimit: '18:00',
    questions: [
      { id: 'q1', text: 'Diagnostics help you:', options: ['Guess', 'Identify real issues', 'Delay work', 'Add more budgets'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Low impressions require checking:', options: ['Audience size', 'Budget limits', 'Creative approvals', 'All'], correctOptionIndex: 3 },
      { id: 'q3', text: 'Debugging tracking uses:', options: ['Pixel Helper', 'GTM Preview', 'GA4 DebugView', 'All'], correctOptionIndex: 3 },
      { id: 'q4', text: 'Rage clicks mean:', options: ['Good UX', 'Frustration', 'No issue', 'Better CPL'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Ad Rank issues show in:', options: ['Meta Stories', 'Google Diagnostics', 'Clarity heatmaps', 'WhatsApp'], correctOptionIndex: 1 },
      { id: 'q6', text: 'CRM mismatch must be:', options: ['Ignored', 'Fixed immediately', 'Hidden', 'Delayed'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Performance drops may come from:', options: ['Competitors', 'Seasons', 'Fatigue', 'All'], correctOptionIndex: 3 },
      { id: 'q8', text: 'Event firing errors cause:', options: ['Perfect tracking', 'Wrong attribution', 'High CTR', 'More leads'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Meta delivery issues include:', options: ['Learning fatigue', 'Audience overlap', 'Bid cap restrictions', 'All'], correctOptionIndex: 3 },
      { id: 'q10', text: 'Troubleshooting requires:', options: ['Random testing', 'Systematic root-cause analysis', 'Ignoring alerts', 'Lowering budgets only'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m15': {
    id: 'q_pm_m15',
    title: 'Red Alert Detection & Recovery Assessment',
    moduleId: 'pm_m15',
    totalQuestions: 10,
    timeLimit: '18:00',
    questions: [
      { id: 'q1', text: 'A red alert means:', options: ['Normal day', 'Sudden performance breakdown', 'Creative review', 'Weekly report'], correctOptionIndex: 1 },
      { id: 'q2', text: 'First step during red alert:', options: ['Panic', 'Diagnose root cause', 'Increase budget', 'Pause everything'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Zero impressions may indicate:', options: ['Strong delivery', 'Rejection, bidding issues, or audience too narrow', 'Good CTR', 'Perfect CPL'], correctOptionIndex: 1 },
      { id: 'q4', text: 'High frequency + low CTR means:', options: ['Creative fatigue', 'Better performance', 'More reach', 'Less views'], correctOptionIndex: 0 },
      { id: 'q5', text: 'Tracking must be checked with:', options: ['Pixel Helper', 'GA4 DebugView', 'GTM preview', 'All'], correctOptionIndex: 3 },
      { id: 'q6', text: 'Lead quality drops require checking:', options: ['CRM data', 'Audience targeting', 'Ad message match', 'All'], correctOptionIndex: 3 },
      { id: 'q7', text: 'LP issues include:', options: ['Slow speed', 'Broken forms', 'Mobile layout errors', 'All'], correctOptionIndex: 3 },
      { id: 'q8', text: 'Fixing a red alert requires:', options: ['Recovery plan', 'New creatives', 'Audience expansion or bid changes', 'All'], correctOptionIndex: 3 },
      { id: 'q9', text: 'After fixing, you must:', options: ['Hide issue', 'Document cause + action', 'Delete logs', 'Pause ads'], correctOptionIndex: 1 },
      { id: 'q10', text: 'AM must receive:', options: ['No update', 'Clear explanation + recovery plan', 'Random screenshots', 'Irrelevant metrics'], correctOptionIndex: 1 },
    ],
  },
  'q_m55': {
    id: 'q_m55',
    title: 'Account Manager Certification Quiz',
    moduleId: 'm55',
    totalQuestions: 5,
    timeLimit: '30:00',
    questions: [
      { id: 'q1', text: 'What is the primary goal of a daily proactive update?', options: ['To say hello', 'To build trust and show progress', 'To ask for money', 'To complain'], correctOptionIndex: 1 },
      { id: 'q2', text: 'When should you escalate a client issue?', options: ['Immediately', 'After 3 reminders or 3 days of no response', 'Never', 'When you feel like it'], correctOptionIndex: 1 },
      { id: 'q3', text: 'What is the key to effective script writing?', options: ['Using big words', 'Clarity over creativity', 'Making it long', 'Copying competitors'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Why is CPL monitoring important?', options: ['It is not', 'To ensure budget efficiency', 'To annoy the performance team', 'To fill time'], correctOptionIndex: 1 },
      { id: 'q5', text: 'What does a red alert indicate?', options: ['A holiday', 'A major performance drop needing immediate action', 'A successful campaign', 'A team party'], correctOptionIndex: 1 },
    ],
  },
};