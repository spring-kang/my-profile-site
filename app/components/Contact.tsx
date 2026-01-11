export default function Contact() {
  return (
    <section
      id="contact"
      className="gradient-primary relative overflow-hidden py-24"
    >
      {/* Decorative elements */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-purple-200">
            Contact
          </span>
          <h2 className="mb-4 mt-2 text-4xl font-bold text-white md:text-5xl">
            함께 일하고 싶으신가요?
          </h2>
          <p className="text-xl text-purple-100">
            프로젝트 문의나 협업 제안을 기다립니다
          </p>
        </div>

        <div className="glass-card card-shadow-xl rounded-3xl p-8 text-center md:p-12">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600">
            <svg
              className="h-10 w-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <h3 className="mb-4 text-2xl font-bold text-gray-900">
            이메일로 연락하기
          </h3>
          <p className="mb-8 text-lg text-gray-600">
            언제든지 편하게 연락주세요!
          </p>
          <a
            href="mailto:java7ang@gmail.com"
            className="inline-block transform rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl"
          >
            java7ang@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
