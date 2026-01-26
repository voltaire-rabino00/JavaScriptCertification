# JavaScriptCertification
This is a javascript certification for freeCodeCamp

🧠 Huwag Pa-kamote: Ang Simple Guide sa Strings

Ayos lang malito! Narito ang mga "Golden Rules" para hindi ka na malito sa susunod.

1. Ang Rule ng "Zero" (Indexing)

Laging tandaan: Sa programming, ang bilang ay nagsisimula sa 0.

Character

J

a

v

a

S

c

r

i

p

t

Index

0

1

2

3

4

5

6

7

8

9

Bakit length - 1? Dahil nagsimula tayo sa 0, ang pang-10 na letra ay nasa index 9.

subject[10]? Walang laman diyan, kaya undefined ang sagot.

2. Ang indexOf() Trick

Ang .indexOf("a", 2) ay parang pagsasabi sa computer na:

"Hanapin mo ang letrang 'a', pero huwag kang tumingin sa simula. Magsimula ka sa index 2."

Sa salitang JavaScript:

Index 0: J

Index 1: a (Lalampasan ito dahil nagsimula tayo sa 2)

Index 2: v

Index 3: a <-- Dito niya mahahanap ang susunod na 'a'!

3. Empty String ("") vs. Undefined

Ang Empty String ("") ay parang isang bakanteng box. May box ka (ang string), pero walang laman sa loob. Kaya ang length nito ay 0.

Ang Undefined ay parang walang box sa harap mo.

4. Template Literals (Yung may Backticks `)

Dapat may dollar sign $ at curly braces {}.

✅ `Hello ${name}` -> Lalabas ang pangalan.

❌ `Hello {name}` -> Literal na "Hello {name}" ang lalabas. Para itong nakalimutan mong isaksak ang charger kaya hindi gumana ang variable.

Quick Cheat Sheet:

Length: Bilang ng lahat ng letra (simula sa 1).

Index: Posisyon ng letra (simula sa 0).

Huling Index: length - 1.

Space: Binibilang din ito bilang character!

