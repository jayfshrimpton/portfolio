export default function Contact() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <p className="text-gray-600">
        Interested in working together? Reach out below.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href="mailto:jayfshrimpton@gmail.com"
          className="rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700"
        >
          jayfshrimpton@gmail.com
        </a>
        <a
          href="https://github.com/jayfshrimpton"
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:border-gray-400"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}
