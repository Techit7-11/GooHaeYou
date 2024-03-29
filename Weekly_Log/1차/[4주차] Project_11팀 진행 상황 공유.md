## 팀 구성원, 개인 별 역할

---

- 홍지은 : 코드 리팩토링, 프론트
- 박경구 : REST API 학습, 토스페이먼츠
- 이민구 : 리프레쉬 토큰, 쿠키, OAuth 인증 구현
- 이재열 :  알림 기능 개발
- 차재준 : 검색 기능 구현
- 황세희 : 마이페이지 고도화, 정렬 기능 개발

## 팀 내부 회의 진행 회차 및 일자

---

- 2024.02.05/ 06/ 07/ 12 (화~목) : 디스코드 11팀 채널

## 현재까지의 개발 과정 요약 (최소 500자 이상)

---

- 팀 회의
    - 목표 달성률 : 100%
    - 배포 방법, 일정 등에 대한 논의
    - 현재 개발 상황 공유 & 프론트 역할 분담
    - 설 연휴 기간 작업 일정 공유

- 3주차 개발 완료 기능
    - 홍지은 : cicd, 배포, 프론트 지원서, 지원자매칭 관련 페이지 구현
    - 이민구 : 리프레쉬 토큰, 쿠키, OAuth 인증 리팩토링, 프론트 공고 작성, 수정, 삭제 구현
    - 이재열 :  스프링 이벤트를 이용하여 알림 기능 구현하기
    - 황세희 : 동적 정렬(querydsl), 프론트 지원하기, 마이페이지 리스트, 공고 목록 페이징
    - 차재준 : 검색 기능 구현

- 현재 개발 중인 기능
    - 홍지은 : 프론트 관심공고 기능
    - 박경구 :
    - 이민구 : 프론트 댓글 기능
    - 이재열 : 알림 기능 고도화 및 알림 기능 프론트 개발
    - 차재준 :
    - 황세희 :  프론트 검색 기능

## 개발 과정에서 나왔던 질문 (최소 200자 이상)

---

- 알림 같은 부분은 어떻게 구현을 하는게 좋을까
    - 강사님께서 스프링 이벤트를 사용하면 편하게 구현이 가능하다고 말씀을 주셨다
    - 이벤트 클래스가 ApplicationEvent를 상속을 하고, 이벤트 발행을 위해서는 ApplicationEventPublisher를 주입받아 발행을 해서, ApplicationListener 인터페이스를 구현하거나 @EventListener를 사용해 이벤트를 구독하여 알림 기능을 구현

## 개발 결과물 공유

---

Github Repository URL:

https://github.com/Techit7-11/gooHaeYu
