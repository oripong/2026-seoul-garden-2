import { useEffect, useState } from "react";

const A = "/assets";

type ModalContent = {
  title: string;
  body: string;
  action?: { label: string; href: string };
};

const slides = [
  {
    eyebrow: "도심 속, 정원이 만드는\n더 나은 서울",
    year: "2026",
    title: "서울정원박람회",
    english: "SEOUL GARDEN SHOW 2026",
  },
  {
    eyebrow: "서울의 일상에 피어나는\n초록빛 쉼표",
    year: "9 DAYS",
    title: "정원과 함께하는 시간",
    english: "A GARDEN IN EVERYDAY SEOUL",
  },
  {
    eyebrow: "보고, 듣고, 직접 만드는\n도시의 정원",
    year: "2026",
    title: "모두의 정원 프로그램",
    english: "GARDEN PROGRAM FOR EVERYONE",
  },
  {
    eyebrow: "사람과 자연이 만나는\n서울숲으로",
    year: "MAY",
    title: "서울숲에서 만나요",
    english: "MEET US AT SEOUL FOREST",
  },
];

const programs = [
  {
    title: "정원 전시관",
    description: "다양한 테마의 정원을 만나보세요",
    art: "exhibition",
  },
  {
    title: "정원 체험 프로그램",
    description: "직접 만드는 정원의 즐거움",
    art: "workshop",
  },
  {
    title: "정원 콘서트",
    description: "정원 속에서 즐기는 음악",
    art: "concert",
  },
];

const notices = [
  ["10.20", "2026 서울정원박람회 사전예매 안내"],
  ["10.17", "정원해설 프로그램 운영 안내"],
  ["10.15", "주차 및 교통 안내"],
];

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`logo ${footer ? "logo--footer" : ""}`}
      href="#home"
      aria-label="서울정원박람회 홈"
    >
      <span className="logo__mark" aria-hidden="true">
        <img src={`${A}/${footer ? "00072" : "ea138"}.svg`} alt="" />
        <img src={`${A}/${footer ? "7df1f" : "f23db"}.svg`} alt="" />
        <i />
      </span>
      <span className="logo__type">
        <strong>서울 정원박람회</strong>
        <small>SEOUL GARDEN SHOW</small>
      </span>
    </a>
  );
}

