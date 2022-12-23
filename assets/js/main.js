function createGame(player1, hour, player2){
  return `
    <li>
      <img src="./assets/img/icon=${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/img/icon=${player2}.svg" alt="Bandeira da ${player2}">
    </li>
  `
}

function createCard(fases,date,day,games){
  return `
  <section class="card">
    <h2>${fases}</h2>
    <h3>${date} <span>${day}</span></h3>
    <ul>
      ${games}
    </ul>
  </section>
  `
}

document.querySelector("#app").innerHTML = `

  <main id="cards">
    ${createCard("Fases de Grupo","20/11","domingo",createGame("qatar","0 x 2","ecuador"))}              
    ${createCard("Fases de Grupo","21/11","segunda",createGame("england","6 x 2","iran")+createGame("senegal","0 x 2","netherlands")+createGame("united states","1 x 1","wales"))}
    ${createCard("Fases de Grupo","22/11","terça",createGame("argentina","1 x 2","saudi arabia")+createGame("denmark","0 x 0","tunisia")+createGame("mexico","0 x 0","poland")+createGame("france","4 x 1","australia"))}
    ${createCard("Fases de Grupo","23/11","quarta",createGame("morocco","0 x 0","croatia")+createGame("germany","1 x 2","japan")+createGame("spain","7 x 0","costa rica")+createGame("belgium","1 x 0","canada"))}
    ${createCard("Fases de Grupo","24/11","quinta",createGame("switzerland","1 x 0","cameroon")+createGame("uruguay","0 x 0","south korea")+createGame("portugal","3 x 2","ghana")+createGame("brazil","2 x 0","serbia"))}
    ${createCard("Fases de Grupo","25/11","sexta",createGame("wales","0 x 2","iran")+createGame("qatar","1 x 3","senegal")+createGame("netherlands","1 x 1","ecuador")+createGame("england","0 x 0","united states"))}
    ${createCard("Fases de Grupo","26/11","sábado",createGame("tunisia","0 x 1","australia")+createGame("poland","2 x 0","saudi arabia")+createGame("france","2 x 1","denmark")+createGame("argentina","2 x 0","mexico"))}
    ${createCard("Fases de Grupo","27/11","domingo",createGame("japan","0 x 1","costa rica")+createGame("belgium","0 x 2","morocco")+createGame("croatia","4 x 1","canada")+createGame("spain","1 x 1","germany"))}
    ${createCard("Fases de Grupo","28/11","segunda",createGame("cameroon","3 x 3","serbia")+createGame("south korea","2 x 3","ghana")+createGame("brazil","1 x 0","switzerland")+createGame("portugal","2 x 0","uruguay"))}
    ${createCard("Fases de Grupo","29/11","terça",createGame("ecuador","1 x 2","senegal")+createGame("netherlands","2 x 0","qatar")+createGame("wales","0 x 3","england")+createGame("iran","0 x 1","united states"))}
    ${createCard("Fases de Grupo","30/11","quarta",createGame("australia","1 x 0","denmark")+createGame("tunisia","1 x 0","france")+createGame("saudi arabia","1 x 2","mexico")+createGame("poland","0 x 2","argentina"))}
    ${createCard("Fases de Grupo","01/12","quinta",createGame("canada","1 x 2","morocco")+createGame("croatia","0 x 0","belgium")+createGame("costa rica","2 x 4","germany")+createGame("japan","2 x 1","spain"))}
    ${createCard("Fases de Grupo","02/12","sexta",createGame("south korea","2 x 1","portugal")+createGame("ghana","0 x 2","uruguay")+createGame("cameroon","1 x 0","brazil")+createGame("serbia","2 x 3","switzerland"))}
    ${createCard("Oitavas de Final","03/12","sábado",createGame("netherlands","3 x 1","united states")+createGame("argentina","2 x 1","australia"))}
    ${createCard("Oitavas de Final","04/12","domingo",createGame("france","3 x 1","poland")+createGame("england","3 x 0","senegal"))}
    ${createCard("Oitavas de Final","05/12","segunda",createGame("japan","(1) x (3)","croatia")+createGame("brazil","4 x 1","south korea"))}
    ${createCard("Oitavas de Final","06/12","terça",createGame("morocco","(3) x (0)","spain")+createGame("portugal","6 x 1","switzerland"))}
    ${createCard("Quartas de Final","09/12","sexta",createGame("croatia","(4) x (2)","brazil")+createGame("netherlands","(3) x (4)","argentina"))}
    ${createCard("Quartas de Final","10/12","sábado",createGame("morocco","1 x 0","portugal")+createGame("england","1 x 0","france"))}
    ${createCard("Semifinais","13/12","terça",createGame("argentina","3 x 0","croatia"))}
    ${createCard("Semifinais","14/12","quarta",createGame("france","2 x 0","morocco"))}
    ${createCard("Terceiro Lugar","17/12","sábado",createGame("croatia","2 x 1","morocco"))}
    ${createCard("Final","18/12","domingo",createGame("argentina","(4) x (2)","france"))}
  </main>
`