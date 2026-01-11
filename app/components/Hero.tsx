import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="gradient-primary relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Decorative elements */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text Content */}
          <div className="fade-in-up text-white">
            <div className="mb-6 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-md">
              Backend Developer
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              안녕하세요,
              <br />
              <span className="bg-gradient-to-r from-pink-200 to-cyan-200 bg-clip-text text-transparent">
                강성지
              </span>
              입니다
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-purple-100 md:text-2xl">
              9년차 백엔드 개발자
              <br />
              네이버, 무신사, 요기요, 넥슨, 신한은행 경험
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="transform rounded-2xl bg-white px-8 py-4 text-lg font-bold text-purple-600 transition-all hover:scale-105 hover:bg-purple-50 hover:shadow-xl"
              >
                연락하기
              </a>
              <a
                href="#projects"
                className="transform rounded-2xl border-2 border-white/30 bg-white/20 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/30"
              >
                프로젝트 보기
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="fade-in-up flex justify-center md:justify-end">
            <div className="float-animation relative">
              <div className="profile-border overflow-hidden rounded-3xl bg-gradient-to-br from-green-100 to-emerald-200 shadow-2xl md:h-96 md:w-96 h-80 w-80">
                <Image
                  src="/images/kang.webp"
                  alt="Profile - Bulbasaur"
                  width={384}
                  height={384}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              {/* Decorative gradient circles */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 opacity-60 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-600 opacity-60 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
