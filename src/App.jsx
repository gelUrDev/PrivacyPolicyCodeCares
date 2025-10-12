import React from 'react'
import {
  Box,
  Container,
  Paper,
  Typography,
  Divider,
  Link,
} from '@mui/material'
import { COLORS, SHADOWS, SPACING } from './constants/design'
import { SITE } from './constants/site'

function Section({ title, children }) {
  return (
    <Box component="section" sx={{ mb: 4 }}>
      <Typography variant="h6" component="h2" sx={{ mb: 1.5, color: COLORS.secondary }}>
        {title}
      </Typography>
      <Typography variant="body1" color="text.primary" sx={{ lineHeight: 1.8 }}>
        {children}
      </Typography>
    </Box>
  )
}

export default function App() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: COLORS.background, py: 6 }}>
      <Container maxWidth="md">
        <Paper elevation={0} sx={{ p: 5, boxShadow: SHADOWS.card, backgroundColor: COLORS.white }}>
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography variant="overline" sx={{ color: COLORS.primary, letterSpacing: 2 }}>
              {SITE.name}
            </Typography>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 800, color: COLORS.text, mt: 0.5 }}>
              Privacy Policy
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Effective Date: {SITE.effectiveDate}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Section title="Introduction">
            {SITE.name} is a donation and fundraising platform facilitated by the Information Technology and Data Science Department of Bulacan State University – Sarmiento Campus (“BulSU-SC,” “we,” “us,” or “our”). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what we collect, how we use it, who we share it with, how we secure it, and your rights under applicable laws, including the Philippine Data Privacy Act of 2012 (DPA). By using {SITE.name}, you agree to the practices described here.
          </Section>

          <Section title="1) Information We Collect">
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 2 }}>Account and Profile</Typography>
            Full name, email address, phone number, school/department details (e.g., course, year and section), and optional profile information.
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 2 }}>Campaign and Content</Typography>
            Campaign title, description, target amount, category, images/videos you upload, and updates or comments you post. Campaign pages are public and visible to anyone.
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 2 }}>Identity/Eligibility Verification</Typography>
            Certificate of Registration (COR) and related documents you upload. If COR is uploaded as PDF, we may convert the first page to an image for reliable preview; both the original and the converted file may be stored.
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 2 }}>Donations and Transaction Records</Typography>
            Donation amount, currency, donor preferences (anonymous, amount hidden), time, reference identifiers, and status returned by the payment processor. We do not store your full payment instrument details (e.g., full card numbers); those are handled by the payment provider.
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 2 }}>Contact and OTP Verification</Typography>
            Email/phone used for OTP verification and the OTP code for a short time strictly to verify your identity or action.
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 2 }}>Usage and Device Data</Typography>
            IP address, browser type, device information, pages visited, and timestamps, used for security, diagnostics, and improving the platform.
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 2 }}>Logs</Typography>
            System and webhook logs (e.g., PayMongo webhook logs) for reconciliation, fraud monitoring, and support.
          </Section>

          <Section title="2) How We Use Your Information">
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 2 }}>Provide and improve the service:</Typography>
            Create/manage accounts, run campaigns, process donations, display donor lists (respecting anonymity/hide-amount settings), enable comments and updates, show media content reliably (including COR previews).
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 2 }}>Process payments:</Typography>
            Initiate and confirm payments via our payment partners (e.g., PayMongo/GCash). We store transaction metadata and results, not full payment details.
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 2 }}>Verify and protect:</Typography>
            OTP verification, eligibility checks (e.g., COR review), fraud prevention, abuse detection, security incident response, and enforcing terms.
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 2 }}>Communicate:</Typography>
            Send receipts, confirmations, service notices, and important updates. With consent where required, we may send service-related announcements.
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 2 }}>Comply with law and institutional requirements:</Typography>
            Accounting and audit records, legal process compliance, and required reports.
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>Legal bases (where applicable): your consent, performance of a contract (providing the service you requested), legitimate interests (security, service improvement, preventing fraud), and legal obligations.</Typography>
          </Section>

          <Section title="3) Public Visibility and Your Choices">
            Campaign pages are public. Information you publish (title, description, images/videos, updates, comments) may be seen, shared, or indexed by others.
            <Box component="ul" sx={{ mt: 1.5, pl: 3 }}>
              <li>
                <Typography variant="body1" component="span"><strong>Donor privacy controls:</strong> “Anonymous” hides your name from public lists; “Hide amount” omits the amount from public lists. We still process, store, and report the amount internally and to you as needed (e.g., receipts).</Typography>
              </li>
              <li>
                <Typography variant="body1" component="span">You can edit or remove your campaign content and comments, subject to operational or legal retention needs.</Typography>
              </li>
            </Box>
          </Section>

          <Section title="4) Data Sharing and Third Parties">
            We do not sell your personal information. We share it only as needed to run {SITE.name} and comply with the law:
            <Box component="ul" sx={{ mt: 1.5, pl: 3 }}>
              <li><Typography variant="body1" component="span"><strong>Payment Processing:</strong> PayMongo and related payment channels (e.g., GCash) to process transactions and verify payment status.</Typography></li>
              <li><Typography variant="body1" component="span"><strong>Hosting and Infrastructure:</strong> Frontend hosting (e.g., Vercel), backend/database hosting (e.g., Railway), storage and compute providers.</Typography></li>
              <li><Typography variant="body1" component="span"><strong>Media Storage and Processing:</strong> Cloudinary for media storage and delivery; ConvertAPI for converting uploaded PDFs to images (e.g., COR preview). Converted outputs may be stored in Cloudinary.</Typography></li>
              <li><Typography variant="body1" component="span"><strong>Communications:</strong> Email/SMS providers for OTPs and service messages.</Typography></li>
              <li><Typography variant="body1" component="span"><strong>Analytics/Diagnostics:</strong> Limited usage data for performance, troubleshooting, and security monitoring.</Typography></li>
              <li><Typography variant="body1" component="span"><strong>Institutional Access and Legal:</strong> Authorized BulSU-SC personnel for support and operations; regulators or law enforcement when required by law.</Typography></li>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>These providers may process data in countries outside the Philippines. We take steps to ensure appropriate safeguards consistent with the DPA.</Typography>
          </Section>

          <Section title="5) Cookies and Local Storage">
            We use cookies and similar technologies (and may use browser storage like sessionStorage/localStorage) to: keep you signed in (e.g., tokens), remember preferences, secure sessions, and improve functionality. You can adjust your browser settings to limit cookies; some features may not work without them.
          </Section>

          <Section title="6) Data Security">
            We implement technical and organizational measures to protect your information, including: Encryption in transit (HTTPS/TLS); access controls and least-privilege access for system administrators; segregated environments and logging for security and audit purposes. No method of transmission or storage is 100% secure. We continuously improve our safeguards but cannot guarantee absolute security.
          </Section>

          <Section title="7) Data Retention">
            We keep information only as long as necessary to provide the service and meet legal, accounting, and institutional requirements:
            <Box component="ul" sx={{ mt: 1.5, pl: 3 }}>
              <li><Typography variant="body1" component="span"><strong>Donation and financial records:</strong> retained as required by applicable accounting/audit laws and policies.</Typography></li>
              <li><Typography variant="body1" component="span"><strong>Campaign content and media:</strong> retained while the campaign is active and for a reasonable period afterward for operational continuity and audit; you may request deletion where feasible.</Typography></li>
              <li><Typography variant="body1" component="span"><strong>COR and verification artifacts:</strong> retained for the review lifecycle and a limited period afterward for compliance and dispute resolution.</Typography></li>
              <li><Typography variant="body1" component="span"><strong>OTP data:</strong> kept briefly for verification and then deleted.</Typography></li>
              <li><Typography variant="body1" component="span"><strong>System/webhook logs:</strong> kept for a limited period for security and reconciliation.</Typography></li>
            </Box>
            When retention periods expire, we delete or de-identify data.
          </Section>

          <Section title="8) Your Rights">
            Subject to applicable laws (including the Philippine DPA), you have the right to: be informed about data processing activities; access the personal data we hold about you; rectify inaccurate or incomplete data; object to certain processing or request restriction, where applicable; withdraw consent at any time (processing prior to withdrawal remains lawful); data portability, where applicable and feasible; erasure, subject to legal/operational retention requirements (e.g., accounting records cannot be deleted before required retention lapses). To exercise these rights, contact us using the details below. We may need to verify your identity and clarify your request.
          </Section>

          <Section title="9) Children and Students">
            {SITE.name} is designed for university students and donors. If you are under the age of majority in your jurisdiction, use the platform only with the consent and supervision of a parent/guardian. If we learn we collected personal data from a child without proper consent, we will take steps to delete it.
          </Section>

          <Section title="10) Third-Party Links">
            Our platform may link to third-party sites and services (e.g., payment checkout pages, media CDNs). Their privacy practices are governed by their own policies. Please review those policies before providing your data.
          </Section>

          <Section title="11) International Transfers">
            Our service providers may process data outside the Philippines. We take measures to ensure appropriate safeguards consistent with the DPA and other applicable laws.
          </Section>

          <Section title="12) Changes to This Policy">
            We may update this Privacy Policy from time to time. We will post updates here with an “Effective Date.” Material changes may also be communicated by email or in-app notice when appropriate.
          </Section>

          <Section title="13) Contact Us">
            Information Technology and Data Science Department
            <br />Bulacan State University – Sarmiento Campus
            <Box sx={{ mt: 1.5 }}>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Email: {SITE.contactEmail ? (
                  <Link href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</Link>
                ) : (
                  '—'
                )}
              </Typography>
              <Typography variant="body1">Phone: {SITE.contactPhone || '—'}</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
              If you have privacy concerns, requests, or complaints, please contact us and we will work to resolve them in accordance with applicable laws and university policies.
            </Typography>
          </Section>

          <Divider sx={{ my: 3 }} />
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
}
