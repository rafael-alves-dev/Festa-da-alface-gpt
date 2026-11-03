# Festa da Alface 2026 — retrospectiva

## Abrir a página
1. Extraia todo o ZIP para uma pasta.
2. Abra `index.html` com dois cliques (Chrome, Edge, Firefox ou Safari atualizado).
3. A página funciona sem internet e sem instalação. Mantenha a pasta `assets` junto dos demais arquivos.

No Windows, você também pode abrir `Abrir.cmd`.

## O que está incluído
- HTML, CSS e JavaScript sem dependências externas.
- Logo disponibilizada no projeto, preservada sem redesenho ou recoloração.
- 38 fotografias oficiais utilizadas ou reservadas como alternativas, com nomes originais; versões menores de 640 e 1800 px no lado maior para a página.
- Galeria de 30 fotos, filtros por tema, ampliação sem corte, setas anterior/próxima, teclado, Escape, gesto lateral e retorno de foco.
- Hero com imagem própria para celular, blocos editoriais, transições de entrada e parallax discreto no desktop. A preferência por movimento reduzido é respeitada.

## Organização
`index.html`: textos e composições editoriais; a galeria inicial está em HTML para permanecer visível sem JavaScript.
`styles.css`: identidade, grades, recortes e regras para celular.
`content.js`: categorias, descrições e metadados das 30 fotos da galeria.
`app.js`: navegação, filtros, ampliação e movimento.
`assets/photos`: originais JPG e derivados. A ampliação abre o original, sem recorte.

Ao substituir uma foto da galeria, atualize o botão correspondente no HTML e o registro de mesmo índice em `content.js`. Preserve a correspondência entre as duas listas. Os nomes exibidos no visualizador são os nomes reais dos arquivos.

## Conteúdo e identidade
Paleta do guia recuperado: verde #064A20, verde folha #54872C, creme #F5E8C7, vinho #6D1722 e dourado #CA9A52. Georgia e Arial são as alternativas locais previstas, sem chamadas externas.
Textos históricos mantêm “período divulgado” e “local divulgado”, conforme o briefing. Não há estatísticas, atribuições de pessoas, lista de atrações ou datas individuais presumidas. Vídeos e cronologia foram omitidos por falta de material confirmado. A seção de gastronomia usa somente registros reais do acervo. Não há imagens demonstrativas.
Crédito público: acervo fornecido da Festa da Alface 2026. Autoria individual e organização/apoio não foram inventados. Complete esses créditos quando os nomes forem confirmados.

## Validação e publicação
Sintaxe JavaScript, referências locais, âncoras e integridade do ZIP verificadas. Nesta atualização, a prévia local respondeu normalmente e o cabeçalho foi testado no navegador em 1440 × 900, 768 × 1024, 390 × 844 e 320 × 740 px. Verificados: menu mobile, Escape e retorno de foco, link da galeria, redução durante rolagem e ausência de rolagem horizontal. A galeria também foi aberta e fechada para conferir preservação da interação. Nenhum erro de console foi observado.
Esta entrega é local e inclui `noindex,nofollow`. Para publicação, confirme créditos e informações institucionais, configure URL de compartilhamento e domínio, e então ajuste a indexação. Não há banco de dados, formulário, serviço externo ou etapa de compilação.

## Navegação cinematográfica — revisão de direção de arte

Marca central e livre sobre a foto no desktop, bloco editorial da edição à esquerda e navegação numerada à direita. Não há caixa nem faixa de fundo no estado inicial. Botão em creme com seta circular vinho. Ao rolar, a composição se reduz a uma barra verde translúcida com desfoque.

No mobile, marca lateral, controle “Explorar” e painel com capítulos em tipografia serifada. Escape fecha e devolve foco; links e clique externo fecham o menu. A preferência por movimento reduzido permanece respeitada.

A marca original não foi modificada no arquivo. Apenas o logotipo do cabeçalho recebe um tratamento monocromático de contraste por CSS, preservando a proporção e os detalhes, para leitura sobre a fotografia. A marca do rodapé permanece original.

Somente a marcação do cabeçalho e `header.css` foram alterados nesta revisão. O conteúdo do hero e das demais seções, `styles.css`, `header.js`, `app.js`, `content.js` e todas as imagens foram preservados. Ajustes de altura/espaço e sombra do hero integram a navegação sobreposta.

Avaliado visualmente no navegador em desktop (1440 px) e celular (390 e 320 px). Testados: transparência inicial, transformação em vidro após rolagem, alinhamento na barra reduzida, menu mobile, Escape/retorno de foco, acesso à galeria e ausência de rolagem horizontal. Nenhum erro de console observado.
