# 이찬우

```java
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.*;

public class ConsistentHashing {
    private final SortedMap<Integer, String> circle = new TreeMap<>();
    private final int numberOfReplicas;

    public ConsistentHashing(int numberOfReplicas, String[] nodes) {
        this.numberOfReplicas = numberOfReplicas;

        for (String node : nodes) {
            add(node);
        }
    }

    private void add(String node) {
        for (int i = 0; i < numberOfReplicas; i++) {
            int hash = getHash(node + i);
            circle.put(hash, node);
        }
    }

    private void remove(String node) {
        for (int i = 0; i < numberOfReplicas; i++) {
            int hash = getHash(node + i);
            circle.remove(hash);
        }
    }

    private String get(String key) {
        if (circle.isEmpty()) {
            return null;
        }
        int hash = getHash(key);
        if (!circle.containsKey(hash)) {
            SortedMap<Integer, String> tailMap = circle.tailMap(hash);
            hash = tailMap.isEmpty() ? circle.firstKey() : tailMap.firstKey();
        }
        return circle.get(hash);
    }

    private int getHash(String key) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] digest = md.digest(key.getBytes(StandardCharsets.UTF_8));
            // Convert the first 4 bytes of the hash to an int
            return ((digest[0] & 0xFF) << 24) | ((digest[1] & 0xFF) << 16) | ((digest[2] & 0xFF) << 8) | (digest[3] & 0xFF);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }

    public static void main(String[] args) {
        String[] nodes = {"1", "2", "3"};
        ConsistentHashing consistentHashing = new ConsistentHashing(3, nodes);
        List<String> data = new ArrayList<>();
        Map<String, Integer> count = new HashMap<>();

        for(int i = 0; i < 100000; i++){
            String temp = UUID.randomUUID().toString();

//            System.out.println("Data is allocated to: " + consistentHashing.get(temp));
            data.add(temp);

            String location =  consistentHashing.get(temp);

            if(!count.containsKey(location)){
                count.put(location, 0);
            }

            count.put(location, count.get(location) + 1);
        }
        for(String key : count.keySet()){
            System.out.println(key + ": " + count.get(key));
        }

        consistentHashing.add("4");

        System.out.println("After adding 4");
        count.clear();

        for(String i : data){
            String location =  consistentHashing.get(i);

            if(!count.containsKey(location)){
                count.put(location, 0);
            }

            count.put(location, count.get(location) + 1);
        }

        for(String key : count.keySet()){
            System.out.println(key + ": " + count.get(key));
        }

        consistentHashing.remove("1");
        count.clear();

        System.out.println("After removing 1");
        for(String i : data){
            String location =  consistentHashing.get(i);

            if(!count.containsKey(location)){
                count.put(location, 0);
            }

            count.put(location, count.get(location) + 1);
        }

        for(String key : count.keySet()){
            System.out.println(key + ": " + count.get(key));
        }

        for(int i = 5; i < 102; i++){
            consistentHashing.add(Integer.toString(i));
        }

        count.clear();

        System.out.println("노드 100개");
        for(String i : data){
            String location =  consistentHashing.get(i);

            if(!count.containsKey(location)){
                count.put(location, 0);
            }

            count.put(location, count.get(location) + 1);
        }

        for(String key : count.keySet()){
            System.out.println(key + ": " + count.get(key));
        }
    }
}

output 

1: 7969
2: 35327
3: 56704
After adding 4
1: 7969
2: 31888
3: 19403
4: 40740
After removing 1
2: 32556
3: 19403
4: 48041
노드 100개
88: 1612
89: 493
90: 989
91: 881
92: 1313
93: 1977
94: 2062
95: 1241
96: 947
97: 457
98: 440
10: 793
11: 387
99: 523
12: 3400
13: 1366
14: 2656
15: 665
16: 622
17: 992
18: 421
19: 976
2: 1090
3: 1429
4: 927
5: 1397
6: 462
7: 1236
8: 486
9: 91
20: 1744
21: 1184
22: 711
23: 490
24: 698
25: 403
26: 343
27: 172
28: 835
29: 663
30: 310
31: 209
32: 1653
33: 1540
34: 1714
35: 936
36: 619
37: 774
38: 1429
39: 975
40: 1220
41: 432
42: 878
43: 702
44: 428
45: 1586
46: 1497
47: 1554
48: 475
49: 139
50: 1365
51: 1385
52: 899
53: 484
54: 913
55: 577
56: 1085
57: 1098
58: 1577
59: 843
60: 1341
61: 836
62: 563
63: 375
64: 642
65: 2365
66: 830
67: 858
68: 440
69: 438
70: 792
71: 749
72: 1710
73: 1355
74: 1359
75: 1486
76: 1137
77: 218
78: 1065
79: 2478
100: 774
101: 1834
80: 2170
81: 590
82: 840
83: 506
84: 510
85: 1414
86: 614
87: 841

```



