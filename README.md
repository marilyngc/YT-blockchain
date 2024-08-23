## Minando blockchain ⛓️ 

https://github.com/user-attachments/assets/fbccef15-cb68-49de-ac00-60b5f4e0c2a5


## Mini explicación ⭐

Usamos el algoritmo SHA256  para poder cibrar el hash de los bloques.

la clase Block se crea cuando se mine. El minado lo que hace es conseguir un nuevo hash y una vez minado ese bloque, se agrega a la blockchain.


1. **Time**: El tiempo de creación del bloque.
2. **Previous hash**: Hash anterior para unirlo con el nuevo hash.
3. **Difficulty**: Manera de gestionar el algoritmo de minado. Si muchos bloques se estan minando paralelamente (puede ser un socket) le subimos la dificultad.
4. **Data**: Dato del nuevo bloque. En este caso el nombre para identificarlo.
5. **Nonce**: Numero de vueltas que da el algoritmo para encontrar el hash que necesitamos.



