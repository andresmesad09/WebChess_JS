let main =  {
  turn: "w",
  pieces: {
  w_king: {
    position: "5_1",
    img: "&#9812;",
    captured: false,
    moved: false,
    type: "w_king",
    xPosition: 5,
    yPosition: 1
  },
  w_queen: {
    position: "4_1",
    img: "&#9813;",
    captured: false,
    moved: false,
    type: "w_queen",
    xPosition: 4,
    yPosition: 1
  },
  w_bishop1: {
    position: "3_1",
    img: "&#9815;",
    captured: false,
    moved: false,
    type: "w_bishop",
    xPosition: 3,
    yPosition: 1
  },
  w_bishop2: {
    position: "6_1",
    img: "&#9815;",
    captured: false,
    moved: false,
    type: "w_bishop",
    xPosition: 6,
    yPosition: 1
  },
  w_knight1: {
    position: "2_1",
    img: "&#9816;",
    captured: false,
    moved: false,
    type: "w_knight",
    xPosition: 2,
    yPosition: 1
  },
  w_knight2: {
    position: "7_1",
    img: "&#9816;",
    captured: false,
    moved: false,
    type: "w_knight",
    xPosition: 7,
    yPosition: 1
  },
  w_rook1: {
    position: "1_1",
    img: "&#9814;",
    captured: false,
    moved: false,
    type: "w_rook",
    xPosition: 1,
    yPosition: 1
  },
  w_rook2: {
    position: "8_1",
    img: "&#9814;",
    captured: false,
    moved: false,
    type: "w_rook",
    xPosition: 8,
    yPosition: 1
  },
  w_pawn1: {
    position: "1_2",
    img: "&#9817;",
    captured: false,
    type: "w_pawn",
    moved: false,
    xPosition: 1,
    yPosition: 2
  },
  w_pawn2: {
    position: "2_2",
    img: "&#9817;",
    captured: false,
    type: "w_pawn",
    moved: false,
    xPosition: 2,
    yPosition: 2
  },
  w_pawn3: {
    position: "3_2",
    img: "&#9817;",
    captured: false,
    type: "w_pawn",
    moved: false,
    xPosition: 3,
    yPosition: 2
  },
  w_pawn4: {
    position: "4_2",
    img: "&#9817;",
    captured: false,
    type: "w_pawn",
    moved: false,
    xPosition: 4,
    yPosition: 2
  },
  w_pawn5: {
    position: "5_2",
    img: "&#9817;",
    captured: false,
    type: "w_pawn",
    moved: false,
    xPosition: 5,
    yPosition: 2
  },
  w_pawn6: {
    position: "6_2",
    img: "&#9817;",
    captured: false,
    type: "w_pawn",
    moved: false,
    xPosition: 6,
    yPosition: 2
  },
  w_pawn7: {
    position: "7_2",
    img: "&#9817;",
    captured: false,
    type: "w_pawn",
    moved: false,
    xPosition: 7,
    yPosition: 2
  },
  w_pawn8: {
    position: "8_2",
    img: "&#9817;",
    captured: false,
    type: "w_pawn",
    moved: false,
    xPosition: 8,
    yPosition: 2
  },

  b_king: {
    position: "5_8",
    img: "&#9818;",
    captured: false,
    moved: false,
    type: "b_king",
    xPosition: 5,
    yPosition: 8
  },
  b_queen: {
    position: "4_8",
    img: "&#9819;",
    captured: false,
    moved: false,
    type: "b_queen",
    xPosition: 4,
    yPosition: 8
  },
  b_bishop1: {
    position: "3_8",
    img: "&#9821;",
    captured: false,
    moved: false,
    type: "b_bishop",
    xPosition: 3,
    yPosition: 8
  },
  b_bishop2: {
    position: "6_8",
    img: "&#9821;",
    captured: false,
    moved: false,
    type: "b_bishop",
    xPosition: 6,
    yPosition: 8
  },
  b_knight1: {
    position: "2_8",
    img: "&#9822;",
    captured: false,
    moved: false,
    type: "b_knight",
    xPosition: 2,
    yPosition: 8
  },
  b_knight2: {
    position: "7_8",
    img: "&#9822;",
    captured: false,
    moved: false,
    type: "b_knight",
    xPosition: 7,
    yPosition: 8
  },
  b_rook1: {
    position: "1_8",
    img: "&#9820;",
    captured: false,
    moved: false,
    type: "b_rook",
    xPosition: 1,
    yPosition: 8
  },
  b_rook2: {
    position: "8_8",
    img: "&#9820;",
    captured: false,
    moved: false,
    type: "b_rook",
    xPosition: 8,
    yPosition: 8
  },
  b_pawn1: {
    position: "1_7",
    img: "&#9823;",
    captured: false,
    type: "b_pawn",
    moved: false,
    xPosition: 1,
    yPosition: 7
  },
  b_pawn2: {
    position: "2_7",
    img: "&#9823;",
    captured: false,
    type: "b_pawn",
    moved: false,
    xPosition: 2,
    yPosition: 7
  },
  b_pawn3: {
    position: "3_7",
    img: "&#9823;",
    captured: false,
    type: "b_pawn",
    moved: false,
    xPosition: 3,
    yPosition: 7
  },
  b_pawn4: {
    position: "4_7",
    img: "&#9823;",
    captured: false,
    type: "b_pawn",
    moved: false,
    xPosition: 4,
    yPosition: 7
  },
  b_pawn5: {
    position: "5_7",
    img: "&#9823;",
    captured: false,
    type: "b_pawn",
    moved: false,
    xPosition: 5,
    yPosition: 7
  },
  b_pawn6: {
    position: "6_7",
    img: "&#9823;",
    captured: false,
    type: "b_pawn",
    moved: false,
    xPosition: 6,
    yPosition: 7
  },
  b_pawn7: {
    position: "7_7",
    img: "&#9823;",
    captured: false,
    type: "b_pawn",
    moved: false,
    xPosition: 7,
    yPosition: 7
  },
  b_pawn8: {
    position: "8_7",
    img: "&#9823;",
    captured: false,
    type: "b_pawn",
    moved: false,
    xPosition: 8,
    yPosition: 7
  },
  },

  methods:  {
    gameSetUp: function() {
      console.log("Images start loading")
      for (let gamePiece in main.pieces) {
        const id = main.pieces[gamePiece].position
        document.getElementById(id).innerHTML = main.pieces[gamePiece].img
      }
      console.log("Images loaded")
    }
  }
}

$(function () {
  console.log("Initiate")
  main.methods.gameSetUp()
})
