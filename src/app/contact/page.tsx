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
            For general questions, technical requirements, Job Openings or comments or any other queries, please email us at:
            <Link
              href="mailto:abhi.fullstackdeveloper@gmail.com"
              className="text-blue-500 hover:underline"
            >
              abhi.fullstackdeveloper@gmail.com
            </Link>
          </p>
        </div>
      </div>

    </>
  )
}