/*
    Either to compare one algorithm with another algorithm or to evaluate the performance of a single algorithm
        - time complexity
        - space complexity

    time complexity => amount of time taken by an algorithm to run!

    space complexity => amount of space / memory required by an algorithm to run!

    Mathematical Notations: Asymptotic Notations

    1. Big - 'O' (Big - Oh) - Upper bound
    2. Big - 'Ω' (Big - Omega) - Lower bound
    3. Big - 'Θ' (Big - Theta) - Tight bound

    Situtations / Cases: (Input)

    1. Worst Case
    2. Best Case
    3. Average Case

    Time Complexity: Upper bound, Worst Case, Big - 'O'

    Example: 

    Algorithm: Linear Search

    key = 4

    numbers = [1, 2, 7, 6, 4, 5, 8]

    Case (first element): If the key = 1, Comparisons => 1 => Best Case => O(1) - abbr: Order of 1

    Case (middle element): If the key = 6, Comparisons => 4 => Average Case => O(N/2 + 1) => O(N)

    Case (last element): If the key = 8, Comparisons => 7 => Worst Case => O(N)
    Case (element not present): If the key = 10, Comparisons => 7 => Worst Case => O(N)
*/

/*
    Example: 1

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Options: 

    O(1)
    O(logN)
    O(N)
    O(N logN)
    O(N^2)
    O(N^2 logN)
    O(N^3)
    O(N^3 logN)
    O(2^N)
    O(N!)

    Solution: 

    let a = 0, b = 0; // declarations, intializations, expressions, assignments, conditionals
    => O(1), Constant Time

    for (i = 0; i < N; i++) {
        a = a + rand();
    }

    total executions = values of i
    i = 0, 1, 2, 3, 4, 5, .... N-1 => N

    N = 5, i = 0, 1, 2, 3, 4 => executions = 5

    => O(N)

    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    total executions = values of j
    j = 0, 1, 2, 3, 4, ...., M-1 => M

    => O(M)

    total time complexity, T(N, M) = 1 + N + M
                                   = N + M [Since 1 is Constant]
                                   = O(N + M)

*/

/*
    Example 2:

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < N; j++) {
        b = b + rand();
    }

    Time Complexity: T(N) = 1 + N + N
                          = 1 + 2N
                          = 2N
                          = O(N)
*/

/*
    Example: 3

    let M = 3N;
    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Time Complexity: T(N) = 2 + N + M
                          = 2 + N + 3N
                          = 2 + 4N
                          = 4N
                          = O(N)
*/

/*
    Example: 4

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < N; j++) {
            b = b + rand();
        }
    }

    Time Complexity: T(N) = 1 + N * N
                          = O(N^2)

    Second Way:

    1. Assume some random values of N

    N = 4,
        i = 0; j = 0, 1, 2, 3 => 4 executions
        i = 1; j = 0, 1, 2, 3 => 4 executions
        i = 2; j = 0, 1, 2, 3 => 4 executions
        i = 3; j = 0, 1, 2, 3 => 4 executions

        executions = 4 + 4 + 4 + 4 = 16 executions

    N = 5
        i = 0; j = 0, 1, 2, 3, 4 => 5 executions
        i = 1; j = 0, 1, 2, 3, 4 => 5 executions
        i = 2; j = 0, 1, 2, 3, 4 => 5 executions
        i = 3; j = 0, 1, 2, 3, 4 => 5 executions
        i = 4; j = 0, 1, 2, 3, 4 => 5 executions

        executions = 5 + 5 + 5 + 5 + 5 = 25 executions

    N = 6
        i = 0; j = 0, 1, 2, 3, 4, 5; executions = 6
        i = 1; j = 0, 1, 2, 3, 4, 5; executions = 6 
        i = 2; j = 0, 1, 2, 3, 4, 5; executions = 6
        i = 3; j = 0, 1, 2, 3, 4, 5; executions = 6
        i = 4; j = 0, 1, 2, 3, 4, 5; executions = 6
        i = 5; j = 0, 1, 2, 3, 4, 5; executions = 6

        executions = 6 + 6 + 6 + 6 + 6 + 6 = 36

    2. Summarize and find the relationship between the number of executions and the length of input N

        N = 4, executions = 16
        N = 5, executions = 25
        N = 6, executions = 36

        For the Given N, executions = N^2

    3. Time Complexity Calculation

        T(N) = 1 + N^2
             = O(N^2)
*/

