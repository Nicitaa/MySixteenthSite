export function PrivacyPolicyPage() {
  return (
    <div className="min-h-[80vh] flex justify-center items-center px-32 4K:px-28 LaptopL:px-16">
      <div className="mt-32 flex flex-col justify-center max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-lg mb-4">
          At <strong>Mikke Restaurant</strong>, we value your privacy and are committed to protecting your personal
          data. This Privacy Policy outlines how we collect, use, and safeguard your information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, email, phone number (when making reservations or inquiries).
          </li>
          <li>
            <strong>Usage Data:</strong> Information about your visit to our website (cookies, IP address, browsing
            behavior).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To process reservations and respond to inquiries.</li>
          <li>To improve our website experience and services.</li>
          <li>For marketing purposes, with your consent.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Protection</h2>
        <p className="mb-4">
          We implement security measures to protect your data and prevent unauthorized access. Your personal information
          is never sold or shared with third parties without your consent.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Cookies</h2>
        <p className="mb-4">
          Our website uses cookies to enhance user experience. You can manage cookie preferences in your browser
          settings.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Contact Us</h2>
        <p>
          If you have any questions about our Privacy Policy, feel free to contact us at{" "}
          <a href="mailto:info@bf-go.com" className="text-blue-400">
            info@bf-go.com
          </a>
          .
        </p>
      </div>
    </div>
  )
}
