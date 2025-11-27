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
    dueDate: 'In 2 days',
    sections: [
      {
        id: 's1',
        title: 'Introduction',
        modules: [
          { id: 'm1', title: 'CEO Welcome Message', description: 'A personal welcome from our leadership team.', duration: '10 min', isCompleted: true, type: 'video', videoUrl: 'https://www.youtube.com/embed/sL6z4-Rak2g' },
          { id: 'm2', title: 'Our Core Values', description: 'Understanding the pillars of our company culture.', duration: '15 min', isCompleted: true, type: 'reading' },
        ]
      },
      {
        id: 's2',
        title: 'Policies',
        modules: [
          { id: 'm3', title: 'Employee Handbook Quiz', description: 'Assessment of key policies and procedures.', duration: '20 min', isCompleted: true, type: 'quiz' },
        ]
      }
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
            videoUrl: 'https://youtu.be/doKlyc928zg?si=Z9tRNhPr6pC4QhmF',
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
            videoUrl: 'https://youtu.be/I9q6WdqKeYA?si=AtDR3Bi6sv7xpGJ6',
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
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
            type: 'video'
          },
        ]
      },
      {
        id: 's13',
        title: 'Progress',
        modules: [
          {
            id: 'm54',
            title: 'Course Progress Check',
            description: 'Review your progress and ensure all modules are completed.',
            duration: '10 min',
            isCompleted: false,
            type: 'video'
          }
        ]
      },
      {
        id: 's14',
        title: 'Quiz',
        modules: [
          {
            id: 'm55',
            title: 'Account Manager Certification Quiz',
            description: 'Final assessment to certify your knowledge as an Account Manager.',
            duration: '30 min',
            isCompleted: false,
            type: 'quiz'
          }
        ]
      }

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
        title: 'Campaign Launch',
        modules: [
          {
            id: 'pm_m1',
            title: 'Campaign Setup & Planning',
            description: 'Create campaign plans based on approved strategy from Performance Lead. Understand goals, funnel type, budget, and perform keyword/audience research.',
            duration: '25 min',
            isCompleted: false,
            type: 'video'
          },
          {
            id: 'pm_m2',
            title: 'Ad Launch & Quality Check',
            description: 'Set up campaigns on Google, Meta, and LinkedIn Ads Manager. Verify settings, tracking, and perform full test leads before launch.',
            duration: '24 min',
            isCompleted: false,
            type: 'video'
          },
        ]
      },
      {
        id: 's2',
        title: 'Ongoing Management',
        modules: [
          {
            id: 'pm_m3',
            title: 'Campaign Optimization',
            description: 'Monitor live campaigns daily for performance metrics (CTR, CPC, CPL, ROAS). Identify high/low performers and adjust bids/creatives.',
            duration: '25 min',
            isCompleted: false,
            type: 'video'
          },
          {
            id: 'pm_m4',
            title: 'Budget Monitoring',
            description: 'Track daily and weekly spend against allocated budget. Adjust pacing to prevent over- or under-spending and reallocate dynamically.',
            duration: '24 min',
            isCompleted: false,
            type: 'video'
          },
          {
            id: 'pm_m5',
            title: 'Reporting & Analysis',
            description: 'Prepare weekly reports showing campaign performance and key insights. Highlight learning points, creative winners, and improvement areas.',
            duration: '24 min',
            isCompleted: false,
            type: 'video'
          },
        ]
      },
      {
        id: 's3',
        title: 'Collaboration & Tools',
        modules: [
          {
            id: 'pm_m6',
            title: 'Cross-Team Coordination',
            description: 'Collaborate with Account team for new client goals. Share ad performance data with Creative team and work with SEO/Automation teams.',
            duration: '20 min',
            isCompleted: false,
            type: 'video'
          },
          {
            id: 'pm_m7',
            title: 'AI & Automation Integration',
            description: 'Use AI tools (ChatGPT, AdCreative.ai) for ad copy and creative suggestions. Leverage Meta Advantage+ and automate reporting dashboards.',
            duration: '20 min',
            isCompleted: false,
            type: 'video'
          },
        ]
      },
      {
        id: 's4',
        title: 'Client Relations',
        modules: [
          {
            id: 'pm_m8',
            title: 'Client Updates & Escalations',
            description: 'Share ad highlights and reports with Account team weekly. Flag campaign issues proactively and ensure transparent communication.',
            duration: '20 min',
            isCompleted: false,
            type: 'video'
          },
        ]
      },
      {
        id: 's5',
        title: 'Process & SOPs',
        modules: [
          {
            id: 'pm_m9',
            title: 'Process & SOP Adherence',
            description: 'Follow performance SOP for campaign setup, optimization, and reporting. Update trackers daily and submit campaign audit forms.',
            duration: '20 min',
            isCompleted: false,
            type: 'video'
          },
          {
            id: 'pm_m10',
            title: 'Knowledge Transfer & Handover',
            description: 'Follow KT template. Document pending tasks, red alerts, and update trackers. Ensure smooth continuity during leaves.',
            duration: '16 min',
            isCompleted: false,
            type: 'video'
          },
        ]
      },
      {
        id: 's6',
        title: 'Advanced Strategy',
        modules: [
          {
            id: 'pm_m11',
            title: 'Conversion Tracking & LP Mgmt',
            description: 'Verify pixels, tracking events, and UTM parameters. Run test leads and monitor landing page speed and UX.',
            duration: '25 min',
            isCompleted: false,
            type: 'video'
          },
          {
            id: 'pm_m12',
            title: 'Audience, Keyword & Creative Strategy',
            description: 'Develop keyword and audience clusters. Monitor fatigue, test creatives, and study competitors. Build ongoing strategy.',
            duration: '25 min',
            isCompleted: false,
            type: 'video'
          },
        ]
      },
      {
        id: 's7',
        title: 'Onboarding & Troubleshooting',
        modules: [
          {
            id: 'pm_m13',
            title: 'Onboarding & New Client Setup',
            description: 'Collect and verify all accesses. Create folder structures, audit previous performance, and prepare first-month blueprints.',
            duration: '25 min',
            isCompleted: false,
            type: 'video'
          },
          {
            id: 'pm_m14',
            title: 'Tools, Diagnostics & Troubleshooting',
            description: 'Use platform diagnostics and debug tools (GTM, GA4, Pixel Helper) to identify root causes of performance issues.',
            duration: '24 min',
            isCompleted: false,
            type: 'video'
          },
          {
            id: 'pm_m15',
            title: 'Red Alert Detection & Recovery',
            description: 'Identify major drops fast. Systematic diagnosis of delivery, creative, budget, and tracking. Create and execute recovery plans.',
            duration: '25 min',
            isCompleted: false,
            type: 'video'
          },
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
  'q_m11': {
    id: 'q_m11',
    title: 'Calendar Creation Assessment',
    moduleId: 'm11',
    totalQuestions: 3,
    timeLimit: '10:00',
    passingScore: 70,
    questions: [
      { id: 'q1', text: 'What is a key takeaway from Calendar Creation?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctOptionIndex: 0 },
      { id: 'q2', text: 'Why is Calendar Creation important?', options: ['Reason A', 'Reason B', 'Reason C', 'Reason D'], correctOptionIndex: 0 },
      { id: 'q3', text: 'How do you apply Calendar Creation?', options: ['Method A', 'Method B', 'Method C', 'Method D'], correctOptionIndex: 0 },
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
    title: 'Campaign Setup & Planning Assessment',
    moduleId: 'pm_m1',
    totalQuestions: 10,
    timeLimit: '18:00',
    questions: [
      { id: 'q1', text: 'What is the first step in campaign setup?', options: ['Launching ads', 'Understanding goals', 'Writing copy', 'Uploading creatives'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Naming conventions help with:', options: ['Confusion', 'Clear structure', 'Hiding details', 'Randomness'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Keyword research is required for:', options: ['Meta only', 'Google Search', 'Instagram Stories', 'Email'], correctOptionIndex: 1 },
      { id: 'q4', text: 'UTMs track:', options: ['Fonts', 'Source/performance', 'Competitors', 'Emails'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Landing page must be:', options: ['Slow', 'Confusing', 'Fast & clear', 'Hidden'], correctOptionIndex: 2 },
      { id: 'q6', text: 'Pixel ensures:', options: ['Creative quality', 'Conversion tracking', 'Budget increase', 'Trend accuracy'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Who provides assets?', options: ['Performance', 'Creative', 'Sales', 'Security'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Test leads checked in:', options: ['CRM + sheet', 'Canva', 'WhatsApp', 'Email'], correctOptionIndex: 0 },
      { id: 'q9', text: 'Audience research helps:', options: ['Music selection', 'Targeting accuracy', 'Color palette', 'Budget approval'], correctOptionIndex: 1 },
      { id: 'q10', text: 'Onboarding SOP ensures:', options: ['Waste', 'Readiness', 'High cost', 'Delay'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m2': {
    id: 'q_pm_m2',
    title: 'Ad Launch & Quality Check Assessment',
    moduleId: 'pm_m2',
    totalQuestions: 10,
    timeLimit: '18:00',
    questions: [
      { id: 'q1', text: 'What is the purpose of QC?', options: ['Delay launch', 'Avoid expensive mistakes', 'Confuse team', 'Slow down work'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Tracking must be checked before launch:', options: ['Never', 'Only sometimes', 'Always', 'After launch'], correctOptionIndex: 2 },
      { id: 'q3', text: 'Test leads must reflect in:', options: ['CRM + lead sheet', 'WhatsApp', 'Canva', 'Email only'], correctOptionIndex: 0 },
      { id: 'q4', text: 'Landing page must be checked for:', options: ['Speed & CTA', 'Font size only', 'Colors only', 'Nothing'], correctOptionIndex: 0 },
      { id: 'q5', text: 'Ads must not be launched without:', options: ['Client approval', 'QC approval', 'Random approval', 'Designer approval'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Incorrect UTMs cause:', options: ['Better tracking', 'Broken analytics', 'Higher leads', 'Faster delivery'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Naming conventions must be:', options: ['Optional', 'Followed strictly', 'Random', 'Stylish'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Final preview check ensures:', options: ['Correct copy and visuals', 'Fast spending', 'More impressions', 'CTR drop'], correctOptionIndex: 0 },
      { id: 'q9', text: 'Missing pixel events lead to:', options: ['Cheaper CPL', 'No conversion tracking', 'Fast approvals', 'Better ROAS'], correctOptionIndex: 1 },
      { id: 'q10', text: 'LP broken on mobile → next step?', options: ['Launch anyway', 'Fix immediately', 'Ignore', 'Increase budget'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m3': {
    id: 'q_pm_m3',
    title: 'Campaign Optimization Assessment',
    moduleId: 'pm_m3',
    totalQuestions: 10,
    timeLimit: '18:00',
    questions: [
      { id: 'q1', text: 'What is the goal of daily optimization?', options: ['Random testing', 'Improve performance and maintain control', 'Spend budgets faster', 'Avoid changes'], correctOptionIndex: 1 },
      { id: 'q2', text: 'High CPL ads should be:', options: ['Ignored', 'Switched off or fixed', 'Boosted', 'Left running'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Negative keywords are used to:', options: ['Increase cost', 'Block irrelevant searches', 'Reduce impressions', 'Track UTMs'], correctOptionIndex: 1 },
      { id: 'q4', text: 'A weak creative should be:', options: ['Removed or replaced', 'Ignored', 'Used more', 'Hidden'], correctOptionIndex: 0 },
      { id: 'q5', text: 'Lead quality checks must be done:', options: ['Never', 'Only monthly', 'Regularly using CRM', 'Only after complaints'], correctOptionIndex: 2 },
      { id: 'q6', text: 'Bid adjustments help with:', options: ['Impressions and cost control', 'Creative quality', 'Landing page design', 'CRM setup'], correctOptionIndex: 0 },
      { id: 'q7', text: 'Daily updates must be:', options: ['Avoided', 'Logged in tracker', 'Sent randomly', 'Skipped'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Optimization decisions should be based on:', options: ['Guessing', 'Data and trends', 'Opinions', 'Visuals only'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Daily coordination with AM is needed for:', options: ['No reason', 'Smooth execution', 'Approvals only', 'Design fixes'], correctOptionIndex: 1 },
      { id: 'q10', text: 'If CPL spikes suddenly:', options: ['Ignore', 'Act immediately', 'Wait a week', 'Ask designer'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m4': {
    id: 'q_pm_m4',
    title: 'Budget Monitoring Assessment',
    moduleId: 'pm_m4',
    totalQuestions: 10,
    timeLimit: '18:00',
    questions: [
      { id: 'q1', text: 'What is the purpose of pacing?', options: ['Spend randomly', 'Ensure budgets last the entire month', 'Increase CPL', 'Reduce impressions'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Overspending requires:', options: ['Higher budgets', 'Reducing bids or pausing poor segments', 'Ignoring', 'Posting more stories'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Underspending requires:', options: ['Doing nothing', 'Expanding audiences or increasing bids', 'Deleting campaigns', 'Lowering LP speed'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Reallocating budget helps:', options: ['Waste money', 'Boost strong performers', 'Increase load time', 'Reduce leads'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Red-alert means:', options: ['Low CPC', 'CPL spike or delivery issues', 'Many comments', 'Too many creatives'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Daily budget logs must be:', options: ['Optional', 'Recorded in tracker', 'Sent to designer', 'Hidden'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Weekly pacing checks prevent:', options: ['Overthinking', 'Last-minute spending problems', 'More work', 'Client meetings'], correctOptionIndex: 1 },
      { id: 'q8', text: 'If pacing is too slow:', options: ['Reduce bids', 'Increase bids or audiences', 'Pause all ads', 'Ask designer'], correctOptionIndex: 1 },
      { id: 'q9', text: 'If one ad set is over-consuming:', options: ['Pause or limit it', 'Boost it', 'Let it run', 'Duplicate everything'], correctOptionIndex: 0 },
      { id: 'q10', text: 'Budget monitoring ensures:', options: ['Wasteful spend', 'Efficient use of ad money', 'Designer happiness', 'More meetings'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m5': {
    id: 'q_pm_m5',
    title: 'Reporting & Analysis Assessment',
    moduleId: 'pm_m5',
    totalQuestions: 10,
    timeLimit: '18:00',
    questions: [
      { id: 'q1', text: 'Reporting converts:', options: ['Numbers into clarity', 'Clarity into confusion', 'Ads into designs', 'Creatives into scripts'], correctOptionIndex: 0 },
      { id: 'q2', text: 'Daily dashboards require:', options: ['Guessing', 'Accurate CPL, spend, and tracking', 'Only CTR', 'Only impressions'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Weekly reports should highlight:', options: ['Only wins', 'Trends and insights', 'Only CPC', 'Only reach'], correctOptionIndex: 1 },
      { id: 'q4', text: 'GA4 helps you understand:', options: ['Fonts', 'Landing page behaviour', 'Ad colors', 'Creative size'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Clarity shows:', options: ['Scroll and click behaviour', 'Ad approval times', 'Budget errors', 'Video lengths'], correctOptionIndex: 0 },
      { id: 'q6', text: 'Monthly reports include:', options: ['Screenshots only', 'Winners, losers, insights, next steps', 'Only CPL', 'Only creative names'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Creative fatigue shows when:', options: ['CTR increases', 'CTR drops and CPL rises', 'CPC becomes zero', 'LP traffic becomes high'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Keyword insights help you:', options: ['Improve creative design', 'Refine search strategy', 'Change LP color', 'Write emails'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Good reporting leads to:', options: ['Wrong targeting', 'Better strategy and decisions', 'Confusion', 'Higher lead cost'], correctOptionIndex: 1 },
      { id: 'q10', text: 'Missing tracking in report means:', options: ['Minor issue', 'Entire data is unreliable', 'Good news', 'Does not matter'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m6': {
    id: 'q_pm_m6',
    title: 'Cross-Team Coordination Assessment',
    moduleId: 'pm_m6',
    totalQuestions: 10,
    timeLimit: '15:00',
    questions: [
      { id: 'q1', text: 'Cross-team coordination helps:', options: ['Reduce clarity', 'Improve execution speed', 'Block communication', 'Increase CPL'], correctOptionIndex: 1 },
      { id: 'q2', text: 'AMs must be updated because:', options: ['They talk to clients', 'They manage reporting', 'They align expectations', 'All of the above'], correctOptionIndex: 3 },
      { id: 'q3', text: 'Creative fatigue requires:', options: ['Ignoring', 'Immediate new creatives', 'Pausing all ads', 'Reducing CPC'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Web/Landing team helps with:', options: ['Video editing', 'CRO and form fixes', 'Lead sheet updates', 'UTM writing'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Automation team fixes:', options: ['Designs', 'CRM + Pabbly issues', 'Copywriting', 'SEO'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Weekly coordination meeting is for:', options: ['Food menu', 'Account-level insights', 'Ad approvals', 'Music choices'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Not coordinating with Creative can cause:', options: ['Lower CTR', 'Higher CPL', 'Delayed launches', 'All of the above'], correctOptionIndex: 3 },
      { id: 'q8', text: 'AM update frequency must be:', options: ['Weekly', 'Daily', 'Monthly', 'Random'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Duplicate leads usually mean:', options: ['Pixel issue', 'CRM/Pabbly error', 'Creative error', 'SEO problem'], correctOptionIndex: 1 },
      { id: 'q10', text: 'If LP tracking breaks:', options: ['Ignore', 'Fix with Web + Automation teams', 'Reduce budget only', 'Pause GMB'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m7': {
    id: 'q_pm_m7',
    title: 'AI & Automation Integration Assessment',
    moduleId: 'pm_m7',
    totalQuestions: 10,
    timeLimit: '15:00',
    questions: [
      { id: 'q1', text: 'AI helps you:', options: ['Slow work', 'Speed up and improve accuracy', 'Replace team', 'Reduce tracking'], correctOptionIndex: 1 },
      { id: 'q2', text: 'AI should be used for:', options: ['Copy drafts', 'Audience research', 'Competitor analysis', 'All of the above'], correctOptionIndex: 3 },
      { id: 'q3', text: 'Meta Advantage+ and Google automation improve:', options: ['Delivery and performance', 'Video quality', 'Website design', 'Colour palette'], correctOptionIndex: 0 },
      { id: 'q4', text: 'AI dashboards help with:', options: ['Screenshots', 'Summaries & anomaly detection', 'Fonts', 'Story posting'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Automating tracking prevents:', options: ['Mistakes', 'Fast loading', 'Extra meetings', 'Low impressions'], correctOptionIndex: 0 },
      { id: 'q6', text: 'AI experiments must be:', options: ['Random', 'Logged for learning', 'Hidden', 'Avoided'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Broad match with smart bidding works best when:', options: ['No data is available', 'Enough conversion data exists', 'You guess keywords', 'Competitors run TV ads'], correctOptionIndex: 1 },
      { id: 'q8', text: 'AI-based alerts help you identify:', options: ['CPL spikes', 'Food ordering', 'Colour mismatch', 'Designer workload'], correctOptionIndex: 0 },
      { id: 'q9', text: 'Automation tools include:', options: ['Pabbly', 'Zapier', 'Make', 'All'], correctOptionIndex: 3 },
      { id: 'q10', text: 'AI should:', options: ['Replace humans', 'Assist strategy', 'Remove reporting', 'Replace design'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m8': {
    id: 'q_pm_m8',
    title: 'Client Updates & Escalations Assessment',
    moduleId: 'pm_m8',
    totalQuestions: 10,
    timeLimit: '15:00',
    questions: [
      { id: 'q1', text: 'Performance specialist must update:', options: ['Designer', 'Account Manager', 'SEO', 'Only client'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Red alerts include:', options: ['CTR increase', 'CPL spike or under-delivery', 'Good leads', 'High impressions'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Updates must be:', options: ['Random', 'Proactive', 'Only monthly', 'Hidden'], correctOptionIndex: 1 },
      { id: 'q4', text: 'AM needs data to:', options: ['Create designs', 'Handle client calls', 'Write blogs', 'Manage SEO'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Performance drops must be:', options: ['Hidden', 'Explained with data', 'Ignored', 'Celebrated'], correctOptionIndex: 1 },
      { id: 'q6', text: 'A recovery plan includes:', options: ['New audiences', 'New creatives', 'Bid changes', 'All of the above'], correctOptionIndex: 3 },
      { id: 'q7', text: 'Lead quality drops mean:', options: ['Pause all ads', 'Check CRM + adjust targeting', 'Change colours', 'Email support'], correctOptionIndex: 1 },
      { id: 'q8', text: 'If tracking breaks:', options: ['Run ads', 'Fix immediately', 'Ignore', 'Lower budgets'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Updates help AM:', options: ['Lose trust', 'Align expectations with client', 'Delay work', 'Rebrand'], correctOptionIndex: 1 },
      { id: 'q10', text: 'Hiding issues leads to:', options: ['Bigger escalations', 'Better CPL', 'Happy clients', 'Higher CTR'], correctOptionIndex: 0 },
    ],
  },
  'q_pm_m9': {
    id: 'q_pm_m9',
    title: 'Process & SOP Adherence Assessment',
    moduleId: 'pm_m9',
    totalQuestions: 10,
    timeLimit: '15:00',
    questions: [
      { id: 'q1', text: 'SOPs exist to:', options: ['Confuse', 'Create consistency', 'Delay work', 'Reduce performance'], correctOptionIndex: 1 },
      { id: 'q2', text: 'Naming conventions must be:', options: ['Optional', 'Strictly followed', 'Hidden', 'Random'], correctOptionIndex: 1 },
      { id: 'q3', text: 'Documentation must include:', options: ['All changes', 'Only wins', 'Only budgets', 'Nothing'], correctOptionIndex: 0 },
      { id: 'q4', text: 'QC checklist is used:', options: ['After launch', 'Before launch', 'Never', 'Only for Meta'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Tracking SOP ensures:', options: ['Wrong data', 'Correct conversions', 'Creative quality', 'More impressions'], correctOptionIndex: 1 },
      { id: 'q6', text: 'Audit reports help with:', options: ['Food orders', 'Identifying issues', 'Social media trends', 'Budget approval'], correctOptionIndex: 1 },
      { id: 'q7', text: 'SOP adherence prevents:', options: ['Scaling', 'Mistakes', 'CPC rise', 'Traffic drop'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Escalation SOP requires:', options: ['Hiding issues', 'Root cause + action plan', 'Blaming designer', 'Pausing everything'], correctOptionIndex: 1 },
      { id: 'q9', text: 'Tracker updates must be:', options: ['Daily', 'Weekly', 'Monthly', 'Optional'], correctOptionIndex: 0 },
      { id: 'q10', text: 'Good SOP discipline leads to:', options: ['Chaos', 'Smooth operations', 'More mistakes', 'Delays'], correctOptionIndex: 1 },
    ],
  },
  'q_pm_m10': {
    id: 'q_pm_m10',
    title: 'Knowledge Transfer & Handover Assessment',
    moduleId: 'pm_m10',
    totalQuestions: 10,
    timeLimit: '12:00',
    questions: [
      { id: 'q1', text: 'KT is required:', options: ['Only sometimes', 'Before every leave', 'Only monthly', 'During vacations only'], correctOptionIndex: 1 },
      { id: 'q2', text: 'KT template must include:', options: ['Client details', 'Pending tasks', 'Red-alert items', 'All of the above'], correctOptionIndex: 3 },
      { id: 'q3', text: 'KT ensures:', options: ['Work stops', 'Smooth continuity', 'Higher CPL', 'More escalations'], correctOptionIndex: 1 },
      { id: 'q4', text: 'Access must be:', options: ['Ignored', 'Confirmed and shared', 'Removed', 'Skipped'], correctOptionIndex: 1 },
      { id: 'q5', text: 'Pending tasks must be:', options: ['Hidden', 'Clearly documented', 'Deleted', 'Delayed'], correctOptionIndex: 1 },
      { id: 'q6', text: 'For unplanned leave:', options: ['No KT needed', 'Minimal KT must be shared', 'Delete everything', 'Pause all ads'], correctOptionIndex: 1 },
      { id: 'q7', text: 'Walkthrough is for:', options: ['Confusing others', 'Ensuring replacement understands work', 'Showing designs', 'Updating AM'], correctOptionIndex: 1 },
      { id: 'q8', text: 'Screenshot or Loom videos help with:', options: ['Complex setups', 'Stories on Instagram', 'Competitor ads', 'Naming conventions'], correctOptionIndex: 0 },
      { id: 'q9', text: 'Updated trackers help prevent:', options: ['Clarity', 'Missed tasks', 'Smooth performance', 'Automatic scaling'], correctOptionIndex: 1 },
      { id: 'q10', text: 'Clean KT leads to:', options: ['Fewer errors', 'More escalations', 'Lower trust', 'Random work'], correctOptionIndex: 0 },
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