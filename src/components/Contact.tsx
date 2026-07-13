export default function Contact() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <p className="text-gray-600">
        Interested in working together? Reach out below.
      </p>
      <a
        href="mailto:you@example.com"
        className="rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700"
      >
        you@example.com
      </a>
    </div>
  )
}
