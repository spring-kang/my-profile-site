export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-purple-600">
            About Me
          </span>
          <h2 className="mb-4 mt-2 text-4xl font-bold text-gray-900 md:text-5xl">
            백엔드 개발자
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            효율적이고 확장 가능한 시스템 설계에 전문성을 가지고 있습니다
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Large card */}
          <div className="card-shadow-lg group rounded-3xl bg-gradient-to-br from-purple-50 to-indigo-50 p-8 transition-all hover:shadow-xl md:col-span-2 md:p-10">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  전문 분야
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  네이버 클라우드, 무신사, 요기요, 넥슨, 신한은행 등 다양한 IT
                  기업과 금융권에서 9년간 백엔드 개발 경험을 쌓았습니다. Java,
                  Kotlin, Spring Boot를 주력으로 하며, MSA 아키텍처, 대용량
                  트래픽 처리, API 성능 최적화에 강점이 있습니다. Redis,
                  MongoDB, Kafka 등을 활용한 실시간 데이터 처리 및 이벤트 기반
                  아키텍처 구축 경험이 풍부합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Small card 1 */}
          <div className="card-shadow rounded-3xl bg-gradient-to-br from-pink-50 to-purple-50 p-8 transition-all hover:shadow-lg">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">빠른 학습</h3>
            <p className="text-gray-700">
              새로운 기술을 빠르게 습득하고 프로젝트에 적용합니다
            </p>
          </div>

          {/* Small card 2 */}
          <div className="card-shadow rounded-3xl bg-gradient-to-br from-cyan-50 to-indigo-50 p-8 transition-all hover:shadow-lg">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">협업</h3>
            <p className="text-gray-700">
              팀워크를 중시하고 원활한 커뮤니케이션을 추구합니다
            </p>
          </div>

          {/* Medium card */}
          <div className="card-shadow rounded-3xl bg-gradient-to-br from-orange-50 to-pink-50 p-8 transition-all hover:shadow-lg md:col-span-2">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-pink-600">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">문제 해결</h3>
            <p className="text-gray-700">
              복잡한 문제를 분석하고 최적의 솔루션을 제시합니다
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
