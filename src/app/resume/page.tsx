import React from "react";
import styles from './resume.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJs} from "@fortawesome/free-brands-svg-icons/faJs";
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import {faNodeJs} from "@fortawesome/free-brands-svg-icons/faNodeJs";
import {faPython} from "@fortawesome/free-brands-svg-icons/faPython";


export default function IntroPage() {
    return (
        <div className="main-content">
            <div className={styles.header}>
                <h1>이정은</h1>
                <p>Frontend Developer</p>
            </div>
            <div className={styles.box}>
                <span>💡</span>
                <p>
                    프론트엔드 개발 경력 5년 차입니다. Node.js와 JavaScript로 UI 개발을 시작했고,
                    최근 2년간 React를 활용한 사용자 친화적인 화면 구현에 집중해 왔습니다.
                    현재는 TypeScript와 Next.js를 공부하며 기술 스택을 확장하고 있습니다.
                </p>
            </div>

            <div className={`${styles.box} ${styles.flex}`}>
                <h3>경력</h3>
                <span className={styles.line}></span>
                <div className={`${styles.flex} ${styles.ml5}`}>
                    <div>
                        <p>
                            <b>티사이언티픽 - IT개발그룹 개발1팀</b>
                        </p>
                        <p>📅 2023.03 ~ 2025.03</p>
                        <div className={styles.ml15}>
                            <div>
                                <p>✔️ UI 설계, 개발 및 API 연동을 통한 사용자 인터페이스 구현</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.mt30}>
                        <p>
                            <b>아이티노매즈 - 기업부설연구소 연구개발 1팀</b>
                        </p>
                        <p>📅 2021.02 ~ 2023.03</p>
                        <div className={styles.ml15}>
                            <div>
                                <p>✔️ 사내 ERP 시스템 개발, 회사 홈페이지 개발 및 퍼블리싱</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.box} ${styles.flex}`}>
                <h3>프로젝트</h3>
                <span className={styles.line}></span>
                <div className={`${styles.flex} ${styles.ml5}`}>
                    <div>
                        <p><b>로그 채증 에이전트 개발 | KERIS (2025.01 ~ 2025.03)</b></p>
                        <div className={styles.ml15}>
                            <ul>
                                <li>목표: 교육기관의 보안 진단 및 로그 분석을 위한 Windows 로그 수집 에이전트 개발</li>
                                <li>성과</li>
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
                        <p><b>개인정보보호 자율점검 시스템 | 한국인터넷진흥원 (2024.11 ~ 2024.12)</b></p>
                        <div className={styles.ml15}>
                            <ul>
                                <li>목표: 한국인터넷진흥원 개인정보 자율점검 서비스 구축</li>
                                <li>성과</li>
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
                        <p><b>AI 개인정보 탐지 시스템 개발 | 한국인터넷진흥원 (2023.02 ~ 2024.12)</b></p>
                        <div className={styles.ml15}>
                            <ul>
                                <li>목표: 개인정보를 포함한 문서 데이터에 대한 탐지 및 비식별화 처리 시스템 구축</li>
                                <li>성과</li>
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
                        <p><b>MoisMo: AI 기반 개인정보 탐지 시스템 (2024.07 - 2024.08)</b></p>
                        <div className={styles.ml15}>
                            <ul>
                                <li>목표: 문서 업로드/다운로드 기능 및 서브라벨링 UI 개발</li>
                                <li>성과</li>
                                <ul className={styles.ml15}>
                                    <li>멀티파일 업로드/다운로드 모달 및 API 연동 구현</li>
                                    <li>서브라벨링 기능 화면 개발 및 API 연동을 통한 라벨 관리 기능 구현</li>
                                </ul>
                                <li>기술: React, JavaScript</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.box} ${styles.flex}`}>
                <h3>기술</h3>
                <span className={styles.line}></span>
                <div className={`${styles.flex} ${styles.ml5} ${styles.mt10}`}>
                    <div className={styles.stack}>
                        <span className={styles.spanBox}><FontAwesomeIcon icon={faReact}/>React</span>
                        <span className={styles.spanBox}><FontAwesomeIcon icon={faJs}/>JavaScript</span>
                        <span className={styles.spanBox}><FontAwesomeIcon icon={faNodeJs}/>Node.js</span>
                    </div>
                    <div className={`${styles.stack} ${styles.mt10}`}>
                        <span className={styles.spanBox}><FontAwesomeIcon className={styles.ml5} icon={faPython}/>Python</span>
                        <span className={styles.spanBox}>
                            <img src="/images/ts.png" alt="TypeScript.js" width="20"/>
                            TypeScript
                        </span>
                        <span className={styles.spanBox}>
                            <img src="/images/next.png" alt="Next.js" width="16"/>
                            Next.js
                        </span>
                    </div>
                </div>
            </div>
            <div className={`${styles.box} ${styles.flex}`}>
                <h3>학력 & 자격</h3>
                <span className={styles.line}></span>
                <div className={`${styles.flex} ${styles.ml5}`}>
                    <div>
                        <p>🎓 한국폴리텍대학 서울강서캠퍼스 (2021 - 2023)</p>
                        <div className={styles.ml27}>정보보안과 전문학사 졸업</div>
                    </div>
                    <div className={styles.mt10}>
                        <p>📜 정보처리산업기사 (2020)</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.box} ${styles.flex}`}>
                <h3>교육</h3>
                <span className={styles.line}></span>
                <div className={`${styles.flex} ${styles.ml5}`}>
                    <div>
                        <p><b>고숙련 일학습병행 P-TECH 과정</b></p>
                        <p>📅 2021 ~ 2023 <b className={styles.mg5}>|</b> 참여기업: 아이티노매즈</p>
                        <div className={styles.ml15}>
                            <p>✔️ NCS L5 수준의 SW 개발 이론 및 실무 교육</p>
                            <p>✔️ 정부 과제 프로젝트 실무 참여</p>
                        </div>
                    </div>
                    <div className={styles.mt30}>
                        <p><b>산학일체형 도제교육</b></p>
                        <p>📅 2019 ~ 2021 <b className={styles.mg5}>|</b> 참여기업: 웨딩북</p>
                        <div className={styles.ml15}>
                            <p>
                                ✔️ Swift, Java 기반 앱·웹 개발 프로젝트 기획 및 팀 협업 경험
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}