/*
    Recursion: a function that calls itself!
*/

// recursion function
// function sayHello() {
//     console.log('hello');
//     sayHello();
// }

// sayHello();

// function sayHello(N) {
//     for (let i = 1; i <= N; i++){
//         console.log('hello');
//     }
// }

// sayHello(3);

// function sayHello(N) {

//     // breaking condition or stopping condition
//     if (N == 0) return;

//     console.log('hello');
//     sayHello(N-1);
// }

// sayHello(3);

/*
    Recursion Tree

    sayHello(3)
        - N = 3; 3 == 0; false
        - print hello
        - sayHello(2)
            - N = 2; 2 == 0; false
            - print hello
            - sayHello(1)
                - N = 1; 1 == 0; false
                - print hello
                - sayHello(0)
                    - N = 0; 0 == 0; true; return

*/

/*
    Write a recursion function to print the first N natural numbers as below.

    Input: 5

    Output: 

    5
    4
    3
    2
    1

    Input: 3

    Output:

    3
    2
    1
*/

// function sayHello(N) {

//     // breaking condition or stopping condition
//     if (N == 0) return;

//     console.log(N);
//     sayHello(N-1);
// }

// sayHello(5);


/*
    Write a recursion function to print the first N natural numbers as below.

    Input: 5

    Output: 

    1
    2
    3
    4
    5

    Input: 3

    Output:

    1
    2
    3
*/

// function sayHello(N) {

//     // breaking condition or stopping condition
//     if (N == 0) return;

//     sayHello(N - 1);
//     console.log(N);
// }

// sayHello(5);

/*
    sayHello(5)
        - N = 5; 5 == 0; false
        - sayHello(4)
            - N = 4; 4 == 0; false
            - sayHello(3)
                - N = 3; 3 == 0; false
                - sayHello(2)
                    - N = 2; 2 == 0; false
                    - sayHello(1)
                        - N = 1; 1 == 0; false
                        - sayHello(0)
                            - N = 0; 0 == 0; true; return
                        - console.log(N) x
                    - console.log(N) x
                - console.log(N) x
            - console.log(N) x
        - console.log(N) x

        sayHello(5)
*/

/*
    Given a string S, reverse the string using recursion.

    Input: apple
    Output: elppa
*/

// function reverse(S, len) {
//     if (len == 0) return;

//     console.log(S[len - 1]);
//     reverse(S, len - 1);
// }

// reverse('apple', 5);

/*
    reverse('apple')
        - S = 'apple'
        - 5 <= 1; false
        - return reverse(S.slice(1)) + S[0]
                    - S = 'pple'
                   - 4 <= 1; false
                   - return reverse(S.slice(1)) + S[0]
                            - S = 'ple'
                            - 3 <= 1 ; false
                            - return reverse(S.slice(1)) + S[0]
                                        - S = 'le'
                                        - 2 <= 1; false;
                                        - return reverse(S.slice(1)) + S[0] 
                                                    - S = 'e'
                                                    - 1 <= 1; true; return S

    reverse('apple')
*/

// function reverse(S) {
//     if (S.length <= 1) return S;
//     else return reverse(S.slice(1)) + S[0];
// }

// console.log(reverse('apple'));

/*
    Problem: Given N, print the sum of first N natural numbers.


    Input: 5

    Output: 15

    Explanation: 
        1 + 2 + 3 + 4 + 5
        = 15
*/

// let sum = 0;

// function S(N) {
//     if (N == 0) return sum;
//     sum += N;
//     return S(N - 1);
// }

// console.log(S(5));

/*
    sum = sum + N
        = 0 + 5
        = 5 + 4 + 3 + 2 + 1 = 15

    15

*/

// recurrence relation
/*
    S(N) = ?

    N = 1, S(1) = 1
    N = 2, S(2) = 1 + 2 = 3
    N = 3, S(3) = 1 + 2 + 3 = 6
    N = 4, S(4) = 1 + 2 + 3 + 4 = 10
    N = 5, S(5) = 1 + 2 + 3 + 4 + 5 = 15

    Backward substitution

    N = 1, S(1) = 1
    N = 2, S(2) = S(1) + 2 = 3
    N = 3, S(3) = S(2) + 3 = 6
    N = 4, S(4) = S(3) + 4 = 10
    N = 5, S(5) = S(4) + 5 = 15

    Generalize:

    For N = 1, S(N) = 1
    For N > 1, S(N) = S(N-1) + N


*/

// function S(N) {
//     // For N = 1, S(N) = 1
//     if (N == 1) return 1;
//     // For N > 1, S(N) = S(N-1) + N
//     return S(N - 1) + N;
// }

// console.log(S(3));

// function S(N) {
//     if (N == 1) return 1;
//     return S(N - 1) + N;
// }

// console.log(S(3));

/*
    F(N) = ?

    N = 0, F(0) = 1
    N = 1, F(1) = 1
    N = 2, F(2) = F(1) * 2 = 2
    N = 3, F(3) = F(2) * 3 = 6
    N = 4, F(4) = F(3) * 4 = 24
    N = 5, F(5) = F(4) * 5 = 120


    For N = 0 or 1, F(N) = 1
    For all N > 1, F(N) = F(N-1) * N
*/

function F(N) {
    // For N = 0 or 1, F(N) = 1
    if (N == 0 || N == 1) return 1;
    // For all N > 1, F(N) = F(N-1) * N
    return F(N - 1) * N;
}

console.log(F(5));