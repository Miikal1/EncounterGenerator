
// this can live on this page or on a dedicate js for this page
function generate_attacked(){
  result = "<ol>"
  territory_data = {
    "origin":["#line#"],
    "line":["You are #nearby# by #number# #monster# armed with #weapon#. They appear to have #treasure# with them."],
    "nearby":["attacked", "ambushed", "surprised", "jumped out at"],
    "close":["encounter", "attack", "surprise", "ambush"],
    "weapon":["rusty blades", "bone clubs", "iron swords", "bows & arrows", "huge axes", "magic staffs", "sliver daggers", "fire swords", "crossbows", "spell scrolls", "wooden clubs", "maces", "flails"],
    "monster":["goblins", "orcs", "drow", "skeletons", "kobalds", "golems", "oozes", "mimics", "bandits", "zombies", "animated armors"],
    "number":["2","3","4","5","6","7","8","9","10"],
    "treasure":["no treasure", "some gold coins", "a sack of jewels", "a treasure chest", "a silver amulet", "some gold bars", "a gold chalice", "glowing rocks", "jewel encrusted totems"]
  }
  console.log(territory_data)
  for (let i = 0; i < 1; i++){
    result += "<li>" + grammars.GenerationSimple(territory_data) + "</li>";
  }
  result += "</ol>";
  console.log(result)
  io.write_into_element(result, "territories")
}

function generate_attacking(){
  result = "<ol>"
  territory_data = {
    "origin":["#line#"],
    "line":["You #close# #number# #monster# armed with #weapon#. They appear to have #treasure# with them."],
    "nearby":["attacked", "ambushed", "surprised", "jumped out at"],
    "close":["encounter", "attack", "surprise", "ambush"],
    "weapon":["rusty blades", "bone clubs", "iron swords", "bows & arrows", "huge axes", "magic staffs", "sliver daggers", "fire swords", "crossbows", "spell scrolls", "wooden clubs", "maces", "flails"],
    "monster":["goblins", "orcs", "drow", "skeletons", "kobalds", "golems", "oozes", "mimics", "bandits", "zombies", "animated armors"],
    "number":["2","3","4","5","6","7","8","9","10"],
    "treasure":["no treasure", "some gold coins", "a sack of jewels", "a treasure chest", "a silver amulet", "some gold bars", "a gold chalice", "glowing rocks", "jewel encrusted totems"]
  }
  console.log(territory_data)
  for (let i = 0; i < 1; i++){
    result += "<li>" + grammars.GenerationSimple(territory_data) + "</li>";
  }
  result += "</ol>";
  console.log(result)
  io.write_into_element(result, "territories")
}
