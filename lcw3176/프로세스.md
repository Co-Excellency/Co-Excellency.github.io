#### 이찬우

### 프로세스, 스레드
<div>
    <img src="https://gmlwjd9405.github.io/images/os-process-and-thread/process.png" width=400/>

   <img src="https://gmlwjd9405.github.io/images/os-process-and-thread/thread.png" width=400 />
    
</div>

#### 프로세스
- 작업의 단위
- OS는 가상메모리를 프로세스에게 할당 

#### 스레드
- 실행의 단위
- 프로세스에 속한 모든 스레드는 프로세스의 가상 메모리로 공간이 제약된다


#### 쉬운 비유
<img src="https://user-images.githubusercontent.com/59993347/207027505-92f5fe81-718d-49fe-9676-1fe6661c8bb3.jpg" width=400 />

- 프로세스: 한 가구
- 스레드: 세대원
- 할당된 가상 메모리: 집 평수 
- 스레드 스택: 각자의 방
- 프로세스 힙: 거실

```
Stack: 지역변수가 할당되는 영역, 함수 종료 시 반납
Heap: malloc(), calloc(), new 등 동적 할당 영역, 직접 or GC가 해제
Code: 실행 파일을 구성하는 명령어들이 올라가는 메모리 영역, 소스 파일
Data: 전역변수와 Static변수가 지정되는 영역
```

#### 도커

<div>
    <img src="https://user-images.githubusercontent.com/59993347/207033161-55e114ef-e965-4d3e-b89d-f71c5a746fc9.jpg" width=400/>

   <img src="https://user-images.githubusercontent.com/59993347/207033159-c0e284df-5299-4945-a311-3b181852dcaf.jpg" width=400 />
    
</div>

- 가상 머신
    - 프로세스에 OS를 다시 구성
    - 자원 소모 심함
- 도커
    - 기존의 컴퓨터 리소스와 겹치는 부분을 제거함
    - 하드웨어 자원 할당과 같이 시스템 콜이 필요한 요청을 도커 엔진이 대신 처리함
    - 하나의 프로세스 처럼 작동


#### 브라우저
<img src="https://image.toast.com/aaaadh/real/2018/techblog/b1493856379d11e69c16a9a4cf841567.png" width=400 />

<img src="https://miro.medium.com/max/1400/1*pjRSYsfW-D8MCrGh9LS_4Q.png" width=400 />

- 메인 스레드
    - 싱글 스레드
    - 렌더링 작업

