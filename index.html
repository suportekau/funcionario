<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Sistema - Funcionários (Firebase)</title>
<link rel="preconnect" href="https://fonts.gstatic.com">
<style>
  :root{
    --blue:#0088ff;
    --blue-dark:#006fcc;
    --gray:#6c757d;
    --card-bg:#ffffff;
    --page-bg:#f4f4f6;
    --radius:12px;
  }
  html,body{height:100%; margin:0; font-family:Arial, sans-serif; background:var(--page-bg);}
  .wrap {
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:18px;
    box-sizing:border-box;
  }
  .card {
    width:100%;
    max-width:420px;
    background:var(--card-bg);
    border-radius:var(--radius);
    box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    padding:22px;
    box-sizing:border-box;
    text-align:center;
    text-transform:uppercase;
  }
  h2{
    margin:0 0 18px;
    font-size:18px;
    letter-spacing:1px;
  }
  input[type="text"], input[type="password"], input[type="date"], input[type="number"], select {
    width:100%;
    padding:10px 12px;
    margin:8px 0;
    border-radius:8px;
    border:1px solid #ddd;
    box-sizing:border-box;
    font-size:14px;
    text-transform:uppercase;
  }
  button{
    display:inline-block;
    width:100%;
    padding:12px;
    margin:10px 0;
    border-radius:10px;
    border:none;
    cursor:pointer;
    font-weight:700;
    font-size:15px;
    text-transform:uppercase;
  }
  button.primary { background:var(--blue); color:#fff; }
  button.primary:hover { background:var(--blue-dark); }
  button.secondary { background:var(--gray); color:#fff; }
  button.secondary:hover { background:#565e64; }
  .cadastro-menu .btn-big {
    width:100%;
    padding:14px 16px;
    margin:10px 0;
    border-radius:10px;
    background:var(--blue);
    color:#fff;
    font-size:16px;
    box-shadow:none;
  }
  .cadastro-menu .btn-big.consultar{ background:var(--blue); }
  .cadastro-menu .btn-big.voltar{ background:var(--gray); }
  .hidden { display:none; }
  .lista { text-align:left; margin-top:10px; max-height:300px; overflow:auto; }
  table { width:100%; border-collapse:collapse; font-size:13px; }
  th,td { padding:8px; border:1px solid #eee; text-align:left; }
  th { background:#007bff; color:#fff; font-weight:700; font-size:12px; text-transform:uppercase; }
  .action-btn { padding:6px 8px; border-radius:6px; border:none; cursor:pointer; margin-right:6px; }
  .edit { background:#ffc107; color:#000; }
  .del  { background:#dc3545; color:#fff; }
  @media (max-width:420px){
    .card{padding:16px;}
    h2{font-size:16px;}
    button{font-size:14px;}
  }
</style>
</head>
<body>
<div class="wrap">

  <!-- LOGIN -->
  <div class="card" id="loginCard">
    <h2>LOGIN</h2>
    <input id="loginUsuario" type="text" placeholder="Usuário" autocomplete="username" />
    <input id="loginSenha" type="password" placeholder="Senha" autocomplete="current-password" />
    <button class="primary" id="btnLogin" onclick="login()">Entrar</button>
  </div>

  <!-- CADASTRO MENU -->
  <div class="card hidden cadastro-menu" id="cadastroMenuCard">
    <h2>CADASTRO</h2>
    <button class="btn-big" onclick="abrirInserir()">Inserir</button>
    <button class="btn-big consultar" onclick="abrirConsultar()">Consultar</button>
    <button class="btn-big voltar secondary" onclick="voltarAoMenu()">Voltar</button>
  </div>

  <!-- HOME -->
  <div class="card hidden" id="homeCard">
    <h2>MENU PRINCIPAL</h2>
    <button class="primary" onclick="abrirTelaCadastro()">Cadastro</button>
    <button class="primary" onclick="abrirTelaLancamento()">Lançamento</button>
    <button class="secondary" onclick="fazerLogout()">Sair</button>
  </div>

  <!-- INSERIR FUNCIONÁRIO -->
  <div class="card hidden" id="inserirCard">
    <h2>Inserir / Editar</h2>
    <input type="hidden" id="funcId" />
    <input id="funcNome" type="text" placeholder="Nome do funcionário" />
    <input id="funcCargo" type="text" placeholder="Cargo" />
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
      <button class="primary" onclick="salvarFuncionario()" style="padding:10px;">Salvar</button>
      <button class="secondary" onclick="voltarAoCadastro()" style="padding:10px;">Voltar</button>
    </div>
  </div>

  <!-- CONSULTAR FUNCIONÁRIOS -->
  <div class="card hidden" id="consultarCard">
    <h2>Consultar Funcionários</h2>
    <input id="filtroNome" type="text" placeholder="Filtrar por nome" oninput="mostrarFuncionarios()" />
    <div class="lista" id="listaFuncionarios"></div>
    <button class="secondary" onclick="voltarAoCadastro()">Voltar</button>
  </div>

  <!-- LANÇAMENTOS MENU -->
  <div class="card hidden" id="lancamentoMenuCard">
    <h2>Lançamentos</h2>
    <button class="primary" onclick="abrirInserirLanc()">Inserir</button>
    <button class="primary" onclick="abrirConsultarLanc()">Consultar</button>
    <button class="secondary" onclick="voltarAoMenu()">Voltar</button>
  </div>

  <!-- INSERIR LANÇAMENTO -->
  <div class="card hidden" id="inserirLancCard">
    <h2>Inserir Lançamento</h2>
    <input type="hidden" id="lancId" />
    <input id="lancNome" list="nomesFuncList" placeholder="Nome do funcionário" />
    <datalist id="nomesFuncList"></datalist>
    <input id="lancData" type="date" />
    <select id="lancTipo">
      <option value="">Selecione Tipo</option>
      <option value="VALE">VALE</option>
      <option value="COMPRA">COMPRA</option>
    </select>
    <input id="lancValor" type="number" step="0.01" placeholder="Valor" />
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
      <button class="primary" onclick="salvarLancamento()">Salvar</button>
      <button class="secondary" onclick="voltarAoLancamento()">Voltar</button>
    </div>
  </div>

  <!-- CONSULTAR LANÇAMENTOS -->
  <div class="card hidden" id="consultarLancCard">
    <h2>Consultar Lançamentos</h2>
    <input id="filtroLancNome" type="text" placeholder="Filtrar por nome" oninput="mostrarLancamentos()" />
    <input id="filtroLancMes" type="month" onchange="mostrarLancamentos()" />
    <div class="lista" id="listaLanc"></div>
    <button class="primary" onclick="gerarPDF()" style="margin-top:8px;">Gerar PDF</button>
    <button class="secondary" onclick="voltarAoLancamento()">Voltar</button>
  </div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script>
const BASE_DB = 'https://funcionarios-7c778-default-rtdb.firebaseio.com';
const URL_FUNC = BASE_DB + '/funcionarios';
const URL_LANC = BASE_DB + '/lancamentos';

function el(id){ return document.getElementById(id); }
function show(id){ el(id).classList.remove('hidden'); }
function hide(id){ el(id).classList.add('hidden'); }
function upperIfTextInput(e){
  const t = e.target;
  if(!t) return;
  if(t.tagName.toLowerCase() === 'input'){
    const type = t.type;
    if(type === 'text' || type === 'search' || type === 'tel' || type === 'email' || type === 'password'){
      const pos = t.selectionStart;
      t.value = t.value.toUpperCase();
      try { t.setSelectionRange(pos,pos); } catch(e){}
    }
  }
}
document.addEventListener('input', upperIfTextInput);

/* ========== ENTER: comportamento inteligente ======== */
document.addEventListener('keydown', function(e){
  if(e.key !== 'Enter') return;

  const active = document.activeElement;
  if(!active || active.tagName.toLowerCase() !== 'input') return;
  e.preventDefault();

  const formInputs = Array.from(document.querySelectorAll('input, select, button'))
    .filter(el => !el.disabled && el.offsetParent !== null);

  const idx = formInputs.indexOf(active);

  // --- LOGIN: se for o último campo (senha), faz login
  if(active.id === 'loginSenha'){
    login();
    return;
  }

  // --- nos outros casos: move o foco para o próximo campo
  if(idx >= 0 && idx < formInputs.length - 1){
    formInputs[idx + 1].focus();
  }
});

/* ========== NAVEGAÇÃO ========== */
function abrirTelaCadastro(){ hide('homeCard'); show('cadastroMenuCard'); }
function abrirTelaLancamento(){ hide('homeCard'); show('lancamentoMenuCard'); }
function abrirInserir(){ hideAll(); show('inserirCard'); el('funcNome').focus(); }
function abrirConsultar(){ hideAll(); show('consultarCard'); mostrarFuncionarios(); el('filtroNome').focus(); }
function voltarAoCadastro(){ hideAll(); show('cadastroMenuCard'); }
function voltarAoMenu(){ hideAll(); show('homeCard'); }
function fazerLogout(){ location.reload(); }
function abrirInserirLanc(){ hideAll(); atualizarDatalist(); show('inserirLancCard'); el('lancNome').focus(); }
function abrirConsultarLanc(){ hideAll(); show('consultarLancCard'); mostrarLancamentos(); }
function voltarAoLancamento(){ hideAll(); show('lancamentoMenuCard'); }
function hideAll(){
  const ids = ['loginCard','homeCard','cadastroMenuCard','inserirCard','consultarCard','lancamentoMenuCard','inserirLancCard','consultarLancCard'];
  ids.forEach(id => hide(id));
}

/* ========== LOGIN ========== */
function login(){
  const u = (el('loginUsuario').value||'').trim().toUpperCase();
  const s = (el('loginSenha').value||'').trim();
  if(u === 'ADMIN' && s === '1234'){
    hide('loginCard'); show('homeCard');
    el('loginUsuario').value = ''; el('loginSenha').value = '';
    setTimeout(()=>{ const b = document.querySelector('#homeCard button'); if(b) b.focus(); },100);
  } else {
    alert('Usuário ou senha incorretos!');
    el('loginUsuario').focus();
  }
}

/* ==== Firebase Helpers ==== */
async function getJSON(url){ const r=await fetch(url+'.json'); if(!r.ok)throw new Error(r.status); return r.json(); }
async function postJSON(url,b){ const r=await fetch(url+'.json',{method:'POST',body:JSON.stringify(b)}); if(!r.ok)throw new Error(r.status); return r.json(); }
async function putJSON(url,b){ const r=await fetch(url+'.json',{method:'PUT',body:JSON.stringify(b)}); if(!r.ok)throw new Error(r.status); return r.json(); }
async function delJSON(url){ const r=await fetch(url+'.json',{method:'DELETE'}); if(!r.ok)throw new Error(r.status); return r.json(); }

/* ==== Funcionários ==== */
async function salvarFuncionario(){
  const nome=(el('funcNome').value||'').trim().toUpperCase();
  const cargo=(el('funcCargo').value||'').trim().toUpperCase();
  const id=el('funcId').value;
  if(!nome||!cargo) return alert('Preencha todos os campos.');
  try{
    if(id){ await putJSON(URL_FUNC+'/'+id,{nome,cargo}); alert('Funcionário atualizado!'); el('funcId').value=''; }
    else { await postJSON(URL_FUNC,{nome,cargo}); alert('Funcionário salvo!'); }
    el('funcNome').value=''; el('funcCargo').value='';
    mostrarFuncionarios(); atualizarDatalist(); voltarAoCadastro();
  }catch(e){alert('Erro ao salvar.');}
}

async function mostrarFuncionarios(){
  try{
    const d=await getJSON(URL_FUNC);
    const lista=el('listaFuncionarios'); lista.innerHTML='';
    if(!d){lista.innerHTML='<p>Nenhum funcionário encontrado.</p>';return;}
    const filtro=(el('filtroNome').value||'').trim().toUpperCase();
    const arr=Object.keys(d).map(k=>({id:k,...d[k]})).filter(r=>r.nome.toUpperCase().includes(filtro));
    if(arr.length===0){lista.innerHTML='<p>Nenhum funcionário encontrado.</p>';return;}
    const table=document.createElement('table');
    table.innerHTML='<thead><tr><th>Nome</th><th>Cargo</th><th>Ações</th></tr></thead>';
    const tb=document.createElement('tbody');
    arr.forEach(r=>{
      const tr=document.createElement('tr');
      tr.innerHTML=`<td>${r.nome}</td><td>${r.cargo}</td><td>
      <button class="action-btn edit" onclick="editarFuncionario('${r.id}')">✏️</button>
      <button class="action-btn del" onclick="excluirFuncionario('${r.id}')">🗑️</button></td>`;
      tb.appendChild(tr);
    });
    table.appendChild(tb); lista.appendChild(table);
  }catch(e){el('listaFuncionarios').innerHTML='<p>Erro ao buscar.</p>'; }
}
async function editarFuncionario(id){const o=await getJSON(URL_FUNC+'/'+id);el('funcId').value=id;el('funcNome').value=o.nome;el('funcCargo').value=o.cargo;hide('cadastroMenuCard');show('inserirCard');}
async function excluirFuncionario(id){if(!confirm('Excluir?'))return;await delJSON(URL_FUNC+'/'+id);mostrarFuncionarios();atualizarDatalist();}

/* ==== Lançamentos ==== */
async function salvarLancamento(){
  const nome=(el('lancNome').value||'').trim().toUpperCase();
  const data=el('lancData').value; const tipo=el('lancTipo').value;
  const valor=parseFloat(el('lancValor').value); const id=el('lancId').value;
  if(!nome||!data||!tipo||isNaN(valor)) return alert('Preencha todos os campos.');
  const funcs=await getJSON(URL_FUNC);
  const exists=funcs&&Object.values(funcs).some(f=>(f.nome||'').toUpperCase()===nome);
  if(!exists)return alert('Nome não cadastrado.');
  if(id){await putJSON(URL_LANC+'/'+id,{nome,data,tipo,valor});alert('Lançamento atualizado!');el('lancId').value='';}
  else{await postJSON(URL_LANC,{nome,data,tipo,valor});alert('Lançamento salvo!');}
  el('lancNome').value='';el('lancData').value='';el('lancTipo').value='';el('lancValor').value='';
  atualizarDatalist();mostrarLancamentos();voltarAoLancamento();
}

async function mostrarLancamentos(){
  const d=await getJSON(URL_LANC);const lista=el('listaLanc');lista.innerHTML='';
  if(!d){lista.innerHTML='<p>Nenhum lançamento encontrado.</p>';return;}
  const nome=(el('filtroLancNome').value||'').toUpperCase();
  const mes=el('filtroLancMes').value;
  const arr=Object.keys(d).map(k=>({id:k,...d[k]})).filter(l=>(!nome||l.nome.toUpperCase().includes(nome))&&(!mes||l.data.startsWith(mes)));
  if(arr.length===0){lista.innerHTML='<p>Nenhum lançamento encontrado.</p>';return;}
  arr.sort((a,b)=>a.data.localeCompare(b.data));
  arr.forEach(l=>{
    const div=document.createElement('div');
    div.style.display='flex';div.style.justifyContent='space-between';div.style.alignItems='center';
    div.style.padding='8px';div.style.margin='6px 0';div.style.background='#f7f9fb';div.style.borderRadius='8px';
    div.innerHTML=`<div><strong>${l.nome}</strong><div style="font-size:12px">${l.data} | ${l.tipo}</div></div>
    <div style="text-align:right">R$ ${parseFloat(l.valor).toFixed(2).replace('.',',')}</div>`;
    const act=document.createElement('div');act.style.marginLeft='12px';
    act.innerHTML=`<button class="action-btn edit" onclick="editarLancamento('${l.id}')">✏️</button>
    <button class="action-btn del" onclick="excluirLancamento('${l.id}')">🗑️</button>`;
    div.appendChild(act);lista.appendChild(div);
  });
}
async function editarLancamento(id){const o=await getJSON(URL_LANC+'/'+id);el('lancId').value=id;el('lancNome').value=o.nome;el('lancData').value=o.data;el('lancTipo').value=o.tipo;el('lancValor').value=o.valor;hide('lancamentoMenuCard');show('inserirLancCard');}
async function excluirLancamento(id){if(!confirm('Excluir?'))return;await delJSON(URL_LANC+'/'+id);mostrarLancamentos();}
async function atualizarDatalist(){const d=await getJSON(URL_FUNC);const dl=el('nomesFuncList');dl.innerHTML='';if(!d)return;Object.values(d).forEach(f=>{const o=document.createElement('option');o.value=f.nome;dl.appendChild(o);});}

/* === Gerar PDF === */
function gerarPDF(){
  const nome=(el('filtroLancNome').value||'').toUpperCase();
  const mes=(el('filtroLancMes').value||'');
  const lista=document.getElementById('listaLanc').innerText;
  const doc=new jspdf.jsPDF();doc.text(`Relatório de Lançamentos\n\nFiltro: ${nome} ${mes}\n\n${lista}`,10,10);
  doc.save('lancamentos.pdf');
}

/* === Foco automático no campo Usuário ao carregar === */
window.onload = () => {
  const loginInput = document.getElementById('loginUsuario');
  if (loginInput) loginInput.focus();
};
</script>
</body>
</html>
