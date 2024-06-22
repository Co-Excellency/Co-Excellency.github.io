# 예시

## AWS DynamoDB
AWS DynamoDB 를 최근에 사용해 봤는데, 파티셔닝을 내부 함수로 진행한다는 사실이 기억남.

DynamoDB 는 해시 함수를 사용하여 파티션 키 값을 통해 항목을 저장하고 검색한다.

파티션 키의 경우 -> 단순 기본 키
해시 함수를 사용하여 새로운 데이터를 저장할 위치를 결정하므로, 데이터를 파티션에 균일하게 분배하는 데 최적화 된다고 한다.
=> 데이터 수에 비해 많은 수의 고유 값을 가질 수 있는 파티션 키를 선택할 것이라 권장.

파티션 키와 정렬 키의 경우 -> 복합 키
파티션 키의 해시 값을 계산 후, 서로의 값을 붙여 균등하게 파티셔닝을 진행한다.

## Discord
또 다른 예시의 친숙한 디스코드

서버 클러스터 내에서 채널 및 사용자 그룹들을 특정 노드에 할당
노드에 할당할 때 안정 해시를 사용하여 노드의 추가 및 삭제에 따른 리밸런싱 최소화


### 참조
https://medium.com/@adityashete009/consistent-hashing-amazon-dynamodb-part-1-f5719aff7681
https://discord.com/blog/how-discord-scaled-elixir-to-5-000-000-concurrent-users

