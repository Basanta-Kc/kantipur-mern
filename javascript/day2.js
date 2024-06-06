      // let age = prompt("what is your age??") // undefined
      // console.log(age, typeof age) // "80"
      // if (age) {
      //   console.log("you are allowed to drink");
      // } else {
      //   console.log("you are not allowed to drink");
      // }
      // let name = "basanta";
      // // const output = age > 18 ? "allowed" : "not allowed";
      // const result =true && "basanta" && null && undefined && 0
      // console.log(result);
      // if (true) {
      //   console.log("helloo");
      // }
      // let value = null; // undefined
      // const test  = 0 || "default value";
      // console.log(test)
      // const result = 0 ?? "default value";
      // console.log(result);
      let a = +prompt("a?", "");

      switch (a) {
        case 0:
          alert(0);
          break;
        case 1:
          alert(1);
          break;
        case 3:
          alert("3");
          break;
        default:
          // no need for an additional condition here as all other cases are handled by default
          alert("No match");
      }
