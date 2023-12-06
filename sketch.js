  // Remember to uncomment music --------------------------------------------------------------------------------------------
  // Reset times -------------------------------------------------------------------------------------------------------------
  // Goal 8000
      
  /*
      Darius Lewis 
      CSC Interactive project. 
  */
    
      let questions = [
      {
        // 1
        question: "What is anthropology?",
        options: [
          "The study of ancient artifacts",
          "The study of human societies and cultures",
          "The study of anthologies",
          "The study of dinosaurs"
        ],
        correctOption: 1,
        hint: "Not A or C."
      },
      {
        // 2
        question: "Which of the following is a subfield of anthropology that focuses on the study" + "\n" + " of past human societies through excavation and analysis of artifacts?",
        options: [
          "Cultural anthropology",
          "Linguistic anthropology",
          "Archaeology",
          "Biological anthropology"
        ],
        correctOption: 2,
        hint: "It involves digging into the past."
      },
      {
        // 3
        question:
          "What term is used to describe the learned behaviors, beliefs, and customs of a group of people?",
        options: ["Ecology", "Culture", "Genetics", "Archaeology"],
        correctOption: 1,
        hint: "It starts with the letter 'C.'"
      },
      {
        // 4
        question:
          "Which subfield of anthropology is concerned with the study of human languages?",
        options: [
          "Archaeology",
          "Biological anthropology",
          "Linguistic anthropology",
          "Cultural anthropology"
        ],
        correctOption: 2,
        hint: "It involves the study of language."
      },
      {
        // 5
        question: "In anthropology, what is the term for the process by which individuals learn " + "\n" + "and internalize the values and norms of their culture?",
        options: [
          "Socialization",
          "Isolation",
          "Acculturation",
          "Segregation"
        ],
        correctOption: 0,
        hint: "It's the process of learning cultural norms."
      },
      {
        // 6
        question: "How do anthropologists define the term \"society\"?",
        options: [
          "A group of animals",
          "A group of people who share a common culture",
          "A political organization",
          "A religious institution"
        ],
        correctOption: 1,
        hint: "It involves a group of people with shared culture."
      },
      {
        // 7
        question:
          "Which of the following is a key element of cultural anthropology?",
        options: [
          "Excavation of ancient artifacts",
          "Study of human evolution",
          "Examination of linguistic patterns",
          "Exploration of cultural diversity"
        ],
        correctOption: 3,
        hint: "It focuses on the study of diverse cultures."
      },
      {
        // 8
        question: "What is the main focus of biological anthropology?",
        options: [
          "Cultural practices",
          "Human evolution and biology",
          "Linguistic diversity",
          "Archaeological excavations"
        ],
        correctOption: 1,
        hint: "It involves the study of human evolution and biology."
      },
      {
        // 9
        question: "What term is used to describe the process of adapting to and adopting" + "\n" + " elements of another culture?",
        options: ["Acculturation", "Isolation", "Segregation", "Ethnocentrism"],
        correctOption: 0,
        hint: "It's the process of adapting to a different culture."
      },
      {
        // 10
        question: "Which of the following is an example of material culture?",
        options: ["Language", "Beliefs", "Tools and artifacts", "Social norms"],
        correctOption: 2,
        hint: "It involves tangible items created by a culture."
      },
      {
        // 11
        question:
          "How do anthropologists define the term \"ethnocentrism\"?",
        options: [
          "A belief in cultural relativism",
          "Evaluating other cultures in terms of one's own cultural values",
          "Studying cultures objectively",
          "Adapting to different cultural norms"
        ],
        correctOption: 1,
        hint: "It involves judging other cultures by one's own standards."
      },
      {
        // 12
        question:
          "What is the study of human evolution and the physical variation among human populations called?",
        options: [
          "Cultural anthropology",
          "Archaeology",
          "Biological anthropology",
          "Linguistic anthropology"
        ],
        correctOption: 2,
        hint: "It involves the study of human biology and evolution."
      },
      {
        // 13
        question: "In anthropology, what does the term \"fieldwork\" refer to?",
        options: [
          "Laboratory research",
          "Studying cultures in their natural environments",
          "Literary analysis",
          "Linguistic research"
        ],
        correctOption: 1,
        hint: "It involves on-site research in natural environments."
      },
      {
        // 14
        question:
          "Which of the following best describes the focus of cultural anthropology?",
        options: [
          "The study of human biology",
          "The study of human societies and their cultures",
          "The study of ancient civilizations",
          "The study of language and communication"
        ],
        correctOption: 1,
        hint: "It focuses on the study of societies and cultures."
      },
      {
        // 15
        question:
          "What is the primary tool used by archaeologists to uncover and analyze artifacts?",
        options: [
          "Microscope",
          "Shovel",
          "DNA analysis",
          "Telescope"
        ],
        correctOption: 1,
        hint: "It's a tool used for digging and excavation."
      },
      {
        // 16
        question: "What is the term for a system of communication using symbols, sounds, or gestures" + "\n" + " to convey meaning?",
        options: [
          "Culture",
          "Language",
          "Biology",
          "Archaeology"
        ],
        correctOption: 1,
        hint: "It involves the use of symbols and sounds to convey meaning."
      },
      {
        // 17
        question:
          "Which subfield of anthropology explores the relationships between humans and their environment?",
        options: [
          "Cultural anthropology",
          "Linguistic anthropology",
          "Environmental anthropology",
          "Biological anthropology"
        ],
        correctOption: 2,
        hint: "It focuses on the relationship between humans and their surroundings."
      },
      {
        // 18
        question:
          "What is the term for the set of rules and expectations that guide behavior within a society?",
        options: [
          "Laws",
          "Norms",
          "Rituals",
          "Customs"
        ],
        correctOption: 1,
        hint: "It involves guidelines for behavior within a society."
      },
      {
        // 19
        question:
          "Which of the following is a characteristic of culture?",
        options: [
          "Genetically inherited traits",
          "Universality across all societies",
          "Static and unchanging",
          "Dynamic and adaptive"
        ],
        correctOption: 3,
        hint: "It's dynamic and capable of adaptation."
      },
      {
        // 20
        question: "In anthropology, what is the term for the practice of judging another culture" + "\n" + " by the standards of one's own culture?",
        options: [
          "Cultural relativism",
          "Ethnocentrism",
          "Acculturation",
          "Cultural adaptation"
        ],
        correctOption: 1,
        hint: "It involves judging based on one's own cultural standards."
      },
      {
        // 21
        question:
          "What is the primary focus of linguistic anthropology?",
        options: [
          "The study of human evolution",
          "The analysis of ancient artifacts",
          "The study of human languages",
          "The examination of cultural practices"
        ],
        correctOption: 2,
        hint: "It involves the study of languages in the context of human societies."
      },
      {
        // 22
        question:
          "What is the study of patterns and processes of human social interaction and relationships called?",
        options: [
          "Sociology",
          "Psychology",
          "Anthropology",
          "Ethnography"
        ],
        correctOption: 0,
        hint: "It's a discipline focused on human social interactions."
      },
      {
        // 23
        question: "Which subfield of anthropology explores the biological aspects" + "\n" + " of human beings, including evolution and genetics?",
        options: [
          "Cultural anthropology",
          "Archaeology",
          "Linguistic anthropology",
          "Biological anthropology"
        ],
        correctOption: 3,
        hint: "It involves the study of human biology, evolution, and genetics."
      },
      {
        // 24
        question:
          "What is the term for the transmission of cultural elements from one society or generation to another?",
        options: [
          "Acculturation",
          "Cultural adaptation",
          "Cultural diffusion",
          "Ethnography"
        ],
        correctOption: 2,
        hint: "It involves the spread of cultural elements between societies."
      },
      {
        // 25
        question:
          "What is the process by which individuals internalize cultural beliefs and practices called?",
        options: [
          "Acculturation",
          "Socialization",
          "Ethnography",
          "Segregation"
        ],
        correctOption: 1,
        hint: "It's the process of learning and internalizing cultural beliefs."
      },
      {
        // 26
        question:
          "Which of the following is an example of non-material culture?",
        options: [
          "Clothing styles",
          "Tools and artifacts",
          "Language",
          "Food preferences"
        ],
        correctOption: 2,
        hint: "It involves aspects of culture that are not physical or tangible."
      },
      {
        // 27
        question:
          "What is the term for the beliefs, values, and practices that define a particular group of people?",
        options: [
          "Material culture",
          "Culture",
          "Norms",
          "Customs"
        ],
        correctOption: 1,
        hint: "It encompasses the shared beliefs and practices of a group."
      },
      {
        // 28
        question:
          "What is the study of human societies and cultures through the analysis of material remains called?",
        options: [
          "Linguistic anthropology",
          "Cultural anthropology",
          "Archaeology",
          "Biological anthropology"
        ],
        correctOption: 2,
        hint: "It involves the analysis of artifacts and material culture."
      },
      {
        // 29
        question: "What term is used to describe a social system in which descent and inheritance" + "\n" + " are traced through the mother's line?",
        options: [
          "Matrilineal",
          "Patrilineal",
          "Bilateral",
          "Unilineal"
        ],
        correctOption: 0,
        hint: "It involves tracing descent through the maternal line."
      },
      {
        // 30
        question:
          "Which of the following is an example of a rite of passage?",
        options: [
          "Graduation ceremony",
          "Daily meal",
          "Language acquisition",
          "Family gathering"
        ],
        correctOption: 0,
        hint: "It's a ceremonial event marking a significant life transition."
      },
      {
        // 31
        question:
          "What is the term for the systematic study of myths and legends in a particular culture?",
        options: [
          "Archaeology",
          "Ethnography",
          "Folklore",
          "Linguistics"
        ],
        correctOption: 2,
        hint: "It involves the study of traditional stories and legends within a culture."
      },
      {
        // 32
        question:
          "How do cultural anthropologists typically gather information about a culture?",
        options: [
          "Laboratory experiments",
          "Surveys and questionnaires",
          "Fieldwork and participant observation",
          "Literary analysis"
        ],
        correctOption: 2,
        hint: "It involves immersive research conducted in natural environments."
      },
      {
        // 33
        question:
          "What is the term for the set of rules that govern the structure and functioning of a society?",
        options: [
          "Customs",
          "Norms",
          "Laws",
          "Traditions"
        ],
        correctOption: 2,
        hint: "It involves guidelines for the structure and functioning of a society."
      },
      {
        // 34
        question:
          "In anthropology, what is the term for the exchange of goods and services between individuals or groups?",
        options: [
          "Reciprocity",
          "Redistribution",
          "Market exchange",
          "Barter"
        ],
        correctOption: 3,
        hint: "It involves the exchange of goods and services without using money."
      },
      {
        // 35
        question:
          "Which of the following is an example of a non-verbal form of communication?",
        options: [
          "Speaking a foreign language",
          "Writing a letter",
          "Using hand gestures",
          "Sending an email"
        ],
        correctOption: 2,
        hint: "It involves communication without using spoken or written words."
      },
      {
        // 36
        question:
          "What term is used to describe the belief that one's own culture is superior to others?",
        options: [
          "Cultural relativism",
          "Ethnocentrism",
          "Cultural diffusion",
          "Acculturation"
        ],
        correctOption: 1,
        hint: "It involves viewing one's own culture as superior to others."
      },
      {
        // 37
        question:
          "What is the term for the physical objects that people create, use, and share?",
        options: [
          "Symbols",
          "Beliefs",
          "Artifacts",
          "Customs"
        ],
        correctOption: 2,
        hint: "It involves tangible items created and used by people."
      },
      {
        // 38
        question:
          "How do anthropologists define the concept of \"cultural relativism\"?",
        options: [
          "The belief that all cultures are equal",
          "The practice of judging other cultures by one's own standards",
          "The objective study of cultures without bias",
          "The adaptation of one's own culture to another"
        ],
        correctOption: 0,
        hint: "It involves recognizing and respecting the equality of all cultures."
      },
      {
        // 39
        question:
          "What is the term for the process of individuals adapting to a new culture?",
        options: [
          "Acculturation",
          "Ethnocentrism",
          "Cultural diffusion",
          "Cultural relativism"
        ],
        correctOption: 0,
        hint: "It involves adapting to and adopting elements of a new culture."
      },
      {
        // 40
        question:
          "Which of the following is an example of a cultural universal?",
        options: [
          "The practice of arranged marriages",
          "The use of language",
          "The belief in a single deity",
          "The wearing of specific clothing"
        ],
        correctOption: 1,
        hint: "It's a feature that exists in all cultures around the world."
      },
      ];
      
      let backgroundMusic;
      let backgroundImg, levelBackground;

      let hintButton;
      let exitButton, playAgainButton; 
      let remainingHints;

      let playerName;
      
      let highestScore = 0;
      let currentQuestion = 0;
      let score = 0;
      let streak = 0;
      let streakTotal = 0
      let streakCount = 0;
      let longestStreak = 0;
      let correctCount = 0;
      let actualTotal = 0;
      let levelCounter = 0; //
      let gameRestarted = false;
      let gameRestartedflag = false;
      let timesPlayed = 1;
        
      //Reset times --------------------------------------------------------------------------------------------------------------------------
    
      let timerTime = 7200; // 1800
      let timerDuration = timerTime; // Timer Duration (60 Seonds)
      let uneditedTimerDuration = timerDuration;
      let timerBarWidth;
    
      let startTime;
      let duration = 120000; // 30000
    
      const GameState = {
        Start: "Start",
        LevelIntro: "Intro", 
        Playing: "Playing",
        Level2: "Doing worst than I thought Transition.",
        Level3: "Sunset Transition", 
        GameOver: "GameOver", 
        Level4: "Lifetime stats", 
        Level5: "Play again Exit Screen"
      }; 
    
      let game = { maxTime : 0, state: GameState.Start }; 
      let timer = game.maxTime;
      
      function preload() {
        backgroundMusic = loadSound('Music/BackgroundMusic.wav');
        backgroundImg = loadImage('Images/HourGlass.png');
        levelBackground = loadImage('Images/Sunset.png'); 
      }
      
      function setup() {
        createCanvas(windowWidth, windowHeight);
        textSize(16);
        resetLocalStorage();

        loadHighestScore();
        loadLongestStreak();
        loadReplays();
        
        remainingHints = 5;

        hintButton = createButton('Hint');
        hintButton.position(windowWidth/2-600, windowHeight/2 - 315);
        hintButton.mousePressed(showHint);
        hintButton.size(75,50);
        hintButton.hide();

        exitButton = createButton('Exit');
        exitButton.position(windowWidth/5 + 850, windowHeight/2 + 300);
        exitButton.mousePressed(exit);
        exitButton.size(100,30);
        exitButton.hide();

        playAgainButton = createButton('Play Again');
        playAgainButton.position(windowWidth/5 - 110, windowHeight/2 + 300);
        playAgainButton.mousePressed(playAgain);
        playAgainButton.size(100,30);
        playAgainButton.hide();

        // backgroundMusic.loop();
      }
      
      function reset() {
        timer = game.maxTime;
        timerDuration = timerTime;
        remainingHints = 5;
      }

      function playAgainReset() {
        reset();
        currentQuestion = 0;
        levelCounter = 2;
        score = 0; 
        streak = 0;
        correctCount = 0;
        streakTotal = 0;
        streakCount = 0
        actualTotal = 0;
        remainingHints = 5;
        gameRestarted = true;
        gameRestartedflag = true;
      }
      
      function resetGame() {
        timer = game.maxTime;
        timerDuration = timerTime;

        highestScore = 0;
        currentQuestion = 0;
        score = 0; 
        streak = 0;
        streakTotal = 0;
        streakCount = 0
        longestStreak = 0;
        correctCount = 0;
        actualTotal = 0;
        levelCounter = 0;
        gameRestarted = false;
        gameRestartedflag = false;
        timesPlayed = 1;
        resetLocalStorage();

        playerName = "";
        remainingHints = 5;
        
      }
      
      function draw() {

        toggleHintButton();
        toggleOtherButton();

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
          text("Press any key to continue", windowWidth/2, (windowHeight/2)+40);
         
          
          break;

          case GameState.LevelIntro:
      
          background(0);
          fill(255);
          textSize(50);
          textAlign(CENTER);
          text("I AM THE MASTER OF ANTHROPOLOGY", windowWidth/2, windowHeight/2-60);
          textSize(20);
          text("Do you really think YOU can beat me?? " + playerName, windowWidth/2, (windowHeight/2)-20);
      
          text("HAAA HAAA Try me !!! HAAA HAA", windowWidth/2, (windowHeight/2)+20);
          
          text("Lets see if you can even beat this score: 2000", windowWidth/2, (windowHeight/2)+55);
      
          text("Now press any key to start", windowWidth/2, (windowHeight/2)+105);

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
          if (timer <= 20) {
            fill(255);
          }
          else {
            let c = color('rgb(255, 172, 28)');
            fill(c);
          }
          rect(windowWidth/2-400, windowHeight/2-300, timerBarWidth, 20, 20);
          // Timer number 
          textAlign(RIGHT);
          text("" + timer, windowWidth/2-415, windowHeight/2-280);
          if (frameCount % 60 == 0 && timer >= 0) { timer++; }
          //Hourglass
          image(backgroundImg, windowWidth/2-550, windowHeight/2-340, 100, 105);
          
        if ((levelCounter == 2 && !gameRestarted || gameRestarted)) {
            if ((levelCounter == 2 && gameRestarted == false) && gameRestartedflag == false) {
              console.log("The game just started.");  
              gameRestartedflag = true;           
            }
            else if (levelCounter == 2 && gameRestarted == true && gameRestartedflag == true) {
              reset();
              console.log("The game just restarted.");
              timesPlayed++;
              localStorage.setItem("replays", timesPlayed);
              gameRestartedflag = false; 
            }
          }
          
          // Draw a rectangular bubble shape
          fill(150, 150, 150, 100); 
          rect(windowWidth*11/12-75, windowHeight - 60, 190, 50, 100); 
          fill(150, 150, 150, 100); 
          rect(windowWidth*11/12-75, windowHeight - 60, 190, 50, 100);
          fill(150, 150, 150, 100); 
          rect(windowWidth*11/12-75, windowHeight - 60, 190, 50, 100);
          fill(150, 150, 150, 100); 
          rect(windowWidth*11/12-75, windowHeight - 60, 190, 50, 100);

          textAlign(LEFT);
          // Questions Text
          fill(0);
          textSize(30);
          strokeWeight(0);
          fill(0);
          // Old circle that used to be in the middle
          // circle(windowWidth/2, windowHeight/2, 10);
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
            
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
          if (timer == 60) { // Reset to 30 for final ----------------------------------------------------------------
            switch (levelCounter) {
              case 2: // old 0
                game.state = GameState.Level2;
                levelCounter++;
                break;
              case 3:
                game.state = GameState.Level3;
                levelCounter++;
                break;
              case 4:
                game.state = GameState.GameOver           
                break;
              // case 5:
              //   game.state = GameState.Level4 
              // break;
            }
          }

      
          fill(0);

          text(`Score: ${actualTotal}`, (windowWidth*11/12)-60, windowHeight - 25);


      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
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
    
          break;
      
          case GameState.Level3:
          background(levelBackground);
          fill(255);
          textAlign(CENTER);
          textSize(50);
          text("Enjoy the view of this sunset because", windowWidth/2, (windowHeight/2)-80);
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

          case GameState.Level4: // Lifetime stats

          background(0);
          fill(255);
          textSize(50);
          textAlign(CENTER);
          textStyle(BOLD);
          text("Lifetime Stats", windowWidth/2, windowHeight/2-150);
          resetAttributes();
          text("Highest Score", windowWidth/2-400, (windowHeight/2)-20);
          textAlign(RIGHT);
          text(`${highestScore}`, windowWidth/2+300, (windowHeight/2)-20);

          stroke(255, 0, 0); // Set stroke color to red (R, G, B)
          strokeWeight(2); // Set the stroke weight

          // Draw a line from (50, 50) to (350, 350)
          line(windowWidth/2-400, (windowHeight/2)-10, windowWidth/2+300, (windowHeight/2)-10);
          stroke(255);
          resetAttributes();
      
          text("Longest Streak", windowWidth/2-400, (windowHeight/2)+20);
          textAlign(RIGHT);
          text(`${longestStreak}`, windowWidth/2+300, (windowHeight/2)+20);


          stroke(255, 0, 0); // Set stroke color to red (R, G, B)
          strokeWeight(2); // Set the stroke weight

          // Draw a line from (50, 50) to (350, 350)
          line(windowWidth/2-400, (windowHeight/2)+30, windowWidth/2+300, (windowHeight/2)+30);
          resetAttributes();
          
          text("Times Played", windowWidth/2-400, (windowHeight/2)+60);
          textAlign(RIGHT);
          text(`${timesPlayed}`, windowWidth/2+300, (windowHeight/2)+60);
          
          stroke(255, 0, 0); // Set stroke color to red (R, G, B)
          strokeWeight(2); // Set the stroke weight

          // Draw a line from (50, 50) to (350, 350)
          line(windowWidth/2-400, (windowHeight/2)+70, windowWidth/2+300, (windowHeight/2)+70);
          resetAttributes();
      
          text("Press any key to continue", windowWidth/2-100, (windowHeight/2)+205);
          break;

          case GameState.Level5: // Play again or back to the begining

          background(0);
          fill(255);
          textAlign(CENTER);
          textSize(140);
          text("Play Again ?", windowWidth/2, windowHeight/2-180);
          textSize(20);
          text(`Well, ${playerName} I guess I'll see you on the other side Trivia Traveler.`, windowWidth/2, windowHeight/2+25);
          
          break;
        }
      }

      function mouseClicked() {

        switch(game.state) {

          case GameState.Playing:
            // Check if an option is clicked
            for (let i = 0; i < questions[currentQuestion].options.length; i++) {
              const optionY = (windowHeight/4)+65+80-30 + i * 30;
                if (mouseY > optionY && mouseY < optionY + 20) {
                // Check if the clicked option is correct
                  if (i === questions[currentQuestion].correctOption) {
                    score += 100;
                    // console.log("Current Score: " + score);
                    correctCount++;
                    streakCount++;
                    streak += (i * 50);
                    // console.log("Current Streak: " + streak);
                    streakTotal += streak;
                    // console.log("Current Streak Total Amount: " +streakTotal);
                  } 
                  else {
                    streak = 0;
                    streakCount = 0;
                  }
                  
                  // Move to the next question
                  actualTotal = score + streakTotal;
                  checkHighestScore();
                  checkHighestStreak();

                  currentQuestion++;
                  // console.log("Current  Total Amount: " + actualTotal);

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
          break;
          default:

          break
        }
      }
      
      function keyPressed() {
        switch (game.state) {
          case GameState.Start :
          
            game.state = GameState.LevelIntro;
            // backgroundMusic.play();
            getPlayerName();
            levelCounter++;
      
          break;
          
          case GameState.LevelIntro :
      
            game.state = GameState.Playing;
            levelCounter++;
      
          break;
      
          case GameState.Playing :
      
          break;
      
          case GameState.Level2 :
      
            reset();
            game.state = GameState.Playing;
            levelCounter++;
      
          break;
      
          case GameState.Level3 :
      
            reset();
            game.state = GameState.Playing;
            levelCounter++;
      
          break;
      
          case GameState.GameOver :
            
            game.state = GameState.Level4;
            levelCounter++;
          
          break;

          case GameState.Level4 :
            
          game.state = GameState.Level5;
          levelCounter++;
        
          break;
          
          case GameState.Level5 :
          
          break;
        }  
      }

      function showHint() {
        if (remainingHints > 0) {
          alert(questions[currentQuestion].hint);
          remainingHints--;
        } else {
          alert(playerName + "!!! You have no more hints left!");
        }
      }

      function playAgain() {
        playAgainReset();
        game.state = GameState.Playing;
      }

      function exit() {
        resetGame();
        backgroundMusic.stop();
        game.state = GameState.Start;
      }

      function toggleHintButton() {
          switch(game.state) {
            case GameState.Playing :
              hintButton.show(); 
            break;
            default :
              hintButton.hide();
        }
      }

      function toggleOtherButton() {
          switch(game.state) {
            case GameState.Level5 :
              exitButton.show(); 
              playAgainButton.show();
            break;
            default :
            exitButton.hide(); 
            playAgainButton.hide(); 
        }
      }

      function getPlayerName() {
          playerName = prompt("Enter your name: Trivia Traveler");
          if (!playerName) {
              getPlayerName();
          }
      }

      function resetAttributes() {
        noFill();
        noStroke();
        fill(255);
        textSize(20);
        textAlign(LEFT);
        textStyle(NORMAL);
      }
      
      function loadHighestScore() {
        // Load the highest score from localStorage
        let savedHighestScore = localStorage.getItem("highestScore");

        // Check if a highest score exists in localStorage
        if (savedHighestScore !== null) {
          highestScore = int(savedHighestScore);
        }
      }

      function checkHighestScore() {
        // Check if the current score is higher than the highest score
        if (actualTotal > highestScore) {
          highestScore = actualTotal;
          // Save the new highest score to localStorage
          localStorage.setItem("highestScore", highestScore);
        }
      }

      function loadLongestStreak() {
        let savedLongestStreak = localStorage.getItem("longestStreak");
        if (savedLongestStreak !== null) {
          longestStreak = int(savedLongestStreak);
        }
      }

      function checkHighestStreak() {
        // Check if the current score is higher than the highest score
        if ( streakCount > longestStreak) {
          longestStreak = streakCount;
          // Save the new highest score to localStorage
          localStorage.setItem("longestStreak", longestStreak);
        }
      }

      function loadReplays() {
        let savedReplays = localStorage.getItem("replays")
        if (savedReplays !== null) {
          timesPlayed = int(savedReplays);
        }
      }

      function resetLocalStorage() {
        // Remove the triviaScore and highestScore items from local storage
        localStorage.removeItem("replays");
        localStorage.removeItem("longestStreak");
        localStorage.removeItem("highestScore");
      }
  

