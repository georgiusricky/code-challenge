# Breaking the Vigenère Cipher  - codewars

## Task
Write a function that can deduce which key was used during a Vigenere cipher encryption, given the resulting ciphertext, and the length of that key.
### Notes
* The input string, as well as the encryption key, will consist of uppercase letters only
* all texts will be in English


### Vigenere cipher
(For a full description, check the wikipedia article.)

_In a Caesar cipher, each letter of the alphabet is shifted along some number of places. For example, with a shift of 3, A would become D, B would become E, Y would become B, and so on. The Vigenère cipher has several Caesar ciphers in sequence with different shift values._

The secret key is selected, and then repeated until it becomes as long as the text you want to encrypt/decrypt (if the key ends up being longer than the text, the superfluous key-characters can be removed):

```bash
text          =  "HELLOWORLD"
original key  =  "ABCXYZ"
repeated key  =  "ABCXYZABCX" (superfluous "YZ" at the end was removed)
```

Note: For extra style points you can have your solution handle array values as query parameters, however there are no tests that explicitly test for them.

Each character of the key tells how many times a character of the original text standing at the same position has to be shifted:

```bash
text:      H    E    L    L    O    W    O    R    L    D
          ------------------------------------------------
key:       A    B    C    X    Y    Z    A    B    C    X
          ------------------------------------------------
shift:     0    1    2   23   24   25    0    1    2   23
          ------------------------------------------------
result:    H    F    N    I    M    V    O    S    N    A
```
A ciphertext can then be decrypted by applying the same shifts but with a negative sign:

```bash
text:      H    F    N    I    M    V    O    S    N    A
          ------------------------------------------------
key:       A    B    C    X    Y    Z    A    B    C    X
          ------------------------------------------------
shift:     0   -1   -2  -23  -24  -25    0   -1   -2  -23
          ------------------------------------------------
result:    H    E    L    L    O    W    O    R    L    D

```