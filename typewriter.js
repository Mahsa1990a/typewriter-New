const sentence1 = "hello there from lighthouse labs";

const typeWriter = function(sentence) {

  let delay = 0
  for (let char of sentence) {
    //console.log(char);
    //process.stdout.write(char);
  
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
  
    delay += 50;//each letter every 50ms
  }

  setTimeout(() => {
    console.log("\n");
  }, delay); //after delay finished like 1600

};

typeWriter(sentence1);

