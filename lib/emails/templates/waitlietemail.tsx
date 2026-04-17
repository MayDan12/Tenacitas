// emails/WaitlistEmail.tsx
import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Section,
  Img,
} from "@react-email/components";

type Props = {
  name: string;
  date: string;
  time: string;
};

export default function WaitlistEmail({ name, date, time }: Props) {
  return (
    <Html>
      <Head />
      <Body style={{ margin: 0, backgroundColor: "#f5f5f5" }}>
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {/* Header */}
          <Section
            style={{
              backgroundColor: "#E8F0FF",
              padding: "20px",
            }}
          >
            <table width="100%" cellPadding="0" cellSpacing="0">
              <tr>
                {/* LEFT: Logo */}
                <td align="left">
                  <Img
                    src="https://tenacitas.uk/tenacitas-logo.png"
                    alt="Tenacitas Logo"
                    width={50}
                    height={50}
                  />
                </td>

                {/* RIGHT: Date & Time */}
                <td align="right" style={{ fontSize: "14px", color: "#333" }}>
                  <Text style={{ margin: 0 }}>{date}</Text>
                  <Text style={{ margin: 0 }}>{time}</Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* Content */}
          <Section style={{ padding: "30px" }}>
            <Text
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Thank you for joining the waitlist - you&apos;re in!
            </Text>

            <Text>Hi {name},</Text>

            <Text>
              We will update you before launch with early access options and
              important news about upcoming developments.
            </Text>

            <Text>
              If you need support at any time, reach out to us at{" "}
              <a href="mailto:support@tenacitas.uk">support@tenacitas.uk</a> and
              our team will gladly assist you.
            </Text>

            <Text>Thanks again! </Text>
            <Text>The Tenacitas Team </Text>
          </Section>

          {/* Footer */}
          <Section
            style={{
              backgroundColor: "#063EA6",
              color: "#ffffff",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <Text style={{ fontSize: "18px", margin: "10px 0" }}>
              Tenacitas Workforce Transformation
            </Text>

            <Text style={{ fontSize: "14px", margin: "5px 0" }}>
              © 2026 Copyright. All rights reserved by Tenacitas Limited
            </Text>

            <Text style={{ fontSize: "12px", margin: "5px 0" }}>
              Registered in England - Company number: 17154220
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
