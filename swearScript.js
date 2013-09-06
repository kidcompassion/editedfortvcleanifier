    var pageContent = document.body.innerHTML;

    //finds the bad words on the page
    var badWords = /\bass|fuck|hell|shit|dick|cunt|motherfuck|bitch|cock|damn/i;

     //counts how many times the word appears
    var matchingSwears = pageContent.match(/\bass|fuck|motherfuck|hell|shit|dick|cunt|bitch|cock|damn/gi);
    //sets quotes as global variable
    var quotes;
    //console.log(matchingSwears);

    //counts how many swears on the page
    if (matchingSwears == null) {
      alert("Clean as a whistle!");
      
    } else {
      count = matchingSwears.length; 
      //console.log(count);

        i = 0;
          while (i < count){
              //loops through swears to find alternate words by resetting quotes var
              switch (matchingSwears[i])
                {
                case "motherfuck":
                quotes=["unclehug", "motherlove", "motherforget", "melonfarm", "monkey-fight"];
                break;
                case "fuck":
                quotes=["shuck", "fudge", "forget", "sock", "fuzz", "suck", "sex", "fun", "fudgebar", "farg", "sugarlumps", "flip"];
                break;
                case "shit":
                quotes=["shoot", "doot","shucks", "mr. perfect", "pierce brosnan", "spit"];
                break;
                case "ass":
                quotes=["butt","rear", "behind", "bottom", "buttock", "fanny"];
                break;
                case "hell":
                quotes=["heaven", "heck", "downstairs", "h-e-double-hockeysticks"];
                break;
                case "cunt":
                quotes=["Rhymes with your favorite Todd Rundgren album", "bunt", "vj", "ladybits"];
                break;
                case "cock":
                quotes=["weiner", "dingdong", "sock", "Wally Wick", "noodle"];
                break;
                case "bitch":
                quotes=["witch", "nice lady", "snitch", "strong independent woman"];
                break;
                case "damn":
                quotes=["darn", "dang", "dear"];
                break;
                case "dick":
                quotes=["Richard", "Wally Wick", "bucko"];
                break;
                }
            //console.log(quotes);  
            //selects random words from quotes array
            randno = "<span style = 'font-weight: bold; font-family: arial, sans-serif; font-size: 16px; text-transform: uppercase;'>" + quotes[Math.floor( Math.random() * quotes.length )] + "</span>";
            //replaces swears with randomly selected words
            pageContent = pageContent.replace(badWords, randno);
            i++;
          }

          document.body.innerHTML = pageContent;
    }