/*
    Example: 5

    let a = 0;
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    }

    Time Complexity: 

    N = 4,
        i = 0; j = 4, 3, 2, 1 => 4 
        i = 1; j = 4, 3, 2 => 3
        i = 2; j = 4, 3 => 2
        i = 3; j = 4 => 1

        total executions = 4 + 3 + 2 + 1
                         = 10

    N = 5,
        i = 0; j = 5, 4, 3, 2, 1 => 5
        i = 1; j = 5, 4, 3, 2 => 4
        i = 2; j = 5, 4, 3 => 3
        i = 3; j = 5, 4 => 2
        i = 4; j = 5 => 1

        total executions = 5 + 4 + 3 + 2 + 1
                         = 15
    
    N = 4, executions = 10
    N = 5, executions = 15
    N = 6, executions = 21
    N = 10, executions = 55

    executions = sum of first N natural numbers
             S(N) = N + N-1 + N-2 + N-3 + ..... + 4 + 3 + 2 + 1
             S(N) = 1 + 2 + 3 + 4 + ..... + N-3 + N-2 + N-1 + N
          ------------------------------------------------------------
          
             Adding both the equations above,

             S(N) + S(N) = N+1 + N+1 + N+1 + N+1 + ....... + N+1 + N+1 + N+1 + N+1
             2 * S(N) = N * (N+1)
             S(N) = (N * (N+1))/2
    
    For a given N, executons = (N * (N+1))/2

    N = 10, executions = (N * (N+1))/2
                       = (10 * 11)/2
                       = 110/2
                       = 55


    time complexity, T(N) = 1 + (N * (N+1))/2
                          = 1 + (N^2 + N)/2
                          = 1/2 (N^2 + N)
                          = N^2 + N
                          = O(N^2)
*/

/*
    Example: 6

    let i, j, k = 0;
    for (i = n / 2; i <= n; i++) { 
        for (j = 2; j <= n; j = j * 2) {
            k = k + n / 2;
        }
    }

    time complexity: 

    outer loop: 
        1 to N => N
        [1 to 10] => 10
        N/2 to N => N/2 + 1
        [5 to 10] => 5, 6, 7, 8, 9, 10 => 6

        N = 5, N = 2.5, 3.5, 4.5 => 3
               N/2 + 1 => 2.5 + 1 => 3.5

        executions = N/2 + 1

    inner loop:

        N = 10; j = 2, 4, 8; executions = 3
        N = 29; j = 2, 4, 8, 16; executions = 4
        N = 30; j = 2, 4, 8, 16; executions = 4
        N = 31; j = 2, 4, 8, 16; executions = 4
        N = 40; j = 2, 4, 8, 16, 32; executions = 5

        2^X = N, What raised to the power of 2 approximately equal to N (closest to N)
        Solve for X?

        Apply log2 on both the sides,

        log2 (2^X) = log2(N)
        X log2(2) = log2(N)
        X (1) = log2(N)
        X = log2(N)

        For a Given N, executions = log2(N)

        time complexity, T(N) = 1 + (N/2 + 1) * log2(N)
                              = 1 + N/2 * log2(N) + log2(N)
                              = 1/2 * N * log2(N) + log2(N)
                              = N * log2(N) + log2(N)
                              = O(N * log2(N))

        1, 2, 4, 8, 16, 32, 64, 128, 256, ......N log2(N)
        N ....256, 128, 64, 32, 16, 8, 4, 2, 1 log2(N)

        1, 3, 9, 27, 81, .... log3(N)

*/

// console.log(`For N = ${10}, executions = ${Math.log2(10)}`);
// console.log(`For N = ${29}, executions = ${Math.log2(29)}`);
// console.log(`For N = ${30}, executions = ${Math.log2(30)}`);
// console.log(`For N = ${31}, executions = ${Math.log2(31)}`);
// console.log(`For N = ${40}, executions = ${Math.log2(40)}`);

/*
    O(2^N)

    Problem: given an array of values, find how many ways we can select the values from the array and print all the ways.

    Input: [1, 2, 3]
    Output:

    0 values => ()
    1 values => (1), (2), (3)
    2 values => (1, 2), (1, 3), (2, 3)
    3 values => (1, 2, 3)

    executions = number of ways = 8

    Input: [1, 2, 3, 4]
    Output:

    0 values => ()
    1 values => (1), (2), (3), (4)
    2 values => (1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)
    3 values => (1, 2, 3), (1, 2, 4), (1, 3, 4), (2, 3, 4)
    4 values => (1, 2, 3, 4)

    number of ways => 16

    N = 3, executions = 8
    N = 4, executions = 16
    N = 5, executions = 32

    O(2^N)
*/

/*
    O(N!)

    Problem: given a string S, find how many ways we can re-arrange the characters of the string to form a new string or word

    Input: abc

    Output:

    abc
    acb
    bac
    bca
    cab
    cba

    number of ways = 6



    Input: ab
    Output:

    ab
    ba

    number of ways = 2

    Input: abcd
    Output:

    abcd
    abdc
    acdb
    adbc
    badc
    bacd
    cabd
    cbda
    cdba
    cdab
    ...
    ...

    N = 2, executions = 2
    N = 3, executons = 6
    N = 4, executions = 24

    5! = 5 x 4 x 3 x 2 x 1 = 120

    O(N!)
*/