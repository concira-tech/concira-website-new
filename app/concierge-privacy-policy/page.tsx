"use client";
import { motion } from "framer-motion";

const section = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const SectionHeading = ({ num, title }: { num: string; title: string }) => (
  <h2 className="text-xl sm:text-2xl font-bold text-white mb-5 flex items-baseline gap-3 flex-wrap">
    <span className="text-primary font-mono text-base sm:text-lg shrink-0">{num}.</span>
    {title}
  </h2>
);

const Sub = ({ title }: { title: string }) => (
  <h3 className="text-lg font-semibold text-white mt-6 mb-2">{title}</h3>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const BorderList = ({ items }: { items: [string, string][] }) => (
  <ul className="space-y-3">
    {items.map(([term, desc]) => (
      <li key={term} className="pl-4 border-l border-zinc-800">
        <span className="font-semibold text-white">{term}</span>{" "}
        <span className="text-zinc-400">{desc}</span>
      </li>
    ))}
  </ul>
);

export default function ConciergePrivacyPolicyPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-24">

        {/* Header */}
        <motion.div {...section()} className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-1">
            Concira Concierge
          </h1>
          <p className="text-zinc-500 text-lg mb-4">Your Personal AI Life Assistant</p>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
            <span><span className="text-zinc-400 font-medium">Last Updated:</span> May 2026</span>
            <span><span className="text-zinc-400 font-medium">Effective Date:</span> May 2026</span>
          </div>
        </motion.div>

        <div className="space-y-14 text-zinc-400 leading-relaxed">

          {/* Intro */}
          <motion.section {...section(0.1)}>
            <p>
              Concira Concierge ("the App", "we", "us", "our") is developed by Concira Tech,
              headquartered in Mumbai, India. This Privacy Policy explains how we collect, use,
              store, protect, and share your personal information when you use our mobile
              application.
            </p>
            <p className="mt-4">
              By using Concira Concierge, you acknowledge that you have read and understood this
              Privacy Policy and agree to the practices described.
            </p>
          </motion.section>

          {/* Summary */}
          <motion.section {...section(0.1)}>
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 space-y-3">
              <h2 className="text-lg font-bold text-primary uppercase tracking-wider">Summary</h2>
              <p>
                Concira Concierge stores your data on your device AND backs it up to Google
                Firebase under your authenticated account so you can restore it on a new device. We
                do not operate our own servers — all cloud storage uses Google's Firebase
                infrastructure.
              </p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span> We do not sell your data.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span> We do not display advertisements.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span> You can delete your account and
                  all associated data at any time from within the App.
                </li>
              </ul>
            </div>
          </motion.section>

          {/* 1. Information We Collect */}
          <motion.section {...section(0.1)}>
            <SectionHeading num="1" title="Information We Collect" />

            <Sub title="1.1 Account Information" />
            <BulletList items={[
              "Email address, name, and profile photo from your Google or Apple Sign-In account",
              "A unique Firebase user ID",
            ]} />

            <Sub title="1.2 Information You Provide" />
            <BulletList items={[
              "Name, age, gender (during onboarding)",
              "Lifestyle preferences (fitness goal, dietary preference, cuisine, language, sports, hobbies, music)",
              "Voice assistant responses captured during the optional psychometric assessment",
              "Meal logs, workout sessions, water intake, mood check-ins (logged manually)",
              "Grocery lists you create",
              "Birthday reminders and contacts you save manually",
              "Manually-added bills and subscriptions",
              "Voice input for the AI assistant (transcribed to text on-device; raw audio is never stored or transmitted)",
            ]} />

            <Sub title="1.3 Information from Google Account (Optional, Read-Only)" />
            <p className="mb-4">
              If you choose to connect your Google account, we request the following read-only
              OAuth scopes:
            </p>
            <div className="space-y-3">
              {[
                {
                  scope: "Google Calendar (calendar.readonly)",
                  desc: "Event titles, times, and availability blocks for schedule-aware suggestions.",
                },
                {
                  scope: "Gmail (gmail.readonly)",
                  desc: "We process only the SUBJECT LINE, SENDER, and SHORT PREVIEW SNIPPET of emails from food delivery, travel bookings, shopping receipts, and subscription receipt categories. We do NOT read full email bodies. We do NOT access personal correspondence, work emails, banking statements, or sensitive content.",
                },
                {
                  scope: "Google Contacts (contacts.readonly)",
                  desc: "Names and birthday dates of your contacts. Phone numbers are accessed only on-device to generate WhatsApp wish links; phone numbers are NOT uploaded anywhere.",
                },
                {
                  scope: "Google Tasks (tasks.readonly)",
                  desc: "Task titles and due dates.",
                },
                {
                  scope: "Health Connect (fitness.activity.read, fitness.sleep.read)",
                  desc: "Step count, sleep duration, and workout sessions via Android Health Connect API. On iOS, equivalent data is read via Apple HealthKit.",
                },
              ].map((item) => (
                <div key={item.scope} className="rounded-lg bg-zinc-900 border border-zinc-800 p-4">
                  <p className="font-semibold text-white text-sm mb-1">{item.scope}</p>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <Sub title="1.4 Device Information" />
            <BulletList items={[
              "Approximate location (GPS or IP-based, your choice) for local weather and nearby restaurant suggestions",
              "Microphone audio (processed in real-time for voice assistant; never recorded, stored, or transmitted as audio — only the transcribed text is used)",
              "Device timezone",
              "App usage events (which screens you open, which features you use) for in-app personalization only — not shared with third parties",
            ]} />

            <Sub title="1.5 Information NOT Collected" />
            <p className="mb-3">We do not collect:</p>
            <div className="rounded-lg bg-zinc-900 border border-zinc-800 p-4">
              <p className="text-sm text-zinc-400">
                Phone contacts' full details, SMS messages, photos or media files, full email
                content, banking or financial data, payment instruments or credit/debit card
                information, your physical address, biometric data (fingerprints, face scans,
                voiceprints), or any data we don't explicitly list in this policy.
              </p>
            </div>
          </motion.section>

          {/* 2. How We Use */}
          <motion.section {...section(0.1)}>
            <SectionHeading num="2" title="How We Use Your Information" />
            <p className="mb-3">We use your information to:</p>
            <BulletList items={[
              "Authenticate you across devices using Google or Apple Sign-In",
              "Generate personalized daily cards (meals, workouts, schedule, reminders)",
              "Detect behavior patterns (typical meal times, workout frequency, recurring spend)",
              "Provide AI-generated suggestions and voice assistant responses",
              "Display local weather, calendar events, and pending tasks in your feed",
              "Track nutrition, fitness, hydration, and mood progress over time",
              "Back up your data so you can restore it after reinstalling the app or switching devices",
              "Send local reminders (e.g. “Netflix renews in 2 days”) via Android/iOS notifications",
            ]} />

            <p className="mt-6 mb-3">We do NOT use your information to:</p>
            <div className="rounded-lg bg-zinc-900 border border-zinc-800 p-4 space-y-2">
              {[
                "Display advertisements of any kind",
                "Sell, rent, or trade your data to any third party",
                "Build advertising profiles or target you with marketing",
                "Train generalized AI or machine learning models",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 3. Cloud Storage */}
          <motion.section {...section(0.1)}>
            <SectionHeading num="3" title="Cloud Storage & Data Backup" />
            <p>Your data is stored in two places:</p>

            <Sub title="3.1 On Your Device (Primary)" />
            <p>
              Stored using Hive (encrypted local database) and SharedPreferences. This is the
              active source your app reads from. Data includes activity history, meal logs,
              workout sessions, patterns, Google data cache, manually-added bills, and app
              settings.
            </p>

            <Sub title="3.2 Google Firebase (Backup)" />
            <p>
              When you are signed in, we automatically mirror your data to Google Cloud Firestore
              under your authenticated Firebase user account. The Firebase backup contains:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1 text-zinc-400">
              <li>Your user profile (name, age, preferences)</li>
              <li>Meal logs, workout sessions, mood check-ins, daily check-ins</li>
              <li>Activity history and learned behavior patterns</li>
              <li>Question responses and psychometric assessment results</li>
              <li>Manually-added bills and grocery lists</li>
              <li>Order history records</li>
            </ul>

            <div className="mt-4 rounded-lg bg-zinc-900 border border-zinc-800 p-4">
              <p className="font-semibold text-white text-sm mb-2">Not backed up to Firebase (kept on-device only):</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-400">
                <li>App usage events (screen analytics, feature usage)</li>
                <li>Cached Google data (refreshed on app open)</li>
                <li>Hydration counter</li>
                <li>Weather cache</li>
              </ul>
            </div>
            <p className="mt-4">
              Your Firebase data is stored in a private collection accessible only to you,
              enforced by Firestore security rules using your Firebase authentication token.
            </p>
          </motion.section>

          {/* 4. Third-Party Services */}
          <motion.section {...section(0.1)}>
            <SectionHeading num="4" title="Third-Party Services" />
            <p className="mb-6">
              The App integrates with the following third-party services to provide core
              functionality. Each is bound by its own privacy policy.
            </p>
            <div className="space-y-4">
              {[
                {
                  name: "4.1 Google Firebase",
                  operator: "Google LLC",
                  purpose: "Account authentication, encrypted cloud backup, push notifications. Push notifications are used only for bill reminders, daily wellness nudges, and app-related updates — never for marketing or third-party promotions.",
                  data: "Your account email, Firebase user ID, and all data items listed in section 3.2.",
                  policy: "https://firebase.google.com/support/privacy",
                },
                {
                  name: "4.2 Apple Sign-In",
                  operator: "Apple Inc.",
                  purpose: "iOS authentication.",
                  data: "Apple ID, optional email, optional name (only at first sign-in).",
                  policy: "https://www.apple.com/legal/privacy/",
                },
                {
                  name: "4.3 Google Gemini AI",
                  operator: "Google LLC",
                  purpose: "Generating personalized card content, meal suggestions, and voice assistant responses.",
                  data: "Summarized daily context only (e.g., \"User logged 2 meals totaling 1,400 kcal, has a 6 PM workout planned, weather is 28°C\"). No raw emails, passwords, payment data, or personally identifiable information is sent. No data is used to train Google's models per their enterprise API terms.",
                  policy: "https://ai.google.dev/gemini-api/terms",
                },
                {
                  name: "4.4 ElevenLabs",
                  operator: "ElevenLabs Inc.",
                  purpose: "Text-to-speech for natural-sounding voice output.",
                  data: "Text content of voice assistant replies only — no personal identifiers, no user voice data. User voice is never sent to ElevenLabs.",
                  policy: "https://elevenlabs.io/privacy",
                },
                {
                  name: "4.5 OpenWeatherMap",
                  operator: "OpenWeather Ltd.",
                  purpose: "Retrieving current weather data.",
                  data: "Your GPS coordinates or approximate IP-derived location.",
                  policy: "https://openweather.co.uk/privacy-policy",
                },
                {
                  name: "4.6 Google APIs",
                  operator: "Google LLC",
                  purpose: "Read-only access to Calendar, Gmail, Contacts, Tasks, and Health Connect data as described in section 1.3.",
                  data: "OAuth access tokens.",
                  policy: "https://policies.google.com/privacy",
                },
                {
                  name: "4.7 Clearbit Logo API",
                  operator: "Clearbit (HubSpot) Inc.",
                  purpose: "Fetching brand logos for the Bills screen. No user data is sent.",
                  data: "Public brand domain names only (e.g. \"netflix.com\").",
                  policy: "https://clearbit.com/privacy-policy",
                },
              ].map((svc) => (
                <div key={svc.name} className="rounded-xl bg-zinc-900 border border-zinc-800 p-5 space-y-2">
                  <p className="font-bold text-white">{svc.name}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-x-4 gap-y-1 text-sm">
                    <span className="text-zinc-500">Operator</span>
                    <span>{svc.operator}</span>
                    <span className="text-zinc-500">Data shared</span>
                    <span>{svc.data}</span>
                    <span className="text-zinc-500">Purpose</span>
                    <span>{svc.purpose}</span>
                    <span className="text-zinc-500">Policy</span>
                    <a
                      href={svc.policy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors break-all"
                    >
                      {svc.policy}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm rounded-lg bg-zinc-900 border border-zinc-800 p-4">
              We do NOT sell, trade, rent, or share your personal information with advertisers,
              data brokers, or any third party other than the service providers listed above.
            </p>
          </motion.section>

          {/* 5. Google API Policy */}
          <motion.section {...section(0.1)}>
            <SectionHeading num="5" title="Google API Services User Data Policy" />
            <p className="mb-4">
              Concira Concierge's use and transfer of information received from Google APIs to any
              other app will adhere to the{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements.
            </p>
            <p className="mb-3">We commit to:</p>
            <BulletList items={[
              "Use Google user data only to provide or improve user-facing features visible in our app",
              "Not transfer Google user data to third parties except for security, compliance, or as approved by you",
              "Not use Google user data for advertising or to train generalized machine learning models",
              "Not allow humans to read Google user data unless required by law, with your explicit consent, or for security purposes",
            ]} />
          </motion.section>

          {/* 6. Android Permissions */}
          <motion.section {...section(0.1)}>
            <SectionHeading num="6" title="Android Permissions Used" />
            <p className="mb-5">
              The App requests the following Android permissions. Each permission is used solely
              for the purpose described below and can be denied or revoked at any time from your
              device settings.
            </p>
            <div className="overflow-x-auto rounded-xl border border-zinc-800">
              <table className="w-full text-sm min-w-[540px]">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-800">
                    <th className="text-left px-4 py-3 text-white font-semibold">Permission</th>
                    <th className="text-left px-4 py-3 text-white font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["ACCESS_FINE_LOCATION / ACCESS_COARSE_LOCATION", "Local weather data and nearby restaurant suggestions"],
                    ["RECORD_AUDIO", "Voice input for the AI assistant (processed in real-time, never stored as audio)"],
                    ["INTERNET", "API calls to Firebase, Gemini AI, ElevenLabs, OpenWeatherMap, and Google APIs"],
                    ["POST_NOTIFICATIONS", "Bill reminders, daily wellness nudges, and app updates"],
                    ["RECEIVE_BOOT_COMPLETED", "Restart scheduled reminders after device reboot"],
                    ["FOREGROUND_SERVICE", "Maintain voice assistant session while app is in use"],
                    ["HEALTH_CONNECT permissions", "Read step count, sleep, and workout data via Health Connect"],
                  ].map(([perm, purpose], i) => (
                    <tr
                      key={perm}
                      className={`border-b border-zinc-800 last:border-0 ${i % 2 === 0 ? "bg-black" : "bg-zinc-900/40"}`}
                    >
                      <td className="px-4 py-3 font-mono text-xs text-primary align-top">{perm}</td>
                      <td className="px-4 py-3 text-zinc-400 align-top">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm">
              <span className="font-semibold text-white">Permissions NOT requested:</span> We do
              not request access to your SMS, call logs, camera, storage (beyond app-specific
              directories), or contacts list (contacts are accessed via Google Contacts API with
              your explicit OAuth consent, not via the device permission).
            </p>
            <p className="mt-3 text-sm">
              On iOS, equivalent permissions (Location Services, Microphone, Notifications,
              HealthKit) are requested with purpose descriptions shown at the time of the prompt.
            </p>
          </motion.section>

          {/* 7. Notification Listener */}
          <motion.section {...section(0.1)}>
            <SectionHeading num="7" title="Notification Listener / Accessibility Services Disclosure" />
            <p className="mb-4">
              Concira Concierge uses Android's{" "}
              <span className="font-semibold text-white">Notification Listener Service</span> to
              read notifications from food delivery apps (Swiggy, Zomato) for the sole purpose of
              automatically capturing order details (restaurant name, items, total amount) into
              your order history.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ["Optional", "You must explicitly grant notification access in Settings"],
                ["Limited", "We only read notifications from explicitly whitelisted delivery apps"],
                ["Private", "Captured order data is stored on-device and in your private Firebase backup only"],
                ["Not shared", "No notification content is sent to any third party"],
              ].map(([label, desc]) => (
                <div key={label} className="rounded-lg bg-zinc-900 border border-zinc-800 p-4">
                  <p className="font-semibold text-primary text-sm mb-1">{label}</p>
                  <p className="text-sm text-zinc-400">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              We do NOT use Android Accessibility Services. The notification listener is the only
              system-level service we use.
            </p>
          </motion.section>

          {/* 8. Data Security */}
          <motion.section {...section(0.1)}>
            <SectionHeading num="8" title="Data Security" />
            <p className="mb-3">We implement industry-standard security measures:</p>
            <BulletList items={[
              "All network communication uses HTTPS/TLS encryption",
              "Google and Apple authentication uses OAuth 2.0 with secure token storage",
              "Local data is stored in encrypted Hive boxes",
              "Firebase data is protected by Firestore Security Rules restricting access to your account only",
              "Voice audio is processed in real-time and never stored as recordings",
              "Firebase user authentication tokens are stored in platform-secure storage (Android Keystore, iOS Keychain)",
              "No sensitive data (passwords, payment instruments, banking information) is collected or stored",
            ]} />
            <p className="mt-4">
              Despite these measures, no method of transmission or storage is 100% secure. You
              acknowledge this inherent risk.
            </p>
          </motion.section>

          {/* 9. Data Retention */}
          <motion.section {...section(0.1)}>
            <SectionHeading num="9" title="Data Retention" />
            <BorderList items={[
              ["On-device data:", "Persists until you uninstall the app or use the \"Reset All Data\" option in Settings."],
              ["Firebase backup:", "Retained as long as your account exists. Deleted within 30 days of account deletion request."],
              ["Cached Google data:", "Refreshed on each app launch; older cached entries are overwritten automatically."],
              ["Notification-captured order data:", "Retained with your other on-device data; deleted on app uninstall or account deletion."],
            ]} />
          </motion.section>

          {/* 10. Your Choices */}
          <motion.section {...section(0.1)}>
            <SectionHeading num="10" title="Your Choices and Controls" />
            <div className="space-y-4">
              {[
                {
                  title: "10.1 Disconnect Google",
                  desc: "Settings → Manage Data Access → Disconnect. All cached Google data is deleted immediately from your device. Your Firebase backup remains.",
                },
                {
                  title: "10.2 Sign Out",
                  desc: "Settings → Sign Out. You will need to sign in again to access cloud-backed data. Local data remains until you uninstall.",
                },
                {
                  title: "10.3 Account Deletion",
                  desc: null,
                  extra: (
                    <div className="space-y-2 text-sm text-zinc-400">
                      <p>You can permanently delete your account and ALL associated data at any time:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><span className="font-semibold text-white">In-app:</span> Settings → Delete Account (the deletion flow is fully functional within the app)</li>
                        <li>
                          <span className="font-semibold text-white">By email:</span> Send a request to{" "}
                          <a href="mailto:contactus@concira.com" className="text-primary hover:text-primary/80 transition-colors">
                            contactus@concira.com
                          </a>{" "}
                          from your registered email address with the subject line "Data Deletion Request"
                        </li>
                      </ul>
                      <p className="mt-2">Account deletion removes:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>All your data from Firebase (deletion begins immediately; completed within 30 days)</li>
                        <li>Your Firebase Authentication user account</li>
                        <li>All locally cached data (cleared on next app launch or uninstall)</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  title: "10.4 Permission Controls",
                  desc: null,
                  extra: (
                    <ul className="space-y-1.5 text-sm text-zinc-400">
                      {[
                        ["Location", "Deny GPS — app falls back to IP-based weather. Some location-aware features become unavailable."],
                        ["Microphone", "Deny — use text input instead of voice for AI assistant."],
                        ["Notifications", "Deny — bill reminders and daily nudges will not fire."],
                        ["Notification Listener", "Deny or revoke — automatic order capture from delivery apps will be disabled; you can still log orders manually."],
                        ["Health Connect", "Deny — fitness and sleep data will not be imported; you can log workouts manually."],
                      ].map(([perm, effect]) => (
                        <li key={perm} className="flex gap-2">
                          <span className="font-semibold text-white shrink-0">{perm}:</span>
                          <span>{effect}</span>
                        </li>
                      ))}
                    </ul>
                  ),
                },
                {
                  title: "10.5 Right to Access",
                  desc: "You can request a copy of your stored data by emailing contactus@concira.com. We will respond within 30 days.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-zinc-900 border border-zinc-800 p-5">
                  <p className="font-semibold text-white mb-2">{item.title}</p>
                  {item.desc && <p className="text-sm text-zinc-400">{item.desc}</p>}
                  {item.extra && item.extra}
                </div>
              ))}
            </div>
          </motion.section>

          {/* 11. Advertisements */}
          <motion.section {...section(0.1)}>
            <SectionHeading num="11" title="Advertisements" />
            <p>
              Concira Concierge does not contain any advertisements. We do not display banner ads,
              interstitial ads, video ads, native ads, or any other form of advertising within the
              App. We do not integrate any advertising SDKs. We do not share your data with
              advertising networks.
            </p>
          </motion.section>

          {/* 12. Children's Privacy */}
          <motion.section {...section(0.1)}>
            <SectionHeading num="12" title="Children's Privacy" />
            <p>
              Concira Concierge is not intended for users under the age of 13 years, or the
              equivalent minimum age in your jurisdiction (for example, 18 years in India under the
              Digital Personal Data Protection Act, 2023). We do not knowingly collect personal
              information from children under the applicable minimum age.
            </p>
            <p className="mt-4">
              If you are a parent or guardian and believe your child has provided us with personal
              information, please contact{" "}
              <a
                href="mailto:contactus@concira.com"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                contactus@concira.com
              </a>{" "}
              and we will delete it promptly.
            </p>
          </motion.section>

          {/* 13. International Data Transfers */}
          <motion.section {...section(0.1)}>
            <SectionHeading num="13" title="International Data Transfers" />
            <p>
              Your data is stored in Google Firebase. Firebase data may be processed in data
              centers in multiple regions, including the United States. By using the App, you
              consent to the transfer of your information to countries that may have different data
              protection laws than your country of residence.
            </p>
            <p className="mt-4">
              Where required by applicable law, we rely on Google's data processing terms and
              standard contractual clauses to ensure adequate protection of your data during
              international transfers.
            </p>
          </motion.section>

          {/* 14. Your Rights */}
          <motion.section {...section(0.1)}>
            <SectionHeading num="14" title="Your Rights (Regional)" />
            <p className="mb-5">
              Depending on your location, you may have additional rights:
            </p>
            <div className="space-y-4">
              {[
                {
                  region: "GDPR — European Union & UK",
                  rights: "Right to access, rectification, erasure, restriction of processing, data portability, and objection. Contact contactus@concira.com to exercise these rights. We will respond within 30 days.",
                },
                {
                  region: "India — Digital Personal Data Protection Act, 2023",
                  rights: "Right to access, correction, erasure, grievance redressal, and nomination. Grievance officer contact: contactus@concira.com. We will acknowledge your request within 48 hours and resolve it within 30 days.",
                },
                {
                  region: "California — CCPA / CPRA",
                  rights: "Right to know, delete, opt out of sale (we never sell data), and non-discrimination. You may designate an authorized agent to make requests on your behalf.",
                },
              ].map((item) => (
                <div key={item.region} className="rounded-xl bg-zinc-900 border border-zinc-800 p-5">
                  <p className="font-semibold text-white mb-2">{item.region}</p>
                  <p className="text-sm text-zinc-400">{item.rights}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 15. Changes */}
          <motion.section {...section(0.1)}>
            <SectionHeading num="15" title="Changes to This Policy" />
            <p>
              We may update this Privacy Policy as we add features or as regulations change.
              Material changes will be communicated through:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1 text-zinc-400">
              <li>An in-app notice on next launch</li>
              <li>The "Last Updated" date at the top of this policy</li>
              <li>An email to your registered address for significant changes affecting your data rights</li>
            </ul>
            <p className="mt-4">
              Continued use of the App after changes constitutes acceptance of the updated policy.
              If you disagree with any changes, you may delete your account as described in section
              10.3.
            </p>
          </motion.section>

          {/* 16. Contact Us */}
          <motion.section {...section(0.1)}>
            <SectionHeading num="16" title="Contact Us" />
            <p className="mb-4">
              For questions about this Privacy Policy, your data, or to exercise your rights:
            </p>
            <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-6 space-y-3">
              <p className="text-sm">
                <span className="text-zinc-500">Email:</span>{" "}
                <a
                  href="mailto:contactus@concira.com"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  contactus@concira.com
                </a>
              </p>
              <p className="text-sm">
                <span className="text-zinc-500">Mail:</span>{" "}
                Concira Tech, Mumbai, Maharashtra, India
              </p>
              <p className="text-sm">
                <span className="text-zinc-500">Website:</span>{" "}
                <a
                  href="https://www.concira.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  www.concira.com
                </a>
              </p>
            </div>
            <p className="mt-4 text-sm">
              For data deletion requests, please write "Data Deletion Request" in the subject line
              so we can prioritize your request. We aim to respond to all inquiries within 30 days.
            </p>
          </motion.section>

          {/* Footer note */}
          <motion.div {...section(0.1)} className="border-t border-zinc-800 pt-8 text-center text-sm text-zinc-600">
            <p>
              By using Concira Concierge, you acknowledge that you have read and understood this
              Privacy Policy and consent to the practices described.
            </p>
            <p className="mt-2">© 2026 Concira Tech. All rights reserved.</p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
