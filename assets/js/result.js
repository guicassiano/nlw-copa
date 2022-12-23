function table(group,...content){
  return `
 
      <table>
        <h2 class="table-group">grupo ${group}</h2>
        <thead>
        
          <tr>
            <th class="equip">Equipe</th>
            <th>PTS</th>
            <th>PJ</th>
            <th>VIT</th>
            <th>E</th>
            <th>DER</th>
            <th>GM</th>
            <th>GC</th>
            <th>SG</th>
          </tr>
        </thead>
        ${content}
      </table>
    
  `
}

function lineTable(position,player,name,pts,pj,vit,e,der,gm,gc,sg){
  return `
    <tbody>
      <tr>
        <td class="equip">
          ${position}
          <img width="18px" src="./assets/img/icon=${player}.svg" alt="Bandeira da ${name}">
          ${name}
        </td>
        <td>${pts}</td>
        <td>${pj}</td>
        <td>${vit}</td>
        <td>${e}</td>
        <td>${der}</td>
        <td>${gm}</td>
        <td>${gc}</td>
        <td>${sg}</td>
      </tr>
    </tbody>
  `
}

document.querySelector("#app-result").innerHTML = `
  <section id="container-table">
    ${table("a",lineTable('1','netherlands','Holanda','7','3','2','1','0','5','1','4')+lineTable('2','senegal','Senegal','6','3','2','0','1','5','4','1')+lineTable('3','ecuador','Equador','4','3','1','1','1','4','3','1')+lineTable('4','qatar','Catar','0','3','0','0','3','1','7','-6'))}
    ${table("b",lineTable('1','england','Inglaterra','7','3','2','1','0','9','2','7')+lineTable('2','united states','Estados Unidos','5','3','1','2','0','2','1','1')+lineTable('3','iran','Irã','3','3','1','0','2','4','7','-3')+lineTable('4','wales','Gales','1','3','0','1','2','1','6','-5'))}
    ${table("c",lineTable('1','argentina','Argentina','6','3','2','0','1','5','2','3')+lineTable('2','poland','Polônia','4','3','1','1','1','2','2','0')+lineTable('3','mexico','México','4','3','1','1','1','2','3','-1')+lineTable('4','saudi arabia','Arábia Saudita','3','3','1','0','2','3','5','-2'))}
    ${table("d",lineTable('1','france','França','6','3','2','0','1','6','3','3')+lineTable('2','australia','Austrália','6','3','2','0','1','3','4','-1')+lineTable('3','tunisia','Tunísia','4','3','1','1','1','1','1','0')+lineTable('4','denmark','Dinamarca','1','3','0','1','2','1','3','-2'))}
    ${table("e",lineTable('1','japan','Japão','6','3','2','0','1','4','3','1')+lineTable('2','spain','Espanha','4','3','1','1','1','9','3','6')+lineTable('3','germany','Alemanha','4','3','1','1','1','6','5','1')+lineTable('4','costa rica','Costa Rica','3','3','1','0','2','3','11','-8'))}
    ${table("f",lineTable('1','morocco','Marroco','7','3','2','1','0','4','1','3')+lineTable('2','croatia','Croácia','5','3','1','2','0','4','1','3')+lineTable('3','belgium','Bélgica','4','3','1','1','1','1','2','-1')+lineTable('4','canada','Canadá','0','3','0','0','3','2','7','-5'))}
    ${table("g",lineTable('1','brazil','Brasil','6','3','2','0','1','3','1','2')+lineTable('2','switzerland','Suiça','6','3','2','0','1','4','3','1')+lineTable('3','cameroon','Camarões','4','3','1','1','1','4','4','0')+lineTable('4','serbia','Sérvia','1','3','0','1','2','5','8','-3'))}
    ${table("h",lineTable('1','portugal','Portugal','6','3','2','0','1','6','4','2')+lineTable('2','south korea','Coreia do Sul','4','3','1','1','1','4','4','0')+lineTable('3','uruguay','Uruguai','4','3','1','1','1','2','2','0')+lineTable('4','ghana','Gana','3','3','1','0','2','5','7','-2'))}
  </section>
`