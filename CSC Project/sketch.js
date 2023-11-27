  // remember to uncomment music

  // Goal 8000
  
  /* To DO List 
    Level Intro - Done
    I rule ttrivia verse
    Think you can beat me
    Lets see you beat this score 1000
    (Score top right Timer with decreasing bar) 

    Playing 1-10

    Level 2 - Done 
    Interesting lets dial up the difficulty 
    Current score number in a transparent bubble 
    Words current score 
    (Score top right Timer with decreasing bar) 

    Playing 10-25

    Level 3 - Done
    I saved the worst for last. Good Luck
    (Score top right Timer with decreasing bar) Playing

    Playing 25-40

    Game Over - Done 
    20 of 40
    Answered correctly 
    Points                1000
    Streak Bonus            +750
    Total (big font)        2750

    Previous score screen

    Play Again Screen
  */
  
    let questions = [
      {
        // 1
        question: "What is anthropology?",
        options: ["The study of ancient artifacts", "The study of human societies and cultures", "The study of anthologies", "The study of dinosaurs"],
        correctOption: 1
      },
      {
        // 2
        question: "Which of the following is a subfield of anthropology that focuses on the study of past human societies through excavation " + "\n" + "and analysis of artifacts?",
        options: ["Cultural anthropology", "Linguistic anthropology", "Archaeology", "Biological anthropology"],
        correctOption: 2
      },
      { 
        // 3
        question: "What term is used to describe the learned behaviors, beliefs, and customs of a group of people?",
        options: ["Ecology", "Culture", "Genetics", "Archaeology"],
        correctOption: 1
      },
      {
        // 4
        question: "Which subfield of anthropology is concerned with the study of human languages?",
        options: ["Archaeology", "Biological anthropology", "Linguistic anthropology", "Cultural anthropology"],
        correctOption: 2 
      },
      {
        // 5
        question: "In anthropology, what is the term for the process by which individuals learn and internalize the values and norms of their culture?",
        options: ["Socialization", "Isolation", "Acculturation", "Segregation"],
        correctOption: 0
        
      },
      {
        // 6
        question: "How do anthropologists define the term \"society\"?",
        options: ["A group of animals", "A group of people who share a common culture", "A political organization", "A religious institution"],
        correctOption: 1
        
      },
      {
        // 7
        question: "Which of the following is a key element of cultural anthropology?",
        options: ["Excavation of ancient artifacts", "Study of human evolution", "Examination of linguistic patterns", "Exploration of cultural diversity"],
        correctOption: 3
        
      },
      {
        // 8
        question: "What is the main focus of biological anthropology?",
        options: ["Cultural practices", "Human evolution and biology", "Linguistic diversity", "Archaeological excavations"],
        correctOption: 1
        
      },
      {
        // 9
        question: "What term is used to describe the process of adapting to and adopting elements of another culture?",
        options: ["Acculturation", "Isolation", "Segregation", "Ethnocentrism"],
        correctOption: 0
        
      },
      {
        // 10
        question: "Which of the following is an example of material culture?",
        options: ["Language", "Beliefs", "Tools and artifacts", "Social norms"],
        correctOption: 2
        
      },
      {
      
        // 11
        question: "How do anthropologists define the term \"ethnocentrism\"",
        options: ["A belief in cultural relativism", "Evaluating other cultures in terms of one's own cultural values", "Studying cultures objectively", "Adapting to different cultural norms"],
        correctOption: 1
        
      },
      {
        // 12
        question: "What is the study of human evolution and the physical variation among human populations called?",
        options: ["Cultural anthropology", "Archaeology", "Biological anthropology", "Linguistic anthropology"],
        correctOption: 2
        
      },
      {
        // 13
        question: "In anthropology, what does the term \"fieldwork\" refer to?",
        options: ["Laboratory research", "Studying cultures in their natural environments", "Literary analysis", "Linguistic research"],
        correctOption: 1
        
      },
      {
        // 14
        question: "Which of the following best describes the focus of cultural anthropology?",
        options: ["The study of human biology", "The study of human societies and their cultures", "The study of ancient civilizations", "The study of language and communication"],
        correctOption: 1
        
      },
      {
        // 15
        question: "What is the primary tool used by archaeologists to uncover and analyze artifacts?",
        options: ["Microscope", "Shovel", "DNA analysis", "Telescope"],
        correctOption: 1
        
      },
      {
        // 16
        question: "What is the term for a system of communication using symbols, sounds, or gestures to convey meaning?",
        options: ["Culture", "Language", "Biology", "Archaeology"],
        correctOption: 1
        
      },
      {
        // 17
        question: "Which subfield of anthropology explores the relationships between humans and their environment?",
        options: ["Cultural anthropology", "Linguistic anthropology", "Environmental anthropology", "Biological anthropology"],
        correctOption: 2
        
      },
      {
        // 18
        question: "What is the term for the set of rules and expectations that guide behavior within a society?",
        options: ["Laws", "Norms", "Rituals", "Customs"],
        correctOption: 1
        
      },
      {
        // 19
        question: "Which of the following is a characteristic of culture?",
        options: ["Genetically inherited traits", "Universality across all societies", "Static and unchanging", "Dynamic and adaptive"],
        correctOption: 3
        
      },
      {
        // 20
        question: "In anthropology, what is the term for the practice of judging another culture by the standards of one's own culture?",
        options: ["Cultural relativism", "Ethnocentrism", "Acculturation", "Cultural adaptation"],
        correctOption: 1
        
      },
      {
        // 21
        question: "What is the primary focus of linguistic anthropology?",
        options: ["The study of human evolution", "The analysis of ancient artifacts", "The study of human languages", "The examination of cultural practices"],
        correctOption: 2
        
      },
      {
        // 22
        question: "What is the study of patterns and processes of human social interaction and relationships called?",
        options: ["Sociology", "Psychology", "Anthropology", "Ethnography"],
        correctOption: 0
        
      },
      {
        // 23
        question: "Which subfield of anthropology explores the biological aspects of human beings, including evolution and genetics?",
        options: ["Cultural anthropology", "Archaeology", "Linguistic anthropology", "Biological anthropology"],
        correctOption: 3
        
      },
      {
        // 24
        question: "What is the term for the transmission of cultural elements from one society or generation to another?",
        options: ["Acculturation", "Cultural adaptation", "Cultural diffusion", "Ethnography"],
        correctOption: 2
        
      },
      {
        // 25
        question: "What is the process by which individuals internalize cultural beliefs and practices called?",
        options: ["Acculturation", "Socialization", "Ethnography", "Segregation"],
        correctOption: 1
        
      },
      {
        // 26
        question: "Which of the following is an example of non-material culture?",
        options: ["Clothing styles", "Tools and artifacts", "Language", "Food preferences"],
        correctOption: 2
        
      },
      {
        // 27
        question: "What is the term for the beliefs, values, and practices that define a particular group of people?",
        options: ["Material culture", "Culture", "Norms", "Customs"],
        correctOption: 1
        
      },
      {
        // 28
        question: "What is the study of human societies and cultures through the analysis of material remains called?",
        options: ["Linguistic anthropology", "Cultural anthropology", "Archaeology", "Biological anthropology"],
        correctOption: 2
        
      },
      {
        // 29
        question: "What term is used to describe a social system in which descent and inheritance are traced through the mother's line?",
        options: ["Matrilineal", "Patrilineal", "Bilateral", "Unilineal"],
        correctOption: 0
        
      },
      {
        // 30
        question: "Which of the following is an example of a rite of passage?",
        options: ["Graduation ceremony", "Daily meal", "Language acquisition", "Family gathering"],
        correctOption: 0
        
      },
      {
        // 31
        question: "What is the term for the systematic study of myths and legends in a particular culture?",
        options: ["Archaeology", "Ethnography", "Folklore", "Linguistics"],
        correctOption: 2
        
      },
      {
        // 32
        question: "How do cultural anthropologists typically gather information about a culture?",
        options: ["Laboratory experiments", "Surveys and questionnaires", "Fieldwork and participant observation", "Literary analysis"],
        correctOption: 2
      
      },
      {
        // 33
        question: "What is the term for the set of rules that govern the structure and functioning of a society?",
        options: ["Customs", "Norms", "Laws", "Traditions"],
        correctOption: 2
        
      },
      {
        // 34
        question: "In anthropology, what is the term for the exchange of goods and services between individuals or groups?",
        options: ["Reciprocity", "Redistribution", "Market exchange", "Barter"],
        correctOption: 3
        
      },
      {
        // 35
        question: "Which of the following is an example of a non-verbal form of communication?",
        options: ["Speaking a foreign language", "Writing a letter", "Using hand gestures", "Sending an email"],
        correctOption: 2
        
      },
      {
        // 36
        question: "What term is used to describe the belief that one's own culture is superior to others?",
        options: ["Cultural relativism", "Ethnocentrism", "Cultural diffusion", "Acculturation"],
        correctOption: 1
        
      },
      {
        // 37
        question: "What is the term for the physical objects that people create, use, and share?",
        options: ["Symbols", "Beliefs", "Artifacts", "Customs"],
        correctOption: 2
        
      },
      {
        // 38
        question: "How do anthropologists define the concept of \"cultural relativism\"?",
        options: ["The belief that all cultures are equal", "The practice of judging other cultures by one's own standards", "The objective study of cultures without bias", "The adaptation of one's own culture to another"],
        correctOption: 0
        
      },
      {
        // 39
        question: "What is the term for the process of individuals adapting to a new culture?",
        options: ["Acculturation", "Ethnocentrism", "Cultural diffusion", "Cultural relativism"],
        correctOption: 0
        
      },
      {
        // 40
        question: "Which of the following is an example of a cultural universal?",
        options: ["The practice of arranged marriages", "The use of language", "The belief in a single deity", "The wearing of specific clothing"],
        correctOption: 1
        
      }            
      ];
      
        let backgroundMusic;
        let backgroundImg;
        
        let currentQuestion = 0;
        let score = 0;
        let streak = 0;
        let correctCount = 0;
        let streakTotal = 0
        let actualTotal = 0;
        let currentLevel = 1;
        let levelCounter = -1; //
        let gameRestarted, gameStarted;
      
        let timerTime = 1800;
        let timerDuration = timerTime; // Timer Duration (30 Seonds)
        let uneditedTimerDuration = timerDuration;
        let timerBarWidth;
      
        let startTime;
        let duration = 30000;
      
        // let extraCanvas;
      
        const GameState = {
          Start: "Start", Playing: "Playing", GameOver: "GameOver", 
          LevelIntro: "Intro", Level2: "Level 2", 
          Level3: "Level 3", Level3: "Level 4",
        }; 
      
        let game = { maxTime : 0, state: GameState.Start };
        let timer = game.maxTime;
      
      function preload() {
        backgroundMusic = loadSound('Music/BackgroundMusic.wav');
        backgroundImg = loadImage('Images/HourGlass.png');
      }
      
      function setup() {
        createCanvas(windowWidth, windowHeight);
        // extraCanvas = createGraphics(1121, 128);
        // extraCanvas.background(255, 0, 0);
        textSize(16);
      
        // backgroundMusic.loop();
      }
      
      function reset() {
        timer = game.maxTime;
        timerDuration = timerTime;
      }
      
      function resetGame() {
        timer = game.maxTime;
        timerDuration = timerTime;
        currentQuestion = 0;
        currentLevel = -1;
        score = 0; 
        streak = 0;
        correctCount = 0;
        streakTotal = 0
        actualTotal = 0;
      }
      
      
      // draw the hour glaa after each level
      // add higher score and streaks
      
      
      function draw() {
        background(220);
        fill(0);
      
        switch(game.state) {
          case GameState.Start:
      
            background(0);
            fill(255);
            textSize(50);
            textAlign(CENTER);
            text("Anthropology Trivia", windowWidth/2, windowHeight/2);
            textSize(20);
            text("Press any key to start", windowWidth/2, (windowHeight/2)+40);
            // console.log(levelCounter); 0
      
          break;
      
          case GameState.Playing:
            background(220);
            // Transparent Background 
            fill(0, 0, 0, 220);
            rect(windowWidth/2-465, windowHeight/2-315, 900, 50, 50);
            // Bar Background
            fill(225);
            rect(windowWidth/2-400, windowHeight/2-300, 800, 20, 20);
            // Black bar outline
            strokeWeight(2);
            stroke(0);
            rect(windowWidth/2-400, windowHeight/2-300, 800, 20, 20);
            if (timerDuration > 0) {
              timerDuration -= 1;
              timerBarWidth = map(timerDuration, 0, uneditedTimerDuration, 0, 800);
            }
            // Moving white bar
            fill(255);
            rect(windowWidth/2-400, windowHeight/2-300, timerBarWidth, 20, 20);
            //Hourglass
            image(backgroundImg, windowWidth/2-550, windowHeight/2-340, 100, 105);
            // Starts / Keeps game flowing
          if ((levelCounter == -1 && !gameRestarted) || (levelCounter == 0 && !gameRestarted)) {
              gameRestarted = true;
          if (levelCounter == -1) {
              console.log("The game just started.");
              levelCounter++;
          } else if (levelCounter == 0) {
              reset();
              console.log("The game just restarted.");
          }
      }
            // Timer number 
            fill(255);
            textAlign(RIGHT);
            text("" + timer, windowWidth/2-415, windowHeight/2-280);
            if (frameCount % 60 == 0 && timer >= 0) { timer++; }
            textAlign(LEFT);
            // Questions Text
            fill(0);
            textSize(30);
            strokeWeight(0);
            fill(0);
            circle(windowWidth/2, windowHeight/2, 10);
            text(questions[currentQuestion].question, 20, windowHeight/4+90-50);
            // Options Text
            for (let i = 0; i < questions[currentQuestion].options.length; i++) {
              // Draws a rectangle for an visual rep of option
              stroke(0);
              strokeWeight(4);
              fill(255, 255, 255);
              // Location 
              let x = 50;
              let y = (windowHeight/4)+65+80-30 + i * 30;
              let width = windowWidth/2+100;
              let height = 30;
              rect(x, y, width, height);
              // Ends here
              // Text reset
              fill(0);
              strokeWeight(0);
              // Options for text (Answer choices)
              text(`${i + 1}. ${questions[currentQuestion].options[i]}`, 20, (windowHeight/4)+90+80-30 + i * 30);
            }
            
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
            if (timer == 30) { 
              switch (levelCounter) {
                case -1:
                  levelCounter++;
                  game.state = GameState.Playing;
                  console.log(levelCounter);
                  break;
                case 0:
                  gameRestarted = false;
                  game.state = GameState.Level2;
                  levelCounter++;
                  console.log(levelCounter);
                  break;
                case 1:
                  game.state = GameState.Level3;
                  levelCounter++;
                  console.log(levelCounter);
                  break;
                case 2:
                  game.state = GameState.GameOver
                  levelCounter = 0; 
                  console.log(levelCounter);           
                  break;
              }
            }
            
            text(`Score: ${actualTotal}`, (windowWidth*11/12)-60, windowHeight - 25);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
          break;
      
          case GameState.LevelIntro:
      
          background(0);
          fill(255);
          textSize(50);
          textAlign(CENTER);
          text("I AM THE MASTER OF ANTHROPOLOGY", windowWidth/2, windowHeight/2);
          textSize(20);
          text("Do you really think YOU can beat me??", windowWidth/2, (windowHeight/2)+40);
      
          text("HAAA HAAA Try me !!! HAAA HAA", windowWidth/2, (windowHeight/2)+80);
          
          text("Lets see if you can even beat this score: 1000", windowWidth/2, (windowHeight/2)+120);
      
          text("Press any key to start", windowWidth/2, (windowHeight/2)+160);
      
          /*
      (Score top right Timer with decreasing bar) Playing  
          */
      
          break;
      
          case GameState.Level2:
      
          background(0);
          fill(255);
          if (actualTotal <= 700) {
            textSize(50);
            text("Your doing worst than I thought ... Time to dial up the difficulty", windowWidth/2, (windowHeight/2)-15);
          }
          else {
            textSize(50);
            text("Hmm ... Good Job .. lets dial up the difficulty", windowWidth/2, (windowHeight/2)-15);
          }
          textAlign(CENTER);
          textSize(20);
          text(`Current Score: ${actualTotal}`, windowWidth/2, (windowHeight/2)+80); 
          text("Press any key to continue ", windowWidth/2, (windowHeight/2)+165);
      
          /*
      Current score number in a transparent bubble 
          */
      
          break;
      
          case GameState.Level3:
          background(0);
          fill(255);
          textAlign(CENTER);
          textSize(20);
          text("I saved the worst for last. Good luck ;}", windowWidth/2, (windowHeight/2)+40);
          text("Press any key to continue ", windowWidth/2, (windowHeight/2)+165);
          break;
      
          case GameState.GameOver:
          
          background(0);
      
          fill(255);
          textAlign(CENTER);
          textSize(140);
          text("Game Over", windowWidth/2, windowHeight/2-180);
          textSize(20);
          text(`${correctCount} out of 40`, windowWidth/2, windowHeight/2-70);
          text("Answered Correctly", windowWidth/2, windowHeight/2-35);
      
          text("Points:", windowWidth/2-500, windowHeight/2+80); textAlign(RIGHT); text(`${score}`, windowWidth/2+500, windowHeight/2+80); textAlign(CENTER);
          text("Streak Bonus:", windowWidth/2-500, windowHeight/2+120); textAlign(RIGHT); text(`+ ${streakTotal}`, windowWidth/2+500, windowHeight/2+120); textAlign(CENTER);
          textSize(50);
          text("Total: ", windowWidth/2-500, windowHeight/2+190);/* Big font */ textAlign(RIGHT); text(`${actualTotal}`, windowWidth/2+510, windowHeight/2+190); textAlign(CENTER);
          
          break;
        }
      }
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      function mouseClicked() {
            // Check if an option is clicked
            for (let i = 0; i < questions[currentQuestion].options.length; i++) {
            const optionY = (windowHeight/4)+65+80-30 + i * 30;
              if (mouseY > optionY && mouseY < optionY + 20) {
              // Check if the clicked option is correct
                if (i === questions[currentQuestion].correctOption) {
                  score += 100;
                  // console.log("Current Score: " + score);
                  correctCount++;
                  streak += (i * 50);
                  // console.log("Current Streak: " + streak);
                  streakTotal += streak;
                  // console.log("Current Streak Total Amount: " +streakTotal);
                } 
                else {
                  streak = 0;
                  // console.log("Current Reset Amount: " + streak);
                }
                // console.log("Current total score is " + (score + streakTotal));
      
                // Move to the next question
                actualTotal = score + streakTotal; 
                currentQuestion++;
                console.log("Current  Total Amount: " + actualTotal);
      
                if (currentQuestion == 10) {
                    game.state = GameState.Level2;
                }
                else if (currentQuestion == 25) {
                    game.state = GameState.Level3;
                }
                
                // Check if there are more questions
                if (currentQuestion === questions.length) {
                // Display final score
                alert(`Game Over! Your Score: ${actualTotal}`);
                game.state = GameState.GameOver;
            }
          } 
        }
      }
      
      function keyPressed() {
        switch (game.state) {
          case GameState.Start :
      
            game.state = GameState.Playing;
            // backgroundMusic.play();
      
          break;
      
          case GameState.Playing :
      
          break;
      
          case GameState.LevelIntro :
      
            reset();
            game.state = GameState.Playing;
      
          break;
      
          case GameState.Level2 :
      
            reset();
            game.state = GameState.Playing;
      
          break;
      
          case GameState.Level3 :
      
            reset();
            game.state = GameState.Playing;
      
          break;
      
          case GameState.GameOver :
            
            resetGame();
            game.state = GameState.Playing;
          
          break;
        }
      }