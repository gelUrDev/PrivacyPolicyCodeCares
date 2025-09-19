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
            At {SITE.name}, facilitated by the Information Technology and Data Science Department of Bulacan State University – Sarmiento Campus, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the information you provide when using our donation and fundraising platform.
          </Section>

          <Section title="1. Information We Collect">
            When you use {SITE.name}, we may collect the following types of information:
            <Box component="ul" sx={{ mt: 1.5, pl: 3 }}>
              <li>
                <Typography variant="body1" component="span">
                  <strong>Personal Information:</strong> such as your name, email address, contact number, and payment details when you donate.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" component="span">
                  <strong>Non-Personal Information:</strong> such as browser type, device information, and usage statistics to help us improve our services.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" component="span">
                  <strong>Transaction Information:</strong> details of your donations, fundraising activities, and communication with the platform.
                </Typography>
              </li>
            </Box>
          </Section>

          <Section title="2. How We Use Your Information">
            We use the information collected to:
            <Box component="ul" sx={{ mt: 1.5, pl: 3 }}>
              <li><Typography variant="body1" component="span">Process donations and issue confirmations.</Typography></li>
              <li><Typography variant="body1" component="span">Manage fundraising campaigns and donor records.</Typography></li>
              <li><Typography variant="body1" component="span">Ensure platform security and prevent fraudulent activity.</Typography></li>
              <li><Typography variant="body1" component="span">Communicate important updates, acknowledgments, or support.</Typography></li>
              <li><Typography variant="body1" component="span">Comply with legal and institutional obligations.</Typography></li>
            </Box>
          </Section>

          <Section title="3. Data Sharing and Disclosure">
            We do not sell, rent, or trade your information. Your information may only be shared with:
            <Box component="ul" sx={{ mt: 1.5, pl: 3 }}>
              <li><Typography variant="body1" component="span">Payment service providers for secure transaction processing.</Typography></li>
              <li><Typography variant="body1" component="span">Authorized personnel within the BulSU – Sarmiento Campus IT and Data Science Department for system operations.</Typography></li>
              <li><Typography variant="body1" component="span">Legal authorities, if required by law.</Typography></li>
            </Box>
          </Section>

          <Section title="4. Data Security">
            We apply appropriate technical and organizational measures to protect your information from unauthorized access, misuse, or loss. Transactions are processed through secure, encrypted channels.
          </Section>

          <Section title="5. Data Retention">
            We retain donor and fundraising records only as long as necessary for operational, financial, or legal purposes.
          </Section>

          <Section title="6. Your Rights">
            As a user of {SITE.name}, you have the right to:
            <Box component="ul" sx={{ mt: 1.5, pl: 3 }}>
              <li><Typography variant="body1" component="span">Request access to the personal data we hold about you.</Typography></li>
              <li><Typography variant="body1" component="span">Correct inaccuracies in your personal data.</Typography></li>
              <li><Typography variant="body1" component="span">Withdraw consent for communications or processing, where applicable.</Typography></li>
              <li><Typography variant="body1" component="span">Request deletion of your data, subject to legal requirements.</Typography></li>
            </Box>
          </Section>

          <Section title="7. Third-Party Links">
            Our platform may contain links to external sites (e.g., payment gateways). Please note that we are not responsible for the privacy practices of those third-party sites.
          </Section>

          <Section title="8. Updates to this Policy">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated “Effective Date.”
          </Section>

          <Section title="9. Contact Us">
            If you have questions or concerns about this Privacy Policy, you may contact us at:
            <Box sx={{ mt: 1.5 }}>
              {SITE.orgLines.map((line) => (
                <Typography key={line} variant="body1">{line}</Typography>
              ))}
              <Typography variant="body1" sx={{ mt: 1 }}>
                Email: {SITE.contactEmail !== 'insert-official-email@example.com' ? (
                  <Link href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</Link>
                ) : (
                  SITE.contactEmail
                )}
              </Typography>
              <Typography variant="body1">Phone: {SITE.contactPhone}</Typography>
            </Box>
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
