#### 이찬우

### 프로그램 실행 과정
- 메모리 할당 
- 프로세스 생성
- 스레드 생성....

### 가상 메모리
![aaa](https://user-images.githubusercontent.com/59993347/208242394-ff8d53ae-2f6a-48a9-aa53-80a640ad8ae3.jpg)

- 실행파일 일부만 적재
- NP(Not Present) -> 페이지 폴트 -> 페이지 프레임(물리 메모리) 할당 -> 페이지 테이블에 기록 == 요구 페이징

#### MMU
- CPU 는 virtual address를 MMU 에 요청한다.
- MMU 는 virtual address로 해당 프로세스의 PCB의 페이지 테이블에 접근하여 CR3 레지스터로부터 base address를 얻는다.
- MMU 는 base address로, Memory의 물리주소에 접근한다.

### 오해
#### 하드디스크 스왑 != 가상 메모리

![d](https://user-images.githubusercontent.com/59993347/208240451-5050f021-753a-4e30-b310-8a40aef3ea72.jpg)
![a](https://user-images.githubusercontent.com/59993347/208240990-44c8dfc1-2d1d-48d7-a47b-5659fa101126.jpg)


#### 스와핑
<div>
<img src="https://mblogthumb-phinf.pstatic.net/20150517_141/kaheeyah_1431867397343K2zzn_PNG/K-136.png?type=w2"
 width=400>

<img src="https://mblogthumb-phinf.pstatic.net/20150517_88/kaheeyah_1431867396681eEr1C_PNG/K-134.png?type=w2"
 width=400>
</div>

