let main = document.createElement("div");
let child1 = document.createElement("div");
let child2 = document.createElement("div");
let message = document.createElement("h1");

main.classList.add("container", "mt-5", "text-center", "bg-primary");

child1.classList.add("row", "mt-5");

child2.classList.add(
  "card",
  "shadow",
  "col-md-4",
  "text-center",
  "col-md-12",
  "p-3",
  "text-white",
  "bg-primary"
);

message.classList.add("display-1");

setTimeout(() => {
  message.innerText = "10";
  setTimeout(() => {
    message.innerText = "9";
    setTimeout(() => {
      message.innerText = "8";
      setTimeout(() => {
        message.innerText = "7";
        setTimeout(() => {
          message.innerText = "6";
          setTimeout(() => {
            message.innerText = "5";
            setTimeout(() => {
              message.innerText = "4";
              setTimeout(() => {
                message.innerText = "3";
                setTimeout(() => {
                  message.innerText = "2";
                  setTimeout(() => {
                    message.innerText = "1";
                    setTimeout(() => {
                      message.innerText = "Happy New Year ";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

child2.appendChild(message);
child1.appendChild(child2);
main.appendChild(child1);

document.body.append(main);

let body = document.body;
body.classList.add("bg-primary");
