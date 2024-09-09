import Link from 'next/link'

export default function Home() {
  return (
    <>

      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
        <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
        <p className="mb-6">
          We'd love to hear from you! Whether you have a question, feedback, or just
          want to say hello, feel free to reach out using the contact information
          below. We aim to respond as quickly as possible.
        </p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">General Inquiries</h2>
          <p>
            For general questions, technical requirements, Job Openings or comments or any other queries, please email us at:{" "}
            <Link
              href="mailto:abhi.fullstackdeveloper@gmail.com"
              className="text-blue-500 hover:underline"
            >
              abhi.fullstackdeveloper@gmail.com
            </Link>
          </p>
        </div>
        {/* <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Technical Support</h2>
          <p>
            For any issues related to our website or technical difficulties, please
            get in touch with our support team:{" "}
            <a
              href="mailto:abhi.fullstackdeveloper@gmail.com"
              className="text-blue-500 hover:underline"
            >
              abhi.fullstackdeveloper@gmail.com
            </a>
          </p>
        </div> */}
        {/* <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
          <p>
            Stay updated with our latest posts and news by following us on social
            media:
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://twitter.com/YourTwitterHandle"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com/YourFacebookPage"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/YourInstagramHandle"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Mailing Address</h2>
          <p>
            If you need to send us a letter or package, please use the following
            address:
          </p>
          <div className="bg-gray-50 p-4 rounded mt-2">
            <p>Your Blog Name</p>
            <p>1234 Blog Street</p>
            <p>City, State, ZIP Code</p>
            <p>Country</p>
          </div>
        </div> */}
      </div>

    </>
  )
}