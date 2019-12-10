import $ from 'jquery';

export default class tagplan {
  constructor() {
    $('.tag-detalhes_que_importam').click(function () {
      var label = $(this).text();
      dataLayer.push({
        eventCategory: 'lp_lava_e_seca',
        eventAction: 'clique_menu',
        eventLabel: 'detalhes_que_importam'
      })
    });

    $('.tag-certificado_woolmark_apparel_care').click(function () {
      var label = $(this).text();
      dataLayer.push({
        eventCategory: 'lp_lava_e_seca',
        eventAction: 'clique_menu',
        eventLabel: 'certificado_woolmark_apparel_care'
      })
    });

    $('.tag-ciclo_tira_manchas_pro').click(function () {
      var label = $(this).text();
      dataLayer.push({
        eventCategory: 'lp_lava_e_seca',
        eventAction: 'clique_menu',
        eventLabel: 'ciclo_tira_manchas_pro'
      })
    });

    $('.tag-ciclo_1_hora_pronto_pra_vestir').click(function () {
      var label = $(this).text();
      dataLayer.push({
        eventCategory: 'lp_lava_e_seca',
        eventAction: 'clique_menu',
        eventLabel: 'ciclo_1_hora_pronto_pra_vestir'
      })
    });

    $('.tag-funcao_volto_logo').click(function () {
      var label = $(this).text();
      dataLayer.push({
        eventCategory: 'lp_lava_e_seca',
        eventAction: 'clique_menu',
        eventLabel: 'funcao_volto_logo'
      })
    });

    $('.tag-ciclo_edredom').click(function () {
      var label = $(this).text();
      dataLayer.push({
        eventCategory: 'lp_lava_e_seca',
        eventAction: 'clique_menu',
        eventLabel: 'ciclo_edredom'
      })
    });

    $('.tag-eu_quero').click(function () {
      dataLayer.push({
        eventCategory: 'lp_lava_e_seca',
        eventAction: 'clique_menu',
        eventLabel: 'eu_quero'
      })
    });

    $('.tag-compare').click(function () {
      dataLayer.push({
        eventCategory: 'lp_lava_e_seca',
        eventAction: 'clique_botao',
        eventLabel: 'compare'
      })
    });

    $('.tag-saiba_mais').click(function () {
      dataLayer.push({
        eventCategory: 'lp_lava_e_seca',
        eventAction: 'clique_botao',
        eventLabel: 'saiba_mais'
      })
    });


  }
}
