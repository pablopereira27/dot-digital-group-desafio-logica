# 🚀 Logic Challenge - Dot Digital Group

## 🎯 Objetivo
Crie um programa (em qualquer linguagem, mas executado em modo **Shell**) que:

- O usuário informa **quantas linhas (altura)** a pirâmide deve conter.  
- O usuário informa **qual caractere** será utilizado para desenhar a pirâmide.  
- O usuário escolhe se serão desenhadas **1, 2 ou 3 pirâmides** na mesma linha.  
- O usuário escolhe se a pirâmide será exibida **normal** ou **invertida** (de ponta cabeça).  
- Após apresentar a(s) pirâmide(s), o programa deve apresentar o **total de linhas de todas as pirâmides**.  
- Caso o usuário tenha escolhido mais de 1 pirâmide, a(s) pirâmide(s) da **esquerda** devem ficar **invisíveis** (não desenhadas), mas ainda **contam no total de linhas**.  
  > Lembre-se: dois corpos não ocupam o mesmo lugar no espaço.

## 📦 Entrega
- Gere um arquivo **ZIP** com o seu código.  
  - 💡 Dica: se estiver usando **git** para controle de versão, você pode gerar o arquivo ZIP com:
    ```bash
    git archive --format=zip --output=./api.zip HEAD
    ```

- Inclua um arquivo **README.md** contendo:
  - 🛠️ Instruções de como rodar o programa  
  - 📚 Documentação relevante  
  - 📌 Observações ou qualquer outra informação que considere importante  

## 🛠️ Como rodar?

Para executar o projeto, utilize um dos seguintes comandos a partir da pasta raiz:

```bash
npm start
```  

```bash
node ./app.js
```

Ambos iniciam a aplicação corretamente.

## 📌 Observações sobre o desafio

Sobre o item **"Caso o usuário tenha escolhido mais de 1 pirâmide a ser exibida, o programa deve deixar a pirâmide da esquerda invisível."** 
> Me pareceu confuso, pois não fazia sentido incluir a pirâmide na contagem e, ao mesmo tempo, removê-la visualmente. Fiquei em dúvida sobre o que exatamente significava nesse contexto o termo **invisível**, então  por via das dúvidas optei por seguir ao pé da letra.

---

Sobre o item **"Após apresentar a(s) pirâmide(s), o programa deve apresentar o total de linhas de todas as pirâmides"**
> Levei em consideração que as pirâmides ocupam a mesma linha, dessa forma, o total de linhas, estando todas lado a lado, seria apenas a altura da pirâmide. No entanto, a expressão **"total de linhas de TODAS as pirâmides"** me levou a deduzir que deveria contabilizar a quantidade de linhas novamente a cada nova pirâmide.

## 📚 Documentação relevante

- O arquivo `Desafio de Logica - Dot Digital Group.pdf` é o PDF original com os dados sobre o desafio.