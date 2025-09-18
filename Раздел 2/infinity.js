Infinity > 100500; // true
-Infinity < -100500; // true
100500 / 0; // Infinity 

Infinity === Infinity; // true 

Infinity > Infinity; // false 
Infinity < Infinity; // false 

Infinity >= Infinity; // true 
Infinity <= Infinity; // true 

Infinity + Infinity; // Infinity 
-Infinity - Infinity; // —Infinity 

Infinity - Infinity; // NaN
-Infinity + Infinity; // NaN
Infinity / Infinity; // NaN 

Infinity / 10; // Infinity
Infinity * 10; // Infinity 
Infinity ** 10; // Infinity 
Infinity ** Infinity; // Infinity 

Infinity ** -Infinity; // 0
(-Infinity) ** Infinity; // Infinity 

/* 
  - Не использовать бесконечность без необходимости
  - Все, что делает бесконечность еще более бесконечной, возвращает бесконечность
  - Любые операции с бесконечностью и числом вернут бесконечность
  - Уменьшение бесконечности при делении или вычитании бесконечности в JavaScript не работает
  - Деление на 0 дает бесконечность
*/