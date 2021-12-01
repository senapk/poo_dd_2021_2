# para rodar, ele precisa do solver.js, vá para o alvo solver.js
all: solver.js
	node solver.js

# para o solver.js, ele precisa do arquivo solver.ts, como não tem esse target
# execute a linha a seguir e volte para o alvo all
solver.js: solver.ts
	tsc solver.ts

install:
	npm install ts-node readline-sync @types/readline-sync @types/node