function Header({
  menuOpen,
  setMenuOpen,
  onSearch,
  onReserve,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  onSearch: () => void;
  onReserve: () => void;
}) {
  const links = [
    ["박람회 안내", "#about"],
    ["관람 안내", "#visit"],
    ["프로그램", "#programs"],
    ["정원 산책", "#location"],
    ["소식", "#news"],
  ];

  return (
    <header className="site-header">
      <div className="header__inner">
        <Logo />
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="주요 메뉴">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <button className="mobile-reserve" onClick={onReserve}>
            예매하기 <span>→</span>
          </button>
        </nav>
        <div className="header__actions">
          <button className="search-button" onClick={onSearch} aria-label="검색 열기">
            <img src={`${A}/8190c.svg`} alt="" />
          </button>
          <button className="reserve-button" onClick={onReserve}>
            예매하기 <span>→</span>
          </button>
          <button
            className={`menu-button ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
          >
            <i />
            <i />
            <i />
          </button>
        </div>
      </div>
    </header>
  );
}

// Figma의 개별 벡터를 같은 좌표계에 겹쳐 원본 풍경을 재현합니다.
function GardenScene() {
  const clouds = ["26341", "d3240", "47dca", "c660e", "d6fd2"];
  const canopy = ["b04ec", "0b8f9", "773a8"];
  const meadowFlowers = [
    "08f4a",
    "e9d31",
    "39964",
    "9dc17",
    "041d5",
    "3f678",
    "2ddc9",
    "907d4",
    "13596",
    "497ae",
    "525d8",
    "4a4af",
  ];
  const rightFlowers = ["d2565", "245c5", "f75a2"];

  return (
    <div className="garden-scene" aria-hidden="true">
      {clouds.map((asset, index) => (
        <img key={asset} className={`cloud cloud--${index + 1}`} src={`${A}/${asset}.svg`} alt="" />
      ))}
      <div className="skyline">
        {Array.from({ length: 11 }, (_, index) => (
          <i key={index}>
            <span />
            <span />
            <span />
          </i>
        ))}
      </div>
      <div className="tower">
        <i />
        <i />
        <i />
      </div>
      <img className="land far-hill" src={`${A}/fd02b.svg`} alt="" />
      <img className="land middle-hill" src={`${A}/6ca99.svg`} alt="" />
      <img className="land near-hill" src={`${A}/4c781.svg`} alt="" />
      <img className="land left-meadow" src={`${A}/92f7b.svg`} alt="" />
      <img className="land left-meadow-light" src={`${A}/4467f.svg`} alt="" />
      <img className="land right-meadow" src={`${A}/83c53.svg`} alt="" />
      <div className="canopy">
        {Array.from({ length: 24 }, (_, index) => (
          <img key={index} src={`${A}/${canopy[index % canopy.length]}.svg`} alt="" />
        ))}
      </div>
      <img className="arch arch--outer" src={`${A}/3e0ee.svg`} alt="" />
      <img className="arch arch--middle" src={`${A}/7897e.svg`} alt="" />
      <img className="arch arch--inner" src={`${A}/43e93.svg`} alt="" />
      <div className="arch-leaves">
        {Array.from({ length: 12 }, (_, index) => (
          <img key={index} src={`${A}/${index % 2 ? "1821d" : "7df0d"}.svg`} alt="" />
        ))}
      </div>
      <div className="tree-leaves">
        {Array.from({ length: 8 }, (_, index) => (
          <img key={index} src={`${A}/${index % 2 ? "12734" : "2c2d9"}.svg`} alt="" />
        ))}
      </div>
      <div className="garden-path" />
      <img className="lawn lawn--one" src={`${A}/40cfe.svg`} alt="" />
      <img className="lawn lawn--two" src={`${A}/f6ee9.svg`} alt="" />
      <img className="lawn lawn--three" src={`${A}/1799b.svg`} alt="" />
      <img className="lawn lawn--four" src={`${A}/28d13.svg`} alt="" />
      <div className="meadow-flowers">
        {Array.from({ length: 46 }, (_, index) => (
          <img key={index} src={`${A}/${meadowFlowers[index % meadowFlowers.length]}.svg`} alt="" />
        ))}
      </div>
      <div className="right-flowers">
        {Array.from({ length: 18 }, (_, index) => (
          <img key={index} src={`${A}/${rightFlowers[index % rightFlowers.length]}.svg`} alt="" />
        ))}
      </div>
    </div>
  );
}

function Hero({
  activeSlide,
  setActiveSlide,
  onDetails,
}: {
  activeSlide: number;
  setActiveSlide: (slide: number) => void;
  onDetails: () => void;
}) {
  const slide = slides[activeSlide];
  const move = (amount: number) =>
    setActiveSlide((activeSlide + amount + slides.length) % slides.length);

  return (
    <section className="hero" id="home" aria-label="박람회 소개 슬라이드">
      <GardenScene />
      <div className="hero__fade" />
      <img className="hero__feather" src={`${A}/975f2.svg`} alt="" aria-hidden="true" />
      <div className="page-shell hero__content" id="about">
        <div className="hero__copy" key={activeSlide}>
          <p className="hero__eyebrow">
            {slide.eyebrow.split("\n").map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <p className="hero__year">{slide.year}</p>
          <h1>{slide.title}</h1>
          <p className="hero__english">{slide.english}</p>
          <div className="hero__facts">
            <p>
              <span className="calendar-icon" aria-hidden="true" />
              2026. 5. 16 (토) – 5. 24 (일)
            </p>
            <p>
              <span className="pin-icon" aria-hidden="true">
                <img src={`${A}/25568.svg`} alt="" />
                <img src={`${A}/222e3.svg`} alt="" />
              </span>
              서울숲 일대
            </p>
          </div>
          <button className="primary-button" onClick={onDetails}>
            박람회 자세히 보기 <span>→</span>
          </button>
        </div>
        <div className="slider-controls">
          <span>
            {String(activeSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <div className="slider-progress">
            <i style={{ width: `${((activeSlide + 1) / slides.length) * 100}%` }} />
          </div>
          <button onClick={() => move(-1)} aria-label="이전 슬라이드">
            ‹
          </button>
          <button onClick={() => move(1)} aria-label="다음 슬라이드">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

function ExhibitionArt() {
  return (
    <div className="program-art exhibition-art" aria-hidden="true">
      <img src={`${A}/d5173.svg`} alt="" />
      <img src={`${A}/08190.svg`} alt="" />
      {Array.from({ length: 10 }, (_, index) => (
        <i key={index}>
          <span />
          <img src={`${A}/${index % 2 ? "eab9f" : "50a7b"}.svg`} alt="" />
        </i>
      ))}
    </div>
  );
}

function WorkshopArt() {
  return (
    <div className="program-art workshop-art" aria-hidden="true">
      {[0, 1, 2].map((item) => (
        <i key={item}>
          <img src={`${A}/5ff7d.svg`} alt="" />
          <img src={`${A}/9febf.svg`} alt="" />
        </i>
      ))}
      <img src={`${A}/1fdb0.svg`} alt="" />
      <img src={`${A}/c9692.svg`} alt="" />
    </div>
  );
}

function ConcertArt() {
  return (
    <div className="program-art concert-art" aria-hidden="true">
      <img src={`${A}/ba9d0.svg`} alt="" />
      <i />
      <b />
      {Array.from({ length: 5 }, (_, index) => (
        <img key={index} src={`${A}/296df.svg`} alt="" />
      ))}
    </div>
  );
}

function PanelHeader({
  title,
  english,
  onMore,
}: {
  title: string;
  english: string;
  onMore: () => void;
}) {
  return (
    <div className="panel-header">
      <h2>{title}</h2>
      <span>{english}</span>
      <button onClick={onMore}>더보기&nbsp; ›</button>
    </div>
  );
}

function ProgramPanel({ onOpen }: { onOpen: (program: (typeof programs)[number]) => void }) {
  return (
    <article className="info-panel program-panel" id="programs">
      <PanelHeader title="주요 프로그램" english="PROGRAM" onMore={() => onOpen(programs[0])} />
      <div className="program-grid">
        {programs.map((program) => (
          <button className="program-item" key={program.title} onClick={() => onOpen(program)}>
            {program.art === "exhibition" && <ExhibitionArt />}
            {program.art === "workshop" && <WorkshopArt />}
            {program.art === "concert" && <ConcertArt />}
            <strong>{program.title}</strong>
            <small>{program.description}</small>
          </button>
        ))}
      </div>
    </article>
  );
}

function LocationPanel({ onMore }: { onMore: () => void }) {
  const mapUrl = "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%EC%88%B2";
  return (
    <article className="info-panel location-panel" id="location">
      <PanelHeader title="오시는 길" english="LOCATION" onMore={onMore} />
      <div className="map-art" aria-label="서울숲 약도">
        <i />
        <i />
        <i />
        <i />
        <img src={`${A}/52395.svg`} alt="" />
        <img src={`${A}/8a527.svg`} alt="" />
        <span>
          <img src={`${A}/39031.svg`} alt="" />
          서울숲
        </span>
      </div>
      <div className="address-row">
        <span>
          <img src={`${A}/409ab.svg`} alt="" />
          <img src={`${A}/812ed.svg`} alt="" />
        </span>
        <p>서울특별시 성동구 서울숲길 273</p>
        <a href={mapUrl} target="_blank" rel="noreferrer">
          찾아가기 →
        </a>
      </div>
    </article>
  );
}

function NewsPanel({ onOpen }: { onOpen: (title: string) => void }) {
  return (
    <article className="info-panel news-panel" id="news">
      <PanelHeader title="공지사항" english="NEWS" onMore={() => onOpen("공지사항 전체보기")} />
      <ul>
        {notices.map(([date, title]) => (
          <li key={title}>
            <time>{date}</time>
            <button onClick={() => onOpen(title)}>{title}</button>
          </li>
        ))}
      </ul>
      <div className="news-leaves" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <img key={index} src={`${A}/${index % 2 ? "a6eb5" : "0af7f"}.svg`} alt="" />
        ))}
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <img className="footer-wave footer-wave--one" src={`${A}/a9451.svg`} alt="" />
      <img className="footer-wave footer-wave--two" src={`${A}/a3ca5.svg`} alt="" />
      <img className="footer-wave footer-wave--three" src={`${A}/81189.svg`} alt="" />
      <div className="page-shell footer__inner">
        <div className="footer__brand">
          <Logo footer />
          <p>
            정원이 만드는 서울,
            <br />
            그리고 우리의 내일
          </p>
        </div>
        <div className="socials" aria-label="소셜 미디어">
          {[
            ["◎", "인스타그램", "https://www.instagram.com/"],
            ["▶", "유튜브", "https://www.youtube.com/"],
            ["f", "페이스북", "https://www.facebook.com/"],
            ["✉", "이메일", "mailto:garden@seoul.go.kr"],
          ].map(([symbol, label, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
            >
              <img src={`${A}/00182.svg`} alt="" />
              <span>{symbol}</span>
            </a>
          ))}
        </div>
        <p className="copyright">© 2026 SEOUL GARDEN SHOW. ALL RIGHTS RESERVED.</p>
        <p className="footer-slogan">SEOUL, A CITY IN BLOOM</p>
      </div>
    </footer>
  );
}

function Modal({ content, onClose }: { content: ModalContent; onClose: () => void }) {
  useEffect(() => {
    const closeWithEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", closeWithEscape);
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", closeWithEscape);
      document.body.classList.remove("modal-open");
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose} aria-label="팝업 닫기">
          ×
        </button>
        <span className="modal__leaf" />
        <h2 id="modal-title">{content.title}</h2>
        <p>{content.body}</p>
        {content.action && (
          <a className="primary-button" href={content.action.href} target="_blank" rel="noreferrer">
            {content.action.label} <span>→</span>
          </a>
        )}
      </section>
    </div>
  );
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");

  return (
    <div className="search-overlay">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(query.trim());
        }}
      >
        <label htmlFor="site-search">박람회 검색</label>
        <div>
          <input
            id="site-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="검색어를 입력하세요"
            autoFocus
          />
          <button type="submit">검색</button>
          <button type="button" onClick={onClose}>
            닫기
          </button>
        </div>
        {submitted && (
          <p>‘{submitted}’ 검색 결과는 박람회 현장 안내 데스크에서 확인하실 수 있습니다.</p>
        )}
      </form>
    </div>
  );
}

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [modal, setModal] = useState<ModalContent | null>(null);

  const showDetails = () =>
    setModal({
      title: "2026 서울정원박람회",
      body: "2026년 5월 16일부터 24일까지 서울숲 일대에서 정원 전시, 체험 프로그램, 공연을 만나보세요.",
    });

  return (
    <div className="app">
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onSearch={() => setSearchOpen(true)}
        onReserve={() =>
          setModal({
            title: "박람회 사전예매",
            body: "사전예매는 서울시 공공서비스예약 페이지에서 진행됩니다.",
            action: { label: "예매 페이지 열기", href: "https://yeyak.seoul.go.kr/" },
          })
        }
      />
      <main>
        <Hero activeSlide={activeSlide} setActiveSlide={setActiveSlide} onDetails={showDetails} />
        <section className="content-section page-shell" id="visit" aria-label="박람회 주요 정보">
          <ProgramPanel
            onOpen={(program) =>
              setModal({
                title: program.title,
                body: `${program.description}. 자세한 운영 시간과 참여 방법은 추후 공지됩니다.`,
              })
            }
          />
          <LocationPanel
            onMore={() =>
              setModal({
                title: "서울숲 오시는 길",
                body: "수인분당선 서울숲역 3번 출구에서 도보 약 5분 거리입니다. 행사 기간에는 대중교통 이용을 권장합니다.",
              })
            }
          />
          <NewsPanel
            onOpen={(title) =>
              setModal({
                title,
                body:
                  title === "공지사항 전체보기"
                    ? "박람회의 새로운 소식은 이곳에서 순차적으로 안내해 드립니다."
                    : "해당 공지의 자세한 내용은 박람회 운영 일정에 맞춰 업데이트됩니다.",
              })
            }
          />
        </section>
      </main>
      <Footer />
      {modal && <Modal content={modal} onClose={() => setModal(null)} />}
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </div>
  );
}
