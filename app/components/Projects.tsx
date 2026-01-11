export default function Projects() {
  const projects = [
    {
      company: 'NAVER',
      subtitle: 'Cloud Platform',
      title: '네이버 클라우드',
      period: '2025.09 ~ 현재',
      description:
        '클라우드 Business Platform 개발. 핵심 어댑터 기능 개발, 비즈니스 로직 개발 및 고도화, jOOQ 기반 복잡한 SQL 처리 및 성능 최적화',
      techs: ['Java 21', 'Spring Boot', 'jOOQ', 'Flyway'],
      gradient: 'gradient-card-1',
      hoverColor: 'hover:bg-purple-50',
      textColor: 'group-hover:text-purple-700',
      techColors: [
        'bg-purple-100 text-purple-700 group-hover:bg-purple-200',
        'bg-indigo-100 text-indigo-700 group-hover:bg-indigo-200',
        'bg-purple-100 text-purple-700 group-hover:bg-purple-200',
        'bg-indigo-100 text-indigo-700 group-hover:bg-indigo-200',
      ],
    },
    {
      company: '무신사',
      subtitle: '',
      title: '무신사',
      period: '2024.09 ~ 2025.09',
      description:
        'SCM-Hub 통합 관리 시스템 개발. 재고 도메인 설계 및 기능 개발, SKU 관리 기능 구현, SAP 연동 Master 데이터 관리',
      techs: ['Java 21', 'Spring Boot', 'Redis', 'Kafka'],
      gradient: 'gradient-card-2',
      hoverColor: 'hover:bg-pink-50',
      textColor: 'group-hover:text-pink-700',
      techColors: [
        'bg-pink-100 text-pink-700 group-hover:bg-pink-200',
        'bg-orange-100 text-orange-700 group-hover:bg-orange-200',
        'bg-pink-100 text-pink-700 group-hover:bg-pink-200',
        'bg-orange-100 text-orange-700 group-hover:bg-orange-200',
      ],
    },
    {
      company: '요기요',
      subtitle: '',
      title: '요기요',
      period: '2023.04 ~ 2024.09',
      description:
        '상점 페이지 서버 개발, 메인 공지 서비스 리뉴얼, 알림 메시지 통합 서비스. Mongo DB CPU 최적화, API Latency 3배 개선',
      techs: ['Java 17', 'Spring Boot', 'MongoDB', 'AWS'],
      gradient: 'gradient-card-3',
      hoverColor: 'hover:bg-cyan-50',
      textColor: 'group-hover:text-cyan-700',
      techColors: [
        'bg-cyan-100 text-cyan-700 group-hover:bg-cyan-200',
        'bg-indigo-100 text-indigo-700 group-hover:bg-indigo-200',
        'bg-cyan-100 text-cyan-700 group-hover:bg-cyan-200',
        'bg-indigo-100 text-indigo-700 group-hover:bg-indigo-200',
      ],
    },
    {
      company: 'NEXON',
      subtitle: '',
      title: '넥슨',
      period: '2021.12 ~ 2023.02',
      description:
        '게임 아이템 자동 구독 서비스, 넥슨캐시 백오피스 리뉴얼, PLCC 결제 모듈 연동. 각종 API 개발 및 시스템 설계',
      techs: ['Java 11', 'Spring', 'C#', 'MSSQL'],
      gradient: 'gradient-card-4',
      hoverColor: 'hover:bg-orange-50',
      textColor: 'group-hover:text-orange-700',
      techColors: [
        'bg-orange-100 text-orange-700 group-hover:bg-orange-200',
        'bg-amber-100 text-amber-700 group-hover:bg-amber-200',
        'bg-orange-100 text-orange-700 group-hover:bg-orange-200',
        'bg-amber-100 text-amber-700 group-hover:bg-amber-200',
      ],
    },
    {
      company: '신한은행',
      subtitle: '',
      title: '신한은행',
      period: '2018.02 ~ 2021.11',
      description:
        '지능형 ICT 통합 모니터링 시스템, WAS 모니터링 시스템, SOL 리뉴얼 자동 분석 시스템. Kafka 기반 실시간 데이터 처리',
      techs: ['Java', 'Spring', 'Kafka'],
      gradient: 'gradient-card-1',
      hoverColor: 'hover:bg-purple-50',
      textColor: 'group-hover:text-purple-700',
      techColors: [
        'bg-purple-100 text-purple-700 group-hover:bg-purple-200',
        'bg-indigo-100 text-indigo-700 group-hover:bg-indigo-200',
        'bg-purple-100 text-purple-700 group-hover:bg-purple-200',
      ],
    },
  ]

  return (
    <section id="projects" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-purple-600">
            Projects
          </span>
          <h2 className="mb-4 mt-2 text-4xl font-bold text-gray-900 md:text-5xl">
            프로젝트
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            실제 프로젝트를 통해 쌓은 경험과 성과
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card-shadow-lg group transform cursor-pointer overflow-hidden rounded-3xl bg-white transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl"
            >
              <div
                className={`${project.gradient} relative flex h-56 items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 transition-all duration-300 group-hover:bg-black/0"></div>
                <div className="relative z-10 text-center text-white transition-all duration-300 group-hover:scale-110">
                  <div className="mb-2 text-5xl font-bold">{project.company}</div>
                  {project.subtitle && (
                    <div className="text-xl">{project.subtitle}</div>
                  )}
                </div>
              </div>
              <div
                className={`p-8 transition-colors duration-300 ${project.hoverColor}`}
              >
                <div className="mb-3 flex items-center gap-2">
                  <h3
                    className={`text-2xl font-bold text-gray-900 transition-colors ${project.textColor}`}
                  >
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500">{project.period}</span>
                </div>
                <p className="mb-6 leading-relaxed text-gray-600">
                  {project.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.techs.map((tech, index) => (
                    <span
                      key={tech}
                      className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${project.techColors[index]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
