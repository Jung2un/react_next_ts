import React, {useState} from "react";
import styles from './ResumeSection.module.css';
import SectionBox from "@/app/components/SectionBox";
import WeatherModal from "@/app/portfolio/weather/page";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJs} from "@fortawesome/free-brands-svg-icons/faJs";
import {faFigma} from "@fortawesome/free-brands-svg-icons/faFigma";
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import {faNodeJs} from "@fortawesome/free-brands-svg-icons/faNodeJs";
import {faPython} from "@fortawesome/free-brands-svg-icons/faPython";
import {faGitlab} from "@fortawesome/free-brands-svg-icons/faGitlab";
import TodoModal from "@/app/portfolio/todo/page";


export default function ResumeSection() {
    const [modalOpen, setModalOpen] = useState(false);
    const [todoModalOpen, setTodoModalOpen] = useState(false);

    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.roleTitle}>이정은</h1>
                <p className={styles.roleText}>Frontend Developer</p>
            </div>
            <div className={styles.box}>
                <span>💡</span>
                <div>
                    <mark className={styles.highlight}>
                        5년차 프론트엔드 개발자로, 사용성과 완성도를 함께 추구합니다.
                    </mark>
                    <p className={styles.mt10}>
                        최근 2년간은 React를 중심으로 UI/UX 개선과 코드 품질 향상에 힘써 왔습니다.
                    </p>
                    <p>
                        현재는 TypeScript와 Next.js를 적용하며 익히고 있으며,
                        팀 내 원활한 협업과 커뮤니케이션을 중요하게 생각합니다.
                    </p>
                </div>
            </div>

            <SectionBox title="이력">
            <div className={styles.list}>
                <div className={styles.company}>
                    티사이언티픽 &nbsp;|&nbsp; IT개발그룹 연구원
                </div>
                <span className={styles.period}>2023.03 – 2025.03</span>
            </div>
            <div>✔️️ UI 설계 및 API 연동을 통한 사용자 인터페이스 구현</div>
            <div className={`${styles.list} ${styles.mt30}`}>
                <div className={styles.company}>
                    아이티노매즈 &nbsp;|&nbsp; 기업부설연구소 연구원
                </div>
                <span className={styles.period}>2021.02 ~ 2023.03</span>
            </div>
            <div>✔️ 사내 ERP 시스템 개발, 회사 홈페이지 개발 및 퍼블리싱</div>
            </SectionBox>
            <SectionBox title="프로젝트">
            <div>
                <p><b>📁 로그 채증 에이전트 개발 | KERIS (2025.01 ~ 2025.03)</b></p>
                <div className={styles.ml27}>
                    <ul>
                        <li>목표: 교육기관의 보안 진단 및 로그 분석을 위한 Windows 로그 수집 에이전트 개발</li>
                        <li>주요 작업</li>
                        <ul className={styles.ml15}>
                            <li>
                                시스템 로그 자동 수집 기능 구현 (Event Log, FileSystem, Registry)
                            </li>
                            <li>브라우저 히스토리 및 사용자 활동 기록 추출 기능 개발</li>
                            <li>단일 EXE 실행 구조 패키징</li>
                        </ul>
                        <li>기술: Python</li>
                    </ul>
                </div>
            </div>
            <div className={styles.mt30}>
                <p><b>📁 개인정보보호 자율점검 시스템 | 한국인터넷진흥원 (2024.11 ~ 2024.12)</b></p>
                <div className={styles.ml27}>
                    <ul>
                        <li>목표: 한국인터넷진흥원 개인정보 자율점검 서비스 구축</li>
                        <li>주요 작업</li>
                        <ul className={styles.ml15}>
                            <li>관리자 기능: 자율점검표 관리, 점검 현황 API 연동 및 데이터 관리 기능 개발</li>
                            <li>사용자 기능: 자율점검 수행, 제출 내역 확인 및 모바일 반응형 UI 개발</li>
                            <li>서비스 안정화 및 유지보수 편의성 향상</li>
                        </ul>
                        <li>기술: Java, Cubrid, JSTL</li>
                    </ul>
                </div>
            </div>
            <div className={styles.mt30}>
                <p><b>📁 AI 개인정보 탐지 시스템 개발 | 한국인터넷진흥원 (2023.02 ~ 2024.12)</b></p>
                <div className={styles.ml27}>
                    <ul>
                        <li>목표: 개인정보를 포함한 문서 데이터에 대한 탐지 및 비식별화 처리 시스템 구축</li>
                        <li>주요 작업</li>
                        <ul className={styles.ml15}>
                            <li>개인정보 탐지 및 비식별 처리 기능을 포함한 메인 서비스 화면 및 전체 UI 구성</li>
                            <li>입력 문장을 기반으로 API 연동하여 개인정보 탐지 및 비식별화 기능을 구현</li>
                            <li>관리자 기능: 사용자 키 관리, 대시보드, 통계 시각화 화면 개발</li>
                            <li>사용자 기능: 키 발급/삭제, 통계 확인 기능 개발</li>
                        </ul>
                        <li>기술: React, JavaScript</li>
                    </ul>
                </div>
            </div>
            <div className={styles.mt30}>
                    <p><b>📁 MoisMo: AI 기반 개인정보 탐지 시스템 (2024.07 ~ 2024.08)</b></p>
                    <div className={styles.ml27}>
                        <ul>
                            <li>목표: 문서 업로드/다운로드 기능 및 서브라벨링 UI 개발</li>
                            <li>주요 작업</li>
                            <ul className={styles.ml15}>
                                <li>멀티파일 업로드/다운로드 모달 및 API 연동 구현</li>
                                <li>서브라벨링 기능 화면 개발 및 API 연동을 통한 라벨 관리 기능 구현</li>
                            </ul>
                            <li>기술: React, JavaScript</li>
                        </ul>
                    </div>
                </div>
            </SectionBox>
            <SectionBox title="기술" addClass={`${styles.flexColumn} ${styles.mt10}`}>
            {/* Language */}
            <div className={styles.stackGroup}>
                <p className={styles.stackTitle}><span className={styles.mr3}>🔴</span>Languages</p>
                <div className={styles.stack}>
                    <span className={styles.spanBox}><FontAwesomeIcon icon={faJs}/> JavaScript</span>
                    <span className={styles.spanBox}>
                      <img src="/images/ts.png" width="20" alt="TypeScript"/> TypeScript
                    </span>
                    <span className={styles.spanBox}><FontAwesomeIcon icon={faPython}/> Python</span>
                </div>
            </div>

            {/* Framework / Library */}
            <div className={styles.stackGroup}>
                <p className={styles.stackTitle}><span className={styles.mr3}>🟠</span>Frameworks & Libraries</p>
                <div className={styles.stack}>
                    <span className={styles.spanBox}><FontAwesomeIcon icon={faReact}/> React</span>
                    <span className={styles.spanBox}>
                      <img src="/images/next.png" width="16" alt="Next.js"/> Next.js
                    </span>
                    <span className={styles.spanBox}><FontAwesomeIcon icon={faNodeJs}/> Node.js</span>
                    <span className={styles.spanBox}>
                      <img src="/images/tailwind.svg" width="16" alt="Tailwind"/> Tailwind
                    </span>
                </div>
            </div>

            {/* Tools */}
            <div className={styles.stackGroup}>
                <p className={styles.stackTitle}><span className={styles.mr3}>🟡</span>Tools</p>
                <div className={styles.stack}>
                    <span className={styles.spanBox}><FontAwesomeIcon icon={faGitlab}/> GitLab</span>
                    <span className={styles.spanBox}>
                      <img src="/images/postman.svg" width="16" alt="Postman"/> Postman
                    </span>
                    <span className={styles.spanBox}><FontAwesomeIcon icon={faFigma}/> Figma</span>
                </div>
            </div>
            </SectionBox>
            <SectionBox title="포트폴리오" addClass={styles.portfolio}>
                <div className={styles.collection}>
                    <div className={styles.card} onClick={() => setModalOpen(true)}>
                        <img src="/images/preview_1.png" className={styles.cardImg}/>
                        <div className={styles.cardContent}>
                            <h4>☀️ 날씨 예보</h4>
                            <div className={styles.tags}>
                                <span className={styles.pink}>Next.js</span>
                                <span className={styles.blue}>TypeScript</span>
                            </div>

                        </div>
                    </div>
                    <WeatherModal isOpen={modalOpen} onClose={() => setModalOpen(false)}/>

                    <div className={styles.card} onClick={() => setTodoModalOpen(true)}>
                        <img src="/images/preview_2.png" className={styles.cardImg}/>
                        <div className={styles.cardContent}>
                            <h4>✅ To-do 리스트</h4>
                            <div className={styles.tags}>
                                <span className={styles.pink}>Next.js</span>
                                <span className={styles.blue}>TypeScript</span>
                            </div>
                        </div>
                    </div>
                    <TodoModal isOpen={todoModalOpen} onClose={() => setTodoModalOpen(false)}/>
                </div>
            </SectionBox>

            <SectionBox title="학력 & 자격">
                <div>
                    <p>🎓 한국폴리텍대학 서울강서캠퍼스 (2021 - 2023)</p>
                    <div className={styles.ml27}>정보보안과 전문학사 졸업</div>
                </div>
                <div className={styles.mt10}>
                    <p>📜 정보처리산업기사 - 한국산업인력공단</p>
                </div>
                <div className={styles.mt10}>
                    <p>📜 정보기기운용기능사 - 한국기술자격검정원</p>
                </div>
            </SectionBox>
            <SectionBox title="교육">
            <div className={styles.list}>
                <div className={styles.company}>
                    고숙련 일학습병행 P-TECH 과정 &nbsp;|&nbsp; 아이티노매즈
                </div>
                <span className={styles.period}>2021 ~ 2023</span>
            </div>
            <div>✔️ NCS L5 수준의 SW 개발 이론 및 실무 교육</div>
            <div>✔️ 정부 과제 프로젝트 실무 참여</div>

            <div className={`${styles.list} ${styles.mt30}`}>
                <div className={styles.company}>
                    산학일체형 도제교육 &nbsp;|&nbsp; 웨딩북
                </div>
                <span className={styles.period}>2019 ~ 2021</span>
            </div>
            <div>✔️ Swift, Java 기반 앱·웹 개발 프로젝트 기획 및 팀 협업 경험</div>
            </SectionBox>
        </div>
    );
}